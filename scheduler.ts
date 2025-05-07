
class Template {
    public svgString=` 
    
    <svg 
    
            xmlns='http://www.w3.org/2000/svg' 
            id="main-svg" viewBox="0 0 1000 1000"
            version="1.1" 
           
          
            
         
            > 
            <pattern id="pattern-chevron" x="0" y="0" patternUnits="objectBoundingBox" width="100" height="180" viewBox="0 0 10 18"> 
         
           
            <g id="chevron">
            
              <path class="left" d="M0 0l5 3v5l-5 -3z"></path>
              <path class="right" d="M10 0l-5 3v5l5 -3"></path>
            </g>
           
           
            <use x="0" y="9" xlink:href="#chevron"></use>
          
          </pattern>
          <pattern id="progress-pattern" x="0" y="0" width="50" height="140" patternUnits="userSpaceOnUse" >    
          <rect x="0" y="0" width="25" height="140" fill="black" opacity="0.4"/>
          <rect x="25" y="0" width="25" height="140" fill="white" opacity="0.4"/>
          <animateTransform attributeName="patternTransform" type="rotate" from="30" to="30" dur="4s" repeatCount="indefinite"/> 
          <animateTransform attributeName="patternTransform" type="translate" from="0" to="100" dur="4s" repeatCount="indefinite"  additive="sum"/>  
        </pattern>
          <pattern
        id="p_circles"
        x=".125"
        y=".125"
        width=".25"
        height=".25"
        patternUnits="userSpaceOnUse">
        <circle cx="10" cy="10" r="10" />
      </pattern>
      <pattern id="obliqueLines"
      x="0" y="0" width="2" height="2"
      patternUnits="userSpaceOnUse" 
      patternTransform="rotate(45)">
    <rect x="0" y="0" width="1" height="0.2" style="stroke: 2; fill: #0000ff" />
    
    </pattern>
            <animate id="vanim" attributeName="viewBox" 
                to="" 
                from="" 
                dur="0.3s" 
                fill="freeze" 
                repeatCount="1" 
                begin="indefinite"/> 
    
            <defs id="defs" > 
                <marker id="circle-marker-end" markerWidth="8" markerHeight="8" refX="5" class="marker-end" refY="5" orient="auto">
                    <circle class="link-wire-marker-end" cx="5" cy="5" r="2"></circle>
                </marker>
    
                <linearGradient id="gradV1" x1="0%" y1="0%" x2="0%" y2="100%"> 
                    <stop class="grad-color1" offset="0%" style="stop-color:rgb(255,255,255);stop-opacity:0.8" /> 
                    <stop class="grad-color2" offset="100%" style="stop-color:rgb(123, 175, 196);stop-opacity:0.8" /> 
                
                </linearGradient> 
               <linearGradient id="gradH1" x1="0%" y1="0%" x2="100%" y2="0%">
                   <stop  class="grad-color1" offset="0%" style="stop-color:rgb(255,255,255);stop-opacity:0.8" />
                   <stop  class="grad-color2" offset="100%" style="stop-color:rgb(123, 175, 196);stop-opacity:0.8" />
    
                </linearGradient>
    
                
                <g id="stars" transform="scale(0.7)">
                    <path
                       transform="rotate(16.166027,247.23984,-34.317252)"
                        d="m 27.606898,72.838594 -2.767323,-1.003493 -1.799362,2.329673 0.09923,-2.941977 -2.771683,-0.991386 2.82865,-0.81475 0.08637,-2.942383 1.648974,2.438435 2.825061,-0.827107 -1.809528,2.321785 z"
                        id="path817"
                        style="opacity:0.678;fill:#d9be20;fill-opacity:1;stroke:none;stroke-width:0.30000001;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:0.59999999, 0.3;stroke-dashoffset:0;stroke-opacity:1;paint-order:markers stroke fill" />
                        <path
                        transform="rotate(16.166027,251.21746,-4.9164116)"
                        d="m 27.606898,72.838594 -2.767323,-1.003493 -1.799362,2.329673 0.09923,-2.941977 -2.771683,-0.991386 2.82865,-0.81475 0.08637,-2.942383 1.648974,2.438435 2.825061,-0.827107 -1.809528,2.321785 z"
                        id="path817-4"
                        style="opacity:0.678;fill:#d9be20;fill-opacity:1;stroke:none;stroke-width:0.30000001;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:0.59999999, 0.3;stroke-dashoffset:0;stroke-opacity:1;paint-order:markers stroke fill" />
                        <path
                        transform="rotate(16.166027,255.36117,24.260777)"
                        d="m 27.606898,72.838594 -2.767323,-1.003493 -1.799362,2.329673 0.09923,-2.941977 -2.771683,-0.991386 2.82865,-0.81475 0.08637,-2.942383 1.648974,2.438435 2.825061,-0.827107 -1.809528,2.321785 z"
                        id="path817-2"
                       style="opacity:0.678;fill:#d9be20;fill-opacity:1;stroke:none;stroke-width:0.30000001;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:0.59999999, 0.3;stroke-dashoffset:0;stroke-opacity:1;paint-order:markers stroke fill" />
                        <path
                        transform="rotate(16.166027,259.48588,53.211077)"
                        d="m 27.606898,72.838594 -2.767323,-1.003493 -1.799362,2.329673 0.09923,-2.941977 -2.771683,-0.991386 2.82865,-0.81475 0.08637,-2.942383 1.648974,2.438435 2.825061,-0.827107 -1.809528,2.321785 z"
                        id="path817-9"
                        style="opacity:0.678;fill:#d9be20;fill-opacity:1;stroke:none;stroke-width:0.30000001;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:0.59999999, 0.3;stroke-dashoffset:0;stroke-opacity:1;paint-order:markers stroke fill" />
                        <path
                        transform="rotate(16.166027,263.61059,82.161379)"
                        d="m 27.606898,72.838594 -2.767323,-1.003493 -1.799362,2.329673 0.09923,-2.941977 -2.771683,-0.991386 2.82865,-0.81475 0.08637,-2.942383 1.648974,2.438435 2.825061,-0.827107 -1.809528,2.321785 z"
                        id="path817-5"
                        style="opacity:0.678;fill:#d9be20;fill-opacity:1;stroke:none;stroke-width:0.30000001;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:0.59999999, 0.3;stroke-dashoffset:0;stroke-opacity:1;paint-order:markers stroke fill" />
                </g>
                <pattern id="diagonalHatch" patternUnits="userSpaceOnUse" width="4" height="4">
                            <path d="M-1,1 l2,-2
                                    M0,4 l4,-4
                                    M3,5 l2,-2" 
                                    style="stroke:#00ff00; stroke-width:0.7" fill="orange"/>
                </pattern>
            </defs>'
    
    
        <g id="wrapper" transform="translate(0,0)">
            <g  id="scheduler-items" left="0px" transform="translate(0,0)">
    
                <animateTransform  
                    xlink:href="#scheduler-items"
                    attributeName="transform" 
                    attributeType="XML"
                    type="translate"
                    from="0"
                    to="50"
                    dur="0.4s"
    
                    calcMode="spline"
                    keyTimes="0;1" 
                    keySplines=" .4 0 .6 1  " 
                    repeatCount="1"
                    begin="indefinite"
                    fill="freeze" />
    
    
                <g id="scheduler-header">
                
                </g>
                <g id="scheduler-background" transform="translate(0,0)">
                
                </g>
    
    
    
            </g>
            
        
        </g>
        <svg id="scheduler-sidebar" x="0" y="0" width="6000" height="100%" >
            <svg id="scheduler-resources" x="0" y="0" height="100%" width="calc(100% - 40px)">
            </svg>
            <svg id="scheduler-splitter" x="calc(100% - 80px)" y="0" width="80" height="100%" >
             
                <rect x="calc(100% - 45px)" y="0" width="10" height="100%" class="splitter" fill="white" style="cursor:ew-resize;"/>
               
          
            </svg>
        </svg>
      
    </svg>
    
    <svg id="shifter-dx" class="shifter svg-overlay right" style="visibility:hidden">
        <g transform="scale(4)">
            <circle  cx="8" cy="8" r="8" fill="white" ></circle>
            <path  d='M 3, 2 L 5,4 L 3, 6' stroke="#6699cc" fill="none" transform="scale(2)"/>
        </g>
    </svg>
    
    <svg id="shifter-sx" class="shifter svg-overlay left" style="visibility:hidden">
            
        <g transform="scale(4) rotate(180 8 8)">
            <circle  cx="8" cy="8" r="8" fill="white" ></circle>
            <path  d='M 3, 2 L 5,4 L 3, 6' stroke="#6699cc" fill="none" transform="scale(2)"/>
        </g>
    </svg>
    
    `;
}


declare function resourceClick(event:any, resource:any): void;
declare function itemMouseEnter(event:any, item:any): void;
declare function itemMouseExit(event:any, item:any): void;
declare function itemMouseDown(event:any, item:any): void;
declare function itemSizing(event:any, item:any): void;
declare function timeMouseClick(event:any, date:any): void;
declare function gridMouseClick(event:any, date:any): void;
declare function gridMouseOver(event:any, i:any): void;
declare function modified(): void;
declare function taskClick(event:any, date:any):void;

class CalendarItem{
   
    private _duration:number=1440;
    private _denominator:number=60000;
    private _capacity:number=0;
    private _step:number=60;
    private _from:number;
    private _type:string='';
    private _day:number=-1;
    private _orderIndex:number=1000;

    constructor(){
       
        var now=new Date();      
        var date=new Date(now.getFullYear(),now.getMonth(),now.getDate());   
        this._from=Math.trunc(date.getTime()/this._denominator);
        this.type='event';        
    }
 

    get capacity(){
        return this._capacity;
    }
    set capacity(val:number){
        this._capacity=val;
    }
    get day() {
        return this._day;
    }
    set day(val:number){
        if ((val>=-1) && (val<=6))this._day=val;
       
    }
    get dateFrom(){
        return new Date(this._from*this._denominator).toString();
    }

    get dateTo(){
        return new Date((this._from+this._duration)*this._denominator);
    }

    get duration(){
        return this._duration;
    }

    set denominator(value) {
        this.from*=this._denominator;
        this.from/=value;
        this._capacity*=this._denominator;
        this._capacity/=value;
        this._denominator=value;
       
    }

    set duration(value:number) {
        var duration=value;   
        duration=this.getModulo(duration);
        if (duration>0)
        {
          
            this._duration=duration;
        }   
    }
    set from(value:number){
        let f=Math.trunc(value/this._denominator);
        f=this.getModulo(f);
        this._from=f;
       
    }
    get from(){
        return this._from;
    }
    get to(){
        return this._from+this._duration;
    }
    set type(value){
        this._type=value;
        if (value=='rule'){
            this._orderIndex=0;
        }
        else if (value=='calendar'){
            this._orderIndex=1;
        }
        else if (value=='event'){
            this._orderIndex=2;
        }
        else{
            this._orderIndex=1000;
            this._type='event';
        }
       
        
    }
    get type(){
        return this._type;
    }
    get orderIndex(){
        return this._orderIndex;
    }
    set to(value:number){
      
      let v=Math.trunc(value/this._denominator);
    
      v=this.getModulo(v);
     
      if (v>0 && v>this._from){
        this._duration=v-this._from;
       
      }
      
    }
    set dateFrom(value:string){
        let dt=value;
        if (!value.includes('T'))
            dt+='T00:00:00';
        let date=new Date(dt);

        
        if (date.toString()!='Invalid Date'){
            this.from=date.getTime();
        }
        else
        console.log(value+ ' - Invalid Date')
    }
    private getModulo(value:number){
        let v=value;
        let r=value % this._step;      
        if ((r)>(this._step/2)) v=v-r+this._step; else v-=r;
        return v;
    }
    
}

 class Calendar {
    private _items:CalendarItem[]=[];
    private _capacity:number=0;
    private _denominator:number=60000;
    private _reference:number=1440;
    private _step:number=15;

    newItem(){
       
        let item=new CalendarItem();
        this._items.push(item);
        return item
    }
    addItem(item){
       
        if (item instanceof CalendarItem){
            this._items.push(item);
            return item;
        }
        else return null;
       
    }
    get items(){
        return this._items;
    }

    get itemCount(){
        return this.items.length
    }

    public calcDuration(item:any){
      
        let duration=0;
        let effort=0;
        let sum=0;     
      
        let denom=this._denominator;
        let reference=this._reference;
        let step=this._step;
        let minutes=0;
        let hours=0;
        let dayMinTot=0;

        while (effort  < item.Effort) {
            let cursor = item.From+sum;
            let e=0;
            let dt=new Date(cursor*denom);
                //check rules
            let capacity=this.getCapacity(cursor,dt.getUTCDay());
            minutes = dt.getUTCMinutes();
            hours = dt.getUTCHours();
            dayMinTot = (hours*60)+minutes;

            if (capacity>0){
              //  e=(capacity/reference)*step;  
              if (dayMinTot>=capacity) e=0;
              else  e=step;
            }              
            effort+=e;
            effort=Math.round(effort*1000)/1000;
            sum+=step;          
                             
        }
           
        duration=sum; 
        if (duration<step) duration=step;    
       
        return duration;
    }
  
    public calcEffort(item:any){
        
       
        let duration=item.Width;
        
            let d=0;
            let effort=0;
        
            let denom=this._denominator;
            let reference=this._reference;
            let step=this._step;
            let minutes=0;
            let hours=0;
            let dayMinTot=0;

            while (d  < duration) {
                let cursor = item.From+d;        
                let e=0;
             
                let dt=new Date(cursor*denom);
                minutes = dt.getUTCMinutes();
                hours = dt.getUTCHours();
                dayMinTot = (hours*60)+minutes;
                //check rules
                let capacity=this.getCapacity(cursor, dt.getUTCDay());

                if (capacity>0){
                    if (dayMinTot>=capacity) e=0;
                    else  e=step;
                    //e=(capacity/reference)*step;  

                   
                }              
                effort+=e;
                effort=Math.ceil(effort*100)/100;
                d+=step; 
             
             
            }

             
       

        return effort;
    }

    public optimazeStart(item:any){
      
        let sum=0;     
        let denom=this._denominator;
        let reference=this._reference;
        let step=this._step;
        let capacity=0;
        let go=true;
        console.log('optimization start');
        while (go && sum<(reference*20)) {
            let cursor = item.From+sum;
            let dt=new Date(cursor*denom);
            let minutes = dt.getUTCMinutes();
            let hours = dt.getUTCHours();
            let dayMinTot = (hours*60)+minutes;
            // console.log(dayMinTot);
            // console.log(cursor+ ' '+denom);
            capacity=this.getCapacity(cursor,dt.getUTCDay());

            if ((capacity==0)||(dayMinTot>=capacity)) {
                sum+=step;
                go=true;
            } else go=false;
          
                //e=(capacity/reference)*step;  

               
                        
                        
        }
           
     
       
        return item.From+sum;
    }
    public getCapacity(instant, day){
         
        let capacity=this._capacity;
         
         let dayRuleItem=this.items.filter(item=>
            (item.type=='rule'  && item.day==day) && (item.from<=instant) && (item.to>instant) 
        )[0];
 
        capacity = dayRuleItem ? dayRuleItem.capacity : capacity;

        if (dayRuleItem==undefined) {
            
            let capacityRuleItem=this.items.filter(item=>
                 (item.type=='rule' && item.day==-1) && (item.from<=instant) && (item.to>instant) 
             )[0];
              capacity = capacityRuleItem ? capacityRuleItem.capacity : capacity;
         }
         let calendarItem=this.items.filter(item=>
            (item.type=='calendar'  && item.day==-1) && (item.from<=instant) && (item.to>instant) 
        )[0];

        capacity = calendarItem ? calendarItem.capacity : capacity;

       return capacity;
    }
    get reference(){
        return this._reference;
    }
}
class SchedulerItem{
    public From:number=0;
    public Effort:number=0;
    public Duration:number=0;
    public ControlBit=false;
   

}
class SchedulerItem2{
   
    
  
    
    public Duration:number=0;
    public ControlBit=false;
    private _element:SVGSVGElement;
    private _settings:SchedulerSettings;
    private _resource:number=0;
    private _scheduler:Scheduler;
    private _width:number=0;
    
    private _height:number=0;
    private _from:number=0;
    private _to:number=0;
    private _offset:number=0;
    private _effort:number=2880;
    private _data:any;
    private _x:number=0;
    private _y:number=0;
    private _w:number=0;
    private _calendar:Calendar;
    private _id:string;

    constructor(scheduler:Scheduler,itemData:any, calendar?:Calendar){     
       
        if (itemData){      
            if (itemData.Id){
              
                this._element=document.querySelector('svg[data-id="'+itemData.Id+'"]');
                this._data=itemData; 
                this._id=itemData.Id;           
               
            }
        }
        this._scheduler=scheduler;
        this._resource=-1;

        this._settings=scheduler.settings;
        this._calendar=scheduler.calendar;
        if (calendar!=null) this._calendar=calendar;
      
        this._offset=itemData.Offset;
        this._width=itemData.Width;
        this._from=this.calcFrom();
        if (this._calendar!=null){
            this._effort=this._calendar.calcEffort(this);
            this._data.Effort=this._effort;
        }
        
       
    }
    get Id():string{
        return this._id;
    }
    get Resource(): number {
        if (this._resource<0)
        {
            this._scheduler.data.Resources?.forEach((resource, ri)=>{
                resource.Items?.forEach((item)=>{
                    if (item.Id==this._data.Id){
                        this._resource=ri;
                    }
                });
            });

        }

        return this._resource;
    }
    set Resource(value: number) {
       
        if (value>=0){
            let resourceIndex=Math.trunc(value);
            // if (resourceIndex>0 && resourceIndex<this._scheduler.data.Resources.length)
            // {
                let y=(this._settings.resourceHeight*resourceIndex)+this._scheduler.headerHeight;
                let x=parseFloat(this._element?.getAttribute('x'));
                if (resourceIndex!=this._resource){
                   
                   
                    this._scheduler.data.Resources[this.Resource].Items?.splice(this._scheduler.data.Resources[this.Resource].Items?.indexOf(this._data),1);
                        if (!this._scheduler.data.Resources[resourceIndex].Items) this._scheduler.data.Resources[resourceIndex].Items=[];
                        this._data.Modified=true;
                        this._scheduler.data.Resources[resourceIndex].Items?.push(this._data);
                        this._resource = resourceIndex;
                        this._data.Resource = this._resource;
                    // if (this.checkInterference()==true){
                        
                    //     this.moveTo(x,y);
                    // }
                     this.moveTo(x,y);

                    
                }
                else this.moveTo(x,y);
               

            // }
        }
    }
    get From(): number {
        return this._from;
    }
    set From(value: number) {
        if (value>=0){
            this._from = value;
            
            this.Offset=this.calcOffset();
        }
    }
    get Offset(): number {
        return this._offset;
    }
    set Offset(value: number) {
        if (value>=0){
            this._offset = value;
            this._from=this.calcFrom();
           
          
           
            if (this._calendar && this._settings.optimizeStart ==true)
            {
                this._from=this._calendar.optimazeStart(this);
                this._offset = this.calcOffset();
              
               
                

            }

            
            let x=this.convertOffsetToX();
            if(this._element){
                let y=parseFloat(this._element.getAttribute('y'));
            
                this.moveTo(x,y);
            }
            this._data.Offset=this._offset;
            this._data.From=this._from;
            this._data.Modified=true;
            if (this._calendar && this._settings.calcEffort==true)
            {
                let w = this._calendar.calcDuration(this);
               
              
                w=this.getModulo(w,this._settings.gridStep,this._settings.gridStep);
                this._width=w;
                this._w = this._width/this._settings.timeUnitVal*this._settings.timeWidth;
                this.setWidth(this._w);
                this._data.Width=this._width;
             
            }

            this._data.To=this._from+this._width;
        }
    }
    get To(): number {
        return this._from+this._width;
    }
    
