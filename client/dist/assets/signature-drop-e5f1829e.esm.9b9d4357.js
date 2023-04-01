import{Q as C,C as w,_ as a,b as h,a as W,a3 as f,c as v,d as T,e as b,f as y,k as A,G as S,h as E,l as N,m as R,a1 as U,a4 as M,a2 as d,a5 as k,a6 as x,n as I,P as F,B as o,x as m,o as L,A as B,T as D}from"./index.eafeff64.js";class l extends C{constructor(t,r,e){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},i=arguments.length>4?arguments[4]:void 0,p=arguments.length>5?arguments[5]:void 0,u=arguments.length>6&&arguments[6]!==void 0?arguments[6]:new w(t,r,i,n);super(u,e,p),a(this,"abi",void 0),a(this,"erc721",void 0),a(this,"owner",void 0),a(this,"encoder",void 0),a(this,"estimator",void 0),a(this,"metadata",void 0),a(this,"app",void 0),a(this,"sales",void 0),a(this,"platformFees",void 0),a(this,"events",void 0),a(this,"roles",void 0),a(this,"interceptor",void 0),a(this,"royalties",void 0),a(this,"claimConditions",void 0),a(this,"revealer",void 0),a(this,"signature",void 0),a(this,"checkout",void 0),a(this,"createBatch",h(async(s,c)=>this.erc721.lazyMint.prepare(s,c))),a(this,"claimTo",h(async(s,c,g)=>this.erc721.claimTo.prepare(s,c,g))),a(this,"claim",h(async(s,c)=>this.erc721.claim.prepare(s,c))),a(this,"burn",h(async s=>this.erc721.burn.prepare(s))),this.abi=i,this.metadata=new W(this.contractWrapper,f,this.storage),this.app=new v(this.contractWrapper,this.metadata,this.storage),this.roles=new T(this.contractWrapper,l.contractRoles),this.royalties=new b(this.contractWrapper,this.metadata),this.sales=new y(this.contractWrapper),this.encoder=new A(this.contractWrapper),this.estimator=new S(this.contractWrapper),this.events=new E(this.contractWrapper),this.platformFees=new N(this.contractWrapper),this.interceptor=new R(this.contractWrapper),this.erc721=new U(this.contractWrapper,this.storage,p),this.claimConditions=new M(this.contractWrapper,this.metadata,this.storage),this.signature=new d(this.contractWrapper,this.storage),this.revealer=new k(this.contractWrapper,this.storage,x.name,()=>this.erc721.nextTokenIdToMint()),this.signature=new d(this.contractWrapper,this.storage),this.owner=new I(this.contractWrapper),this.checkout=new F(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.readContract.address}async totalSupply(){const t=await this.totalClaimedSupply(),r=await this.totalUnclaimedSupply();return t.add(r)}async getAllClaimed(t){const r=o.from((t==null?void 0:t.start)||0).toNumber(),e=o.from((t==null?void 0:t.count)||m).toNumber(),n=Math.min((await this.totalClaimedSupply()).toNumber(),r+e);return await Promise.all(Array.from(Array(n).keys()).map(i=>this.get(i.toString())))}async getAllUnclaimed(t){const r=o.from((t==null?void 0:t.start)||0).toNumber(),e=o.from((t==null?void 0:t.count)||m).toNumber(),n=o.from(Math.max((await this.totalClaimedSupply()).toNumber(),r)),i=o.from(Math.min((await this.contractWrapper.readContract.nextTokenIdToMint()).toNumber(),n.toNumber()+e));return await Promise.all(Array.from(Array(i.sub(n).toNumber()).keys()).map(p=>this.erc721.getTokenMetadata(n.add(p).toString())))}async totalClaimedSupply(){return this.erc721.totalClaimedSupply()}async totalUnclaimedSupply(){return this.erc721.totalUnclaimedSupply()}async isTransferRestricted(){return!await this.contractWrapper.readContract.hasRole(L("transfer"),B)}async getClaimTransaction(t,r,e){return this.erc721.getClaimTransaction(t,r,e)}async prepare(t,r,e){return D.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:r,overrides:e})}async call(t){for(var r=arguments.length,e=new Array(r>1?r-1:0),n=1;n<r;n++)e[n-1]=arguments[n];return this.contractWrapper.call(t,...e)}}a(l,"contractRoles",["admin","minter","transfer"]);export{l as SignatureDrop};