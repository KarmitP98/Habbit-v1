import { MatFormFieldAppearance } from '@angular/material/form-field';

export const APPEARANCE: { inputFieldAppearance: MatFormFieldAppearance, hideRequiredMarker: boolean } = {
  inputFieldAppearance: 'standard',
  hideRequiredMarker: true,
};

export enum TYPE {
  default = 'default',
  success = 'success',
  danger = 'danger',
  warning = 'warning',
  light = 'light',
}
