import {Pipe,PipeTransform} from "@angular/core"

@Pipe({
    name: 'summary'
})

export class SunneryPipe implements PipeTransform{
    transform(value: string,args?: any) {
        if(!value)
        return null;

        return value.substr(0, 50)+"..."
    }
}