    get Width(): number {
        return this._width;
    }
    set Width(value: number) {
        if (value>=this._settings.gridStep){
         
            this._width=this.getModulo(value,this._settings.gridStep,this._settings.gridStep);
            this._w = this._width/this._settings.timeUnitVal*this._settings.timeWidth;
            this.setWidth(this._w);
            if (this._calendar){
                this._effort=this._calendar.calcEffort(this);
            }
            else this._effort=this._width;

            this._data.Width=this._width;
            this._data.Effort=this.Effort;
            this._data.To=this._from+this._width;
            this._data.Modified=true;
        }
    }
    get W(): number {
        return parseFloat(this._element?.getAttribute('width') ?? '0');
    }
    set W(value: number) {
        if (value>0){
            let val=value*this._settings.timeUnitVal/this._settings.timeWidth;
           
          

               
            this.Width=val;
           
            
        }
    }
    get X(): number {
        return parseFloat(this._element?.getAttribute('x') ?? '0');
    }
    set X(value: number) {
        if (value>0){
            

                let offset=this.convertXToOffset(value);

              
                this.Offset=this.getModulo(offset,this._settings.gridStep,this._settings.gridStep);
                this._x=this.convertOffsetToX();
                this._data.Offset=this._offset;
                this._data.Modified=true;
        }
    }
    get Y(): number {
        return parseFloat(this._element?.getAttribute('y') ?? '0');
    }
    set Y(value: number) {
 
            // let max=this._scheduler.headerHeight+((this._scheduler.data.Resources?.length ?? 0)*this._settings.resourceHeight)+(this._settings.resourceHeight/2);
            // let min=this._scheduler.headerHeight-(this._settings.resourceHeight/2);
            // console.log('set y:'+value+' min:'+min+' max:'+max);
            let min=0;
            let max=this._scheduler.data.Resources?.length ?? 0;
            let r=Math.trunc((value-this._scheduler.headerHeight)/this._settings.resourceHeight);        
          
            if (r<min) r=min;
            if (r>max) r=max;
          
                    
                this.Resource=r;
              
            
        
    }
    get Effort(): number {
        return this._effort;
    }
    set Effort(value: number) {
        if (value>=this._settings.gridStep){
            this._effort=this.getModulo(value,this._settings.gridStep,this._settings.gridStep);
           
            if (this._calendar){
                this._width=this._calendar.calcDuration(this);
               
            }
            else this._width=this._effort;

            this._w = this._width/this._settings.timeUnitVal*this._settings.timeWidth;
            this.setWidth(this._w);

            this._data.Width=this._width;
            this._data.Effort=this._effort;
            this._data.Modified=true;
        }
    }
    private moveTo(x:number, y:number){
        if (!this._element) return;

        if (this._settings.animation ?? false){
            this.moveAnimatedTo(x,y);
        }

        this._element.setAttribute('x',x.toString());
        this._element.setAttribute('y',y.toString());
        
       
       
       
    }
    private moveAnimatedTo( x:number, y:number){
        if (!this._element) return;
        let cx=parseFloat(this._element.getAttribute('x') ?? '0');
        let cy=parseFloat(this._element.getAttribute('y') ?? '0');
      
        let animatex=document.createElementNS('http://www.w3.org/2000/svg','animate');
        animatex.setAttribute('attributeName','x');
        animatex.setAttribute('values',cx.toString()+';'+ x.toString());
        animatex.setAttribute('dur','0.25s');
        this._element.append(animatex);
        animatex.beginElement();
        animatex.addEventListener('end',function(){
           
            animatex.remove();
        });

       
            let animatey=document.createElementNS('http://www.w3.org/2000/svg','animate');
            animatey.setAttribute('attributeName','y');
            animatey.setAttribute('values',cy.toString()+';'+ y.toString());
            animatey.setAttribute('dur','0.15s');
            this._element.append(animatey);
            animatey.beginElement();
            animatey.addEventListener('end',function(){
                animatey.remove();
            });
        
        
       
      
       
       

       
      
        // element.setAttribute('x',x.toString());
        // element.setAttribute('y',y.toString());
       
    }

    private setWidth( width:number){
      
        if (this._settings.animation==true)
        {
            this.setAnimatedWidth( width);
        }
        this._element?.setAttribute('width',width.toString());
      
    }
   
    private setAnimatedWidth( width:number){
       
        if (!this._element) return;
        let w=parseFloat(this._element.getAttribute('width') ?? '0');
        let animatew=document.createElementNS('http://www.w3.org/2000/svg','animate');
        animatew.setAttribute('attributeName','width');
        animatew.setAttribute('values',w.toString()+';'+ width.toString());
        animatew.setAttribute('dur','0.15s');

        this._element.append(animatew);
    
        animatew.beginElement();

        animatew.addEventListener('end',function(){
            animatew.remove();
        });
    }
    private getModulo(value:number, step:number, min?:number):number{
        const modulo = (value-(min ?? 0)) % step;
        const correction = modulo > step / 2 ? step - modulo : -modulo;
        let result = value + correction;
       
        result = min != null && result < min ? min : result;
        return result;
    }
    private convertXToTicks(x:number):number {
        let date=this._settings.date;
        let ticks=0;
       
        if (date){
            ticks=x/this._settings.timeWidth*this._settings.timeUnitVal;
            ticks += (date.getTime()/60000);
        }


       
      
        return ticks;
    }
    private calcFrom():number {
        let date=this._settings.date;
        let ticks=this._offset;
        if (date){
            
            ticks += (date.getTime()/60000);
        }

       
       
      
        return ticks;
    }
    private calcOffset():number {
        let date=this._settings.date;
        let ticks=this._from;
        if (date){
            
            ticks -= (date.getTime()/60000);
        }

       
       
      
        return ticks;
    }
    private convertOffsetToX():number {
        
        let x=this._offset/this._settings.timeUnitVal*this._settings.timeWidth;
       
      
        return x;
    }
    private convertXToOffset(x:number):number {
        
        let offset=x*this._settings.timeUnitVal/this._settings.timeWidth;
       
      
        return offset;
    }
    private convertWToTicks(w:number):number {
       
        let ticks=w/this._settings.timeWidth*this._settings.timeUnitVal;
         
       
        
        return ticks;
    }
    private getItemOffset(from:number):any{
        let date=this._settings.date;
        let x=0;
        let ticks=0;
        if (date){         
            ticks = (date.getTime()/60000);
        }
        return from-ticks;
    }
    public checkInterference():boolean{
        let result=true;
        let x1=this.Offset;
        let x2=this.Offset+this.Width;
       
        if (this.Resource>=0 && this.Resource < (this._scheduler.data.Resources?.length ?? 0))
        {
          
            this._scheduler.data.Resources[this.Resource].Items?.forEach((item)=>{
              
                if (item.Id!=this._data.Id){
                    let cx1=item.Offset;
                    let cx2=item.Offset+item.Width;                 
                    result=result&&((x2<=cx1)||(x1>=cx2));
                    
                }
            });
        }
        return result;
    }
}

class CalendarMousePos{
    x:number=0;
    y:number=0;
    timeOffset:number=0;
    resourceIndex:number=0;
    date:Date=new Date();
}

class mousePos{
    x:number=0;
    y:number=0;
}

class SchedulerSettings{
    
    splitBarToggleButtons:boolean= true;
    resHeaderText:string= "";   
    footerHeight: number = 0;
    storeData: boolean = true;
    animation:boolean=true;
    canMoveItems:boolean= true;
    canResizeItems: boolean = true;
    viewWeeks: boolean = true;
    viewInfoElements: boolean = false;
    viewInfo: boolean = true;
    checkInterferences:boolean = true;
    shiftItems:boolean = true;
    calcEffort:boolean = true;
    optimizeStart:boolean = true;
    roundRectRadius: number = 2;
    resourceHeight: number = 40;
    resourceWidth: number = 200;
    resourceImages: boolean = true;
    resourceChange:boolean = false;
    resCollapsedWidth:number = 1000;
    splitBarinitPos = 300;
    infoElementSize:number=15;
    resRoundRect: number = 2;
    resPadding: number = 2;
    
   
    resUnitsView:number = 0;
    timeUnitsView: number = 30; //number of time units shown in a screen
    timeUnitVal:number = 1440;  //number of minutes in time unit
    gridStep: number = 1440; 
    gridOffset:number =0 ;   //grid step in minutes
    timeUnitsCount: number = 90; //number of time units view
    timeWidth: number = 144;    //graphic width of time unit
    timeElementHeight: number = 15;

    monthBoxHeight: number = 50;
    weekBoxHeight:  number = 15;
    infoElementHeight: number = 15;
    viewMonthLogo:boolean = true;
    logoTitle:string = "";
    splitterWidth:  number = 10;   
    sidebarMaxWidth:  number = 350;
    sidebarMinWidth:  number = 40;
    date: Date = new Date('2023-09-21');
   
    groupFilter:  number = 0;
    hilightSunday:  boolean = true;

    logo: string = "";

    dropEnable: boolean = true;

    itemsLinks:  boolean = false;
    drawLinks:  boolean = false;
    linkSpline:  boolean = true;
    

    itemsPadding: number = 3;
    itemsText:  boolean = true;
    itemTextOffestX:  number = 50;
    itemTextOffestY:  number = 40;
    itemTextFont:string= "Arial";   
    itemTextSize:  string = '40%';
    gStyle: string= "round-rect";   
    arrowSize: number = 6;
    perfectMatch: boolean = false;

    viewYear:  boolean = true;
    viewShifters:  boolean = true;
    shifterStep:  number = 10;
    viewEvents:  boolean = true;
    viewEventExtended: boolean = true;
    canMoveEvents: boolean = true;
    viewStars: boolean = false;

    progressBar:  boolean = true;
    progressBarAnimation:  boolean = true;
    
    icons: string= "";
    theme: string= "";  
    template: string = ""; 
    months: string[] = ["January", "February", "March",
                                "April", "May", "June", 
                                "July", "August", "September",
                                "October", "November", "December"
                            ];
  

}

