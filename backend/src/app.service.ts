import { Injectable } from '@nestjs/common';
import * as fs from "fs";
import * as path from "path";


@Injectable()
export class AppService {
  private readonly filepath = path.join(process.cwd(), 'tempconfig.txt');
  private lastlocation = {x:0, y:0};
  getHello(): string {
    return 'Hello World!';
  }
  getEntranceLocation(): object{
    return this.lastlocation
  }
  setEntranceLocation(body: any): object {
    const key = "entrancelocation"
    let content = ''
    
    if(fs.existsSync(this.filepath)){
      content = fs.readFileSync(this.filepath, 'utf8');
    }

    const location = `${key}:${body.x},${body.y}\n`
    this.lastlocation.x = body.x
    this.lastlocation.y = body.y

    if(content.includes(key)){
      content = content.replace(
        new RegExp(`${key}.*`, 'g'),
        location
      );
    }else{
      content = content.trim() + '\n' + location + '\n';
    }
    fs.writeFileSync(this.filepath, content)

    return {  ok: 'Data set successfully'};
  }
}
