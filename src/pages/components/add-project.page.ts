import { ElementActions } from "../../core/element-actions";
import { BasePage } from "../base.page";

class AddProject extends BasePage {
    private nameTextField: string = '#edit_project_modal_field_name';
    private addButton: string = '//span[text()="Add"]//parent::button';
    private cancelButton: string = '//span[text()="Cancel"]//parent::button';    

    // Extra Points add select the following behavior
    private colorDropdown: string = '//*[@id="dropdown-select-0-option-yellow"]/span[2][text()="Amarelo"]';
    private favoritesToggle: string = '//span[@class="reactist_switch--handle"]';
    private optionListView: string = '//div[text()="Lista"]';
    private optionBoardView: string = '//div[@class="edit_project_modal__view_radio_option"]/span[@class="edit_project_modal__view_radio_button"]/button[@class="task_checkbox priority_4 checked"]';

    constructor(){
        super();
    }

    async setProjectName(projectName: string) {
        await ElementActions.setText(this.nameTextField, projectName);
    }

    async clickAdd() {
        await ElementActions.click(this.addButton);
    }

    async clickRemove() {
        await ElementActions.click(this.addButton);
    }

    async createNewProject(projectName: string, color: string, isFavorite: boolean, view: string) {
        // Add Code
    }
}

export const addProjectPane = new AddProject();