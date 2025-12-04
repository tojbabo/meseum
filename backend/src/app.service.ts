import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class AppService {
  private readonly filepath = path.join(process.cwd(), 'tempconfig.txt');
  private lastlocation = { x: 0, y: 0 };

  onModuleInit():void {
    this.loadMetafile();
  }
  
  private loadMetafile() : void{
    const key = 'entrancelocation';

    if (fs.existsSync(this.filepath)) {
      console.log('load entrance xy location')
      const content = fs.readFileSync(this.filepath, 'utf8');
      const lines = content.split('\n');

      lines.forEach(line=>{
        const [key,value] = line.split(":");

        if(key == 'entrancelocation'){
          const [x,y] = value.split(',');
          this.lastlocation.x = parseInt(x);
          this.lastlocation.y = parseInt(y);
        }
      });
    }
  }

  
  getHello(): string {
    return 'Hello World!';
  }
  getEntranceLocation(): object {
    return this.lastlocation;
  }
  setEntranceLocation(body: any): object {
    const key = 'entrancelocation';
    let content = '';

    if (fs.existsSync(this.filepath)) {
      content = fs.readFileSync(this.filepath, 'utf8');
    }

    const location = `${key}:${body.x},${body.y}\n`;
    this.lastlocation.x = body.x;
    this.lastlocation.y = body.y;

    if (content.includes(key)) {
      content = content.replace(new RegExp(`${key}.*`, 'g'), location);
    } else {
      content = content.trim() + '\n' + location + '\n';
    }
    fs.writeFileSync(this.filepath, content);

    return { ok: 'Data set successfully' };
  }
}
