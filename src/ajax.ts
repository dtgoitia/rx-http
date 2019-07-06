import { ajax, AjaxResponse } from 'rxjs/ajax';
import { XMLHttpRequest } from 'xmlhttprequest';

const URL: string = 'http://www.mocky.io/v2/59798efd11000082019edb88';

function createXHR() {
  return new XMLHttpRequest();
}

ajax({
  createXHR,
  url: URL,
  crossDomain: true,
  withCredentials: false,
  method: 'GET',
}).subscribe({
  next: (x: AjaxResponse): void => {
    console.log(x);
  },
  error: (x: AjaxResponse): void => {
    console.log(x);
  },
});
