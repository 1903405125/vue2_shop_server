"use strict";(self["webpackChunkvue_shop"]=self["webpackChunkvue_shop"]||[]).push([[223],{3299:function(e,t,s){s.r(t),s.d(t,{default:function(){return d}});var i=function(){var e=this,t=e._self._c;return t("div",[t("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[t("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[e._v("首页")]),t("el-breadcrumb-item",[e._v("权限管理")]),t("el-breadcrumb-item",[e._v("权限列表")])],1),t("el-card",[t("el-table",{attrs:{data:e.rightsList,border:"",stripe:""}},[t("el-table-column",{attrs:{type:"index"}}),t("el-table-column",{attrs:{label:"权限名称",prop:"authName"}}),t("el-table-column",{attrs:{label:"路径",prop:"path"}}),t("el-table-column",{attrs:{label:"权限等级",prop:"level"},scopedSlots:e._u([{key:"default",fn:function(s){return["0"===s.row.level?t("el-tag",[e._v("一级")]):e._e(),"1"===s.row.level?t("el-tag",{attrs:{type:"success"}},[e._v("二级")]):e._e(),"2"===s.row.level?t("el-tag",{attrs:{type:"warning"}},[e._v("三级")]):e._e()]}}])})],1)],1)],1)},r=[],l={name:"MyRights",data(){return{rightsList:[]}},created(){this.getRightsList()},methods:{async getRightsList(){const{data:e}=await this.$http.get("rights/list");if(200!==e.meta.status)return this.$message.error("获取权限列表失败！");this.rightsList=e.data}}},a=l,o=s(1001),n=(0,o.Z)(a,i,r,!1,null,"723fe216",null),d=n.exports},4668:function(e,t,s){s.r(t),s.d(t,{default:function(){return d}});var i=function(){var e=this,t=e._self._c;return t("div",[t("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[t("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[e._v("首页")]),t("el-breadcrumb-item",[e._v("权限管理")]),t("el-breadcrumb-item",[e._v("角色列表")])],1),t("el-card",[t("el-row",[t("el-col",[t("el-button",{attrs:{type:"primary"},on:{click:function(t){e.addRolesVisible=!0}}},[e._v("添加角色")])],1)],1),t("el-table",{attrs:{data:e.rolelist,border:"",stripe:""}},[t("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(s){return e._l(s.row.children,(function(i,r){return t("el-row",{key:i.id,class:["bdbottom",0===r?"bdtop":"","vcenter"]},[t("el-col",{attrs:{span:5}},[t("el-tag",{attrs:{closable:""},on:{close:function(t){return e.removeRightById(s.row,i.id)}}},[e._v(e._s(i.authName))]),t("i",{staticClass:"el-icon-caret-right"})],1),t("el-col",{attrs:{span:19}},e._l(i.children,(function(i,r){return t("el-row",{key:i.id,class:[0===r?"":"bdtop","vcenter"]},[t("el-col",{attrs:{span:6}},[t("el-tag",{attrs:{type:"success",closable:""},on:{close:function(t){return e.removeRightById(s.row,i.id)}}},[e._v(e._s(i.authName))]),t("i",{staticClass:"el-icon-caret-right"})],1),t("el-col",{attrs:{span:18}},e._l(i.children,(function(i){return t("el-tag",{key:i.id,attrs:{type:"warning",closable:""},on:{close:function(t){return e.removeRightById(s.row,i.id)}}},[e._v(e._s(i.authName))])})),1)],1)})),1)],1)}))}}])}),t("el-table-column",{attrs:{type:"index"}}),t("el-table-column",{attrs:{label:"角色名称",prop:"roleName"}}),t("el-table-column",{attrs:{label:"角色描述",prop:"roleDesc"}}),t("el-table-column",{attrs:{label:"操作",width:"300px"},scopedSlots:e._u([{key:"default",fn:function(s){return[t("el-button",{attrs:{size:"mini",type:"primary",icon:"el-icon-deit"},on:{click:function(t){return e.getRoles(s.row)}}},[e._v("编辑")]),t("el-button",{attrs:{size:"mini",type:"danger",icon:"el-icon-delete"},on:{click:function(t){return e.deleteRoles(s.row.id)}}},[e._v("删除")]),t("el-button",{attrs:{size:"mini",type:"warning",icon:"el-icon-setting"},on:{click:function(t){return e.showSetRightDialog(s.row)}}},[e._v("分配权限")])]}}])})],1)],1),t("el-dialog",{attrs:{title:"添加用户",visible:e.addRolesVisible,width:"50%"},on:{"update:visible":function(t){e.addRolesVisible=t},close:e.addDialogClosed}},[t("el-form",{ref:"addRolesRef",attrs:{model:e.addForm,rules:e.addRolesRules,"label-width":"70px"}},[t("el-form-item",{attrs:{label:"角色名称",prop:"roleName","label-width":"80px"}},[t("el-input",{model:{value:e.addForm.roleName,callback:function(t){e.$set(e.addForm,"roleName",t)},expression:"addForm.roleName"}})],1),t("el-form-item",{attrs:{label:"角色描述",prop:"roleDesc","label-width":"80px"}},[t("el-input",{model:{value:e.addForm.roleDesc,callback:function(t){e.$set(e.addForm,"roleDesc",t)},expression:"addForm.roleDesc"}})],1)],1),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.addRolesVisible=!1}}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.addRoles}},[e._v("确 定")])],1)],1),t("el-dialog",{attrs:{title:"编辑用户",visible:e.editRolesVisible,width:"50%"},on:{"update:visible":function(t){e.editRolesVisible=t},close:e.editDialogClosed}},[t("el-form",{ref:"editRolesRef",attrs:{model:e.editForm,rules:e.editRolesRules,"label-width":"70px"}},[t("el-form-item",{attrs:{label:"角色ID","label-width":"80px"}},[t("el-input",{attrs:{disabled:""},model:{value:e.editForm.roleId,callback:function(t){e.$set(e.editForm,"roleId",t)},expression:"editForm.roleId"}})],1),t("el-form-item",{attrs:{label:"角色名称",prop:"roleName","label-width":"80px"}},[t("el-input",{model:{value:e.editForm.roleName,callback:function(t){e.$set(e.editForm,"roleName",t)},expression:"editForm.roleName"}})],1),t("el-form-item",{attrs:{label:"角色描述",prop:"roleDesc","label-width":"80px"}},[t("el-input",{model:{value:e.editForm.roleDesc,callback:function(t){e.$set(e.editForm,"roleDesc",t)},expression:"editForm.roleDesc"}})],1)],1),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.editRolesVisible=!1}}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.editRoles}},[e._v("确 定")])],1)],1),t("el-dialog",{attrs:{title:"分配权限",visible:e.setRightDialogVisible,width:"50%"},on:{"update:visible":function(t){e.setRightDialogVisible=t},close:e.setRightDialogClosed}},[t("el-tree",{ref:"treeRef",attrs:{"show-checkbox":"","node-key":"id",data:e.rightslist,props:e.treeProps,"default-expand-all":!0,"default-checked-keys":e.defKeys}}),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.setRightDialogVisible=!1}}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.allotRights}},[e._v("确 定")])],1)],1)],1)},r=[],l={name:"MyRoles",data(){return{rolelist:[],addRolesVisible:!1,editRolesVisible:!1,setRightDialogVisible:!1,addForm:{roleName:"",roleDesc:""},addRolesRules:{roleName:[{required:!0,message:"请输入角色名称",trigger:"blur"},{min:3,max:10,message:"角色名的长度在3~10个字符之间",trigger:"blur"}],roleDesc:[{required:!0,message:"请输入角色描述",trigger:"blur"},{min:6,max:15,message:"角色描述的长度在6~15个字符之间",trigger:"blur"}]},editForm:{roleId:"",roleName:"",roleDesc:""},editRolesRules:{roleName:[{required:!0,message:"请输入角色名称",trigger:"blur"},{min:3,max:10,message:"角色名的长度在3~10个字符之间",trigger:"blur"}],roleDesc:[{required:!0,message:"请输入角色描述",trigger:"blur"},{min:6,max:15,message:"角色描述的长度在6~15个字符之间",trigger:"blur"}]},rightslist:[],treeProps:{label:"authName",children:"children"},defKeys:[],roleId:""}},created(){this.getRolesList()},methods:{async getRolesList(){const{data:e}=await this.$http.get("roles");if(200!==e.meta.status)return this.$message.error("获取角色列表失败！");this.rolelist=e.data},addDialogClosed(){this.$refs.addRolesRef.resetFields()},addRoles(){this.$refs.addRolesRef.validate((async e=>{if(!e)return;const{data:t}=await this.$http.post("roles",this.addForm);201!==t.meta.status&&this.$message.error("添加角色失败！"),this.$message.success("添加角色成功！"),this.addRolesVisible=!1,this.getRolesList()}))},getRoles(e){this.editRolesVisible=!0,this.editForm.roleId=e.id,this.editForm.roleName=e.roleName,this.editForm.roleDesc=e.roleDesc},editDialogClosed(){this.$refs.editRolesRef.resetFields()},editRoles(){this.$refs.editRolesRef.validate((async e=>{if(!e)return;const{data:t}=await this.$http.put("roles/"+this.editForm.roleId,this.editForm);200!==t.meta.status&&this.$message.error("编辑角色失败！"),this.$message.success("编辑角色成功！"),this.editRolesVisible=!1,this.getRolesList()}))},async deleteRoles(e){const t=await this.$confirm("此操作将永久删除该角色，是否继续？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).catch((e=>e));if("confirm"!==t)return this.$message.info("已取消删除");{const{data:t}=await this.$http.delete("roles/"+e);if(200!==t.meta.status)return this.$message.error("删除角色失败！");this.$message.success("删除角色成功！"),this.getRolesList()}},async removeRightById(e,t){const s=await this.$confirm("此操作将永久删除该权限，是否继续？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).catch((e=>e));if("confirm"!==s)return this.$message.info("已取消删除");{const{data:s}=await this.$http.delete(`roles/${e.id}/rights/${t}`);if(200!==s.meta.status)return this.$message.error("删除权限失败！");e.children=s.data}},async showSetRightDialog(e){this.roleId=e.id;const{data:t}=await this.$http.get("rights/tree");if(200!==t.meta.status)return this.$message.error("获取权限数据失败！");this.rightslist=t.data,this.getLeafKeys(e,this.defKeys),this.setRightDialogVisible=!0},getLeafKeys(e,t){if(!e.children)return t.push(e.id);e.children.forEach((e=>{this.getLeafKeys(e,t)}))},setRightDialogClosed(){this.defKeys=[]},async allotRights(){const e=[...this.$refs.treeRef.getCheckedKeys(),...this.$refs.treeRef.getHalfCheckedKeys()],t=e.join(","),{data:s}=await this.$http.post(`roles/${this.roleId}/rights`,{rids:t});if(200!==s.meta.status)return this.$message.error("分配权限失败！");this.$message.success("分配权限成功！"),this.getRolesList(),this.setRightDialogVisible=!1}}},a=l,o=s(1001),n=(0,o.Z)(a,i,r,!1,null,null,null),d=n.exports},6819:function(e,t,s){s.r(t),s.d(t,{default:function(){return d}});var i=function(){var e=this,t=e._self._c;return t("div",[t("el-breadcrumb",{attrs:{separator:"/"}},[t("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[e._v("首页")]),t("el-breadcrumb-item",[e._v("用户管理")]),t("el-breadcrumb-item",[e._v("用户列表")])],1),t("el-card",{staticClass:"box-card"},[t("el-row",{attrs:{gutter:20}},[t("el-col",{attrs:{span:8}},[t("el-input",{attrs:{placeholder:"请输入内容",clearable:""},on:{clear:e.getUserList},model:{value:e.queryInfo.query,callback:function(t){e.$set(e.queryInfo,"query",t)},expression:"queryInfo.query"}},[t("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.getUserList},slot:"append"})],1)],1),t("el-col",{attrs:{span:4}},[t("el-button",{attrs:{type:"primary"},on:{click:function(t){e.addDialogVisible=!0}}},[e._v("添加用户")])],1)],1),t("el-table",{attrs:{data:e.userlist,border:"",stripe:""}},[t("el-table-column",{attrs:{label:"#",type:"index"}}),t("el-table-column",{attrs:{label:"姓名",prop:"username"}}),t("el-table-column",{attrs:{label:"邮箱",prop:"email"}}),t("el-table-column",{attrs:{label:"电话",prop:"mobile"}}),t("el-table-column",{attrs:{label:"角色",prop:"role_name"}}),t("el-table-column",{attrs:{label:"状态"},scopedSlots:e._u([{key:"default",fn:function(s){return[t("el-switch",{on:{change:function(t){return e.userStateChanged(s.row)}},model:{value:s.row.mg_state,callback:function(t){e.$set(s.row,"mg_state",t)},expression:"scope.row.mg_state"}})]}}])}),t("el-table-column",{attrs:{label:"操作",width:"180px"},scopedSlots:e._u([{key:"default",fn:function(s){return[t("el-button",{attrs:{type:"primary",icon:"el-icon-edit",size:"mini"},on:{click:function(t){return e.showEditDialog(s.row.id)}}}),t("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"mini"},on:{click:function(t){return e.removeUserById(s.row.id)}}}),t("el-tooltip",{attrs:{effect:"dark",placement:"top",content:"分配角色",enterable:!1}},[t("el-button",{attrs:{type:"warning",icon:"el-icon-setting",size:"mini"},on:{click:function(t){return e.setRole(s.row)}}})],1)]}}])})],1),t("el-pagination",{attrs:{"current-page":e.queryInfo.pagenum,"page-sizes":[1,2,5,10],"page-size":e.queryInfo.pagesize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),t("el-dialog",{attrs:{title:"添加用户",visible:e.addDialogVisible,width:"50%"},on:{"update:visible":function(t){e.addDialogVisible=t},close:e.addDialogClosed}},[t("el-form",{ref:"addFormRef",attrs:{model:e.addForm,rules:e.addFormRules,"label-width":"70px"}},[t("el-form-item",{attrs:{label:"用户名",prop:"username"}},[t("el-input",{model:{value:e.addForm.username,callback:function(t){e.$set(e.addForm,"username",t)},expression:"addForm.username"}})],1),t("el-form-item",{attrs:{label:"密码",prop:"password"}},[t("el-input",{model:{value:e.addForm.password,callback:function(t){e.$set(e.addForm,"password",t)},expression:"addForm.password"}})],1),t("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[t("el-input",{model:{value:e.addForm.email,callback:function(t){e.$set(e.addForm,"email",t)},expression:"addForm.email"}})],1),t("el-form-item",{attrs:{label:"手机",prop:"mobile"}},[t("el-input",{model:{value:e.addForm.mobile,callback:function(t){e.$set(e.addForm,"mobile",t)},expression:"addForm.mobile"}})],1)],1),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.addDialogVisible=!1}}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.addUser}},[e._v("确 定")])],1)],1),t("el-dialog",{attrs:{title:"修改用户",visible:e.editDialogVisible,width:"50%"},on:{"update:visible":function(t){e.editDialogVisible=t},close:e.editDialogClosed}},[t("el-form",{ref:"editFormRef",attrs:{model:e.editForm,rules:e.editFormRules}},[t("el-form-item",{attrs:{label:"用户名"}},[t("el-input",{attrs:{disabled:""},model:{value:e.editForm.username,callback:function(t){e.$set(e.editForm,"username",t)},expression:"editForm.username"}})],1),t("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[t("el-input",{model:{value:e.editForm.email,callback:function(t){e.$set(e.editForm,"email",t)},expression:"editForm.email"}})],1),t("el-form-item",{attrs:{label:"手机",prop:"mobile"}},[t("el-input",{model:{value:e.editForm.mobile,callback:function(t){e.$set(e.editForm,"mobile",t)},expression:"editForm.mobile"}})],1)],1),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.editDialogVisible=!1}}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.editUserInfo}},[e._v("确 定")])],1)],1),t("el-dialog",{attrs:{title:"分配角色",visible:e.setRoleDialogVisible,width:"50%"},on:{"update:visible":function(t){e.setRoleDialogVisible=t},close:e.setRikeDuakigClosed}},[t("div",[t("p",[e._v("当前的用户："+e._s(e.userInfo.username))]),t("p",[e._v("当前的角色："+e._s(e.userInfo.role_name))]),t("p",[e._v(" 分配新角色： "),t("el-select",{attrs:{placeholder:"请选择"},model:{value:e.selectedRoleId,callback:function(t){e.selectedRoleId=t},expression:"selectedRoleId"}},e._l(e.rolesList,(function(e){return t("el-option",{key:e.id,attrs:{label:e.roleName,value:e.id}})})),1)],1)]),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.setRoleDialogVisible=!1}}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.saveRoleInfo}},[e._v("确 定")])],1)])],1)},r=[],l=(s(1703),{name:"UserList",data(){var e=(e,t,s)=>{const i=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;if(i.test(t))return s();s(new Error("请输入合法的邮箱"))},t=(e,t,s)=>{const i=/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;if(i.test(t))return s();s(new Error("请输入合法的手机号"))};return{selectedRoleId:"",rolesList:[],queryInfo:{query:"",pagenum:1,pagesize:2},userlist:[],total:0,addDialogVisible:!1,addForm:{username:"",password:"",email:"",mobile:""},addFormRules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:3,max:10,message:"用户名的长度在3~10个字符之间",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:6,max:15,message:"用户名的长度在6~15个字符之间",trigger:"blur"}],email:[{required:!0,message:"请输入邮箱",trigger:"blur"},{validator:e,trigger:"blur"}],mobile:[{required:!0,message:"请输入手机号",trigger:"blur"},{validator:t,trigger:"blur"}]},editDialogVisible:!1,editForm:{},editFormRules:{email:[{required:!0,message:"请输入用户邮箱",trigger:"blur"},{validator:e,trigger:"blur"}],mobile:[{required:!0,message:"请输入用户手机",trigger:"blur"},{validator:t,trigger:"blur"}]},setRoleDialogVisible:!1,userInfo:{}}},created(){this.getUserList()},methods:{async getUserList(){const{data:e}=await this.$http.get("users",{params:this.queryInfo});if(200!==e.meta.status)return this.$message.error("获取用户列表失败！");this.userlist=e.data.users,this.total=e.data.total},handleSizeChange(e){this.queryInfo.pagesize=e,this.getUserList()},handleCurrentChange(e){this.queryInfo.pagenum=e,this.getUserList()},async userStateChanged(e){const{data:t}=await this.$http.put(`users/${e.id}/state/${e.mg_state}`);if(200!==t.meta.status)return e.mg_state=!e.mg_state,this.$message.error("更新用户状态失败！");this.$message.success("更新用户状态成功！")},addDialogClosed(){this.$refs.addFormRef.resetFields()},addUser(){this.$refs.addFormRef.validate((async e=>{if(!e)return;const{data:t}=await this.$http.post("users",this.addForm);201!==t.meta.status&&this.$message.error("添加用户失败！"),this.$message.success("添加用户成功！"),this.addDialogVisible=!1,this.getUserList()}))},async showEditDialog(e){const{data:t}=await this.$http.get("users/"+e);if(200!==t.meta.status)return this.$message.error("查询用户信息失败！");this.editForm=t.data,this.editDialogVisible=!0},editDialogClosed(){this.$refs.editFormRef.resetFields()},editUserInfo(){this.$refs.editFormRef.validate((async e=>{if(!e)return;const{data:t}=await this.$http.put("users/"+this.editForm.id,{email:this.editForm.email,mobile:this.editForm.mobile});if(200!==t.meta.status)return this.$message.error("更新用户信息失败！");this.editDialogVisible=!1,this.getUserList(),this.$message.success("更新用户信息成功！")})),this.editDialogVisible=!1},async removeUserById(e){const t=await this.$confirm("此操作将永久删除该用户，是否继续？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).catch((e=>e));if("confirm"!==t)return this.$message.info("已取消删除");{const{data:t}=await this.$http.delete("users/"+e);if(200!==t.meta.status)return this.$message.error("删除用户失败！");this.$message.success("删除用户成功！"),this.getUserList()}},async setRole(e){this.userInfo=e;const{data:t}=await this.$http.get("roles");if(200!==t.meta.status)return this.$message.error("获取用户列表失败！");this.rolesList=t.data,this.setRoleDialogVisible=!0},async saveRoleInfo(){if(!this.selectedRoleId)return this.$message.error("请选择要分配的角色！");const{data:e}=await this.$http.put(`users/${this.userInfo.id}/role`,{rid:this.selectedRoleId});if(200!==e.meta.status)return this.$message.error("更新角色失败！");this.$message.success("更新角色成功！"),this.getUserList(),this.setRoleDialogVisible=!1},setRikeDuakigClosed(){this.selectedRoleId="",this.userInfo={}}}}),a=l,o=s(1001),n=(0,o.Z)(a,i,r,!1,null,null,null),d=n.exports}}]);
//# sourceMappingURL=Users_Rights_Roles.52a2a33b.js.map