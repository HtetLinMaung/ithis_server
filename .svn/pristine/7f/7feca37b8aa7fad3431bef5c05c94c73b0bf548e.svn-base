import {Injectable} from '@angular/core'
import {Subject}    from 'rxjs/Subject';
declare var jQuery: any;
@Injectable()
export class RpIntercomService {
    private _mybean: any;
    _apiurl: string = "";
    _title: string = "";
    _app: string = "";
    _appname: string = "";
    _orgId : string =  "X/R7RWTBdWsCp/VtkbqPKg==";
    _authorization : string = "";
    _locationRight: string = '';
    _minGridHeight : number = 50; 
    _decimalPlace: number = 2;
    _profile = {
        "userSk" : "0",
        "u12Sk" : "0",
        "userName": "?",
        "role": 0,
        "logoText": "AG2",
        "logoLink": "/frm000",
        "commandCenter": "true",
        "btndata": [],
        "menus": [],
        "rightMenus": [],
        "userid": "",
        "t1" : "",
        "n1": 10,
    };
    _datepickerOpts = {
        autoclose: true,
        todayBtn: 'linked',
        todayHighlight: true,
        assumeNearbyYear: true,
        placeholder: 'dd/mm/yyyy', 
        format: 'dd/mm/yyyy'
    }
    // Observable string sources 
    private _channel001Source = new Subject<string>();
    private _channel002Source = new Subject<string>();
    private _channel003Source = new Subject<string>();
    private _rpbeanSource = new Subject<any>();

    // Observable string streams 
    channel001$ = this._channel001Source.asObservable();
    channel002$ = this._channel002Source.asObservable();
    channel003$ = this._channel003Source.asObservable();
    rpbean$ = this._rpbeanSource.asObservable();
    // Service message commands 
    send001(x: string) {
        this._channel001Source.next(x);
    }
    send002(x: string) {
        this._channel002Source.next(x);
    }
    send003(x: string) {
        this._channel003Source.next(x);
    }
    sendBean(x: any) {
        this._mybean = x;
        this._rpbeanSource.next(x);
    }
    getBean(): any {
        return this._mybean;
    }
    getRole(): number {
        return this._profile.role;
    }
    isMenuBar(): boolean {
        return this._profile.role > 0;
    }
    confirmUpload(p: boolean) {
        if (p) {
            jQuery(window).on('beforeunload', function () { return "Exit Application"; });
        } else {
            jQuery(window).unbind('beforeunload');
        }
    }
    getBtns(link){
        let arr = this._profile.btndata;
        for(let i=0; i<arr.length; i++){
            if(link == arr[i].link){
                return arr[i].desc;
            }
        }
    }
    getApiUrl(){
        return this._apiurl;
    }
}