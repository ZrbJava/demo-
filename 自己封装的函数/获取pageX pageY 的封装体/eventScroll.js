
var eventScroll = {
    //��ȡҳ��page��Ҫ������
    getPageX:function(e){
        return this.getEvent(e).pageX || (this.getClientX(e)+(window.pageXOffset||document.documentElement.scrollLeft || 0));
    },
    getPageY:function(e){
        return this.getEvent(e).pageY || (this.getClientY(e)+(window.pageYOffset||document.documentElement.scrollTop || 0));
    },
    //�¼�������ݴ���
    getEvent:function(e){
      return   e || window.event;
    },
    //��ȡ������������
    getClientX:function(e){
        //eventScroll.getEvent.clientX
        return this.getEvent(e).clientX;
        e.clientX;
    },
    getClientY:function(e){
        return this.getEvent(e).clientY;
    }
}


