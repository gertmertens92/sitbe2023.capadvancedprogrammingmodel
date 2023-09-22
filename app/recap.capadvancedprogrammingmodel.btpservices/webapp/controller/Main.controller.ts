import BaseController from "./BaseController";
import formatter from "../model/formatter";
import BTPServiceState, { BTPServiceData, column } from "../state/GitServiceState";
import Context from "sap/ui/model/Context";
import Text from "sap/m/Text";
import Column from "sap/ui/table/Column";
import Table from "sap/ui/table/Table";
import Spreadsheet from "sap/ui/export/Spreadsheet";
import MessageToast from "sap/m/MessageToast";
import UI5Event from "sap/ui/base/Event";
import TablePersoController from "sap/ui/table/TablePersoController";
import ServicesPersoService from './ServicesPersoService';
import ListBinding from "sap/ui/model/ListBinding";
import Filter from "sap/ui/model/Filter";
import FilterOperator from "sap/ui/model/FilterOperator";
import VerticalLayout from "sap/ui/layout/VerticalLayout";
import InfoLabel from "sap/tnt/InfoLabel";
import Fragment from "sap/ui/core/Fragment";
import BusyDialog from "sap/m/BusyDialog";
import Dialog from "sap/m/Dialog";
import Button from "sap/m/Button";
import Library from "sap/m/library";
import Label from "sap/m/Label";
import TextArea from "sap/m/TextArea";
import Input from "sap/m/Input";
import Core from "sap/ui/core/Core";
import GitServiceState from "../state/GitServiceState";

/**
 * @namespace recap.capadvancedprogrammingmodel.btpservices.controller
 */
export default class Main extends BaseController {
	private formatter = formatter;
	protected btpServiceState: BTPServiceState;
	protected btpServiceStateData: BTPServiceData;
	protected gitServiceState: GitServiceState;
	private tablePersoController: TablePersoController;
	private busyDialog: BusyDialog;
	private submitDialog: Dialog;

	public async onInit(): Promise<void> {
		this.btpServiceState = this.getOwnerComponent().getModel("btp") as BTPServiceState;
		this.btpServiceStateData = this.btpServiceState.getData() as BTPServiceData;
		this.gitServiceState = this.getOwnerComponent().getModel("git") as GitServiceState;
		this.tablePersoController = new TablePersoController({
			table: this.byId("genericTable") as Table,
			persoService: ServicesPersoService,
			showResetAll: false
		});
		await this.showBusyDialog()
		await this.btpServiceState.read();
		this.hideBusyDialog();
	}

	private hideBusyDialog(): void {
		this.busyDialog.close();
	}

	private async showBusyDialog(): Promise<void> {
		if (!this.busyDialog) {
			this.busyDialog = await Fragment.load({
				name: "recap.capadvancedprogrammingmodel.btpservices.view.dialog.BusyDialog",
				controller: this
			}) as BusyDialog;
			this.getView().addDependent(this.busyDialog);
		}
		this.busyDialog.open();
	}

	public createColumns(id: string, context: Context): Column {
		const column = (context.getObject() as column)
		const list = new VerticalLayout();
		const infoLabel = new InfoLabel({ text: `{btp>name}`, colorScheme: 6 });
		list.bindAggregation("content", { path: `${column.id}Plans`, model: 'btp', template: infoLabel, templateShareable: true })
		return new Column({
			label: column.name,
			width: column.id === "Name" ? "250px" : "auto",
			template: column.id === "Name" ? new Text({ text: `{btp>${column.id}}` }) : list
		});
	}

	public onExport() {
		const table = this.byId('genericTable') as Table;
		const rowBinding = table.getBinding('rows');
		const cols = this.btpServiceStateData.columns.map(column => ({
			label: column.name,
			property: column.id
		}));

		const settings = {
			workbook: { columns: cols },
			dataSource: rowBinding
		};

		const sheet = new Spreadsheet(settings);
		sheet.build()
			.then(function () {
				MessageToast.show('Spreadsheet export has finished');
			}).finally(function () {
				sheet.destroy();
			});
	}

	public async onTablePerso(event: UI5Event) {
		this.tablePersoController.openDialog({});
	}

	public async onFilterTableServices(event: UI5Event) {
		const servciceId = (await this.openFragment({
			name: "recap.capadvancedprogrammingmodel.btpservices.view.dialog.FilterServices"
		})) as Array<string>;
		if (servciceId.length > 0) {
			((this.byId("genericTable") as Table).getBinding("rows") as ListBinding).filter(new Filter({
				filters: servciceId.map((id: string) => {
					return new Filter({
						path: "Id",
						operator: FilterOperator.EQ,
						value1: id
					})
				}),
				and: false
			}))
		}
	}

	public async onSubmitIssue(){
		if (!this.submitDialog) {
			this.submitDialog = new Dialog({
				type: Library.DialogType.Message,
				title: "Issue",
				content: [
					new Label({
						text: "Title",
						labelFor: "issueTitle"
					}),
					new Input("issueTitle", {
						width: "100%",
						placeholder: "Add title"
					}),
					new Label({
						text: "Issue",
						labelFor: "issueMessage"
					}),
					new TextArea("issueMessage", {
						width: "100%",
						placeholder: "Add message"
					})
				],
				beginButton: new Button({
					type: Library.ButtonType.Emphasized,
					text: "Submit",
					press: async () => {
						const title = Core.byId("issueTitle").getValue();
						const issue = Core.byId("issueMessage").getValue();
						const result = await this.gitServiceState.submitIssue(title, issue);
						MessageToast.show(result);
						this.submitDialog.close();
					}
				}),
				endButton: new Button({
					text: "Cancel",
					press: () => {
						this.submitDialog.close();
					}
				})
			});
		}

		Core.byId("issueTitle").setValue("");
		Core.byId("issueMessage").setValue("");

		this.submitDialog.open();
	}

}
