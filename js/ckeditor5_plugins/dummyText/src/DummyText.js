import { Plugin } from 'ckeditor5/src/core';
import { ButtonView } from 'ckeditor5/src/ui';
import DropdownView from '@ckeditor/ckeditor5-ui/src/dropdown/dropdownview';
import Model from '@ckeditor/ckeditor5-ui/src/model';
import icon from '../../../../icons/dummy-text.svg';
import loremIpsum from '../../../../text/lorem-ipsum.txt';
import textOptions from '../../../../text/text-options.json';

export default class DummyText extends Plugin {
  init() {

    const dropdown = createDropdown( locale );

    // Configure dropdown's button properties:
    dropdown.buttonView.set( {
        label: 'A dropdown',
        withText: true
    } );

    dropdown.render();

    dropdown.panelView.element.textContent = 'Content of the panel';

    // // Will render a dropdown with a panel containing a "Content of the panel" text.
    // document.body.appendChild( dropdown.element );

    // // Create a new instance of the DropdownView class.
    // const dropdown = new DropdownView( locale );

    // // Configure dropdown's button properties:
    // dropdown.buttonView.set( {
    //     label: 'Dummy text dropdown',
    //     withText: true,
    //     tooltip: true
    // } );

    // // Create the dropdown panel content.
    // dropdown.panelView.element.textContent = 'Content of the panel';

    // // Render the dropdown.
    // dropdown.render();

    // // Add the dropdown to the toolbar or wherever you want it to appear.
    // editor.ui.componentFactory.add( 'dummyText', locale => {
    //     return dropdown;
    // } );

    // const editor = this.editor;

    // console.log('DummyText was initialized');
    // console.log('text options: ', textOptions);

    // const buttonFactory = function () {
    //   const button = new ButtonView();

    //   button.set(
    //     {
    //       label: 'Dummy text',
    //       icon: icon,
    //       tooltip: true,
    //     }
    //   );

    //   // Change the model using the model writer.
    //   const write = writer => {
    //     // Insert the text at the user's current position.
    //     editor.model.insertContent(writer.createText(loremIpsum));
    //   }
    //   const executeHandler = () => {
    //    editor.model.change(write);
    //   }
    //   button.on('execute', executeHandler);

    //   return button;
    // };

    // editor.ui.componentFactory.add('dummyText', buttonFactory);
  }
}


