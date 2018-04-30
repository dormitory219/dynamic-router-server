webpackJsonp([1],{NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("7+uW"),i=a("mvHQ"),s=a.n(i),n=a("Dd8w"),o=a.n(n),r=a("mtWM"),d=a.n(r),u={name:"DynamicRouter",data:function(){return{version:"",module:"",tag:"",enable:"启用中",loading:!1,pageCount:1,pageNum:1,ruleList:[],lastForm:{},disableDialogVisible:!1,disableLoading:!1,disableDialogText:"",disableSelectedRuleID:"",addRuleDialogVisible:!1,addRuleLoading:!1,addRuleInfo:{module:"",redirect:"",version:"",tags:[]},validateRules:{version:[{type:"string",required:!0,message:"请输入版本号",trigger:"blur"},{min:5,max:11,pattern:/^[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}$/,message:"请输入正确的三段式版本号",trigger:"blur"}],redirect:[{type:"string",required:!0,message:"请输入重定向地址",trigger:"blur"},{min:6,max:50,pattern:/^\w+:\/\/.+$/,message:"请输入正确的重定向地址",trigger:"blur"}],module:[{type:"string",required:!0,message:"请输入模块名",trigger:"blur"},{min:1,max:30,pattern:/^\w[\w\d_]*$/,message:"请输入正确格式的模块名！！",trigger:"blur"}]},addTagInputVisible:!1,newTag:""}},computed:{selectEnable:function(){return"启用中"===this.enable}},methods:{handleTagDelete:function(e){this.addRuleInfo.tags.splice(this.addRuleInfo.tags.indexOf(e),1)},showInput:function(){var e=this;this.addTagInputVisible=!0,this.$nextTick(function(t){e.$refs.saveTagInput.$refs.input.focus()})},handleInputConfirm:function(){var e=this.newTag.trim();""!==e&&this.addRuleInfo.tags.push(e),this.addTagInputVisible=!1,this.newTag=""},submitRule:function(){var e=this;this.$refs.addRuleFrom.validate(function(t){if(t){e.addRuleLoading=!0;var a=o()({},e.addRuleInfo);a.tags=s()(a.tags),"/"!==a.redirect.substring(a.redirect.length-1)&&(a.redirect=a.redirect+"/"),d.a.post("/admin/create",a).then(function(t){if(e.addRuleLoading=!1,t.data.error)return e.$message({type:"error",message:t.data.error,duration:0,showClose:!0});e.$message({type:"success",message:"提交规则成功！！"}),e.addRuleDialogVisible=!1,e.loadData(),e.addRuleInfo={module:"",redirect:"",version:"",tags:[]},e.addTagInputVisible=!1,e.newTag=""}).catch(function(t){e.addRuleLoading=!1,e.$message({type:"error",message:t.message,duration:0,showClose:!0})})}})},disableRule:function(e){this.disableSelectedRuleID=e.ruleID,this.disableDialogText=e.module+" => "+e.redirect,this.disableDialogVisible=!0},submitDisable:function(){var e=this;this.disableLoading=!0,d.a.post("/admin/close",{ruleID:this.disableSelectedRuleID}).then(function(t){if(e.disableLoading=!1,t.data.error)return e.$message({type:"error",message:t.data.error,duration:0,showClose:!0});e.disableDialogVisible=!1,e.loadData()}).catch(function(t){e.disableLoading=!1,e.$message({type:"error",message:t.message,duration:0,showClose:!0})})},showAddDialog:function(){this.addRuleDialogVisible=!0},loadData:function(){var e=this,t={},a=this.version.trim();if(""!==a){if(!/^[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}$/.test(a))return this.$message({type:"error",message:"请输入正确格式的APP版本号， 为三段式！",duration:0,showClose:!0});t.version=a}this.loading=!0;var l=this.module.trim();""!==l&&(t.module=l);var i=this.tag.trim();""!==i&&(t.tag=i);this.selectEnable;this.selectEnable?t.enable=1:t.enable=0,t.pageNum=this.pageNum,this.lastForm.version===t.version&&this.lastForm.module===t.module&&this.lastForm.tag===t.tag&&this.lastForm.enable===t.enable||(t.pageNum=1),this.lastForm=t,d.a.post("/admin/list",t).then(function(a){if(e.loading=!1,a.data.error)return e.$message({showClose:!0,duration:0,message:a.data.error,type:"error"});e.pageCount=a.data.pageCount,e.pageNum=t.pageNum,a.data.ruleList.forEach(function(e){e.enableInfo=e.enable?"启用中":"已停用"}),e.ruleList=a.data.ruleList}).catch(function(t){e.loading=!1,e.$message({showClose:!0,duration:0,message:t.message,type:"error"})})}},mounted:function(){this.pageCount=1,this.pageNum=1,this.loadData()}},c={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"container"},[a("div",{staticClass:"option"},[a("div",{staticClass:"left"},[a("el-input",{staticStyle:{width:"270px"},attrs:{placeholder:"指定版本下启用的规则"},model:{value:e.version,callback:function(t){e.version=t},expression:"version"}},[a("template",{slot:"prepend"},[e._v("查询版本")])],2),e._v(" "),a("el-input",{staticStyle:{width:"230px","margin-left":"10px"},attrs:{placeholder:"具体模块的规则"},model:{value:e.module,callback:function(t){e.module=t},expression:"module"}},[a("template",{slot:"prepend"},[e._v("指定模块")])],2),e._v(" "),a("el-input",{staticStyle:{width:"240px","margin-left":"10px"},attrs:{placeholder:"包含该tag的规则"},model:{value:e.tag,callback:function(t){e.tag=t},expression:"tag"}},[a("template",{slot:"prepend"},[e._v("查询tag")])],2),e._v(" "),a("el-radio-group",{staticStyle:{width:"170px","margin-left":"10px"},attrs:{size:"small"},on:{change:e.loadData},model:{value:e.enable,callback:function(t){e.enable=t},expression:"enable"}},[a("el-radio-button",{attrs:{label:"启用中"}}),e._v(" "),a("el-radio-button",{attrs:{label:"已弃用"}})],1)],1),e._v(" "),a("div",{staticClass:"right"},[a("el-dialog",{directives:[{name:"loading",rawName:"v-loading",value:e.addRuleLoading,expression:"addRuleLoading"}],attrs:{title:"添加规则",visible:e.addRuleDialogVisible,center:"",width:"500px"},on:{"update:visible":function(t){e.addRuleDialogVisible=t}}},[a("el-form",{ref:"addRuleFrom",attrs:{model:e.addRuleInfo,rules:e.validateRules,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"模块名",prop:"module"}},[a("el-input",{staticStyle:{width:"250px"},attrs:{maxlength:30,placeholder:"如 login"},model:{value:e.addRuleInfo.module,callback:function(t){e.$set(e.addRuleInfo,"module",t)},expression:"addRuleInfo.module"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"重定向地址",prop:"redirect"}},[a("el-input",{staticStyle:{width:"300px"},attrs:{maxlength:50,placeholder:"如 axe://login/"},model:{value:e.addRuleInfo.redirect,callback:function(t){e.$set(e.addRuleInfo,"redirect",t)},expression:"addRuleInfo.redirect"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"APP支持版本",prop:"version"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{maxlength:11},model:{value:e.addRuleInfo.version,callback:function(t){e.$set(e.addRuleInfo,"version",t)},expression:"addRuleInfo.version"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"tag管理"}},[a("div",{staticClass:"tags"},[e._l(e.addRuleInfo.tags,function(t){return a("el-tag",{key:t,staticClass:"tag",attrs:{closable:"","disable-transitions":!1},on:{close:function(a){e.handleTagDelete(t)}}},[e._v("\n                "+e._s(t)+"\n              ")])}),e._v(" "),e.addTagInputVisible?a("el-input",{ref:"saveTagInput",staticClass:"input-new-tag",attrs:{maxlength:15,size:"small"},on:{blur:e.handleInputConfirm},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.handleInputConfirm(t):null}},model:{value:e.newTag,callback:function(t){e.newTag=t},expression:"newTag"}}):a("el-button",{staticClass:"button-new-tag",attrs:{size:"small"},on:{click:e.showInput}},[e._v("添加Tag")])],2)])],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.addRuleDialogVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.submitRule}},[e._v("确 定")])],1)],1),e._v(" "),a("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:e.showAddDialog}},[e._v("添加")]),e._v(" "),a("el-button",{attrs:{type:"primary",icon:"el-icon-refresh"},on:{click:e.loadData}},[e._v("刷新")])],1)]),e._v(" "),a("el-table",{staticClass:"table",attrs:{data:e.ruleList,border:""}},[a("el-table-column",{attrs:{label:"模块",prop:"module"}}),e._v(" "),a("el-table-column",{attrs:{label:"重定向",prop:"redirect"}}),e._v(" "),a("el-table-column",{attrs:{label:"APP版本",prop:"version"}}),e._v(" "),a("el-table-column",{attrs:{label:"状态",prop:"enableInfo"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作时间",prop:"operationTime"}}),e._v(" "),a("el-table-column",{attrs:{label:"tags"},scopedSlots:e._u([{key:"default",fn:function(t){return e._l(t.row.tags,function(t){return a("el-tag",{key:t,staticStyle:{"margin-right":"4px","margin-bottom":"3px"},attrs:{type:"info"}},[e._v(e._s(t))])})}}])}),e._v(" "),e.selectEnable?a("el-table-column",{attrs:{label:"停用规则"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"small"},on:{click:function(a){e.disableRule(t.row)}}},[e._v("停用")])]}}])}):e._e()],1),e._v(" "),a("el-dialog",{directives:[{name:"loading",rawName:"v-loading",value:e.disableLoading,expression:"disableLoading"}],attrs:{title:"关闭规则",visible:e.disableDialogVisible,center:"",width:"450px"},on:{"update:visible":function(t){e.disableDialogVisible=t}}},[a("div",[e._v("关闭路由规则 : "+e._s(e.disableDialogText)+" ")]),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.disableDialogVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.submitDisable}},[e._v("确 定")])],1)]),e._v(" "),a("el-pagination",{attrs:{layout:"prev,pager,next",total:e.pageCount,"current-page":e.pageNum},on:{"update:currentPage":function(t){e.pageNum=t},"current-change":e.loadData}})],1)},staticRenderFns:[]};var g=a("VU/8")(u,c,!1,function(e){a("ZYXj")},"data-v-949146c2",null).exports,p=(a("tvR6"),a("zL8q")),m=a.n(p);l.default.config.productionTip=!1,l.default.use(m.a),new l.default({el:"#app",components:{App:g},template:"<App/>"})},ZYXj:function(e,t){},tvR6:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.3a67aa07d37d0b9232a4.js.map