enum SchedulerView{ 
    Year='year',
    Month='month',
    Week='week',
    Day='day',
    Resource='resource',
    Time='time',
    Info='info',
    None='none'   
  }


 class Scheduler {
    readonly version: string = '5.0.0';
    private scheduler_id:string='scheduler';
    public headerHeight:number=100;
    public data:any;
    public settings:SchedulerSettings;
    private filteredResources:any;
    private resourceFilteredCount:number;
    private splitBarPos:number=0;
    private calendarMousePos:CalendarMousePos=new CalendarMousePos();
    private mpos:mousePos=new mousePos();
    private schedulerMousePos:mousePos=new mousePos();
    private action='';
    private linkPoint:mousePos=new mousePos();
    private linkId:string='';
    private element:SVGSVGElement;
    private actionMemoPos:mousePos=new mousePos();
    private ratio:number=1;
    private zoom:number=1;
    private schedulerSVG:SVGSVGElement;
    private schedulerItems:HTMLElement;
    private schedulerContainer:HTMLElement;
    private splitBar:HTMLElement;
    private template:string='';
    public calendar:any=null;  
    
    private itemConnPoint1:SVGCircleElement;
    private itemConnPoint2:SVGCircleElement;
    private itemConnPoint3:SVGCircleElement;
    private itemConnPoint4:SVGCircleElement;
    private connLine:SVGLineElement;
    private currentView:SchedulerView=SchedulerView.Month;

    constructor(scheduler:string, jsonData: string, settings?: SchedulerSettings) {

       this.scheduler_id=scheduler;
       this.data = jsonData;

       if (settings) {this.settings=settings}
       else {this.settings = new SchedulerSettings()};
    
       if (this.data.Calendar){
        console.log(this.data.Calendar);
            this.calendar=new Calendar();
            let r=this.calendar.newItem();
            r.capacity=this.data.Calendar.Reference;
            r.day=-1;
            r.from=0;
            r.duration=999999999;
            r.type='rule';
            console.log('calendar items');
            this.data.Calendar.Items?.forEach((item)=>{
                let i=this.calendar.newItem();
                i.capacity=item.Capacity;
                i.day=item.Day;
                let dtfrom=new Date(item.DateFrom);
                let dtto=new Date(item.DateTo);
                let f=dtfrom.getTime();
                console.log(f);
                i.from=f;
              
                console.log(dtto);
                console.log(i.from);
                i.duration=(new Date(item.DateTo).getTime()/60000)-(new Date(item.DateFrom).getTime()/60000);
                i.type='rule';
                console.log(i);
            });
       }
    }
  
    init(){
        this.schedulerContainer=document.getElementById(this.scheduler_id)!;
       
        if (this.schedulerContainer!=null){
            this.schedulerContainer.textContent = "";
            if (this.settings.theme){
             this.schedulerContainer.classList.add(this.settings.theme);}
               //append template

            if (this.settings.template) {
                this.template=this.settings.template; 
            } else { this.template=new Template().svgString } 

            this.schedulerContainer.innerHTML = this.template;
            document.body.style.overflow='auto';
               //get svg element
            this.schedulerSVG=document.querySelector('#main-svg') as SVGSVGElement;
            const parser = new DOMParser();
            const svgIconsElement = parser.parseFromString(this.settings.icons, "image/svg+xml").documentElement;

            this.schedulerSVG.getElementById('defs').append(svgIconsElement);
            this.schedulerItems=document.getElementById('scheduler-items')!;
            this.splitBar=document.getElementById('scheduler-splitter')!;
            if (this.schedulerContainer!=null){
                if (this.schedulerSVG!=null){  
                    this.draw();
                    this.processData();
                    this.storeData();
                    this.schedulerSVG.addEventListener('mousemove', (event) => {
                        this.handleMouseMove(event);
                    });
                    this.schedulerSVG.addEventListener('mouseup', (event) => {
                        this.svgMouseUp(event);
                    });
                    this.schedulerSVG.addEventListener('drop', (event) => {
                        console.log(event.dataTransfer.getData('task'));
                        this.dropEventManagement(event);
                    });
                  
                    this.schedulerSVG.addEventListener('dragover', (event) => {
                        if ((event.target as HTMLElement).classList.contains('box-element')){
                            
                            event.preventDefault();
                           
                        }
                       
                    });
                    let scheduler=this;
                    document.addEventListener('keyup',(function(e) {
                        if (e.key === "Escape") { // escape key maps to keycode `27`
                        // <DO YOUR WORK HERE>
                            scheduler.escapePressed();
                        
                        }
                    }));
                    window.addEventListener('resize',(function(e) {
                    
                            scheduler.resized();
                        
                        
                    }));
                }
                else
                {
                    this.schedulerContainer.textContent = "Error: Template is null";
                    console.log('Error: Template is null');
                }
      
            }  
            else{
                    console.log('scheduler id is null or div');
            }
        }

    }
    private dropEventManagement(evt){
            console.log('drop management');
            console.log(evt);
            evt.stopImmediatePropagation();
           
    
            if (this.settings.dropEnable && evt.target.classList.contains('box-element'))
            {
    
                let y=parseFloat(evt.target.getAttribute('y'));
                let res=(y-this.headerHeight)/this.settings.resourceHeight;
                console.log('res:'+res);
               
                const strdata = evt.dataTransfer.getData("task");
               
                if (strdata!=undefined && strdata!='')
                {
                    let data=JSON.parse(strdata);

                    let dd = new Date(evt.target.getAttribute('data-date'));
                    //var testdate = new Date(dd.getFullYear() + '-' + (dd.getMonth() + 1) + '-' + dd.getDate());
                    let sd = this.settings.date;
                    //var testdate2 = new Date(sd.getFullYear() + '-' + (sd.getMonth() + 1) + '-' + sd.getDate());
                    let timespan = Math.trunc((dd.getTime() - sd.getTime()) / 1000 / 60);
                    
                   // let test = getModuloValue(dd.getTime(), 86400000);
                   
                   // timespan=getModuloValue(timespan,scheduler.settings.timeUnit);
                    
                    let resource=this.data.Resources[res];
                 
                    if (!resource.Items == null || resource.Items == undefined) resource.Items=[];

                    resource.Items?.forEach( (item)=> {
                        
                        let start = item.Offset;
                        let stop = item.Offset + item.Width;
                        if (timespan < stop && timespan >= start)
                            timespan = stop;
    
                    });
                    let link = '';
                    this.data.Resources.forEach(function (r,resource) {
                        resource.Items?.forEach(function (i, item) {
                            let guid ='link_'+ Math.floor(Math.random() * 10000000);
                            if (item.Text == data.text1 && item.Reference == data.ref && data.ref != '' && data.ref != undefined && data.text1 != '') {
                              
                                item.Link = guid;
                                item.Modified = true;
                                link = guid;
                            }
                        })
    
                    })
    
                    let ra = Math.floor(Math.random() * 10000000);
                    let dropped : any = {};

                    dropped.Id = '_temp_id_'+ra.toString();      
                    dropped.Text = data.text1;
                    dropped.Description = data.text2; 
                    dropped.Offset = timespan;
                    dropped.Width = parseInt(data.width);
                    dropped.Effort = dropped.Width;
                    dropped.Link = link;
                    dropped.IsNew = true;
                    dropped.Modified = true;
                    dropped.Color1 = data.color1;
                    dropped.Classes =  data.classes;
                    dropped.From=(sd.getTime()/1000/60)+timespan;
                    dropped.To=dropped.From+dropped.Width;
                    dropped.ForeignKey= data.key;
                    dropped.Reference = data.ref;
                    dropped.Pieces = data.pieces;

                    console.log(data);

                    if (resource.Items == undefined) {
                        var items = [];
                        resource.Items = items;
                    }
    
                    resource.Items.push(dropped);
                          
                    this.drawItem(dropped, res);
                    dropped.Effort = dropped.Width;

                    let scitem=new SchedulerItem2(this,dropped,this.calendar);
                   
                    scitem.Effort=dropped.Width;    

                    console.log(data.width);
                    if (typeof modified === 'function') modified();
                    if (data.elementId) document.getElementById(data.elementId)?.remove();
                }

            }
        
    }
    private resized(){
       
        this.ratio= this.schedulerSVG.viewBox.baseVal.width / this.schedulerSVG.clientWidth;
      
    }
    private draw(){
                this.settings.timeWidth=this.schedulerSVG.clientWidth/this.settings.timeUnitsView;
                let w = (this.settings.timeUnitsView * this.settings.timeWidth);
             
                 //header height calc
                this.headerHeight=this.settings.timeElementHeight+this.settings.monthBoxHeight;
   
                if (this.settings.viewWeeks)
                {
                    this.headerHeight+=this.settings.weekBoxHeight;
                }
                if (this.settings.viewInfoElements || this.settings.viewEvents)
                {
                    this.headerHeight+=this.settings.infoElementHeight;
                }
                
                 let h = ((this.data.Resources?.length ?? 0) * this.settings.resourceHeight) + this.headerHeight + this.settings.footerHeight;
                 if (this.settings.viewWeeks==true){
                    h+=this.settings.weekBoxHeight;
                 }
                
                 h+=5;
               
             
                  this.schedulerSVG.viewBox.baseVal.x=0;
                  this.schedulerSVG.viewBox.baseVal.y=0;
                  this.schedulerSVG.viewBox.baseVal.width=w/this.zoom;
                  this.schedulerSVG.viewBox.baseVal.height=h/this.zoom;
                // this.schedulerSVG.setAttribute('x','0');
                // this.schedulerSVG.setAttribute('y','0');
                // this.schedulerSVG.setAttribute('height',h.toString());
                // this.schedulerSVG.setAttribute('width','100%');
                this.ratio = this.schedulerSVG.viewBox.baseVal.width / this.schedulerSVG.clientWidth;

          
               this.resourceFilteredCount = 0;//this.filteredResources.length;
               if (this.settings.groupFilter != 0) {
                   this.resourceFilteredCount = this.data.Resources.filter(function(x) {
                       return x.group == this.settings.groupFilter;
                   }).length
               }
   
              
               
               this.drawHeader();
               this.drawMonths();
               this.drawWeeks();
               this.drawTimeUnits();
              
               this.drawBackGroud();
               this.drawEvents();
               this.drawInfoUnits();
               this.drawResBg();
              // this.drawSplitter();
               this.initSplitter();
              
               this.drawItems();
            
               this.drawResources();
            
               var that=this;
              
               this.splitBar.addEventListener('mousedown', function(event) {
                    that.splitterBarMouseDown(event);
                });
               if (this.settings.itemsLinks==true)
               {
                    this.initLinks();
                   
               }
               if (this.settings.drawLinks==true)
               {
                  
                    this.drawLinks();
               }

               if (this.settings.viewShifters == true) {
                    const cdx = document.getElementById("shifter-dx");
                    let step=this.settings.shifterStep;
                    let that=this;
                    if (cdx != null) {
                       
                        cdx.style.visibility='visible';
                        cdx.addEventListener('click', function() {
                            that.shift(-step);
                        });
                    }
                    const csx = document.getElementById("shifter-sx");

                    if (csx != null) {
                        csx.style.visibility='visible';
                        csx.addEventListener('click', function() {
                            that.shift(step);
                        });
                    }
               }
              
    }
    private svgMouseUp(event) {
       
        this.clearAction();

    }
    public removeItem(id:string){
      
            let scheduler=this;
            this.data.Resources?.forEach(function(resource) {
                       
                            resource.Items?.forEach(function(item){
                               
                                if (item.Id==id)
                                {
                                  
                                    item.Modified=true;
                                    item.Removed=true;
                                    scheduler.clearItems();
                                    scheduler.drawItems();
                                    return;
                                }
                            });
                       
                    });
    }

    private handleMouseMove(event) {
   
        this.mpos.x = event.pageX;
        this.mpos.y = event.pageY;
        
        let offsets = document.getElementById('scheduler')?.getBoundingClientRect() ??  {
            x: 0,
            y: 0
        };;

        this.schedulerMousePos.x= (this.mpos.x-offsets.x) * this.ratio;
        this.schedulerMousePos.y= (this.mpos.y-offsets.y) * this.ratio;
        
        const items = document.getElementById('scheduler-items');
        let transform=this.getTranslateValues(items);
    
        let mydate=this.settings.date;
           
        this.calendarMousePos.x=this.schedulerMousePos.x -transform.x - this.splitBarPos -100;
        this.calendarMousePos.y=this.schedulerMousePos.y -transform.y;                  
        this.calendarMousePos.timeOffset= this.calendarMousePos.x/this.settings.timeWidth;
        this.calendarMousePos.resourceIndex=Math.floor((this.calendarMousePos.y-this.headerHeight)/this.settings.resourceHeight);
        this.calendarMousePos.date= new Date(mydate.getTime()+(this.calendarMousePos.timeOffset*86400000) +(mydate.getTimezoneOffset() * 60000));
     
        if (this.action=='linking'){
            this.linkItem();
               
        }    
        else if (this.action=='moving'){
           this.moveItem();
          
        }              
        else if (this.action=='sizing'){
           this.resizeItem();
          
        }
        else if (this.action=='splitter'){
            this.splitArea();
           
         }


    }
    private escapePressed(){
       
        if (this.action=='moving'){
            this.element.setAttribute('x', this.element.getAttribute('data-x') ?? '0');
            this.element.setAttribute('y', this.element.getAttribute('data-y') ?? '0');
            this.element.querySelector('rect.item')?.classList.remove('moving');

        }else if (this.action=='sizing'){
            this.element.setAttribute('width', this.element.getAttribute('data-w') ?? '0');
            this.element.querySelector('rect.item')?.classList.remove('sizing');

        }else if (this.action=='linking'){
           
            this.resetLinkLine();
        }
        this.action='';
        
       
             
    }
    private getModulo(value:number, step:number, min?:number):number{
        const modulo = (value-(min ?? 0)) % step;
        const correction = modulo > step / 2 ? step - modulo : -modulo;
        let result = value + correction;
       
        result = min != null && result < min ? min : result;
        return result;
    }

  
    private moveItem() {
        var x = parseFloat(this.element.getAttribute('data-x') ?? '0');
        var y = parseFloat(this.element.getAttribute('data-y') ?? '0');
      
        let variationx = Math.round(((this.mpos.x - this.actionMemoPos.x) * this.ratio ) * 100) / 100;
        let variationy = Math.round(((this.mpos.y - this.actionMemoPos.y) * this.ratio ) * 100) / 100;
      
        let newx = x + (variationx );
        let newy = y + (variationy );
        this.schedulerItems.append( this.element);
        this.element.setAttribute('x', newx.toString());

        if (this.settings.resourceChange)
        {
            this.element.setAttribute('y', newy.toString());
        }
       
               
        let datalink=this.element.getAttribute('data-link');
        if ( datalink!=null){ 
           // this.updatePath(datalink);
        }
     
            
    }
    private linkItem() {
        const line=document.getElementById('link-line');
        line?.setAttribute('x1',this.linkPoint.x.toString());
        line?.setAttribute('y1',this.linkPoint.y.toString());
        line?.setAttribute('x2',this.calendarMousePos.x.toString());
        line?.setAttribute('y2',(this.calendarMousePos.y-3).toString());
       
    }
    private resizeItem() {
     
        let variationx = Math.round(((this.mpos.x - this.actionMemoPos.x) * this.ratio) * 100) / 100;
        let w = parseFloat(this.element.getAttribute('data-w') ?? '0');
        let neww = w + (variationx);
        this.schedulerItems.append( this.element);
       
        this.element.setAttribute('width', neww.toString() );
        let datalink=this.element.getAttribute('data-link');
        if ( datalink!=null){ 
               // this.updatePath(datalink);
        }
        
    }
    private splitArea(){
        const sidebar=document.getElementById('scheduler-sidebar');
      
        let w = parseFloat(sidebar.getAttribute('data-w') ?? '0');

        let variationw = Math.round(((this.mpos.x - this.actionMemoPos.x) * this.ratio) * 100) / 100;

        let neww = w + (variationw);

        if (neww>this.settings.sidebarMinWidth && neww<this.settings.sidebarMaxWidth)
            sidebar.setAttribute('width', neww.toString());

        //  let wrapper = document.getElementById('wrapper');
        //  wrapper?.setAttribute('transform','translate(' + neww.toString() + ',0)');
    }
    private getTranslateValues(element : HTMLElement | null)  {
        if (!element) {
            return { x: 0, y: 0, z: 0 };
          }
        const style = window.getComputedStyle(element);
    
        let transform = style.transform;
        if (transform==null) {
            transform='matrix(1,0,0,1,0,0)';
          }
        var m=transform.substring(7,transform.length-1);
        var values=m.split(',');
        var x=parseFloat(values[4]);
        var y=parseFloat(values[5]);


        if (transform === 'none' || typeof transform === 'undefined' || transform === null) {
            return {
                x: 0,
                y: 0,
                z: 0
            }
        }
    
       return {
                 x: x,
                 y: y,
                 z: 0
             }

    }
    private processData(){
       console.log('process data');
      
        if (!this.data.Resources) return;

        let date=this.settings.date;
        console.log('process data date:'+date);
        let scheduler=this;
        this.data.Resources?.forEach((resource, ri) => {
            if (resource.Items){
                resource.Items.forEach(function(item, ii) {
                    let from=(date.getTime()/60000)+(item.Offset);
                    let to=(date.getTime()/60000)+parseInt(((item.Offset+item.Width)));
                  
                    item.From=from;
                    item.To=to;
                  
                    if (scheduler.calendar!=null && scheduler.settings.calcEffort==true && item.Effort==undefined){
                       
                        let schedulerItem=new SchedulerItem2(scheduler,item,scheduler.calendar);
                        schedulerItem.From=from;
                        schedulerItem.Duration=to-from;
                      
                        // let effort=scheduler.calendar.calcEffort(schedulerItem);
                      
                        // item.Effort=effort;
                        // console.log('effort:'+item.Effort);
                    }
                  //  else item.Effort=item.Width;
                    
                })
            }
            
        });
    }
    private storeData() {

        if (this.settings.storeData) {

            localStorage.setItem('data', JSON.stringify(this.data));
        }
    }
    private drawBackGroud() {
        var parent = document.getElementById('scheduler-background');

        if (parent)
        {
            var h = (this.settings.resourceHeight * this.data.Resources.length);
            var w = (this.settings.timeUnitsCount * this.settings.timeWidth);
            var y = this.headerHeight;
            var x = 0;
            const background=document.createElementNS('http://www.w3.org/2000/svg', "rect");
            background.setAttribute('x','0');
            background.setAttribute('y',y.toString());
            background.setAttribute('width',w.toString());
            background.setAttribute('height',h.toString());
            background.setAttribute('transform','translate(0,0)');
            background.setAttribute('fill','white');
            background.classList.add('bg');
             
            parent.append(background);
         
            if (this.data.Resources){
               
                this.data.Resources.forEach((resource,ri)=>{
                    var ly = (ri * this.settings.resourceHeight) + this.headerHeight;
                    const line=document.createElementNS('http://www.w3.org/2000/svg', "line");
                    line.setAttribute('x1',x.toString());
                    line.setAttribute('x2',w.toString());
                    line.setAttribute('y1',ly.toString());
                    line.setAttribute('y2',ly.toString());
                    line.setAttribute('class', "bg-hl");
                    parent?.append(line);
                });

                let rcount = this.data.Resources.length;
                var today = new Date();
                for (let c = 0; c < this.settings.timeUnitsCount; c++) {
                    let hilight=false;
                    let dt = this.settings.date;
                    if (dt) {
        
                        let cdate = new Date(dt.getTime() + (c * this.settings.timeUnitVal*60*1000));
                        hilight = (cdate.getUTCDay() == 0) && this.settings.hilightSunday;
                        let saturday = (cdate.getUTCDay() == 6);
                        let ratio=1;
                        if (this.calendar!=null){
                            if (this.calendar.reference>0){
                             ratio=this.calendar.getCapacity((cdate.getTime()/60000)+10,cdate.getUTCDay())/this.calendar.reference;
                             if (saturday==true) {
                                console.log('saturday ratio:'+ratio);
                             }
                             if (ratio>1) ratio=1;
                             if (ratio<0) ratio=0;
                            
                            }
                        }
                       
                        ratio=1;
                        let ry = this.headerHeight;
                        let rx = (c * this.settings.timeWidth);
                        let rw = this.settings.timeWidth;
                        let rh = this.settings.resourceHeight*rcount;
                        const line=document.createElementNS('http://www.w3.org/2000/svg', "line");
                        line.setAttribute('x1',rx.toString());
                        line.setAttribute('x2',rx.toString());
                        line.setAttribute('y1',ry.toString());
                        line.setAttribute('y2',(ry+rh).toString());
                        line.setAttribute('class', "bg-vl");
                        parent?.append(line);

                        const box=document.createElementNS('http://www.w3.org/2000/svg', "rect");
                        box.setAttribute('x',rx.toString());
                        box.setAttribute('y',ry.toString());
                        box.setAttribute('width',rw.toString());
                        box.setAttribute('height',rh.toString());
                        box.setAttribute('data-date',cdate.toUTCString());
                        box.classList.add('daybox-element');
                        if (hilight == true) box.classList.add('sunday');
                        if (saturday==true) box.classList.add('saturday');
                        parent.append(line);
                        parent.append(box);
                        
                        for (let rr = 0; rr < rcount; rr++) {
                            ry = this.headerHeight + (rr * this.settings.resourceHeight);
                            rx = (c * this.settings.timeWidth);
                            rw = this.settings.timeWidth*ratio;
                            rh = this.settings.resourceHeight;
                            const rect=document.createElementNS('http://www.w3.org/2000/svg', "rect");
                            rect.setAttribute('x',rx.toString());
                            rect.setAttribute('y',ry.toString());
                            rect.setAttribute('width',rw.toString());
                            rect.setAttribute('height',rh.toString());
                            rect.setAttribute('data-date',cdate.toUTCString());
                            rect.setAttribute('data-res',this.data.Resources[rr].id);
                            rect.setAttribute('class','box-element');
                            rect.addEventListener('click',function(ev:MouseEvent){
                                if (typeof gridMouseClick == 'function'){
                                    gridMouseClick(ev, cdate);
                                }
                            });
                            let that=this;
                            rect.addEventListener('mouseover',function(ev:MouseEvent){
                            
                                if (typeof gridMouseOver == 'function'){
                                    var i=that.getSum(ev.target as SVGSVGElement);
                                    gridMouseOver(ev, i);
                                }
                            }); 
                            parent.append(rect);
            
                        }
                       
                    }
                }
            }
        }
    }
    
    public filterItems(filter:string){
            const items=document.querySelectorAll('.svg-item');
            items.forEach((item)=>{
            (item as HTMLElement).style.opacity = '1';
            item.classList.remove('selected');
            let filterlower=filter.toLowerCase();
            if (filterlower != '') {
                let data= item.querySelector('text');
                console.log(data);
                let ref = item.getAttribute('data-ref');
                let key = item.getAttribute('data-key');
                let show=true;
       
                if (data!=undefined){
                   // show=data.toLowerCase().startsWith(filterlower);
                } else show = false;
       
                if (key != undefined) {
                    show = show || key.toLowerCase().startsWith(filterlower);
                };
       
                if (ref!=undefined){
                    show=show || ref.toLowerCase().startsWith(filterlower);
                }
                if (show) {
                    (item as HTMLElement).style.opacity = '1';
                    item.classList.add('selected');
                }
                else {
                    (item as HTMLElement).style.opacity = '0.2';
                    item.classList.remove('selected');
                }
            }
       
       
        });
    }
    private drawResBg() {

        let parent = document.getElementById('scheduler-resources');
        const resources = this.data.Resources || [];
        let h = this.settings.resourceHeight * resources.length;
        let w = this.settings.resourceWidth;
        let y = this.headerHeight;
        let x = 0;
        let clip = document.getElementById('clip-res');
 
        if (clip==null)
        {
            let clip=document.createElementNS('http://www.w3.org/2000/svg','clipPath');
            clip.setAttribute('id','clip-res');
            const box=document.createElementNS('http://www.w3.org/2000/svg', "rect");
            box.setAttribute('x',x.toString());
            box.setAttribute('y',y.toString());
            box.setAttribute('width','100%');
            box.setAttribute('height','100%');
            box.setAttribute('id','clip-res-rect');
            clip.append(box);
            parent?.append(clip);
        }
       

        const rect=document.createElementNS('http://www.w3.org/2000/svg', "rect");
        rect.setAttribute('x',x.toString());
        rect.setAttribute('y',y.toString());
        rect.setAttribute('width','100%');
        rect.setAttribute('height','100%');
        rect.setAttribute('class','sb-rbg');
        rect.setAttribute('fill','transparent');
        rect.setAttribute('clip-path', 'Url(#clip-res)');

        parent?.append(rect);

        h = this.headerHeight;
        w = this.settings.resourceWidth;
        y = 0;
        x = 0;


        const svg=document.createElementNS('http://www.w3.org/2000/svg', "svg");
        svg.setAttribute('x',x.toString());
        svg.setAttribute('y',y.toString());
        svg.setAttribute('width','100%');
        svg.setAttribute('height',h.toString());
        svg.setAttribute('class','sb-hbg');

        const elem=document.createElementNS('http://www.w3.org/2000/svg', "rect");
        elem.setAttribute('x',x.toString());
        elem.setAttribute('y',y.toString());
        elem.setAttribute('width','100%');
        elem.setAttribute('height',h.toString());
        elem.setAttribute('class','sb-hbg');


        const text=document.createElementNS('http://www.w3.org/2000/svg', "text");
        text.setAttribute('x',(x+2).toString());
        text.setAttribute('y',(y-2).toString());
        text.setAttribute('class','resource-header-text');
        text.innerHTML=this.settings.resHeaderText;
        elem.append(text);
        svg.append(elem);
       
       
        parent?.append(svg);



    }
    
    private initSplitter() {
        let splitbarpos = parseFloat(localStorage.getItem('splitbarpos') ?? '0');
        splitbarpos=this.settings.splitBarinitPos;
       
        let sh = (this.settings.resourceHeight * this.data.Resources.length) + this.headerHeight;
        let sw = this.settings.splitterWidth;
        let sy = 0;
        let sx = splitbarpos;
       
        let wrapper = document.getElementById('wrapper');
      //  wrapper?.setAttribute('transform','translate(' + (splitbarpos+sw+0.2) + ',0)');
     
        let splitter = document.getElementById('scheduler-splitter');
        // const toggledx = document.querySelector('.toggle-dx');
        // const togglesx = document.querySelector('.toggle-sx');
        // toggledx.setAttribute('cy',this.headerHeight.toString());
        // togglesx.setAttribute('cy',this.headerHeight.toString());
        // let that=this;
        // toggledx.addEventListener('click', function(){
        //     that.setSplitBarPos(that.settings.sidebarMaxWidth)
        // });
        // togglesx.addEventListener('click',  function(){
        //     that.setSplitBarPos(that.settings.sidebarMinWidth)
        // });
      
        
     
        
        if (splitter) this.splitBar=splitter;
        const sidebar = document.getElementById('scheduler-sidebar');
        sidebar.setAttribute('width',sx.toString());
 
        // splitter.addEventListener('mousedown', function(event) {
        //     that.splitterBarMouseDown(event);
        // });
        // splitter.addEventListener('mouseup', function(event) {
        //     that.splitterBarMouseUp(event);
        // });
     
      

        


    }
    private drawResources() {
        const sidebar = document.getElementById('scheduler-sidebar');
        const resources = document.getElementById('scheduler-resources');
        let h = this.headerHeight;
        let w = (this.settings.timeUnitsCount * this.settings.timeWidth);
        let y = 0;
        let x = 0;
        let splitbarpos = parseFloat(localStorage.getItem('splitbarpos') ?? '0');
        if (splitbarpos != null) {
            if ((splitbarpos > this.settings.resourceWidth) || (splitbarpos < this.settings.resCollapsedWidth)) splitbarpos = this.settings.resourceWidth;
        } else {
            splitbarpos = this.settings.resourceWidth;
        }
        sidebar?.setAttribute('width', splitbarpos.toString());
      

        var count = 0;
        if (this.data.Resources)
        {
            //get text lenght
            this.data.Resources.forEach((resource, ri)=>{

            });
            this.data.Resources.forEach((resource, ri)=>{
                let y = (count * this.settings.resourceHeight) + this.headerHeight;
                let ty = ((count + 1) * this.settings.resourceHeight) + this.headerHeight - 2;
                let x = 1;
                const rsvg=document.createElementNS('http://www.w3.org/2000/svg','svg');
                rsvg.setAttribute('x','0');
                rsvg.setAttribute('y',y.toString());
                rsvg.setAttribute('width','100%');
                rsvg.setAttribute('height',this.settings.resourceHeight.toString());
                rsvg.setAttribute('font-size',this.settings.resourceHeight.toString());

                let clipid='clip-res-'+Math.floor(Math.random() * 10000000);
                const clip=document.createElementNS('http://www.w3.org/2000/svg','clipPath');
                clip.setAttribute('x','0');
                clip.setAttribute('y','0');
                clip.setAttribute('width','100%');
                clip.setAttribute('height','100%');
                clip.setAttribute('id',clipid);
            
             
                const rect=document.createElementNS('http://www.w3.org/2000/svg','rect');
                rect.setAttribute('x','0');
                rect.setAttribute('y','0');
                rect.setAttribute('width','100%');
                rect.setAttribute('height','100%');           
               

                clip.append(rect);
                rsvg?.append(clip);

                const res=document.createElementNS('http://www.w3.org/2000/svg','rect');
                res.setAttribute('x','0');
                res.setAttribute('y',this.settings.resPadding.toString());
                res.setAttribute('width','100%');
                res.setAttribute('height','calc(100% - ' + (this.settings.resPadding * 2).toString()+'px)');  
                res.setAttribute('id',resource.Id.toString());         
                res.setAttribute('class','resource');
              
                if (resource.Classes) {
                    resource.Classes.split(' ').forEach((c)=>{
                        if (c!='') res.classList.add(c);
                    });
                }
               

                res.setAttribute('clip-path','Url(#'+clipid+')');

                if (this.settings.resRoundRect>0)  res.setAttribute('rx',this.settings.resRoundRect.toString());
               
                res.addEventListener('click',(event: MouseEvent) => {
                    this.resourceClick(event, { resource: resource });
                    if (typeof resourceClick === 'function') {
                        resourceClick(event, resource);
                    }
                });
                rsvg?.append(res);

                x=2;

                if (resource.Image && this.settings.resourceImages)
                {
                    let imgdim=this.settings.resourceHeight*0.8;
                    let imgspace=this.settings.resourceHeight*0.1;
                  
                    let clipid='clip-'+Math.floor(Math.random() * 10000000);
                    const imgsvg=document.createElementNS('http://www.w3.org/2000/svg','svg');
                    imgsvg.setAttribute('x',x.toString());
                    imgsvg.setAttribute('y','10%');
                    imgsvg.setAttribute('height',imgdim.toString());
                    imgsvg.setAttribute('width',imgdim.toString());
                    imgsvg.setAttribute('class','resource-image');

                    const circle=document.createElementNS('http://www.w3.org/2000/svg','circle');
                    circle.setAttribute('cx',(imgdim/2).toString());
                    circle.setAttribute('cy','50%');
                    circle.setAttribute('r',(imgdim/2).toString());
                    const clip=document.createElementNS('http://www.w3.org/2000/svg','clipPath');
                    clip.setAttribute('id',clipid);
                    clip.append(circle);
                    imgsvg.append(clip);
                  


                    const rimage=document.createElementNS('http://www.w3.org/2000/svg','image');
                    rimage.setAttribute('x','0');
                    rimage.setAttribute('y','0');
                    rimage.setAttribute('width','100%');
                    rimage.setAttribute('height','100%'); 
                    rimage.setAttribute('href',resource.Image ?? '');
                    rimage.setAttribute('clip-path','Url(#'+clipid+')');
                    rimage.setAttribute('class','resource-image');
                    imgsvg?.append(rimage);

                    rsvg.append(imgsvg);
                    x+=imgdim+imgspace;
                }
                
                const restext=document.createElementNS('http://www.w3.org/2000/svg','text');
                restext.setAttribute('x',x.toString());
                restext.setAttribute('y','55%');
                restext.setAttribute('class',"resource-text");
                restext.setAttribute('font-size',"35%");
                restext.setAttribute('dominant-baseline','middle');
                
                restext.setAttribute('clip-path', 'Url(#'+clipid+')');
                restext.innerHTML=resource.Name;
                restext.addEventListener('click',(event: MouseEvent) => {
                    this.resourceClick(event, { resource: resource });
                    if (typeof resourceClick === 'function') {
                        resourceClick(event, { resource: resource });
                    }
                });
                resources.append(rsvg);
                rsvg?.append(restext);
                x+=restext.getBBox().width+6;
                let icndim=this.settings.resourceHeight*0.4;
                let halficn=icndim/2;
            
                resource.Icons?.forEach((icon,ii)=>{
                    if (icon.Name)
                    {
                        const use=document.createElementNS('http://www.w3.org/2000/svg','use');
                        use.setAttribute('href','#'+icon.Name);
                        use.setAttribute('x',x.toString());
                        use.setAttribute('y','calc(50% - '+halficn.toString()+'px)');
                        use.setAttribute('height',icndim.toString());
                        use.setAttribute('width',icndim.toString());
                        use.setAttribute('class','resource-icon');
                        if (icon.Classes) use.setAttribute('class','resource-icon '+icon.Classes);
                        rsvg.append(use);
                        x+=icndim+4;
                    }
                    
                });
                
                

                
               
                count++;
            });
        }

    }
  
    private drawInfoUnits(){
        if (this.settings.viewInfoElements)
        {

        
            let parent = document.getElementById('scheduler-header');
                   
            let dt = this.settings.date;
         

          
            if (dt) {

              
                let increment=60*1000*this.settings.timeUnitVal; //one day = 864000000
                          
                for (let i = 0; i < this.settings.timeUnitsCount; i++) {
            
                  
                    let cdate = new Date(dt.getTime() + (i * increment));

                    let shift=0;

                    this.data.Calendar.Exceptions.forEach(element =>{
                        let dtfrom=new Date(element.DateFrom);
                      
                        let dtto=new Date(element.DateTo);
                        dtto=new Date(dtto.getTime()+(60*1000*1440));
                        if (cdate>=dtfrom && cdate<=dtto)
                        {                         
                            if ((element.Day>-1)&& (element.Day<7) && cdate.getDay()==element.Day){
                               
                                if (element.Capacity==480)  shift=1;
                                if (element.Capacity==960)  shift=2;
                                if (element.Capacity==1440)  shift=3;
                            }
                            if (element.Day==-1){
                                if (element.Capacity==-2)  shift=-2;
                                if (element.Capacity==-1)  shift=-1;
                                if (element.Capacity==0)  shift=-1;
                                if (element.Capacity==480)  shift=1;
                                if (element.Capacity==960)  shift=2;
                                if (element.Capacity==1440)  shift=3;
                               
                            }
                        }
                       
                    })
  
                    let h = this.settings.infoElementHeight;
                    let w = this.settings.timeWidth;
                    let y = this.headerHeight - this.settings.timeElementHeight-this.settings.infoElementHeight;
                    let x = (i * this.settings.timeWidth);
                   

                    const elem=document.createElementNS('http://www.w3.org/2000/svg', "rect");
                    elem.setAttribute('x',x.toString());
                    elem.setAttribute('y',y.toString());
                    elem.setAttribute('width',w.toString());
                    elem.setAttribute('height',h.toString());
                    elem.setAttribute('fill','transparent');
                    elem.classList.add('info-element');
                    
                   
                    parent.append(elem);

                    let feriale=cdate.getDay()!=0 && cdate.getDay()!=6 && shift>=0;


                    if (((feriale)||(shift>0))){

                            const shiftssvg=document.createElementNS('http://www.w3.org/2000/svg', "svg");
                            shiftssvg.setAttribute('x',(x+2).toString());
                            shiftssvg.setAttribute('y',(y+1).toString());
                            shiftssvg.setAttribute('width','40');
                            shiftssvg.setAttribute('height',(h-2).toString());
                            shiftssvg.setAttribute('viewBox','0 0 300 100');
                            shiftssvg.setAttribute('preserveAspectRatio','none');
                            shiftssvg.classList.add('shift-info');
                         
                            const poly1=document.createElementNS('http://www.w3.org/2000/svg', "polygon");
                            poly1.setAttribute('points','50,0 0,100 100,100 50,0');
                            poly1.setAttribute('stroke','black');
                            poly1.setAttribute('fill','transparent');
                            poly1.setAttribute('opacity','0.5');
                            poly1.setAttribute('stroke-width','3');

                            const poly2=document.createElementNS('http://www.w3.org/2000/svg', "polygon");
                            poly2.setAttribute('points','150,0 100,100 200,100 150,0');
                            poly2.setAttribute('stroke','black');
                            poly2.setAttribute('fill','transparent');
                            poly2.setAttribute('opacity','0.5');
                            poly2.setAttribute('stroke-width','3');

                            const poly3=document.createElementNS('http://www.w3.org/2000/svg', "polygon");
                            poly3.setAttribute('points','250,0 200,100 300,100 250,0');
                            poly3.setAttribute('stroke','black');
                            poly3.setAttribute('fill','transparent');
                            poly3.setAttribute('opacity','0.5');
                            poly3.setAttribute('stroke-width','3');
                          
                           
                            if (((feriale)&&(shift==0))||shift==1){
                                poly1.setAttribute('fill','#364A6E');
                                if (shift>=1)  poly1.setAttribute('fill','#b12531');
                               
                            }
                            if (((feriale)&&(shift==0))||shift==2){
                                poly2.setAttribute('fill','#364A6E');
                                if (shift>=2) poly2.setAttribute('fill','#b12531');
                               
                            }
                            if (shift==3){
                                poly3.setAttribute('fill','#b12531');
                              //  if (shift>=2) $(poly2).attr('fill','#b12531');
                            }
                            shiftssvg.append(poly1);
                            shiftssvg.append(poly2);
                            shiftssvg.append(poly3);

                            parent.append(shiftssvg);
                        }
                        
                    
                   

                  

                }


            }
        }
    }

    public refreshItems(){
        this.clearItems();
        this.drawItems();
        this.drawLinks();
    }
    public hideItems(){
        this.schedulerItems.querySelectorAll('.svg-item').forEach((item)=>{
            (item as HTMLElement).style.display='none';
        });
        this.schedulerItems.querySelectorAll('.link').forEach((item)=>{
            (item as HTMLElement).style.display='none';
        });
    }
    public showItems(){
        this.schedulerItems.querySelectorAll('.svg-item').forEach((item)=>{
            (item as HTMLElement).style.display='block';
        });
        this.schedulerItems.querySelectorAll('.link').forEach((item)=>{
            (item as HTMLElement).style.display='block';
        });
    }
    private clearItems(){
        this.schedulerItems.querySelectorAll('.svg-item').forEach((item)=>{
            item.remove();
        });
        this.schedulerItems.querySelectorAll('.link').forEach((link)=>{
            link.remove();
        });
    }
    private drawItems() {

       
        var count = 0;
        var that = this;
        if (this.data.Resources)
        {
           
            this.data.Resources.forEach((resource, ri)=>{
                if (resource.Items)
                {
                    resource.Items.forEach((item, ii)=>{
                        this.drawItem(item, ri);

                    });
                }

            });
        }
      
    }

    private drawItem(item:any, ri:number){    
            if (!item.Removed==true) 
            {
                let guid=Math.floor(Math.random() * 10000000);
                let maskid='mask-'+guid;
                let clipid='clip-'+guid;
                let nopadding=item.Classes?.includes('nopadding') ?? false;
                let arrow=(this.settings.gStyle === 'arrow' || (item.Classes?.includes('arrow') ?? false));
                let gantt=false;
                let mask=arrow||gantt;
                let roundrect=(this.settings.gStyle === 'round-rect' || (item.Classes?.includes('round-rect') ?? false)) ;
                let circle=(this.settings.gStyle === 'circle' || (item.Classes?.includes('circle') ?? false));    
                let h = this.settings.resourceHeight;       
                let y = (ri * this.settings.resourceHeight) + this.headerHeight;        
                let padding=0;
                if (!nopadding) padding=this.settings.itemsPadding;
               
                let height='calc(100% - '+(padding*2)+'px)';

                let x = (item.Offset * this.settings.timeWidth)/this.settings.timeUnitVal;
                let w = (item.Width * this.settings.timeWidth)/this.settings.timeUnitVal;

                const ItemSVG=document.createElementNS('http://www.w3.org/2000/svg','svg');
                ItemSVG.setAttribute('id',item.Id.toString());
                ItemSVG.setAttribute('x',x.toString());
                ItemSVG.setAttribute('y',y.toString());
                ItemSVG.setAttribute('width',w.toString());
                ItemSVG.setAttribute('height',h.toString());
                ItemSVG.setAttribute('font-size',h.toString());
                let classes='svg-item';
                if (this.settings.canMoveItems && !(item.Classes?.includes('no-drag') ?? false)) classes+=' draggable';
                if (this.settings.canResizeItems && (!(item.Classes?.includes('no-resize') ?? false))) classes+=' sizable';
                ItemSVG.setAttribute('class', classes);
                ItemSVG.setAttribute('data-id',item.Id.toString());
                ItemSVG.setAttribute('data-res',ri.toString());
                ItemSVG.setAttribute('data-ref',item.Reference ?? '');
              
                const itemrect=document.createElementNS('http://www.w3.org/2000/svg','rect');
                itemrect.setAttribute('x','0');
                itemrect.setAttribute('y',padding.toString());
                itemrect.setAttribute('width','100%');
                itemrect.setAttribute('height',height);
                itemrect.style.transition='0.1';
                itemrect.setAttribute('stroke','transparent');
                itemrect.setAttribute('stroke-width','0.2');     
                itemrect.classList.add('item');
               
               
                item.Classes?.split(' ').forEach((c)=>{
                    if (c) itemrect.classList.add(c);
                });
                if (roundrect && !nopadding) {
                    itemrect.setAttribute('rx',this.settings.roundRectRadius.toString());
                }
                if (circle){
                    itemrect.setAttribute('rx',(h/2).toString());
                }
                if (typeof item.Color1 !== "undefined") {
                    if (item.Color1 !== "" && item.Color1 !== null) {
                        itemrect.classList.add('custom-color');
                        itemrect.setAttribute('fill',item.Color1);
                    }  
                }                          
                if (typeof item.Color2 !== "undefined") {
                    if (item.Color2 !== "" && item.Color2 !== null) {
                        itemrect.setAttribute('stroke',item.Color2);
                      
                    }
                }

                const cliprect=itemrect.cloneNode(false) as HTMLElement;
                cliprect.classList.value='';
                const clip=document.createElementNS('http://www.w3.org/2000/svg','clipPath');
             
                clip.setAttribute('id',clipid);
                clip.append(cliprect);
                ItemSVG.append(clip);

                ItemSVG.append(itemrect);
                let imgdim=this.settings.resourceHeight*0.35;
                let imgspace=this.settings.resourceHeight*0.1;
                let imgX=imgspace;

                item.Icons?.forEach((icon,ii)=>{
                    if (icon.Name){                  
                        const use=document.createElementNS('http://www.w3.org/2000/svg','use');
                        
                        use.setAttribute('href','#'+icon.Name);
                        use?.setAttribute('x',imgX.toString());
                        use?.setAttribute('y','50%');
                        use?.setAttribute('height',imgdim.toString());
                        use?.setAttribute('width',imgdim.toString());
                        use?.setAttribute('class','item-icon');
                        if (icon.Classes) use?.setAttribute('class','item-icon '+icon.Classes);
                        ItemSVG.append(use);
        
                        imgX+=imgdim+imgspace;   
                    }  
                  
                });
            
                if (this.settings.progressBar==true) {
                    if ((item.Completion != null) && (item.Completion!=undefined)){
                        const progressGroup=document.createElementNS('http://www.w3.org/2000/svg','g');
                        progressGroup.setAttribute('class','progressbar');
                        const pback=document.createElementNS('http://www.w3.org/2000/svg','rect');
                        pback.setAttribute('x','0');
                        pback.setAttribute('y','80%');
                        pback.setAttribute('width','100%');
                        pback.setAttribute('height','calc(20% - '+padding.toString()+'px)');
                        pback.setAttribute('class','progress-back');
                        pback.setAttribute('fill','white');
                        pback.setAttribute('opacity','0.2');
                        pback.setAttribute('clip-path','url(#'+clipid+')');
                        if (mask)   pback.setAttribute('mask','url(#'+maskid+')');
                        progressGroup.append(pback);

                        if ((item.Completion > 0) && (item.Completion <= 100)) {
                            var pbfill = 'black';
                            if (this.settings.progressBarAnimation == true && item.Completion<100)
                                pbfill = 'url(#progress-pattern)'; 
                            var completion = 0;
                            completion = item.Completion;
                            const pbar=document.createElementNS('http://www.w3.org/2000/svg','rect');
                            pbar.setAttribute('x','0');
                            pbar.setAttribute('y','80%');
                            pbar.setAttribute('width','calc('+completion + '%)');
                            pbar.setAttribute('height','calc(20% - '+padding.toString()+'px)');
                            pbar.setAttribute('class','progress-bar');
                            pbar.setAttribute('fill',pbfill);
                            pbar.setAttribute('opacity','0.3');
                            pbar.setAttribute('clip-path','url(#'+clipid+')');
                            if (mask)  pbar.setAttribute('mask','url(#'+maskid+')');
                            progressGroup.append(pbar);
                        }
                        ItemSVG.append(progressGroup);
                    }
                }

                if (this.settings.canResizeItems==true) {
                   
                    //  const resgroup=document.createElementNS('http://www.w3.org/2000/svg','g');
                    //  resgroup.setAttribute('class','resize-area');
                   

                    const resize=document.createElementNS('http://www.w3.org/2000/svg','rect');
                    resize.setAttribute('x','calc(100% - 10px)');
                    resize.setAttribute('y','0');
                    resize.setAttribute('width','10');
                    resize.setAttribute('height','100%');
                    resize.setAttribute('class','resize');
                    resize.setAttribute('fill','transparent');
                    resize.style.cursor='ew-resize';

                    let l1y1='15%';
                    let l2y1='15%';
                    let l1y2='85%';
                    let l2y2='85%';
                    if (arrow) {
                        l1y1='45%';
                        l2y1='38%';
                        l1y2='55%';
                        l2y2='62%';
                    }
                    const line1=document.createElementNS('http://www.w3.org/2000/svg','line');
                    line1.setAttribute('x1','calc(100% - 4px)');
                    line1.setAttribute('x2','calc(100% - 4px)');
                    line1.setAttribute('y1',l1y1);
                    line1.setAttribute('y2',l1y2);
                    line1.setAttribute('class','resize-line');
                    line1.setAttribute('stroke-width','1');
                    line1.setAttribute('stroke','white');
                    const line2=document.createElementNS('http://www.w3.org/2000/svg','line');
                    line2.setAttribute('x1','calc(100% - 6px)');
                    line2.setAttribute('x2','calc(100% - 6px)');
                    line2.setAttribute('y1',l2y1);
                    line2.setAttribute('y2',l2y2);
                    line2.setAttribute('class','resize-line');
                    line2.setAttribute('stroke-width','1');
                    line2.setAttribute('stroke','white');

                   
                    ItemSVG.append(line1);
                    ItemSVG.append(line2);
                    ItemSVG.append(resize);
                    // ItemSVG.append(resgroup);
                }

                if (item.ViewInfo==true) {
                    let mysize=this.settings.infoElementSize;
                    
                    let info;
                    if (arrow){
                        info=document.createElementNS('http://www.w3.org/2000/svg','rect');
                        info.setAttribute('x','0');
                        info.setAttribute('y','0');
                        info.setAttribute('width',mysize.toString());
                        info.setAttribute('height',mysize.toString());
                        info.setAttribute('mask','url(#'+maskid+')');
                    }
                    else {
                        info=document.createElementNS('http://www.w3.org/2000/svg','polygon');
                        info.setAttribute('points','0,0 0,'+mysize.toString()+' '+mysize.toString()+',0 0,0');
                    }
               
                    info.setAttribute('fill','black');
                    info.setAttribute('opacity','0.5');
                    info.setAttribute('class','additional-info');
                    info.setAttribute('clip-path','url(#'+clipid+')');
  
                    ItemSVG.append(info);
             

                }

                if (this.settings.itemsText) {  
                    let x=4;
                    if (arrow) x+=(h/2);
                    const itemtext=document.createElementNS('http://www.w3.org/2000/svg','text');
                    itemtext.setAttribute('x',x.toString());
                    itemtext.setAttribute('y','15%');
                    itemtext.setAttribute('font-size','30%');
                    itemtext.setAttribute('dominant-baseline','hanging');
                    itemtext.setAttribute('class','item-text');
                   
                   
                   
                    itemtext.setAttribute('clip-path','url(#'+clipid+')');
                    itemtext.innerHTML=item.Text ?? '';
                    ItemSVG.append(itemtext);
                       
                    const itemtext2=document.createElementNS('http://www.w3.org/2000/svg','text');
                    itemtext2.setAttribute('x',x.toString());
                    itemtext2.setAttribute('y','50%');
                    itemtext2.setAttribute('font-size','25%');
                    itemtext2.setAttribute('dominant-baseline','hanging');

                    itemtext2.setAttribute('class','item-text2');
                   
                
                    itemtext2.setAttribute('clip-path','url(#'+clipid+')');
                    itemtext2.innerHTML=item.Description ?? '';
                    ItemSVG.append(itemtext2);
                }
                if (arrow) {
                   
                    const mask=document.createElementNS('http://www.w3.org/2000/svg','mask');
                    mask.setAttribute('id',maskid);
                    const maskrect=document.createElementNS('http://www.w3.org/2000/svg','rect');
                    maskrect.setAttribute('x','0');
                    maskrect.setAttribute('y','0');
                    maskrect.setAttribute('width','calc(100% - '+h/2+'px)');
                    maskrect.setAttribute('height','100%');
                    maskrect.setAttribute('fill','white');
                    const square1=document.createElementNS('http://www.w3.org/2000/svg','rect');
                    square1.setAttribute('x','calc(100%)');
                    square1.setAttribute('y',(h/2).toString());
                    square1.setAttribute('width',h.toString());
                    square1.setAttribute('height','100%');
                    square1.setAttribute('fill','white');
                    square1.setAttribute('transform','rotate(135)');
                    square1.setAttribute('transform-origin','calc(100%) calc(50%)');
                    const square2=document.createElementNS('http://www.w3.org/2000/svg','rect');
                    square2.setAttribute('x',(-h/2).toString());
                    square2.setAttribute('y',(h/2).toString());
                    square2.setAttribute('width',h.toString());
                    square2.setAttribute('height',h.toString());
                    square2.setAttribute('fill','black');
                    square2.setAttribute('transform','rotate(45)');
                    square2.setAttribute('transform-origin',h/2+' '+h/2);
                    mask.append(maskrect);
                    mask.append(square1);
                    mask.append(square2);
                    itemrect.setAttribute('mask','url(#'+maskid+')');
                    ItemSVG.append(mask);
                }
               
                if (gantt) {
                   
                    const mask=document.createElementNS('http://www.w3.org/2000/svg','mask');
                    mask.setAttribute('id',maskid);
                    const maskrect=document.createElementNS('http://www.w3.org/2000/svg','rect');
                    maskrect.setAttribute('x','0');
                    maskrect.setAttribute('y','0');
                    maskrect.setAttribute('width','100%');
                    maskrect.setAttribute('height','100%');
                    maskrect.setAttribute('fill','white');
                    const maskrect2=document.createElementNS('http://www.w3.org/2000/svg','rect');
                    maskrect2.setAttribute('x','20');
                    maskrect2.setAttribute('y','calc(100% - 20px)');
                    maskrect2.setAttribute('width','calc(100% - 40px)');
                    maskrect2.setAttribute('height','20');
                    maskrect2.setAttribute('fill','black');
                    const maskrect3=document.createElementNS('http://www.w3.org/2000/svg','rect');
                    maskrect3.setAttribute('x','20');
                    maskrect3.setAttribute('y','calc(100% - 20px)');
                    maskrect3.setAttribute('width','40');
                    maskrect3.setAttribute('height','40');
                    maskrect3.setAttribute('fill','black');
                    maskrect3.setAttribute('transform','rotate(50)');
                    maskrect3.setAttribute('transform-origin','20 calc(100% - 20px)');
                    const maskrect4=document.createElementNS('http://www.w3.org/2000/svg','rect');
                    maskrect4.setAttribute('x','calc(100% - 20px)');
                    maskrect4.setAttribute('y','calc(100% - 20px)');
                    maskrect4.setAttribute('width','40');
                    maskrect4.setAttribute('height','40');
                    maskrect4.setAttribute('fill','black');
                    maskrect4.setAttribute('transform','rotate(40)');
                    maskrect4.setAttribute('transform-origin','calc(100% - 20px) calc(100% - 20px)');
                  
                 
                    mask.append(maskrect);
                    mask.append(maskrect2);
                    mask.append(maskrect3);
                    mask.append(maskrect4);
                 
                    
                    ItemSVG.append(mask);
                    itemrect.setAttribute('mask','url(#'+maskid+')');
                }
                let that=this;
                ItemSVG.addEventListener('mousedown', function(event: MouseEvent) {
                    that.itemMouseDown(event, { item: item, element: this})
                    
                    });
                ItemSVG.addEventListener('mouseup', function(event: MouseEvent) {
                    that.itemMouseUp(event, { item: item, element: this})

                });
                ItemSVG.addEventListener('click', function(event: MouseEvent) {
                    that.itemClick(event, { item: item, element: this});
                    if (typeof taskClick === 'function') { taskClick(event, item); };
                });
                ItemSVG.addEventListener('mouseenter', function(event: MouseEvent) {
                    
                    that.itemOver(event, { item: item })
                });
                ItemSVG.addEventListener('mouseleave', function(event: MouseEvent) {
                 
                    that.itemOut(event, { item: item, element: this})
                });
                ItemSVG.addEventListener('drop', function(event: MouseEvent) {
                    that.dropOnElement(event, { item: item, element: this})
                });
                ItemSVG.addEventListener('dragover', function(event: MouseEvent) {
                    that.dragOverElement(event, { item: item, element: this})
                });
             
                this.schedulerItems.append(ItemSVG);
                  

            }
    

    }
    private initLinks(){
        if (this.settings.itemsLinks == true) {
            
            this.itemConnPoint1=document.createElementNS('http://www.w3.org/2000/svg', "circle");
            this.itemConnPoint1.setAttribute('cx','0');
            this.itemConnPoint1.setAttribute('cx','0');
            this.itemConnPoint1.setAttribute('cy','0');
            this.itemConnPoint1.setAttribute('r','5');
            this.itemConnPoint1.setAttribute('fill','white');
            this.itemConnPoint1.setAttribute('stroke','#00ff00');
            this.itemConnPoint1.setAttribute('class','c1 link-point');
            this.itemConnPoint1.setAttribute('stroke-width','1');
           
            this.itemConnPoint2=document.createElementNS('http://www.w3.org/2000/svg', "circle");
            this.itemConnPoint2.setAttribute('cx','0');
            this.itemConnPoint2.setAttribute('cy','0');
            this.itemConnPoint2.setAttribute('r','5');
            this.itemConnPoint2.setAttribute('fill','white');
            this.itemConnPoint2.setAttribute('stroke','#00ff00');
            this.itemConnPoint2.setAttribute('class','c2 link-point');
            this.itemConnPoint2.setAttribute('stroke-width','1');
            this.itemConnPoint3=document.createElementNS('http://www.w3.org/2000/svg', "circle");
            this.itemConnPoint3.setAttribute('cx','0');
            this.itemConnPoint3.setAttribute('cy','0');
            this.itemConnPoint3.setAttribute('r','5');
            this.itemConnPoint3.setAttribute('fill','white');
            this.itemConnPoint3.setAttribute('stroke','#00ff00');
            this.itemConnPoint3.setAttribute('class','c3 link-point');
            this.itemConnPoint3.setAttribute('stroke-width','1');
            this.itemConnPoint4=document.createElementNS('http://www.w3.org/2000/svg', "circle");
            this.itemConnPoint4.setAttribute('cx','0');
            this.itemConnPoint4.setAttribute('cy','0');
            this.itemConnPoint4.setAttribute('r','5');
            this.itemConnPoint4.setAttribute('fill','white');
            this.itemConnPoint4.setAttribute('stroke','#00ff00');
            this.itemConnPoint4.setAttribute('class','c4 link-point');
            this.itemConnPoint4.setAttribute('stroke-width','1');
            this.connLine=document.createElementNS('http://www.w3.org/2000/svg', "line");
            this.connLine.setAttribute('x1','0');
            this.connLine.setAttribute('y1','0');
            this.connLine.setAttribute('x2','0');
            this.connLine.setAttribute('y2','0');
            this.connLine.setAttribute('stroke-width','1');
            this.connLine.setAttribute('id','link-line');
            this.connLine.setAttribute('stroke','#00ff00');
            this.schedulerItems?.append(this.connLine);
            this.schedulerItems?.append( this.itemConnPoint1);
            this.schedulerItems?.append( this.itemConnPoint2);
            this.schedulerItems?.append( this.itemConnPoint3);
            this.schedulerItems?.append( this.itemConnPoint4);
            document.querySelectorAll('.link-point').forEach((element)=>{
                element.addEventListener('click', (event) =>this.linkPointClick(event));
              
            });
        }
    }
  
    private drawLinks() {
        this.clearLinks();
        if (this.settings.drawLinks == true) {
            this.data.Resources?.forEach((resource,resindex)=>{
                resource.Items?.forEach((item1,index)=>{
                    if (typeof item1.Link !== "undefined") {
                        if (item1.Link !== "" && item1.Link !== null) {
                            this.data.Resources?.forEach((resource2,resindex2)=>{
                                resource2.Items?.forEach((item2,index2)=>{
                                    
                                    let samelink = item2.Link == item1.Link;
                                    let idlink = item1.Link==item2.Id;
                                   
                                    let singletime = (samelink && ((item1.Offset < item2.Offset) || ((item1.Offset == item2.Offset) && (resindex > resindex2)))) || idlink;
                                    let notitself = item2.Id != item1.Id;
                                    let cond=resindex==resindex2;//Math.abs(resindex - resindex2)<=1;
                                    if ((samelink || idlink) && singletime && notitself) {
                                                                                                                                        
                                        var x1 = (this.settings.timeWidth * ((item1.Offset + (item1.Width / 2)) / this.settings.timeUnitVal));
                                        var x2 = (this.settings.timeWidth * ((item2.Offset + (item2.Width / 2)) / this.settings.timeUnitVal));
                                        var y1 = (resindex * this.settings.resourceHeight) + this.headerHeight + this.settings.itemsPadding ;
                                        var y2 = ((resindex2 - 1) * this.settings.resourceHeight) + this.headerHeight - this.settings.itemsPadding;

                                        if (cond) { //resindex == resindex2
                                            let i1=item1.Offset > item2.Offset ? item2 : item1;
                                            let i2=item1.Offset > item2.Offset ? item1 : item2;
                                            x1 = (this.settings.timeWidth * ((i1.Offset + i1.Width) / this.settings.timeUnitVal));
                                            x2 = (this.settings.timeWidth * ((i2.Offset) / this.settings.timeUnitVal));
                                            y1 = ((resindex + 0.5) * this.settings.resourceHeight) + this.headerHeight;
                                            y2 = y1;
                                        }

                                        if (!cond && resindex < resindex2) {
                                            y1 = ((resindex + 1) * this.settings.resourceHeight) + this.headerHeight - this.settings.itemsPadding;
                                            y2 = (resindex2 * this.settings.resourceHeight) + this.headerHeight + this.settings.itemsPadding;

                                        }
                                    
                                        var y3 = ((((resindex + resindex2) / 2) + 0.5) * this.settings.resourceHeight) + this.headerHeight;

                                        let strpath:string='';
                                        strpath = ' M' + x1 + ',' + y1 + ' V '+ y3 + ' H' + x2 + ' V' + y2;
                                        if (this.settings.linkSpline==true)
                                        {
                                            strpath = ' M' + x1 + ',' + y1 + ' C'+x1+',' + y3 + ' ' + x2 + ',' + y3 + '  '+x2+','+y2;
                                        }
                                         
                                    
                                        if (cond) { //resindex == resindex2
                                            strpath = ' M' + x1 + ',' + y1 + ' L' + x2+','+y1;
                                        
                                        }
                                        else if (!cond && resindex > resindex2) {                                   
                                            y2 = ((resindex2 + 1) * this.settings.resourceHeight) + this.headerHeight - this.settings.itemsPadding;
                                            strpath = ' M ' + x1 + ',' + y1 + ' V ' + y3 + ' H ' + x2 + ' V ' + y2;
                                            if (this.settings.linkSpline==true)
                                            {
                                                strpath = ' M ' + x1 + ',' + y1 + ' C' +x1+' '+ y3 + ' ' + x2 + ','+y3+' ' +x2+' '+ y2;
                                            }
                                               
                                        }  
                                      
                                        const linkline=document.createElementNS('http://www.w3.org/2000/svg', "path");
                                        let linkid='link-'+ Math.floor(Math.random() * 10000000);
                                        linkline.setAttribute('id',linkid);
                                        linkline.setAttribute('d',strpath);
                                        linkline.setAttribute('fill','none');
                                        linkline.setAttribute('stroke-width','4');
                                        linkline.setAttribute('class','link link-wire');
                                        linkline.setAttribute('stroke-linecap','round');
                                        linkline.setAttribute('data-link',item1.Link.toString());
                                        // linkline.setAttribute('marker-end','url(#circle-marker-end)');
                                        // linkline.setAttribute('marker-start','url(#circle-marker-end)');
                                       
                                        this.schedulerItems?.append(linkline);

                                        const elem1=document.getElementById(item1.Id.toString());
                                        elem1.setAttribute('data-link',linkid);
                                        const elem2=document.getElementById(item2.Id.toString());
                                        elem2.setAttribute('data-link',linkid);
                                        
                                    }                       
                                
                                })
                            });
                        }
                    }
                });
            });

        }
    }
    private updatePath(linkid:string){
        const elem1=document.querySelectorAll('[data-link="'+linkid+'"]')[0];   
        const elem2=document.querySelectorAll('[data-link="'+linkid+'"]')[1];  
        let h=this.settings.resourceHeight;  
        let strpath:string='';                                                                                   
        var x1 = parseFloat(elem1.getAttribute('x'))+(parseFloat(elem1.getAttribute('width'))/2);
        var x2 = parseFloat(elem2.getAttribute('x'))+(parseFloat(elem2.getAttribute('width'))/2);
        var y1 = parseFloat(elem1.getAttribute('y'));
        var y2 = parseFloat(elem2.getAttribute('y'));
        let sameycond=Math.abs(y1 - y2)<(h);
        let i1=x1 > x2 ? elem2 : elem1;
        let i2=x1 > x2 ? elem1 : elem2; 
        if (sameycond) {
            x1 = parseFloat(i1.getAttribute('x'))+(parseFloat(i1.getAttribute('width')));
            x2 = parseFloat(i2.getAttribute('x'));   
            y1 = parseFloat(i1.getAttribute('y'));
            y2 = parseFloat(i2.getAttribute('y'));
            y1 = y1+(h/2);
            y2 = y2+(h/2);
        }

        let y3 = ((y1 + y2 +h) / 2);

        if (sameycond) { 
            strpath = ' M' + x1 + ',' + y1 + ' L' + x2+','+y2;
            
        } else if (y1 > y2) {                                   
            y2 += h;
            strpath = ' M ' + x1 + ',' + y1 + ' V ' + y3 + ' H ' + x2 + ' V ' + y2;
            if (this.settings.linkSpline==true)
            {
                strpath = ' M ' + x1 + ',' + y1 + ' C' +x1+' '+ y3 + ' ' + x2 + ','+y3+' ' +x2+' '+ y2;
            }
           
        }  else {
            y1 += h;       
            strpath = ' M' + x1 + ',' + y1 + ' V '+ y3 + ' H' + x2 + ' V' + y2;
            if (this.settings.linkSpline==true)
            {
                strpath = ' M' + x1 + ',' + y1 + ' C'+x1+',' + y3 + ' ' + x2 + ',' + y3 + '  '+x2+','+y2;
            }  
        }

        const linkline=document.getElementById(linkid);
          
        linkline?.setAttribute('d',strpath);
        if (linkline){
            this.schedulerItems?.append(linkline);    
        }
        
       
    }


    private splitterBarMouseDown(event) {
        if (this.action=='') this.action='splitter';
        const sidebar=document.getElementById('scheduler-sidebar');
        event.target.classList.add('sizing');
    
        this.element=event.target;
        this.actionMemoPos.x=event.pageX;
        this.actionMemoPos.y=event.pageY;
        sidebar.setAttribute('data-w', sidebar.getAttribute('width'));
        // $('#splitter-bar').addClass('sizing');
        // $('#splitter-bar').attr('data-x', $('#splitter-bar').attr('x'));
        // var x = parseFloat($('#splitter-area').attr('x'));
        // var w = parseFloat($('#splitter-area').attr('width'));
        // x -= 4;
        // w += 8;
        // $('#splitter-area').attr('x', x);
        // $('#splitter-area').attr('width', w);
        // mousePos = {
        //     x: evt.pageX,
        //     y: evt.pageY
        // };
        // scheduler.mpos = mousePos;
    }
    private shift(step:number){
      
               
            const items = document.getElementById('scheduler-items');
            const anim = items?.getElementsByTagName("animateTransform") ?? null;
            console.log(anim);
            if (anim) {
                let minpos = 0;
                let maxpos = -((this.settings.timeUnitsCount - this.settings.timeUnitsView - 1) * this.settings.timeWidth);
                let transform = this.getTranslateValues(items);
                var pos = transform.x + (step * this.settings.timeWidth);
              
                if (pos > minpos) pos = minpos;
                if (pos < maxpos) pos = maxpos;
                anim[0].setAttribute('from', transform?.x.toString());
                anim[0].setAttribute('to', pos.toString());
                anim[0].beginElement();
            }
    }
    private clearLinks(){
        document.querySelectorAll('.link').forEach((element)=>{
            element.remove();
        });
    }
    private hideLinkpoints(){
        document.querySelectorAll('.link-point').forEach((element)=>{
            (element as HTMLElement).style.visibility='hidden';
        });
    }
    private showLinkpoints(){
        document.querySelectorAll('.link-point').forEach((element)=>{
            (element as HTMLElement).style.visibility='visible';
        });
    }
    private itemMouseDown(event:any, data:any){
        
        // this.action='split';
        if (this.action=='')
        {
            if (event.button == 0 && this.settings.canMoveItems && event.target.classList.contains('item')) {
                this.action='moving';
            }
            else if (event.button == 0 && this.settings.canResizeItems && event.target.classList.contains('resize')) {
                this.action='sizing';
    
            }
            if (this.action=='moving' || this.action=='sizing'){
                // this.clearLinks();
                // this.hideLinkpoints();
            }
        }
        if (this.action!=''){
           
            this.element=event.target.parentElement;
           
            if (event.target.classList.contains('item')) event.target.classList.add(this.action);
            if (event.target.classList.contains('resize')) {
                let id=event.target.parentElement.getAttribute('data-id');
                document.querySelector('svg[data-id="'+id+'"]>rect.item').classList.add(this.action);
              
         
            }
            this.element.setAttribute('data-x', data.element.getAttribute('x'));
            this.element.setAttribute('data-y', data.element.getAttribute('y'));
      
            this.element.setAttribute('data-w', data.element.getAttribute('width'));
            this.actionMemoPos.x = event.pageX;
            this.actionMemoPos.y = event.pageY;
           
        }

        if (typeof itemMouseDown == 'function'){
            itemMouseDown(event, data);
        }
    }
    private itemMouseUp(event:any, data:any){
      
        // if (event.target.classList.contains('item')) event.target.classList.remove('moving');
        // if (event.target.classList.contains('resize')) {
        //     let id=event.target.parentElement.getAttribute('data-id');
        //     document.querySelector('svg[data-id="'+id+'"]>rect.item').classList.remove('sizing');
        // }
        let itemClone = Object.assign({}, data.item)
        this.element=event.target.parentElement;
        this.processItemAction2(this.element, data.item,event.ctrlKey);
       
        this.setAction('');
        let datalink=this.element?.getAttribute('data-link');
        if ( datalink!=null){ 
            this.drawLinks();
        }
        if (typeof modified == 'function'){
            if ((itemClone.To!=data.item.To) || (itemClone.From!=data.item.From) || itemClone.Resource!=data.item.Resource){
                modified();
            }
               
        }
       // this.processData();
       this.storeData();
       console.log(this.data);
      

    }

    private processItemAction(element:any,data:any){
        console.log('process item action');
        let x=parseFloat(element.getAttribute('x') ?? '0');  
        let y=parseFloat(element.getAttribute('y') ?? '0');
        let w=parseFloat(element.getAttribute('width') ?? '0');
        let dx=parseFloat(element.getAttribute('data-x') ?? '0');
        let dy=parseFloat(element.getAttribute('data-y') ?? '0');
        let dw=parseFloat(element.getAttribute('data-w') ?? '0');
        let axisXsteps=this.settings.gridStep/(this.settings.timeUnitVal/this.settings.timeWidth);
        let gridOffset=this.settings.gridOffset/(this.settings.timeUnitVal/this.settings.timeWidth);

       

      
        x=this.getModulo(x,axisXsteps, gridOffset);
        y=this.getModulo(y,this.settings.resourceHeight,this.headerHeight);
        w=this.getModulo(w,axisXsteps);
        console.log(w);
       
        if (this.calendar!=null && this.settings.calcEffort==true){

            let schedulerItem=new SchedulerItem();
            let item=this.getItemData(data.Id);
      
            schedulerItem.From=this.convertXToTicks(x);
           
            if (this.action=='moving'){
                schedulerItem.Effort=item.Effort;
                let start=this.calendar.optimazeStart(schedulerItem);
                
                x=this.convertTicksToX(start);
                schedulerItem.From=this.convertXToTicks(x);
                let d=this.calendar.calcDuration(schedulerItem);
                w=d/this.settings.timeUnitVal*this.settings.timeWidth;
                item.From=schedulerItem.From;
                item.Width=d;
                console.log('0:'+item.Text);
                console.log(item);
            }
            if (this.action=='sizing'){   
                let ticks=this.convertWToTicks(w);
                schedulerItem.Duration=ticks;
                schedulerItem.Effort=this.calendar.calcEffort(schedulerItem);  
               
                item.Effort=schedulerItem.Effort;
                console.log('effort'+item.Effort);
            }
            
        }


        let moved=Math.abs(dx-x)>(axisXsteps/3)||Math.abs(dy-y)>(this.settings.resourceHeight/3);
        let resized=Math.abs(dw-w)>(axisXsteps/3);
        console.log(resized);
        if (!this.checkInterference(x,y,w,element) && false) {
            console.log('check interference false');
            let resourceIndex=(y-this.headerHeight)/this.settings.resourceHeight;
            let validResIndex=resourceIndex>=0 && resourceIndex<this.data.Resources.length;
            if (!this.settings.shiftItems || !validResIndex){
                x=dx;
                y=dy;
                w=dw;
            }
            else{
                
                let s=x+w;
                
                let items=this.data.Resources[resourceIndex].Items.sort((a,b)=>{return a.Offset-b.Offset});
            
                items.forEach((currentitem,i)=>{
                   
                    if (currentitem.Id!=data.Id){  
                        console.log('1:'+currentitem.Text);                   
                        let cx=currentitem.Offset/this.settings.timeUnitVal*this.settings.timeWidth;
                        let cw=currentitem.Width/this.settings.timeUnitVal*this.settings.timeWidth;
                        let cx2=cx+cw;
                        // if (cx2>x && cx<x){
                        //     x=cx2;
                        //     s=x+w;
                        //     console.log('2:'+currentitem.Text); 
                        // }
                        console.log('2:'+x.toString()+' '+cx.toString()+' '+s.toString()); 
                         if (cx2>x && cx<s && cx>=x){

                            console.log('3:'+currentitem.Text); 
                           
                            let el=this.schedulerItems.querySelector('.svg-item[data-id="'+currentitem.Id+'"]');
                            if (el)
                            {
                                let from=this.convertXToTicks(s);
                                currentitem.From=from;
                                currentitem.Offset=this.getItemOffset(from);
                                
                                if (this.calendar!=null && this.settings.calcEffort==true){
                                    let schedulerItem=new SchedulerItem();
                                    schedulerItem.From=from;
                                    schedulerItem.Effort=currentitem.Effort;
                                 
                                    let start=this.calendar.optimazeStart(schedulerItem);
                                    
                                    let cx=this.convertTicksToX(start);
                                    schedulerItem.From=this.convertXToTicks(cx);
                                    currentitem.From=schedulerItem.From;
                                    currentitem.Offset=this.getItemOffset(currentitem.From);
                                    this.moveTo(el,cx,y);
                                    let d=this.calendar.calcDuration(schedulerItem);
                                    let cw=d/this.settings.timeUnitVal*this.settings.timeWidth;
                                    currentitem.Width=d;
                                    this.setWidth(el,cw);
                                    s=s+cw;
                                }
                                else {
                                    this.moveTo(el,s,y);
                               
                              
                                    s=s+w;
                                }
                            }
                            
                        }

                    
                    }
                });
            }
        }



        if (!moved){
            x=dx;
            y=dy;
        }
        if (!resized){
            w=dw;

        }
        if (this.action=='moving'){
            this.moveTo(element,x,y);
            this.setWidth(element,w);
          //  this.updateData(element);
            let datalink=element.getAttribute('data-link');
            if ( datalink!=null){ 
               // this.updatePath(datalink);
            }

        }else if (this.action=='sizing--'){
            this.setWidth(element,w);
            this.updateData(element);
            let datalink=element.getAttribute('data-link');
            if ( datalink!=null){ 
               // this.updatePath(datalink);
            }
        }else if (this.action=='size'){
            this.setWidth(element,w);
            this.updateData(element);
            let datalink=element.getAttribute('data-link');
            if ( datalink!=null){ 
               // this.updatePath(datalink);
            }
        }
        if (this.settings.drawLinks==true)
        {
            this.drawLinks();
        }

       

    }

    private processItemAction2(element:any,data:any, ctrl:boolean){
        console.log('process item action');
        let x=parseFloat(element.getAttribute('x') ?? '0');  
        let y=parseFloat(element.getAttribute('y') ?? '0');
        let w=parseFloat(element.getAttribute('width') ?? '0');
        let dx=parseFloat(element.getAttribute('data-x') ?? '0');
        let dy=parseFloat(element.getAttribute('data-y') ?? '0');
        let dw=parseFloat(element.getAttribute('data-w') ?? '0');
        let axisXsteps=this.settings.gridStep/(this.settings.timeUnitVal/this.settings.timeWidth);
        let gridOffset=this.settings.gridOffset/(this.settings.timeUnitVal/this.settings.timeWidth);
  
        x=this.getModulo(x,axisXsteps, gridOffset);
        y=this.getModulo(y,this.settings.resourceHeight,this.headerHeight);
        w=this.getModulo(w,axisXsteps);
        console.log('dx:'+dx+' dy:'+dy);
       
        let moved=Math.abs(dx-x)>(axisXsteps/2) || y!=dy;
        let resized=Math.abs(dw-w)>(axisXsteps/3);
      
        let si=new SchedulerItem2(this,data,this.calendar);
        console.log('created');
        if (moved){
            si.X=x;
            si.Y=y;

           
            console.log('moved:'+x+' '+y);
        }else{
            element.setAttribute('x',dx.toString());
            element.setAttribute('y',dy.toString());
            if (resized)
            {
              
                si.W=w;
                console.log('w:'+w+' effort:'+si.Effort);
               
            }
            else  element.setAttribute('width',dw.toString());
    
        }

        if (this.settings.checkInterferences)
        {
            let interference = si.checkInterference();
                        
            if (!interference)
            {    
                if (!this.settings.shiftItems || !ctrl){
                    si.X=dx;
                    si.Y=dy;
                }
                else {
                    // let item=this.data.Resources[si.Resource].Items.filter((i)=>(i.Offset+i.Width)>si.Offset && i.Offset < si.Offset)
                    // .sort((a,b)=>{return a.Offset-b.Offset})[0];
                    let item=this.data.Resources[si.Resource].Items.filter((i)=>(i.Offset+i.Width)>si.Offset && i.Offset < si.Offset)
                                                                   .sort((a,b)=>{return a.Offset-b.Offset})[0];
                    if (item){
                        let si2=new SchedulerItem2(this,item,this.calendar);
                        si.X=si2.X+si2.W;
                    }
                                                 
                    let xxx=si.X+si.W;
                  //  let xxx=si.Offset+si.Width;
                    let items=this.data.Resources[si.Resource].Items.filter((i)=>i.Offset>=si.Offset && i.Id!=si.Id)
                                                                    .sort((a,b)=>{return parseInt(a.Offset)-parseInt(b.Offset)});     
                            console.log(items);      
                    for (let i=0;i<items.length;i++){        
                            let item=items[i];
                            let si2=new SchedulerItem2(this,item,this.calendar);
                            if (xxx>si2.X) si2.X=xxx;
                        //    si2.Offset=xxx;
                            xxx=si2.X+si2.W;
                                  
                            interference = si2.checkInterference();

                          //  if (interference) break;
                            
                    }             
                }
            }
        }
       
    }
   
    public setItemColor(id: string, c: string){
        let sc=this;
        sc.data.Resources?.forEach(function(resource) {
                   
            resource.Items?.forEach(function(item){
                          
                            if (item.Id==id)
                            {
                                item.Color1=c;
                                item.Modified=true;
                                sc.redrawItems();
                                return;
                            }
                        });
                   
                });
    }

    private convertXToTicks(x:number):number {
        let date=this.settings.date;
        let ticks=0;
       
        if (date){
            ticks=x/this.settings.timeWidth*this.settings.timeUnitVal;
            ticks += (date.getTime()/60000);
        }


       
      
        return ticks;
    }
    private convertTicksToX(ticks:number):number {
        let date=this.settings.date;
        let x=0;
       
        if (date){
            
            ticks -= (date.getTime()/60000);
        }

        x=ticks/this.settings.timeUnitVal*this.settings.timeWidth;
       
      
        return x;
    }
    private convertWToTicks(w:number):number {
       
        let ticks=w/this.settings.timeWidth*this.settings.timeUnitVal;
         
       
        
        return ticks;
    }
    private getItemOffset(from:number):any{
        let date=this.settings.date;
        let x=0;
        let ticks=0;
        if (date){         
            ticks = (date.getTime()/60000);
        }
        return from-ticks;
    }

    private processRowShift(element:any, data:any){
        if (this.calendar!=null){
            let y=parseFloat(element.getAttribute('y') ?? '0');
            let dy=parseFloat(element.getAttribute('data-y') ?? '0');
            
            let item=this.getItemData(data.Id);

            if (item){
                console.log(item);
                let s=new SchedulerItem();
                s.From=item.From;
                s.Effort=item.Width;
                let d=this.calendar.calcDuration(s);
               
                console.log(d);
                // w=d/this.settings.timeUnitVal*this.settings.timeWidth;
                // w=this.getModulo(w,axisXsteps);
                // console.log(w);
            }
           
        }
    }
    private setAction(action:string){
        if (action==''){
            if (this.action!=''){
          
                this.schedulerItems?.querySelectorAll('rect.item').forEach((element)=>element.classList.remove(this.action));
            }
        }
        this.action=action;
    }

    private checkInterference(x:number,y:number,w:number, e:any):boolean{
        let res=true;
       
        if (this.settings.checkInterferences)
        {
            let x2=x+w;
            let elements=document.querySelectorAll('svg.svg-item');
            
            elements.forEach((element,i)=>{
                if (element!=e){
                   
                    let cx1=parseFloat(element.getAttribute('x') ?? '0');
                    let cy=parseFloat(element.getAttribute('y') ?? '0');
                    let cw=parseFloat(element.getAttribute('width') ?? '0');
                    let cx2=cx1+cw;
                  
                    if (cy==y){
                        
                        res=res&&((x2<=cx1)||(x>=cx2));
                    }
                }
                

            });

        }

        return res;
       
    }
    private getItemData(id:string):any{
        let res=null;
        this.data.Resources?.forEach((resource)=>{
            resource.Items?.forEach((item)=>{
                if (item.Id==id) res=item;
            });
        });
        return res;
    }
    private updateData(element){
        let y=element.getAttribute('y');
        let resourceIndex=(y-this.headerHeight)/this.settings.resourceHeight;
        let id=element.getAttribute('data-id');
       
        console.log('update data');
        this.data.Resources?.forEach((resource, ri)=>{
            resource.Items?.forEach((item)=>{
                if (item.Id==id){
                    let x=parseFloat(element.getAttribute('x') ?? '0');
                    let w=parseFloat(element.getAttribute('width') ?? '0');
                    let offset=x/this.settings.timeWidth*this.settings.timeUnitVal;
                    let width=w/this.settings.timeWidth*this.settings.timeUnitVal;
                    item.Offset=Math.round(offset);
                    item.Width=Math.round(width);
                    item.Modified=true;
                    let from=(this.settings.date.getTime()/60000)+(item.Offset);
                    let to=(this.settings.date.getTime()/60000)+parseInt(((item.Offset+item.Width)));            
                    item.From=from;
                    item.To=to;
                   
                    if (ri!=resourceIndex){
                        this.data.Resources[ri].Items?.splice(this.data.Resources[ri].Items?.indexOf(item),1);
                        if (!this.data.Resources[resourceIndex].Items) this.data.Resources[resourceIndex].Items=[];
                        this.data.Resources[resourceIndex].Items?.push(item);
                    }
                }
            });
        });

        this.storeData();
   
    }
    private moveTo(element:any, x:number, y:number){
        if (this.settings.animation ?? false){
            this.moveAnimatedTo(element,x,y);
        }

        element.setAttribute('x',x.toString());
        if (this.settings.resourceChange){
            element.setAttribute('y',y.toString());
        }
       
       
       
    }
    private moveAnimatedTo(element:any, x:number, y:number){
        if (!element) return;
        let cx=parseFloat(element.getAttribute('x') ?? '0');
        let cy=parseFloat(element.getAttribute('y') ?? '0');
      
        let animatex=document.createElementNS('http://www.w3.org/2000/svg','animate');
        animatex.setAttribute('attributeName','x');
        animatex.setAttribute('values',cx.toString()+';'+ x.toString());
        animatex.setAttribute('dur','0.25s');
        element.append(animatex);
        animatex.beginElement();
        animatex.addEventListener('end',function(){
           
            animatex.remove();
        });

        if (this.settings.resourceChange){
            let animatey=document.createElementNS('http://www.w3.org/2000/svg','animate');
            animatey.setAttribute('attributeName','y');
            animatey.setAttribute('values',cy.toString()+';'+ y.toString());
            animatey.setAttribute('dur','0.15s');
            element.append(animatey);
            animatey.beginElement();
            animatey.addEventListener('end',function(){
                animatey.remove();
            });
        }
        
       
      
       
       

       
      
        // element.setAttribute('x',x.toString());
        // element.setAttribute('y',y.toString());
       
    }
    private shiftNoAnimation(step:number){
        var items = document.getElementById('scheduler-items');
        var minpos = 0;
        var maxpos = -((this.settings.timeUnitsCount - this.settings.timeUnitsView - 1) * this.settings.timeWidth);
        let transform = this.getTranslateValues(items);
        var pos = transform.x + (step * this.settings.timeWidth);
        if (pos > minpos) pos = minpos;
        if (pos < maxpos) pos = maxpos;
       
        items.setAttribute('transform', 'translate('+pos+' , 0)');
    
    }
    private setDayView(startDate:Date) {
        this.settings.timeUnitsView = 3;    
       
        this.settings.gridStep = 60;
        this.settings.timeUnitsCount = 192
        this.settings.shifterStep=0.5;

        var dt1 = new Date(this.settings.date);
        var dt2 = startDate;
        var timespan = (dt2.getTime() - dt1.getTime()) / 86400000;
        timespan-=0.5;
      
         
        this.init();
        this.shiftNoAnimation(-timespan);
      
    
    }
    private setWeekView(startDate:Date) {
        this.settings.timeUnitsView = 7;    
        this.settings.gridStep = 60;
        this.settings.timeUnitsCount = 192;

        var dt1 = new Date(this.settings.date);
        var dt2 = startDate;
        var timespan = (dt2.getTime() - dt1.getTime()) / 86400000;
        timespan-=0.5;
   
        this.settings.shifterStep=3;
   
        this.init();
       
        this.shiftNoAnimation(-timespan);
      
    
    }
    private setView(event:any, view:SchedulerView) {
       
            let variation=1;
      
            switch (view) {
                case SchedulerView.Day:
                    this.settings.timeUnitsView = 2;    
                   
                    this.settings.shifterStep = 1;
                    variation=0.5;
                    break;
                case SchedulerView.Week:
                    this.settings.timeUnitsView = 7;    
                   
                    this.settings.shifterStep = 4;
                    variation=1;
                    break;
                case SchedulerView.Month:
                    this.settings.timeUnitsView = 31;    
                   
                    this.settings.shifterStep = 15;
                    variation=3;
                    break;
                default:
                    break;
            }
               
           
            
            let startDate=new Date(event.target.getAttribute('data-date') ?? '');
            var dt1 = this.settings.date;
            var dt2 = startDate;
          
            var timespan = (dt2.getTime() - dt1.getTime()) / 86400000;
            timespan-=variation;
       
            this.currentView=view;
            
            this.init();        
            this.shiftNoAnimation(-timespan);

        
       
      
    
    }
    private setMonthView(startDate:Date) {
      
        this.settings.timeUnitsView = 15;
        this.settings.timeUnitVal = 1440;
        this.settings.timeWidth = 1440;
        this.settings.gridStep = 120;
        this.settings.timeUnitsCount = 60;

        var dt1 = new Date(this.settings.date);
        var dt2 = startDate;
        var timespan = (dt2.getTime() - dt1.getTime()) / 86400000;
        timespan-=0.5;
   
        this.settings.shifterStep=3;
   
        this.init();
       
        this.shiftNoAnimation(-timespan);
      
    
    }
    private setWidth(element:any, width:number){
      
        if (this.settings.animation==true)
        {
            this.setAnimatedWidth(element, width);
        }
        element.setAttribute('width',width.toString());
      
    }
    public setItemWidth(itemId:string, width:number){
        let element=this.schedulerItems.querySelector('svg.svg-item[data-id="'+itemId+'"]');
        let w=width;
        let step=this.settings.gridStep/(this.settings.timeUnitVal/this.settings.timeWidth);
        if (w<step) w=step;
        let item=this.getItemData(itemId);
        if (element){
            this.setAction('size');
            this.setWidth(element,w);
            this.processItemAction(element, item);
            this.setAction('');
        }
       
    }
    private setAnimatedWidth(element:any, width:number){
        if (!element) return;
        let w=parseFloat(element.getAttribute('width') ?? '0');
        let animatew=document.createElementNS('http://www.w3.org/2000/svg','animate');
        animatew.setAttribute('attributeName','width');
        animatew.setAttribute('values',w.toString()+';'+ width.toString());
        animatew.setAttribute('dur','0.15s');

        element.append(animatew);
    
        animatew.beginElement();

        animatew.addEventListener('end',function(){
            animatew.remove();
        });
    }
    private itemClick(event:any, element:any){
        //  let itemData=this.getItemData(element.item.Id);
        //  let si2=new SchedulerItem2(this,itemData);
        console.log('9');
        // // si2.Y=si2.Y+50;
        // console.log('interference:'+si2.checkInterference());

        let popup=document.getElementById('scheduler-popup');
        if (!popup){
            popup=document.createElement('div');         
            popup.innerHTML=`<div id = "scheduler-popup" class="scheduler-popup" >
                                <div class="popup-container">
                                    <div class="popup-header">
                                        <button class="close-button">&times;</button>
                                    </div>
                                    <div class="popup-content">
                                        <div class="tab">
                                            <button class="tablinks active" data-tab="schedulertasktab" >Task</button>
                                            <button class="tablinks" data-tab="schedulerdatatab">Data</button>
                                            <button class="tablinks" data-tab="schedulerothertab">Note</button>
                                        </div>
            
                                        <div id="schedulertasktab" class="tabcontent active">
                                            <div class="formgroup">
                                                <label>Task Id</label>
                                                <input class="taskinput taskid" placeholder="Id" disabled/>
                                            </div>
                                            <div class="formgroup">
                                                <label>Task</label>
                                                <input class="taskinput taskname" placeholder="Name"/>
                                            </div>
                                            <div class="formgroup">
                                                <label>Description</label>
                                                <input class="taskinput taskdescription" placeholder="Description"/>
                                            </div>
                                            <div class="formgroup">
                                                <label>Start</label>
                                                <input type="datetime" class="taskinput taskstart" />
                                            </div>
                                            <div class="formgroup">
                                                <label>Finish</label>
                                                <input type="datetime" class="taskinput taskfinish" />
                                            </div>
                                           
                                        </div>
            
                                        <div id="schedulerdatatab" class="tabcontent">     
                                            <textarea class="taskdata" disabled></textarea> 
                                        </div>
            
                                        <div id="schedulerothertab" class="tabcontent"> 
                                            <textarea></textarea> 
                                        </div>
                        
                                    
                                    </div>    
                                    <div class="popup-footer">           
                                        <button type="button" class="scheduler-popup-btn close-button" >Close</button>
                                        <button type="button" class="scheduler-popup-btn" >OK</button>
                                    </div>
                                </div>  
                            </div>`;
            this.schedulerContainer.append(popup);      
            this.initPopup(popup);
        }
            console.log(new Date(element.item?.From*60*1000).toString());
            (popup.querySelector('input.taskid') as HTMLInputElement).value=element.item?.Id ?? '';
            (popup.querySelector('input.taskname') as HTMLInputElement).value=element.item?.Text ?? '';
            (popup.querySelector('input.taskdescription') as HTMLInputElement).value=element.item?.Description ?? '';
            (popup.querySelector('input.taskstart') as HTMLInputElement).value=this.getDate(element.item?.From);
            (popup.querySelector('input.taskfinish') as HTMLInputElement).value=this.getDate(element.item?.To);
            if (element.item)
                (popup.querySelector('textarea.taskdata') as HTMLInputElement).value=JSON.stringify(element.item,null,2);
            else 
                (popup.querySelector('textarea.taskdata') as HTMLInputElement).value='';
    
            this.showTab(event, 'schedulertasktab');
            popup.style.display='block';
        
        
       
    }
    private getDate(value:number){
        let day=new Date(value*60*1000).getUTCDate().toString().padStart(2,'0');
        let month=new Date(value*60*1000).getUTCMonth().toString().padStart(2,'0');
        let year=new Date(value*60*1000).getUTCFullYear().toString().padStart(2,'0');
        let result=year+'-'+month+'-'+day;
        console.log(result);
        return result;
    }
    private getTaskData(id:string){
        let res=null;
        this.data.Resources?.forEach((resource)=>{
            resource.Items?.forEach((item)=>{
                if (item.Id==id) res=item;
            });
        });
        return res;
    }
    private initPopup(popup:any){
        popup.querySelector('textarea').value=JSON.stringify(this.data , null, 2);
        popup.querySelectorAll('.close-button').forEach((element)=>element.addEventListener('click', (event) =>this.closePopup(event)));
        popup.querySelectorAll('.tablinks').forEach((element)=>{
            element.addEventListener('click', (event) =>this.showTab(event, element.getAttribute('data-tab') ?? ''));
        });
    }
    private showTab(evt:any, tabid:string){
     
            var i, tabcontent, tablinks;
            tabcontent = document.getElementsByClassName("tabcontent");
            for (i = 0; i < tabcontent.length; i++) {
              tabcontent[i].style.display = "none";
            }
            tablinks = document.getElementsByClassName("tablinks");
            for (i = 0; i < tablinks.length; i++) {
              tablinks[i].className = tablinks[i].className.replace(" active", "");
            }
            document.getElementById(tabid).style.display = "block";
            evt.currentTarget.className += " active";
          
    }
    private closePopup(evt:any){
     
        document.getElementById('scheduler-popup').style.display='none';
    }
    private getSum(box:SVGSVGElement){
      
            let dt = box.getAttribute('data-date');
            let dt1 = this.settings.date;
            let dt2 = new Date(dt);
            let start = Math.trunc((dt2.getTime() - dt1.getTime()) / 1000 / 60);
            let stop = start + this.settings.timeUnitVal;
            let sum = 0;
            let y = parseFloat(box.getAttribute('y'));
            let resIndex = (y - (this.headerHeight)) / this.settings.resourceHeight;
            let resource = this.data.Resources[resIndex];
            let name = resource.Name;
            
            resource.Items?.forEach(function (i, item) {
              
                let x = i.Offset;
                let w = i.Offset + i.Width;

              //  console.log('x:'+x+' w:'+w+' start:'+start+' stop:'+stop);

                if (x < start && w > start && w <= stop) {
                    sum += w - start;
                } else if (x >= start && w <= stop) {
                    sum += i.Width;
                } else if (x >= start && x < stop && w > stop) {
                    sum += stop - x;
                } else if (x < start && w > stop) {
                    sum += stop - start;
                }
        
        
        
            });
           
            var info={};
            info['sum']=sum;
            info['name']=name;
            info['info']='-- --';
            info['resource']=dt2.toLocaleDateString() +" | " +name;
            if (sum > 0) {
                let hh = Math.trunc(sum / 60);
        
                let mm = sum - (hh * 60);
                let time = this.pad(hh) + ':' + this.pad(mm);
             
                info['info']=time;
            }
           
            return info;
        
    }  
    private pad(d) {
        return (d < 10) ? '0' + d.toString() : d.toString();
    }
    private linkPointClick(event){
     
        if (this.settings.itemsLinks==true && this.action==''){
            this.action='linking';
            this.linkPoint.x=parseFloat((event.target as SVGSVGElement).getAttribute('cx') ?? '0');
            this.linkPoint.y=parseFloat((event.target as SVGSVGElement).getAttribute('cy') ?? '0');
            this.linkId=(event.target as SVGSVGElement).getAttribute('target') ?? '-----';
            

        }
        else{
          
            if (this.action=='linking' && this.linkId!=(event.target as SVGSVGElement).getAttribute('target')){
                   
                    this.data.Resources?.forEach((resource)=>{
                  
                        resource.Items?.forEach((item)=>{
                            
                            if (item.Id == this.linkId) {
                            
                                item.Link=(event.target as HTMLElement).getAttribute('target');                             
                                
                                if (this.settings.drawLinks==true)
                                {
                                    this.drawLinks();
                                }
                              
            
                            }
                        });
                    });
                              
            } 
            this.clearAction();
        }
    }
    private clearAction(){
        if (this.action=='splitter') this.action='';
      
        this.resetLinkLine();
        document.querySelector('.splitter').classList.remove('sizing');
      
        // this.element?.classList.remove('moving');
        // this.element?.classList.remove('sizing');
    }
    private redrawItems(){
        this.clearItems();
        this.drawItems();
       
    }
    private resetLinkLine(){
        const line = document.getElementById('link-line');
        line?.setAttribute('x1','0');
        line?.setAttribute('x2','0');
        line?.setAttribute('y1','0');
        line?.setAttribute('y2','0');
        this.linkId='';
        this.linkPoint.x=0;
        this.linkPoint.y=0;
    }
    private itemOver(event:any, item:any){
    
        if (this.settings.itemsLinks==true)
        {
            // let ev=event.originalEvent;

            const cx=parseFloat(event.currentTarget.getAttribute('x') ?? '0');
            const cy=parseFloat(event.currentTarget.getAttribute('y') ?? '0');
            const cw=parseFloat(event.currentTarget.getAttribute('width') ?? '0');
            const ch=parseFloat(event.currentTarget.getAttribute('height') ?? '0');
         
            const cx1=cx;
            const cy1=cy+ch/2;
            const cx2=cx+cw/2;
            const cy2=cy;
            const cx3=cx+cw;
            const cy3=cy+ch;
          
            this.itemConnPoint1.setAttribute('cx',cx1.toString());
            this.itemConnPoint1.setAttribute('cy',cy1.toString());
            this.itemConnPoint2.setAttribute('cx',cx2.toString());
            this.itemConnPoint2.setAttribute('cy',cy2.toString());
            this.itemConnPoint3.setAttribute('cx',cx2.toString());
            this.itemConnPoint3.setAttribute('cy',cy3.toString());
            this.itemConnPoint4.setAttribute('cx',cx3.toString());
            this.itemConnPoint4.setAttribute('cy',cy1.toString());
            this.itemConnPoint1.setAttribute('target',event.currentTarget.getAttribute('data-id'));
            this.itemConnPoint2.setAttribute('target',event.currentTarget.getAttribute('data-id'));
            this.itemConnPoint3.setAttribute('target',event.currentTarget.getAttribute('data-id'));
            this.itemConnPoint4.setAttribute('target',event.currentTarget.getAttribute('data-id'));
            this.showLinkpoints();

           
          
           
        }
        if (typeof itemMouseEnter === 'function') {
            itemMouseEnter(event, item);
        }
        
    }
  
    private itemOut(event:any, item:any){
        if (this.settings.itemsLinks==true)
        {
            this.schedulerItems?.append(this.connLine);
            this.schedulerItems?.append( this.itemConnPoint1);
            this.schedulerItems?.append( this.itemConnPoint2);
            this.schedulerItems?.append( this.itemConnPoint3);
            this.schedulerItems?.append( this.itemConnPoint4);
        }

        if (typeof itemMouseExit === 'function') {
            itemMouseExit(event, item);
        }
        
    }
    private dropOnElement(event:any, element:any){
        
    }
    private dragOverElement(event:any, element:any){
        
    }
    
    private splitterBarMouseUp(event){
       
        this.action='';
    }
    private splitterBarMouseMove(){
        
    }
    private splitterBarDblClick(){
        
    }
    private setSplitBarPos(pos:number){
       
        const sidebar = document.getElementById('scheduler-sidebar');
       
        sidebar.setAttribute('width', pos.toString());
        // const wrapper = document.getElementById('wrapper');
        // wrapper?.setAttribute('transform','translate(400,0)');
    }
    private splitBarToggle(){
     
    }
    private resourceClick(event : MouseEvent, data:any){
        
      
    }
    private drawEvents() {
        if (this.settings.viewEvents == true) {
            var parent = document.getElementById('scheduler-background');
            if (this.data.Events)
            {
                let ry = this.settings.monthBoxHeight;
                if (this.settings.viewWeeks)
                    ry+=this.settings.weekBoxHeight;

                this.data.Events.forEach((event,ei)=>{
                   
                    let rx = (event.Offset * this.settings.timeWidth / this.settings.timeUnitVal);
                    let rw = this.settings.timeWidth * event.Width / this.settings.timeUnitVal;
                    let rhh = (this.data.Resources.length * this.settings.resourceHeight)+this.headerHeight;   
                    let rh=this.settings.infoElementHeight;

                    const svgevent=document.createElementNS('http://www.w3.org/2000/svg','svg');
                    svgevent.setAttribute('x',rx.toString());
                    svgevent.setAttribute('y',ry.toString());
                    svgevent.setAttribute('width',rw.toString());
                    svgevent.setAttribute('height',rhh.toString());
                    svgevent.setAttribute('class',"svg-event draggable-x");
                    svgevent.setAttribute('cursor','pointer');
                    svgevent.setAttribute('data-id',event.Id);
                 

                    const ev=document.createElementNS('http://www.w3.org/2000/svg', "rect");
                    ev.setAttribute('x','0');
                    ev.setAttribute('y','0');
                    ev.setAttribute('width',rw.toString());
                    ev.setAttribute('height',rh.toString());
                   

                    ev.setAttribute('class','event-header '+event.Classes);
                    ev.setAttribute('fill', event.Color);
                    
                  
                    const title=document.createElementNS('http://www.w3.org/2000/svg','title');
                    title.innerHTML=event.Description;

                    ev.append(title);
                 

                    if (this.settings.viewEventExtended == true) {
                        let p = document.getElementById('scheduler-items');
                        let y=this.headerHeight;
                        const extevent=document.createElementNS('http://www.w3.org/2000/svg', "rect");
                        extevent.setAttribute('x',rx.toString());
                        extevent.setAttribute('y',y.toString());
                        extevent.setAttribute('width',rw.toString());
                        extevent.setAttribute('height',rhh.toString());
                        extevent.setAttribute('fill',event.Color);
                        extevent.setAttribute('class','event-extension '+event.Classes);
                       
                        p.append(extevent);
                    }
                    svgevent.append(ev);
                    console.log(ev);
                    parent?.append(svgevent);

                });
            }
        }
    }


    private drawHeader() {

        const parent = document.getElementById('scheduler-header');
       
        if (parent){
            var h = this.headerHeight;
            var w = (this.settings.timeUnitsCount * this.settings.timeWidth);
            var y = 0;
            var x = 0;
            const header=document.createElementNS('http://www.w3.org/2000/svg', "rect");
            header.setAttribute("x", x.toString());
            header.setAttribute("y", y.toString());
            header.setAttribute('width', w.toString());
            header.setAttribute('height', h.toString());
            header.setAttribute('class', "header-bg");
        
            parent.appendChild(header);
        
        }
       
        
        

    }
    private drawMonths(){
        const parent = document.getElementById('scheduler-header');
      

        var dt = this.settings.date;
      
        if (dt && parent) {

            let lastmonth = -1;
            let increment=60*1000*this.settings.timeUnitVal; //one day = 864000000
           
          
            for (let i = 0; i < this.settings.timeUnitsCount; i++) {

                var cdate = new Date(dt.getTime() + (i * increment));
                let w = this.settings.timeWidth;
                let x = (i * this.settings.timeWidth);
                let day = cdate.getUTCDate();

                let month = cdate.getUTCMonth();
                

                if (month != lastmonth) {

                    var days = new Date(cdate.getUTCFullYear(), cdate.getUTCMonth() + 1, 1).getUTCDate();
                   
                    var mw=w * days;
                    if (this.settings.timeUnitVal==60) mw=w*24;
                    var my = 0;
                    var mh = this.settings.monthBoxHeight;
                    var mx = x;
                    if (this.settings.timeUnitVal==1440)
                    {
                        if (day != 1) mx = x - ((day - 1) * w);
                    }
                    else{
                        mx=x+this.settings.timeWidth;
                    }
                    var t = this.settings.months[cdate.getUTCMonth()];
                    if (this.settings.viewYear == true) {
                        t += ' ' + cdate.getUTCFullYear();
                    }
                    if (this.settings.timeUnitVal==60) t=cdate.toLocaleDateString();
                    
                    const monthsvg=document.createElementNS('http://www.w3.org/2000/svg', "svg");
                    monthsvg.setAttribute("x", mx.toString());
                    monthsvg.setAttribute("y", my.toString());
                    monthsvg.setAttribute('width', mw.toString());
                    monthsvg.setAttribute('height', mh.toString());
                    monthsvg.setAttribute('font-size', '100%');

                    const monthBox = document.createElementNS('http://www.w3.org/2000/svg', "rect");
                    monthBox.setAttribute("x", '0');
                    monthBox.setAttribute("y", '0');
                    monthBox.setAttribute('width', '100%');
                    monthBox.setAttribute('height', '100%');
                    monthBox.setAttribute('data-date', cdate.toUTCString());
                    monthBox.setAttribute('class', "monthbox");
                  

                    let that=this;
                    monthBox.addEventListener('click', (event) => {
                        that.setView(event, SchedulerView.Month);
                    });
                  
                 
                  
                    const title =  document.createElementNS('http://www.w3.org/2000/svg', 'title');
                    title.innerHTML=t;
                    monthBox.append(title);
                    monthsvg.append(monthBox);
                  
                    let tx = 10;
                   

                    const text = document.createElementNS('http://www.w3.org/2000/svg','text');
                    text.setAttribute("x", tx.toString());
                    text.setAttribute("y", '50%');
                   
                   
                    text.setAttribute('font-size',"40%");
                    text.setAttribute('dominant-baseline','middle');
                    text.setAttribute('class', "header-text");
                  
                    text.innerHTML=t;

                    monthsvg.append(text);

                    if (this.settings.viewStars == true) {
                        const stars = document.createElementNS('http://www.w3.org/2000/svg','use');
                        stars.setAttribute('x',(mx-31).toString());
                        stars.setAttribute('y',(my+8).toString());
                        stars.setAttribute('href','#stars');

                        monthsvg.append(stars);
                    }
                    if (this.settings.viewMonthLogo == true) {
                    const logo=document.createElementNS('http://www.w3.org/2000/svg','image');
                    logo.setAttribute('x',(mw-mh).toString());
                    logo.setAttribute('y',(mh/8).toString());
                    logo.setAttribute('width',(mh/4*3).toString());
                    logo.setAttribute('height',(mh/4*3).toString());
                    logo.setAttribute('href',this.settings.logo);
                 //   logo.setAttribute('href','data:image/png+xml;base64,iVBORw0KGgoAAAANSUhEUgAAAGsAAABeCAYAAAAkCOoSAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAQpklEQVR4Xu2dCXBURRrHv5wEcnBf6rIESLglAgkENly5Jhy67qrgKuh6BahyBXRLEeRYqwRBLYVaPEqtRdEqt0rLA6EEq2RBqrwQ8SAgEM5whDvnTJIJ2/9OD8wkb2bee/29BKr4qWX6SyDv9dfd37+/r9+biEsCus41QaT6/3WuAa476xoi7DL49bZtdGD/AZI/FqGMVhB/7uyZs9S3fz8amZlJl+rraf36z+jIkcPUsUNH9UMWiGi4CG9dHRry6+bAW++l0lOnKC/fRekZGXS6tJQ2bthIUVGRFNe6tfopi4i+wZ8dOnQopfbtq4zBCeqslcufp9defZViYmIoOjpadIv1jrkk/jlz+jS9vXYtTZw8SVkbmP/kk7R8xQqKuQbmtreeSPxLP+38kYak3dJgVNx+6220a+dOio9PUBYriB4S3e/2eKhDhw708upVNGr0aPW9phg6y5WTS0cOH6a27dqJgWx/9J47d46eW76c/nLHX5UlkAf/fj+9t+5dSkpKUparD3TPmfMX6WDxQeqZ3FNZA8keO47KysrkwLYDfofX66VTJ0/S/IULaObs2eo7gTRx1uzCQtr6v63aHVgnlqn4Nm3oq6+3KYsx0WIwtGuXRJGRV+cUKy8vowcefJj+/eprytKUPUVFNNk1kTp36aw1uOGKkpIS+u+HH4qQMVJZrxDQQ4fFbNqw/nNKTExUFvtUVVbRI7NnqVZwFi1eROViVF6N1Iv46q6tD+ko0K9/f0pJTZEDVAc4ulu3bjTn0UeVJZAAZ61b+4720gcwQjweN901daqyBGfRkqVUg5ggOuZqo7q6mqYGWcIb88BDD1F1VZVq2ScqKkrG+eLiYmW5QoCz9u7dI8WELnW1tTRg0CD5i83wt2lTZcdcTWDAVXlqacnSZ5UlNLfd/meqEvfQKKpYBhOlVVwc/fzTLmW5QoCzsHTpzirgEerGVVCgWuFZLGYXOkb3RjmpFQOuT6+e1G9Af2UJTWxsLPXq1VsKBV3gg/LyctW6QoCzOBwFqt1uys3LU63wYI+R2qeX7KCrhfKKKnpm0WLVMkdefp4cqBwY+SLAWRwg9rQWG70+KX2UxRzoGHTQ1QDuAV014777GwwmyXO5yC0GqlOwO6umpobGjh+nWua5d/oM2UFXg9CoqqykwpmFqmWetFvSZPIAWRonYHeWx+2h3FzzS6A/s4TUrxQd1ZIgblbXeumZxUuUxRqZo0dRjUPLOauzcKNudzW5JpoXF/5gKXSLjmpJoYGVIX1omtzv2AGxmituNYbVWVBCvXr3lsrIDl26dqWMYbfIDmspyiqrhTr9l2pZx1XgEvstfQlvBKuzMKKsqEAjFot9DTqsJcBgS4iLpUlTpiiLdTp07Ehdxax0IvayOgtKKF+MLB0mTppECa1bsexXrFJRUUFzn3hCteyTnZPtyFLI5iwoIKi5IWlpDQYN5j3xT9lxzQmWrRrvJZr/9EJlsQ8GrMcBCc/mLCigzBC1GCvMf3qB7LjmFBpYFfLEjMAeUZc/ZWXJpC739bM5C9M+TzNe+YiLi6P83GxHN5j+oFMrqj20ZKl9YdGYIWLPxZ2RYXEWbhYKKE8zXvmzWHQcOrA5ZpfXW0fdOnekzFGjlEWffFcBe9xicRaUT9duXamjUEJcZGaOkh2IjnSa8vJKemr+06rFA/KEbuZKAouzMIImiPWem6dE7EJHOgkGWp2YvI/NnacsPPyxZ09KSEhklfA8znJ7yCWmPTePzZkrO9LJfCHqaHdPvUu1eBmfPZ51KdR2FmJKbV0t/WlMlrLwcvfUOx0rTOLaUUdDPc0JcphTT9rOguLh2FsFA6kfpwqTuPa+vXtR3379lIUXFGChaLmuXdtZGDnIhzkFOjK1d7IjhUnUzxZYLDBaASe2Uvumah+k8aHtLCievPx81XKGhQ4UJhEHIyOIps+YoSzOkO9ysS2FWs7CDccnJEjl4yTTZ9wnL5RTaKBuNnNW+KNyunBWj7WchREzfsIE1XKWwlkz2QqTiCGom1k9Y2GHgQMHylNeHANN21m6JRGzYCnkKkzW1HhoxPChsn7WHGSNGcNSo7PtLDk6xfTWLYmYBZXbdKbCZFmlmxZpFBitkpuXSzUMccu2s6BwUlNTTR/k5AAyXrcwiTpZYps4WTdrLvInFrAcALXtLIwUp1VgYyZNnqxdmESdbN7j+gVGKyQlJtFNN92kXVC17SxZ/xFKp7mZO+9x24VJjGyuAqNVsnPFUqi5hNtyltyjREXSoMGDlKX5mL9goe3CJAaYKy+HWsW1UpbmA4kDXQlvy1m1YoSMzhqjWs0LKrl5ORMs3zic21BgNPegATcjRo4kb52emrXlLI+nhvKEwmkpUNG1WpiEIOrepZPstJZieHq6VtrMsrPQQdXVVUKy85dEzJI5ajR17dTBUsCuqKiU9bGWRB6k0ZDwlp2FDrrhxhupbdu2ytIyNBQmzQkNxFjUxf7x2BxlaRlQPZYHQMU/drDsLCianNwc1Wo55sydZ7owiXrYPdOmqVbLgUHern07qsfj/zaw7CyZtWCS7KVbt6qv7DHtrjvCFiaxbMsC41K9AqPutfqYkJ1tW8JbchZuHIF6JNMpoC233qq+sgdSRuEKkwjo/VJ6U0pqqrJYp+roUdoxj+eMBhIJdg+AWnIWbnzY8GGqpceFX38lz8WLdHzTJmWxTv/+/cMWJssqqmQSWIeil16S18tBjlDREBlWlKwPS87CL+FSgcc+/ZTiOnSgohUrlMUeC55ZFLQw6RXxLFrc4T33TlcWexS/8w5FxcXRmW+/VRY9BgwcaKt6bMlZiA9c+UA4KyYxkU5/8w1Vl5Yqq3XwKCkqvkZCA08wzgrythazFK9dSxGRkRTVpg2VrF+vrHrYrR6bdhYkO946g4SkLvXi7yorKqKImBiKFVuA3c8/r75jj0cKC6Vj/MEyg/rXwkX2nmD0sXvlSopOSKCoVq3o2GefKaseea58WwdATTsLCiY7h0eyH9+4UToKT6RHtW4tR68OqPji0VL/OICRm5kxnDp37qws1jm3cydVHjlCEXjRmPivoriY6hiq1Xg7QUxsrOXqsWln4ea5qsIlYoQiBgAsMcJrdPC992TbDt26d6fhQ9MCJHF5FQqMenL9t2XLKFa9cUcOLDG7MNA4GDd+vGUJb8pZckkRchPTlwPcMG7cR4xYZopefFG17OFfmMT5+KT41uQqmCjbdvCK+8V1RvpdZ6QYYIi1HNh59tiUs6BcIJM5qDx8mGqFZCe/t6BhiSnfv58uijhml8lTplwuTCIPiAfydNj9wgsyVmFG+cAAO/Hll6qlB/KEEGxWJLwpZ0nJzpS1wMhEnPLvBHwdI4TGb8uXK4s9kIJCYVIWGDWfCvl9zRqKFgowAHGd3qoqKt+3Txnsg1JPz549LSWjTTlLLoFMB2OOCmf5Ly0+EMOOffyxzRRnA77CZEF+LsUa/A6zQPXViwEa0eh8iYxb4jpxDxxYXQrDOguKBW9K68d0HvzcDz9QpMGrF9ARiAl7X3lFWazTRsyEmwcOELNKrxSCrQT2gEbgGiGQOMBSaKWIGtZZUCxjxo1VLT1Obdki1Z//EuhPdHw87V21SrXs8fZ/1lLWWPvXWyFi6vldu+TWwohIYT8vJD0HQ4cNo0v15o8ohHUWq2Rfv/6yZDciUsxgz9mzWhnuYcOHq6/ssfu552T8DDagYIcg4hIaI0eNNC3hQzoLHodisfLuwFAgFhjFK3+k0NDMF+pw6IMPQg4ogO+XfP65aulh5dnjkM6CUunRowfFi+VJF8yY6hMnmgTtxiCeYbmsuXBBWZoPKED8frlRDwFn3JLVY5MSPuRV4SAnUvocYCRiRAZbXnzg+zFJSVQk9jnNzZ6XX5Z7q3DAme7SUnKfPq0s9uncpQt16tTJVOoppLPcbuyveJbAo0KWh1tefGB/s//NN1WreTi9fbt0AOJmODCg5FLIlIXPyW2ocYUjqLMwLfGRDukZ6cqiR+m2bYaS3QiM3PraWjry0UfK4jy/LlsmZ7RZ4Cyu1BPSeFrOwkHOjBEjVEuPcz/+SJfq6sIugf5gn1O0cqVqOQviY6mIk+HEjz8YeBiAHIwdN06GnHBxK6iz4GkXV4oJWXa8E8mCs7DPQSkdZQmn2S3UZ7SYVVYGE372khBgZ3fsUBY9hqQNCXk8ARg6yyfZcxmrwv5ZdjNIodFMMh7xsUkeMBzi+jAAueJWntAG4Z7hMnQWlEn79u2pW3d7rx71B6UGJD6xkbQK4sJhse9xEuyr5Ov3wsh1Izirx0iU4xXroTC8whpPDZtkP75hg4wFVpYYH+hApHf2vf66svCDJTBYHjAcsrTz++/kNSEOwpHcK1m+DS6UhDd0ltuDl+gzLYGIVyYluxHY92D/4wQXd++2PesBBiAGIlf1GMcmQi2Fhs6CuJjA9OKs4198YTle+RMZFUVVx4/T2e+/VxY+pFwPkQc0g5TwTEuh70xhMJo4C4pk8ODBqqVH+YEDsliHYGwb8WdxAkq3MNkYxKljn3yiNetBlJDwJ8SA5AA5WAi7YDRxlnxWmEuyq6yFzsgFWGpObNpE3hA3YhWcsoUC1L02HE+oLS+nioMHlcE+qBv2SQn+OVxNnAVFwnUwRmbZNUcuQIcidu3WPFTjz97Vq2X9TBd5bULCsx2kEdulYHErwFlYGmJjYyhFeJcDFOmg5jjALNj3WuhPiDMLZmltWVnYCoBZ5Kknprjle5OaEQHOQhFs/AQeYXFi82apsrSXGQU6FvGvRGwFdEH8s5IHDAcGJI4rcDD45ga9YJR6CnAWlEhufvNUhe2AlBD2RTqgpnb2u+9MJ5XNgAGJwXTqq6+URQ+8aNOoehzgLLwFhev1qbr7KyPkCN6xg6qFlLeLnFWact0I3CtX9RgfXG0k4QOclZycTAmJdj4cORD3qVOyMux/kJMDdDCWL53ZdXDduoakMjNQrFxxK18IPDx73JiA3uRUgRyS3Qj5IMO776qWNQ689ZZMYdnJA4YDyyCWWM+5c8pinz/06EHdbmialw10FlOW/SjDZjMYvs7GA25WkXsrhs9gNgIDk3MpLJjY9Jx+gLO43r93Zvt2NsluBPZcVh9kOCvUWuWxYzJ95RRwFtd+C5+13xj29QCPckJ2OrHU+MCWABmDC7/8oizhkY/vCGEhpoCy8COrx1u2qBY/7D0q45UDAdwfKTQs5AuxP8OD5lbK9nbAddXX1dH5n39WFl7YnVWCqrBD8cofueSIgYHSejhQbcYzYE4IngBU3EKC2AlYnVVbUUEVhw6xpXFCgY5HCspMrWvfG29YL9vbRDqLqdTfGFZnoSqM2pXjI1gRFR9Pe1avVi1jcF7R6PEdp0A8xcPtTnxWMauznJTsRkDZ4SnKkyHSPDJj4ZBcNwIDFUKDS8L7w+qsk5s3Ox7EGwOFt2uh8WtU8egOSvfBHt9xCgxYrlNP/kQIma3zsOFlIKM3ZmRQnMarDC5j8ZLcZ85Q+qpV1Ofhh5WlgY+Tk+XpKltnLDS6BUsglt47kXJjhM1ZyCgcev99WdDDHivYX4pohvgR6pfK+BLisrD8Nf6up7SUUgoLqXNWljz9+8uzz8r8ZJNthPh7w8UvuUcMEXdlTA6zj8Qp34w1a6iVwebWLmzOuo7zsMas6zjLdWddQ1x31jUD0f8BJIpCDWQKMPcAAAAASUVORK5CYII=');
                    logo.setAttribute('class','scheduler-month-logo');
                    const title =  document.createElementNS('http://www.w3.org/2000/svg', "title");
                    title.innerHTML=this.settings.logoTitle;
                    logo.append(title);

                    monthsvg.append(logo);
                    }
                    parent.append(monthsvg);
                    lastmonth = month;
                }
               

            }


        }
    }
    private drawWeeks(){
        let parent = document.getElementById('scheduler-header');

        var dt = this.settings.date;
        if (dt && parent) {

          
            let today = new Date();
            let increment=60*1000*this.settings.timeUnitVal; //one day = 864000000
           
          
            for (let i = 0; i < this.settings.timeUnitsCount; i++) {

               
              
                let cdate = new Date(dt.getTime() + (i * increment));

                let hilight = (cdate.getDay() == 0);
             
                let h = this.settings.weekBoxHeight;
                let w = this.settings.timeWidth * 7;
                let y = this.settings.monthBoxHeight;
                let x = (i * this.settings.timeWidth);
               

              
                if (this.settings.viewWeeks && (hilight||i==0) && this.settings.timeUnitVal==1440) {
                    let weeksvg=document.createElementNS('http://www.w3.org/2000/svg','svg');
                    weeksvg.setAttribute('x',x.toString());
                    weeksvg.setAttribute('y',y.toString());
                    weeksvg.setAttribute('width',w.toString());
                    weeksvg.setAttribute('height',h.toString());

                    let elem = document.createElementNS('http://www.w3.org/2000/svg','rect');
                    elem.setAttribute('x','0');
                    elem.setAttribute('y','0');
                    elem.setAttribute('width',w.toString());
                    elem.setAttribute('height',h.toString());
                    elem.setAttribute('data-date',cdate.toUTCString());
                    elem.classList.add('week-element');
                   
                    let that=this;
                    elem.addEventListener('click', (event) => {
                        that.setView(event, SchedulerView.Week);
                    });
                    let txt=this.getWeekOfYear(cdate).toString();

                    const title =  document.createElementNS('http://www.w3.org/2000/svg', "title");
                    title.innerHTML=txt;
                    elem.append(title);
                    weeksvg.append(elem);

                    let text = document.createElementNS('http://www.w3.org/2000/svg','text');
                    text.setAttribute('x','50%');
                    text.setAttribute('y','50%');
                    text.setAttribute('font-size','70%');
                    text.setAttribute('dominant-baseline','middle');
                    text.setAttribute('fill','gray');     
                    text.classList.add('week-element-text');
                   
                    text.setAttribute('text-anchor', 'middle');

                    text.innerHTML=txt;
                    weeksvg.append(text);
                    parent.append(weeksvg);
                }
               

            }


        }

    }
    private drawTimeUnits(){
        let parent = document.getElementById('scheduler-header');

        let dt = this.settings.date;
        if (dt && parent) {

          
            let today = new Date();
            let increment=60*1000*this.settings.timeUnitVal; //one day = 864000000
           
          
            for (let i = 0; i < this.settings.timeUnitsCount; i++) {

               
               
                let cdate = new Date(dt.getTime() + (i * increment));
                     
                let longdate=cdate.toLocaleDateString('it-it', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
                let daynum=cdate.toLocaleDateString('it-it', {  day:"numeric"});
                let daymonth=cdate.toLocaleDateString('it-it', {  day:"numeric", month:'short'}) ;

              
                let istoday = (today.getDate() == cdate.getDate()) && (today.getMonth() == cdate.getMonth()) && (today.getFullYear() == cdate.getFullYear());
                let hilight = (cdate.getUTCDay() == 0) && this.settings.hilightSunday;

                let h = this.settings.timeElementHeight;
                let w = this.settings.timeWidth;
                let y = this.headerHeight - this.settings.timeElementHeight;
                let x = (i * this.settings.timeWidth);
              

                const elem = document.createElementNS('http://www.w3.org/2000/svg', "rect");
                elem.setAttribute("x", x.toString());
                elem.setAttribute("y", y.toString());
                elem.setAttribute('width', w.toString());
                elem.setAttribute('height', h.toString());
                elem.classList.add('time-element');
               
              
                if (istoday) elem.classList.add('today');
                if (hilight) elem.classList.add('sunday');
                elem.setAttribute('fill', 'transparent');

                let that=this;
              
                parent.append(elem);

                var tx = x + (this.settings.timeWidth / 2);
                if (this.settings.timeUnitVal==60)
                     tx = x ;
                
                var ty = y + h - 4;

                const text = document.createElementNS('http://www.w3.org/2000/svg', "text");
                text.setAttribute("x", tx.toString());
                text.setAttribute("y", ty.toString());
               
                text.classList.add('time-element-text');
                
                text.setAttribute('font-size', '75%');
                text.setAttribute('font-family', 'Arial');
                text.setAttribute('stroke-width', '0.2');
                text.setAttribute('font-weight', 'bold');
                text.setAttribute('text-anchor', 'middle');
                if (istoday) text.classList.add('today');
                if (hilight) text.classList.add('sunday');

                if (this.settings.timeUnitsView>7) {
                    text.innerHTML=daynum;
                }           
                else if (this.settings.timeUnitsView==1)  {                
                    text.innerHTML=longdate;  
                }
                else
                {
                    text.innerHTML=daymonth;
                }

                parent.append(text);

                //dummy rettangolo sopra per cattura click
                const dummy = document.createElementNS('http://www.w3.org/2000/svg', "rect");
                dummy.setAttribute("x", x.toString());
                dummy.setAttribute("y", y.toString());
                dummy.setAttribute('width', w.toString());
                dummy.setAttribute('height', h.toString());
                dummy.classList.add('time-unit');    
                 
                dummy.setAttribute('data-date', cdate.toUTCString());
              
                dummy.addEventListener('click', (event) => {
                   
                    that.setView(event, SchedulerView.Day);

                    if (typeof timeMouseClick == 'function'){
                        timeMouseClick(event, cdate);
                    }
                });

                const title =  document.createElementNS('http://www.w3.org/2000/svg', "title");
                title.innerHTML=longdate;
                dummy.append(title);

                parent.append(dummy);

            }


        }
    }
    getWeekOfYear(date:Date){
        var day= this.getDayOfYear(date);
        var week=Math.floor(day/7);
        return week+1;
       
    }
    getDayOfYear(date:Date){
       
        var start = new Date(date.getFullYear(), 0, 0);
        var diff = date.getTime() - start.getTime();
        var oneDay = 1000 * 60 * 60 * 24;
        var day = Math.floor(diff / oneDay);
        return day;
       
    }
    getTemplate(){
        fetch('https://scheduler-lic.azurewebsites.net/api/scheduler?key=334e49fb-fd18-4ef9-ae7f-11940da757de')
        .then(response => {
            if (!response.ok) {
            throw new Error('Errore nella risposta della richiesta.');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Si è verificato un errore:', error);
        });
    }
  }


 
  

  
