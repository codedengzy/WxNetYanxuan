// components/titleNavBar/titleNavBar.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        isMask:false
    },

    /**
     * 组件的方法列表
     */
    methods: {
        dropDownEvent(){
            this.setData({
                isMask:this.data.isMask===false?true:false
            });
        },
    }
})
