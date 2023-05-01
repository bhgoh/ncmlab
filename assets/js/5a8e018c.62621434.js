"use strict";(self.webpackChunkncmlab=self.webpackChunkncmlab||[]).push([[828],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=s(n),k=a,d=c["".concat(p,".").concat(k)]||c[k]||u[k]||i;return n?r.createElement(d,l(l({ref:t},m),{},{components:n})):r.createElement(d,l({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},5162:(e,t,n)=>{n(7294)},8748:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));n(5162);const i={title:"Lab 2 - Create A Single BP VM"},l=void 0,o={unversionedId:"intro_ncm/create_singlebp_vm",id:"intro_ncm/create_singlebp_vm",title:"Lab 2 - Create A Single BP VM",description:"Create a Single Blueprint VM",source:"@site/docs/intro_ncm/create_singlebp_vm.mdx",sourceDirName:"intro_ncm",slug:"/intro_ncm/create_singlebp_vm",permalink:"/ncmlab/intro_ncm/create_singlebp_vm",draft:!1,editUrl:"https://github.com/bhgoh/ncmlab/docs/intro_ncm/create_singlebp_vm.mdx",tags:[],version:"current",frontMatter:{title:"Lab 2 - Create A Single BP VM"},sidebar:"tutorialSidebar",previous:{title:"Lab 1 - Create Project",permalink:"/ncmlab/intro_ncm/create_project"},next:{title:"Lab 3 - Create A Multi-VM BP",permalink:"/ncmlab/intro_ncm/create_multiVM_bp"}},p={},s=[{value:"Create a Single Blueprint VM",id:"create-a-single-blueprint-vm",level:2}],m={toc:s},c="wrapper";function u(e){let{components:t,...i}=e;return(0,a.kt)(c,(0,r.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"create-a-single-blueprint-vm"},"Create a Single Blueprint VM"),(0,a.kt)("p",null,"With ",(0,a.kt)("strong",{parentName:"p"},"Projects")," created in Calm, Sally is now ready to create application\nblueprint to solve the issues. However, before she embarks on it she wants to\ntest out Calm's IaaS features by creating and testing it on a single blueprint VM."),(0,a.kt)("h1",{id:"create-a-singlebp-in-calm"},"Create a SingleBP in Calm"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go to Prism Central -> Services -> Calm.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click on ",(0,a.kt)("img",{src:n(61).Z,width:"155",height:"41"})," button then select ",(0,a.kt)("strong",{parentName:"p"},"Single VM Blueprint"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Under Blueprint Settings, fill up the following:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Name: <CentOS7_your initials>"),(0,a.kt)("li",{parentName:"ul"},"Project: <DMC3-POCxx_your_initials>"),(0,a.kt)("li",{parentName:"ul"},"Environment: <DMC3-POCxx_your_initials>")),(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"VM details")," to proceed to the next step.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'Name your blueprint with your initials e.g - <your_initials_BP>. In addition, as we are\ncreating a CentOS machine,please ensure the displayed operating system shows "Linux". To proceed,\nclick ',(0,a.kt)("strong",{parentName:"p"},"VM configuration"),"."))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"You will also notice that there is a ",(0,a.kt)("strong",{parentName:"p"},"Clone from environment"),"\nbutton beside ",(0,a.kt)("strong",{parentName:"p"},"Preset VM Config")," where you can inherit all vm settings from what\nyou have define in your environment. In this exercise we will learn how to make further\ncustomization to it.")),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In ",(0,a.kt)("strong",{parentName:"p"},"VM Configuration")," window, fill in the details of the machine you wish to deploy: "),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Cluster:   <your_assigned_cluster>")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"VM Name:   <your",(0,a.kt)("em",{parentName:"p"},"initial>"),"@@{calm_int(calm_array_index) + 1}@@")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"vCPU:   4")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Cores per vCPU:   2")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Memory:   8")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Under guest customization, please tick the checkbox beside ",(0,a.kt)("strong",{parentName:"p"},"Guest Customization"),"\nCopy and paste the follow cloud-init script:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"#cloud-config\nusers:\n - name: @@{cred_os.username}@@\n   groups: sudo\n   shell: /bin/bash\n   sudo: ['ALL=(ALL) NOPASSWD:ALL']\n   ssh-authorized-keys:\n     - @@{cred_os.public_key}@@\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Disks: CentOS7.qcow2")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"NICs:  Primary")))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Save"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Launch")," to deploy the blueprint.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"You can check on the deployment status under the ",(0,a.kt)("strong",{parentName:"p"},"Audit")," tab.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Once the status switches from ",(0,a.kt)("strong",{parentName:"p"},"Deployment")," to ",(0,a.kt)("strong",{parentName:"p"},"RUNNING"),".  The task is completed!")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Congratulations you have successfully deployed your first vm!"))))}u.isMDXComponent=!0},61:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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"}}]);