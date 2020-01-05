import { Input, Textarea } from '../../elements';
import { formFieldHoc } from './form-field-HOC';

export const Fields = {
    TextInput: formFieldHoc(Input.Text),
    TextArea: formFieldHoc(Textarea)
};
