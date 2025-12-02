import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  setData(body: any): string {
    console.log(body);
    return 'Data set successfully';
  }
}
