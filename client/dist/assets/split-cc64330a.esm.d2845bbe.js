import{C as d,_ as s,a as h,ai as l,c as u,d as w,k as g,G as m,h as W,m as v,B as p,aj as C,ak as y,al as b,T as f}from"./index.eafeff64.js";class o{get chainId(){return this._chainId}constructor(t,a,e){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},n=arguments.length>4?arguments[4]:void 0,i=arguments.length>5?arguments[5]:void 0,c=arguments.length>6&&arguments[6]!==void 0?arguments[6]:new d(t,a,n,r);s(this,"contractWrapper",void 0),s(this,"storage",void 0),s(this,"abi",void 0),s(this,"metadata",void 0),s(this,"app",void 0),s(this,"encoder",void 0),s(this,"estimator",void 0),s(this,"events",void 0),s(this,"roles",void 0),s(this,"interceptor",void 0),s(this,"_chainId",void 0),this._chainId=i,this.abi=n,this.contractWrapper=c,this.storage=e,this.metadata=new h(this.contractWrapper,l,this.storage),this.app=new u(this.contractWrapper,this.metadata,this.storage),this.roles=new w(this.contractWrapper,o.contractRoles),this.encoder=new g(this.contractWrapper),this.estimator=new m(this.contractWrapper),this.events=new W(this.contractWrapper),this.interceptor=new v(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.readContract.address}async getAllRecipients(){const t=[];let a=p.from(0);const e=await this.contractWrapper.readContract.payeeCount();for(;a.lt(e);)try{const r=await this.contractWrapper.readContract.payee(a);t.push(await this.getRecipientSplitPercentage(r)),a=a.add(1)}catch(r){if("method"in r&&r.method.toLowerCase().includes("payee(uint256)"))break;throw r}return t}async balanceOfAllRecipients(){const t=await this.getAllRecipients(),a={};for(const e of t)a[e.address]=await this.balanceOf(e.address);return a}async balanceOfTokenAllRecipients(t){const a=await this.getAllRecipients(),e={};for(const r of a)e[r.address]=await this.balanceOfToken(r.address,t);return e}async balanceOf(t){const a=await this.contractWrapper.readContract.provider.getBalance(this.getAddress()),e=await this.contractWrapper.readContract["totalReleased()"](),r=a.add(e);return this._pendingPayment(t,r,await this.contractWrapper.readContract["released(address)"](t))}async balanceOfToken(t,a){const r=await new C(a,y,this.contractWrapper.getProvider()).balanceOf(this.getAddress()),n=await this.contractWrapper.readContract["totalReleased(address)"](a),i=r.add(n),c=await this._pendingPayment(t,i,await this.contractWrapper.readContract["released(address,address)"](a,t));return await b(this.contractWrapper.getProvider(),a,c)}async getRecipientSplitPercentage(t){const[a,e]=await Promise.all([this.contractWrapper.readContract.totalShares(),this.contractWrapper.readContract.shares(t)]);return{address:t,splitPercentage:e.mul(p.from(1e7)).div(a).toNumber()/1e5}}async withdraw(t){return{receipt:await this.contractWrapper.sendTransaction("release(address)",[t])}}async withdrawToken(t,a){return{receipt:await this.contractWrapper.sendTransaction("release(address,address)",[a,t])}}async distribute(){return{receipt:await this.contractWrapper.sendTransaction("distribute()",[])}}async distributeToken(t){return{receipt:await this.contractWrapper.sendTransaction("distribute(address)",[t])}}async _pendingPayment(t,a,e){return a.mul(await this.contractWrapper.readContract.shares(t)).div(await this.contractWrapper.readContract.totalShares()).sub(e)}async prepare(t,a,e){return f.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:a,overrides:e})}async call(t){for(var a=arguments.length,e=new Array(a>1?a-1:0),r=1;r<a;r++)e[r-1]=arguments[r];return this.contractWrapper.call(t,...e)}}s(o,"contractRoles",["admin"]);export{o as Split};
