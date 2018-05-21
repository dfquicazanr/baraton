import {ToastOptions} from 'ng2-toastr';

export class ToastBaratonOptions extends ToastOptions {
  positionClass = 'toast-bottom-right';
  animate = 'flyRight'; // you can override any options available
  showCloseButton = true;
}
