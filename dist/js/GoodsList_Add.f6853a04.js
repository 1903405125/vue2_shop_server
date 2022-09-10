"use strict";(self["webpackChunkvue_shop"]=self["webpackChunkvue_shop"]||[]).push([[580],{7068:function(t,e,a){a.r(e),a.d(e,{default:function(){return u}});var s=function(){var t=this,e=t._self._c;return e("div",[e("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[e("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[t._v("首页")]),e("el-breadcrumb-item",[t._v("商品管理")]),e("el-breadcrumb-item",[t._v("添加商品")])],1),e("el-card",[e("el-alert",{attrs:{title:"添加商品信息",type:"info","show-icon":"",closable:!1}}),e("el-steps",{attrs:{space:200,active:t.activeIndex-0,"finish-status":"success","align-center":""}},[e("el-step",{attrs:{title:"基本信息"}}),e("el-step",{attrs:{title:"商品参数"}}),e("el-step",{attrs:{title:"商品属性"}}),e("el-step",{attrs:{title:"商品图片"}}),e("el-step",{attrs:{title:"商品内容"}}),e("el-step",{attrs:{title:"完成"}})],1),e("el-form",{ref:"addFormRef",attrs:{model:t.addForm,rules:t.addFormRules,"label-width":"100px","label-position":"top"}},[e("el-tabs",{attrs:{"tab-position":"left","before-leave":t.beforeTabLeave},on:{"tab-click":t.tabClicked},model:{value:t.activeIndex,callback:function(e){t.activeIndex=e},expression:"activeIndex"}},[e("el-tab-pane",{attrs:{label:"基本信息",name:"0"}},[e("el-form-item",{attrs:{label:"商品名称",prop:"goods_name"}},[e("el-input",{model:{value:t.addForm.goods_name,callback:function(e){t.$set(t.addForm,"goods_name",e)},expression:"addForm.goods_name"}})],1),e("el-form-item",{attrs:{label:"商品价格",prop:"goods_price"}},[e("el-input",{attrs:{type:"number"},model:{value:t.addForm.goods_price,callback:function(e){t.$set(t.addForm,"goods_price",e)},expression:"addForm.goods_price"}})],1),e("el-form-item",{attrs:{label:"商品重量",prop:"goods_weight"}},[e("el-input",{attrs:{type:"number"},model:{value:t.addForm.goods_weight,callback:function(e){t.$set(t.addForm,"goods_weight",e)},expression:"addForm.goods_weight"}})],1),e("el-form-item",{attrs:{label:"商品数量",prop:"goods_number"}},[e("el-input",{attrs:{type:"number"},model:{value:t.addForm.goods_number,callback:function(e){t.$set(t.addForm,"goods_number",e)},expression:"addForm.goods_number"}})],1),e("el-form-item",{attrs:{label:"商品分类",prop:"goods_cat"}},[e("el-cascader",{attrs:{"expand-trigger":"hover",options:t.catelist,props:t.cateProps},model:{value:t.addForm.goods_cat,callback:function(e){t.$set(t.addForm,"goods_cat",e)},expression:"addForm.goods_cat"}})],1)],1),e("el-tab-pane",{attrs:{label:"商品参数",name:"1"}},t._l(t.manyTableData,(function(a){return e("el-form-item",{key:a.attr_id,attrs:{label:a.attr_name}},[e("el-checkbox-group",{model:{value:a.attr_vals,callback:function(e){t.$set(a,"attr_vals",e)},expression:"item.attr_vals"}},t._l(a.attr_vals,(function(t,a){return e("el-checkbox",{key:a,attrs:{label:t,border:""}})})),1)],1)})),1),e("el-tab-pane",{attrs:{label:"商品属性",name:"2"}},t._l(t.onlyTableData,(function(a){return e("el-form-item",{key:a.attr_id,attrs:{label:a.attr_name}},[e("el-input",{model:{value:a.attr_vals,callback:function(e){t.$set(a,"attr_vals",e)},expression:"item.attr_vals"}})],1)})),1),e("el-tab-pane",{attrs:{label:"商品图片",name:"3"}},[e("el-upload",{attrs:{action:t.uploadURL,"on-preview":t.handlePreview,"on-remove":t.handleRemove,"list-type":"picture",headers:t.headerObj,"on-success":t.handleSuccess}},[e("el-button",{attrs:{size:"small",type:"primary"}},[t._v("点击上传")])],1)],1),e("el-tab-pane",{attrs:{label:"商品内容",name:"4"}},[e("quill-editor",{model:{value:t.addForm.goods_introduce,callback:function(e){t.$set(t.addForm,"goods_introduce",e)},expression:"addForm.goods_introduce"}}),e("el-button",{staticClass:"btnAdd",attrs:{type:"primary"},on:{click:t.add}},[t._v("添加商品")])],1)],1)],1)],1),e("el-dialog",{attrs:{title:"图片预览",visible:t.previewVisible,width:"50%"},on:{"update:visible":function(e){t.previewVisible=e}}},[e("img",{staticClass:"previewImg",attrs:{src:t.previewPath}})])],1)},r=[],o=a(2611),i=a.n(o),l={name:"GoodsAdd",data(){return{previewVisible:!1,previewPath:"",headerObj:{Authorization:window.sessionStorage.getItem("token")},uploadURL:"http://127.0.0.1:8888/api/private/v1/upload",onlyTableData:[],manyTableData:[],cateProps:{label:"cat_name",value:"cat_id",children:"children"},catelist:[],activeIndex:0,addForm:{goods_name:"",goods_price:1,goods_weight:1,goods_number:1,goods_cat:[],pics:[],goods_introduce:"",attrs:[]},addFormRules:{goods_name:[{required:!0,message:"请输入商品名称",trigger:"blur"}],goods_price:[{required:!0,message:"请输入商品价格",trigger:"blur"}],goods_weight:[{required:!0,message:"请输入商品重量",trigger:"blur"}],goods_number:[{required:!0,message:"请输入商品数量",trigger:"blur"}],goods_cat:[{required:!0,message:"请选择商品分类",trigger:"blur"}]}}},created(){this.getCateList()},methods:{add(){this.$refs.addFormRef.validate((async t=>{if(!t)return this.$message.error("请填写必要的表单项！");const e=i().cloneDeep(this.addForm);e.goods_cat=e.goods_cat.join(","),this.manyTableData.forEach((t=>{const e={attr_id:t.attr_id,attr_value:t.attr_vals.join("")};this.addForm.attrs.push(e)})),this.onlyTableData.forEach((t=>{const e={attr_id:t.attr_id,attr_value:t.attr_vals};this.addForm.attrs.push(e)})),e.attrs=this.addForm.attrs;const{data:a}=await this.$http.post("goods",e);if(201!==a.meta.status)return this.$message.error("添加商品失败！");this.$message.success("添加商品成功！"),this.$router.push("/goods")}))},handleSuccess(t){const e={pic:t.data.tmp_path};this.addForm.pics.push(e)},handleRemove(t){const e=t.response.data.tmp_path,a=this.addForm.pics.findIndex((t=>t.pic===e));this.addForm.pics.splice(a,1)},handlePreview(t){this.previewPath=t.response.data.url,this.previewVisible=!0},async tabClicked(){if("1"===this.activeIndex){const{data:t}=await this.$http.get(`categories/${this.cateId}/attributes`,{params:{sel:"many"}});if(200!==t.meta.status)return this.$message.error("获取动态参数列表失败！");t.data.forEach((t=>{t.attr_vals=0===t.attr_vals.length?[]:t.attr_vals.split(",")})),this.manyTableData=t.data}else if("2"===this.activeIndex){const{data:t}=await this.$http.get(`categories/${this.cateId}/attributes`,{params:{sel:"only"}});if(200!==t.meta.status)return this.$message.error("获取静态属性列表失败！");this.onlyTableData=t.data}},beforeTabLeave(t,e){if("0"===e&&3!==this.addForm.goods_cat.length&&2!==this.addForm.goods_cat.length)return this.$message.error("清先选择商品分类！"),!1},async getCateList(){const{data:t}=await this.$http.get("categories");if(200!==t.meta.status)return this.$message.error("获取商品分类数据失败！");this.catelist=t.data}},computed:{cateId(){return this.addForm.goods_cat.length>1?this.addForm.goods_cat[this.addForm.goods_cat.length-1]:null}}},d=l,n=a(1001),c=(0,n.Z)(d,s,r,!1,null,"cdb586a8",null),u=c.exports},9257:function(t,e,a){a.r(e),a.d(e,{default:function(){return n}});var s=function(){var t=this,e=t._self._c;return e("div",[e("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[e("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[t._v("首页")]),e("el-breadcrumb-item",[t._v("商品管理")]),e("el-breadcrumb-item",[t._v("商品列表")])],1),e("el-card",[e("el-row",{attrs:{gutter:20}},[e("el-col",{attrs:{span:8}},[e("el-input",{attrs:{placeholder:"请输入内容",clearable:""},on:{clear:t.getGoodsList},model:{value:t.queryInfo.query,callback:function(e){t.$set(t.queryInfo,"query",e)},expression:"queryInfo.query"}},[e("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:t.getGoodsList},slot:"append"})],1)],1),e("el-col",{attrs:{span:4}},[e("el-button",{attrs:{type:"primary"},on:{click:t.goAddpage}},[t._v("添加商品")])],1)],1),e("el-table",{attrs:{data:t.goodslist,border:"",stripe:""}},[e("el-table-column",{attrs:{type:"index",label:"#"}}),e("el-table-column",{attrs:{label:"商品名称",prop:"goods_name"}}),e("el-table-column",{attrs:{label:"商品价格（元）",prop:"goods_price",width:"95px"}}),e("el-table-column",{attrs:{label:"商品重量",prop:"goods_weight",width:"70px"}}),e("el-table-column",{attrs:{label:"创建时间",prop:"add_time",width:"140px"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(t._f("dateFormat")(e.row.add_time))+" ")]}}])}),e("el-table-column",{attrs:{label:"操作",width:"130px"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-button",{attrs:{type:"primary",icon:"el-icon-edit",size:"mini"}}),e("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"mini"},on:{click:function(e){return t.removeById(a.row.goods_id)}}})]}}])})],1),e("el-pagination",{attrs:{"current-page":t.queryInfo.pagenum,"page-sizes":[5,10,15,20],"page-size":t.queryInfo.pagesize,layout:"total, sizes, prev, pager, next, jumper",total:t.total,background:""},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)},r=[],o={name:"GoodsList",data(){return{queryInfo:{query:"",pagenum:1,pagesize:10},goodslist:[],total:0}},created(){this.getGoodsList()},methods:{goAddpage(){this.$router.push("/goods/add")},async removeById(t){const e=await this.$confirm("此操作将永久删除该商品，是否继续？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).catch((t=>t));if("confirm"!==e)return this.$message.info("已取消删除");{const{data:e}=await this.$http.delete(`goods/${t}`);if(200!==e.meta.status)return this.$message.error("删除失败！");this.$message.success("删除成功!"),this.getGoodsList()}},handleSizeChange(t){this.queryInfo.pagesize=t,this.getGoodsList()},handleCurrentChange(t){this.queryInfo.pagenum=t,this.getGoodsList()},async getGoodsList(){const{data:t}=await this.$http.get("goods",{params:this.queryInfo});if(200!==t.meta.status)return this.$message.error("获取商品列表失败！");this.$message.success("获取商品列表成功！"),this.goodslist=t.data.goods,this.total=t.data.total}}},i=o,l=a(1001),d=(0,l.Z)(i,s,r,!1,null,"6d5cc1f6",null),n=d.exports}}]);
//# sourceMappingURL=GoodsList_Add.f6853a04.js.map