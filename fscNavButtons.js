import { LightningElement, api } from 'lwc';
import { FlowNavigationNextEvent, FlowNavigationFinishEvent, FlowNavigationBackEvent } from 'lightning/flowSupport';
export default class FscNavButtons extends LightningElement {
    @api
    availableActions = [];
    @api
    selectedButtonId; //Property that'll store the buttonId
    @api
    variant6 = "brand";
    @api
    label6 = "button";
    @api
    variant5 = "brand";
    @api
    label5 = "button";
    @api
    variant4 = "brand";
    @api
    label4 = "button";
    @api
    variant3 = "brand";
    @api
    label3 = "button";
    @api
    variant2 = "brand";
    @api
    label2 = "button";
    @api
    variant1 = "brand";
    @api
    label1 = "button";
    @api
    button1Clicked = false;
    @api
    button2Clicked = false;
    @api
    button3Clicked = false;
    @api
    button4Clicked = false;
    @api
    button5Clicked = false;
    @api
    button6Clicked = false;
    @api
    useButton1 = false;
    @api
    useButton2 = false;
    @api
    useButton3 = false;
    @api
    useButton4 = false;
    @api
    useButton5 = false;
    @api
    useButton6 = false;
    @api
    buttonId1;
    @api
    buttonId2;
    @api
    buttonId3;
    @api
    buttonId4;
    @api
    buttonId5;
    @api
    buttonId6;

    handleNavigation1() {

        this.selectedButtonId = this.buttonId1; //Setting the buttonId when button is clicked.

        /** Navigating to next screen */
        if (this.availableActions.find(action => action === 'FINISH')) {
            const navigateFinishEvent = new FlowNavigationFinishEvent();
            this.dispatchEvent(navigateFinishEvent);
        }
        if (this.availableActions.find(action => action === 'NEXT')) {
            const navigateNextEvent = new FlowNavigationNextEvent();
            this.dispatchEvent(navigateNextEvent);
        }
    }

    handleNavigation2() {

        this.selectedButtonId = this.buttonId2; //Setting the buttonId when button is clicked.

        /** Navigating to next screen */
        if (this.availableActions.find(action => action === 'FINISH')) {
            const navigateFinishEvent = new FlowNavigationFinishEvent();
            this.dispatchEvent(navigateFinishEvent);
        }
        if (this.availableActions.find(action => action === 'NEXT')) {
            const navigateNextEvent = new FlowNavigationNextEvent();
            this.dispatchEvent(navigateNextEvent);
        }
    }
    handleNavigation3() {

        this.selectedButtonId = this.buttonId3; //Setting the buttonId when button is clicked.

        /** Navigating to next screen */
        if (this.availableActions.find(action => action === 'FINISH')) {
            const navigateFinishEvent = new FlowNavigationFinishEvent();
            this.dispatchEvent(navigateFinishEvent);
        }
        if (this.availableActions.find(action => action === 'NEXT')) {
            const navigateNextEvent = new FlowNavigationNextEvent();
            this.dispatchEvent(navigateNextEvent);
        }
    }
    handleNavigation4() {

        this.selectedButtonId = this.buttonId4; //Setting the buttonId when button is clicked.

        /** Navigating to next screen */
        if (this.availableActions.find(action => action === 'FINISH')) {
            const navigateFinishEvent = new FlowNavigationFinishEvent();
            this.dispatchEvent(navigateFinishEvent);
        }
        if (this.availableActions.find(action => action === 'NEXT')) {
            const navigateNextEvent = new FlowNavigationNextEvent();
            this.dispatchEvent(navigateNextEvent);
        }
    }
    handleNavigation5() {

        this.selectedButtonId = this.buttonId5; //Setting the buttonId when button is clicked.

        /** Navigating to next screen */
        if (this.availableActions.find(action => action === 'FINISH')) {
            const navigateFinishEvent = new FlowNavigationFinishEvent();
            this.dispatchEvent(navigateFinishEvent);
        }
        if (this.availableActions.find(action => action === 'NEXT')) {
            const navigateNextEvent = new FlowNavigationNextEvent();
            this.dispatchEvent(navigateNextEvent);
        }
    }
    handleNavigation6() {

        this.selectedButtonId = this.buttonId6; //Setting the buttonId when button is clicked.

        /** Navigating to next screen */
        if (this.availableActions.find(action => action === 'FINISH')) {
            const navigateFinishEvent = new FlowNavigationFinishEvent();
            this.dispatchEvent(navigateFinishEvent);
        }
        if (this.availableActions.find(action => action === 'NEXT')) {
            const navigateNextEvent = new FlowNavigationNextEvent();
            this.dispatchEvent(navigateNextEvent);
        }
    }
}
