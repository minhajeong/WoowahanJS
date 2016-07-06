import Template from './user.hbs';
import Woowahan from '../../../../';

export default Woowahan.ItemView.create('User', {
  tagName: 'tr',
  template: Template,

  onSelectedRow(event, trigger) {
    trigger({ id: this.getModel('id') });
  }
});
