<script>
/**
 * <api-demo> 组件主要用于快速开发模块接口的 demo。
 * 只需要在你的 template 里使用一个标签，如: <api-demo :args="captureImageArgs" title="拍照" @submit="captureImage"></api-demo>
 * 其中，在你的 data 里提供 captureImageArgs: 
 * {
        cameraDirection: {
            type: "enum",
            values: ["back", "front"],
            default: "back",
        },
        saveToPhotoAlbum: {
            type: "bool",
            default: true,
        },
        quality: {
            type: "number",
            default: 0,
        },
    }
 *  <api-demo> 会自动根据每个 arg 的 type 生成对应的表单控件，用户在修改表单后，按下提交按钮，会触发组件的 submit 事件，并传入组装好的参数，形如:
 *
 *  {
 *      cameraDirection: "back",
 *      saveToPhotoAlbum: true,
 *      quality: 10
 *  }
 *
 *  因此，在监听 submit 事件的回调里调用需要展示的 api 即可:
 *
 *  captureImage: function(arg){
 *      camera.captureImage(arg);
 *  }
 * 
 */

    var createFormGroup = function(input, label, createElement) {
        let children = [];
        if (label) {
            children.push(createElement("text", {
                class: ["form-label"],
            }, label))
        }
        if (input) children.push(input);
        let formGroup = createElement("div", {
            class: "flex-row bui-form-group bui-form-group-center".split(),
        }, children);
        return formGroup;
    }
    module.exports = {
        render: function(createElement) {
            var formControls = [];
            this.result = {};
            var self = this;
            for (let name in this.args) {
                let arg = this.args[name];
                var input;
                if (arg.default) self.result[name] = arg.default;
                switch (arg.type) {
                    case "text":
                    input = createElement("input", {
                        class: "form-control height35 span1".split(),
                        domProps: {
                            value: arg.default // TODO: domProps value not working
                        },
                        on: {
                            input: function (event) {
                                self.result[name] = event.target.value;
                            }
                        },
                        attrs: {
                            "placeholder": arg.default, // 由于 domProps 不起作用，这里的 placeholder 暂时用 default 代替
                            "type": "text"
                        }
                    });
                    if (input) formControls.push(createFormGroup(input, name, createElement));
                    break;

                    case "number":
                    input = createElement("input", {
                        class: "form-control height35 span1".split(),
                        domProps: {
                            value: arg.default // TODO: domProps value not working
                        },
                        on: {
                            input: function (event) {
                                self.result[name] = Number(event.value);
                            }
                        },
                        attrs: {
                            "placeholder": arg.default, // 由于 domProps 不起作用，这里的 placeholder 暂时用 default 代替
                            "type": "number"
                        }
                    });
                    if (input) formControls.push(createFormGroup(input, name, createElement));
                    break;

                    case "enum":
                    if (!arg.values) break;
                    let radioItems = arg.values.map(function(curValue){
                        let tmp = {
                            title: curValue,
                            value: curValue,
                            select: curValue === arg.default ? true : false,
                        }
                        return tmp;
                    })
                    input = createElement("bui-radio", {
                        props: {
                            radioItems: radioItems,
                            flexDirection: "flex-row",
                        },
                        on: {
                            change: function(obj) {
                                console.log("Changed:" + obj.value)
                                self.result[name] = obj.value;
                            }
                        }
                    })
                    if (input) formControls.push(createFormGroup(input, name, createElement));
                    break;

                    case "bool":
                    input = createElement("bui-switch", {
                        props: {
                            title: name,
                            checked: arg.default
                        },
                        on: {
                            change: function(bool) {
                                self.result[name] = bool;
                            }
                        }
                    });
                    if (input) formControls.push(createFormGroup(input, null, createElement));
                    break;

                    default:
                    throw `Type of {arg.type} is not supported.`;
                }
                
            }
            formControls.push(createElement("bui-button", {
                props: {
                    value: "Try it out"
                },
                on: {
                    click: function() {
                        console.log("Submit arg: " + JSON.stringify(self.result))
                        self.$emit("submit", self.result);
                    }
                }
            }));

            let wrapper = createElement("div", {
                class: "flex-column bui-form".split()
            }, [createElement("div", {
                class: "flex-column bui-form-box".split()
            }, formControls)]);

            return createElement("bui-panel", {
                props: {
                    border: "1",
                    title: this.title,
                }
            }, [wrapper]);
        },
        data: function() {
            return {
                result: {}
            }
        },
        components: {
            'bui-panel': require('./bui-panel.vue'),
            'bui-radio': require('./bui-radio.vue'),
            'bui-switch': require('./bui-switch.vue'),
        },
        methods: {
            
        },

        props: {
            title: String,
            des: String,
            args: {
                type: Object
            },
        },
    }
</script>

<style src="../css/layout.css"></style>
<style src="../css/form.css"></style>
<style src="../css/header.css"></style>
<style src="../css/example.css"></style>
