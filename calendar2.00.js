class CalendarItem{
    #reference=1440;
    #duration=1440;
    #denominator=60000;
    #step=10;
    #from;
    #type='';
    #day=-1;
    #orderIndex=1000;
    constructor(id){
       
        if ((id!=undefined)&&(id!=null))
            this.id=id;
        else
            this.id='_calendar_new_id_'+Math.trunc(Math.random()*1000000000);
  
        var now=new Date();      
        var date=new Date(now.getFullYear(),now.getMonth(),now.getDate());   
        this.#from=Math.trunc(date.getTime()/this.#denominator);
      
        this.color='#2531B1';
        this.classes='';
        this.name='';
        this.description='';
        this.type='event';
      
        this.capacity=1440;

    }
    get day() {
        return this.#day;
    }
    set day(val){
        if ((val>=-1) && (val<=6))this.#day=val;
        console.log('day');
    }
    get dateFrom(){
        return new Date(this.#from*this.#denominator);
    }

    get dateTo(){
        return new Date((this.#from+this.#duration)*this.#denominator);
    }

    get duration(){
        return this.#duration;
    }

    set denominator(value) {
        this.from*=this.#denominator;
        this.capacity*=this.#denominator;
        this.capacity/=value;
        this.from/=value;
        this.#denominator=value;
       
    }

    set duration(value) {
        var duration=value;   
        duration=this.#getModulo(duration);
        if (duration>0)
        {
          
            this.#duration=duration;
        }   
    }
    set from(value){
        var f=Math.trunc(value/this.#denominator);
        f=this.#getModulo(f);
        this.#from=f;
       
    }
    get from(){
        return this.#from;
    }
    get to(){
        return this.#from+this.#duration;
    }
    set type(value){
        if (value=='rule'){
            this.#orderIndex=0;
        }
        if (value=='calendar'){
            this.#orderIndex=1;
        }
        if (value=='event'){
            this.#orderIndex=2;
        }
        this.#type=value;
    }
    get type(){
        return this.#type;
    }
    get orderIndex(){
        return this.#orderIndex;
    }
    set to(value){
      
      let v=Math.trunc(value/this.#denominator);
    
      v=this.#getModulo(v);
     
      if (v>0 && v>this.#from){
        this.#duration=v-this.#from;
       
      }
      
    }
    set dateFrom(value){
        var dt=value;
        if (!value.includes('T'))
            dt+='T00:00:00';
        var date=new Date(dt);

        
        if (date!='Invalid Date'){
            this.from=date.getTime();
        }
        else
        console.log(value+ ' - Invalid Date')
    }
    #getModulo(value){
        var v=value;
        var r=value % this.#step;      
        if ((r)>(this.#step/2)) v=v-r+this.#step; else v-=r;
        return v;
    }
    #getModulo2(value) {
        const remainder = value % this.#step;
        const adjusted = value - remainder + (remainder > this.#step / 2 ? this.#step : 0);
        return adjusted;
    }
}

class Calendar {
    #items=[];
    #capacity=1440;
    constructor() {
      
       
       
    }

    newItem(){
       
        var item=new CalendarItem();
        this.items.push(item);
        return item
    }
    addItem(item){
       
        if (item instanceof CalendarItem){
            this.items.push(item);
            return item
        }
        else return null;
       
    }
    get items(){
        return this.#items
    }
    get itemCount(){
        return this.items.length
    }
    getItem(id){
        var item=this.items.find(element => element.id == id);
        return item;  
           
        
    }
  
    getCapacity(instant, day){
         let capacity=this.capacity;
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
    
}





class SchedulerItem{
    #reference=1440;
    #duration=1440;
    #effort=1440;
    #denominator=60000;
    #step=10;
    #from;
    #calendar=null;
    constructor(id){
       
        if ((id!=undefined)&&(id!=null))
            this.id=id;
        else
            this.id='_scheduler_new_itemid_'+Math.trunc(Math.random()*1000000000);
  
        var now=new Date();      
        var date=new Date(now.getFullYear(),now.getMonth(),now.getDay());   
        this.#from=Math.trunc(date.getTime()/this.#denominator);
      
        this.color='#2531B1';
        this.classes='';
        this.name='';
        this.description='';
        this.type='item';
        this.capacity=1440;

    }

    get dateFrom(){
        return new Date(this.#from*this.#denominator);
    }

    get dateTo(){
        return new Date((this.#from+this.#duration)*this.#denominator);
    }

    get duration(){
        return this.#duration;
    }
    get effort(){
        return this.#effort;
    }
    set effort(value){
        if (value>this.#step) {
            let v=this.#getModulo(value);
            this.#effort=v;
            this.#calcDuration();
           
        }
    }
    set denominator(value) {
        this.from*=this.#denominator;
        this.capacity*=this.#denominator;
        this.capacity/=value;
        this.from/=value;
        this.#denominator=value;
       
    }
    getItems(){
        if (this.#calendar!=null){
            let effort=0;
            let sum=0; 
            let items=[]; 
            let item={};   
            let isZero=true;
            let denom=this.#denominator;
            let reference=this.#reference;
            let step=this.#step;
            let f=0;
            while (effort  < this.#effort) {
                let cursor = this.#from+sum;
                let increment = step;
                var e=0;
                let dt=new Date(cursor*denom);
               
                //check rules
                let capacity=this.#calendar.getCapacity(cursor,dt.getDay());

                if (capacity>0){
                    increment=(reference/capacity)*step;
                    e=step;                 
                }   
              
                   
                if ((capacity>0)&&isZero){                   
                        f=cursor;       
                        console.log(cursor);             
                } else if (capacity==0 && !isZero){
                        let item={};  
                        item.from=f;
                        item.to=cursor;  
                        item.dateFrom=new Date(item.from*denom);
                        item.dateTo=new Date(item.to*denom); 
                        item.effort=item.to-item.from;              
                        items.push(item);
                }
              
                isZero=(capacity==0);  
               
                effort+=e;
                sum+=increment;          
              }

              return items;      
        }

    }

   
    set from(value){
        var f=Math.trunc(value/this.#denominator);
        f=this.#getModulo(f);
        this.#calendar.getCapacity
        this.#from=f;
        this.#calcDuration();
       
    }
    get from(){
        return this.#from;
    }

    get to(){
        var to= this.#from+this.#duration;
      
        return to;
    }
    set to(value){   
      var v=Math.trunc(value/this.#denominator); 
      v=this.#getModulo(v);
      if (v>0 && v>this.#from){
        this.#duration=v-this.#from;
        this.#calcEffort();    
      }
      
    }
    set calendar(value){
        if (value instanceof Calendar)
        {
            this.#calendar=value;
        }
    }
    set dateFrom(value){
        var dt=value;
        if (!value.includes('T'))
            dt+='T00:00:00';
        var date=new Date(dt);

        
        if (date!='Invalid Date'){
            this.from=date.getTime();
        }
        else
        console.log(value+ ' - Invalid Date')
    }
    #calcDuration(){
        
        let duration=this.#effort;
      
        if (this.#calendar!=null){
            let effort=0;
            let sum=0;     
      
            let denom=this.#denominator;
            let reference=this.#reference;
            let step=this.#step;
            
            while (effort  < this.#effort) {
                let cursor = this.#from+sum;
                let increment = step;
                var e=0;
                let dt=new Date(cursor*denom);
            
                //check rules
                let capacity=this.#calendar.getCapacity(cursor,dt.getDay());

                if (capacity>0){
                    increment=(reference/capacity)*step;
                    e=step;                 
                }              
                effort+=e;
                sum+=increment;          
              }

              duration=sum;        
        }

        this.#duration=duration;
    }

    #calcEffort(){
        
        let effort=this.#duration;
      
        if (this.#calendar!=null){
            let duration=0;
            effort=0;
        
            let denom=this.#denominator;
            let reference=this.#reference;
            let step=this.#step;
           
            while (duration  < this.#duration) {
                let cursor = this.#from+duration;        
                var e=0;
                let dt=new Date(cursor*denom);
            
                //check rules
                let capacity=this.#calendar.getCapacity(cursor, dt.getDay());

                if (capacity>0){
                 
                    e=((capacity*step)/reference);                 
                }              
                effort+=e;
                duration+=step; 
             
            }

             
        }

        this.#effort=Math.round(effort);
    }

    #getModulo(value){
        var v=value;
        var r=value % this.#step;      
        if ((r)>(this.#step/2)) v=v-r+this.#step; else v-=r;
        return v;
    }
   
}
