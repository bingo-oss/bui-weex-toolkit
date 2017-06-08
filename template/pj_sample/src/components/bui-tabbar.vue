<template>
    <div class="bui-tabbar-wrapper" v-bind:style="{'top':top}">
        <embed
                v-for="(item , i) in tabItems"
                :src="item.src"
                :key="i"
                type="weex"
                :style="{ visibility: item.visibility }"
                class="bui-tabbar-content"
        ></embed>
        <div class="bui-tabbar" append="tree">
            <tabitem
                    v-for="item in tabItems"
                    :key="item.index"
                    :index="item.index"
                    :icon="item.icon"
                    :title="item.title"
                    :titleColor="item.titleColor"
                    :titleSize="item.titleSize"
                    :backgroundColor="item.backgroundColor"
                    :type="item.type"
                    @tabItemOnClick="tabItemOnClick"
            ></tabItem>
        </div>
    </div>
</template>

<style src="../css/tabbar.css"></style>

<script>
    module.exports = {
        props: {
            tabItems: {default: []},
            selectedColor: {default: '#4ca4fe'},
            unselectedColor: {default: '#818181'},
            top: {default: "0px"}, //内容区域离顶部的距离
            selectedIndex: {default: 0} //当前选中的索引
        },
        data: function () {
            return {}
        },
        components: {
            tabitem: require('./bui-tabbar-item.vue')
        },
        created: function () {
            this.select(this.selectedIndex);
        },
        methods: {
            tabItemOnClick: function (e) {
                this.selectedIndex = e.index;
                this.select(e.index);
                this.$emit('tabItemOnClick', e);
            },
            select: function (index) {
                for (var i = 0; i < this.tabItems.length; i++) {
                    var tabItem = this.tabItems[i];
                    if (i == index) {
//                        tabItem.icon = tabItem.selectedImage;
                        tabItem.titleColor = this.selectedColor;
                        tabItem.visibility = 'visible';
                    }
                    else {
//                        tabItem.icon = tabItem.image;
                        tabItem.titleColor = this.unselectedColor;
                        tabItem.visibility = 'hidden';
                    }
                }
            }
        }
    }
</script>
