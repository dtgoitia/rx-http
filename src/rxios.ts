import { Rxios } from 'rxios';
import { AxiosError } from 'axios';

const baseURL: string = 'http://www.mocky.io';
const path: string = '/v2/59798efd11000082019edb88';
const brokenPath: string = '/v2/59798efd11000082019edb8';

const http: Rxios = new Rxios({
  baseURL
});

interface AlphabetResponse {
  alphabet: Array<string>;
}

http.get<AlphabetResponse>(path).subscribe({
  next: (response: AlphabetResponse): void => {
    response.alphabet.forEach((character: string): void => {
      console.log(character);
    });
  },
});

http.get<AlphabetResponse>(brokenPath).subscribe({
  error: (error: AxiosError): void => {
    const httpCode: number = error.response.status;
    console.log(`HTTP response status code: ${httpCode}`);
  },
});