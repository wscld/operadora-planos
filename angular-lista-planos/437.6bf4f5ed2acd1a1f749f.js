(self.webpackChunkangular_lista_planos=self.webpackChunkangular_lista_planos||[]).push([[437],{437:(t,a,s)=>{"use strict";s.r(a),s.d(a,{PlanosModule:()=>w});var r=s(1116),o=s(2593),n=s(8604),i=s(6985),e=s(8619),l=s(2693),c=s(9996);class p{constructor(t,a,s,r){this.sku=t,this.franquia=a,this.valor=s,this.ativo=r,this.valorInteiro=parseFloat(s)}}var u=s(529);let h=(()=>{class t{constructor(t){this.httpClient=t}obterPlanosParaPlataforma(t){const a=new l.WM({"cache-response":"true"});return this.httpClient.get(`${u.N.apiUrl}/planos/${t}`,{headers:a}).pipe((0,c.U)(t=>t.planos.map(t=>new p(t.sku,t.franquia,t.valor,t.ativo))))}}return t.\u0275fac=function(a){return new(a||t)(e.LFG(l.eN))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var f=s(485),v=s(5739),m=s(2568);function d(t,a){if(1&t){const t=e.EpF();e.TgZ(0,"div",5),e.TgZ(1,"app-card",6),e.NdJ("click",function(){const a=e.CHM(t).$implicit;return e.oxw().selecionarPlano(a)}),e.qZA(),e.qZA()}if(2&t){const t=a.$implicit;e.ekj("inativo",!t.ativo),e.xp6(1),e.MGl("subtitle","R$ ",t.valor,""),e.Q6J("title",t.franquia)}}let g=(()=>{class t{constructor(t,a,s,r){this.planosService=t,this.route=a,this.router=s,this.store=r,this.planos=[],this.plataformaSku="",this.subs=new i.Y}ngOnInit(){this.carregarSkuPlataforma()}carregarSkuPlataforma(){this.plataformaSku=this.route.snapshot.params.plataformaSku,this.carregarPlanos()}carregarPlanos(){this.subs.sink=this.planosService.obterPlanosParaPlataforma(this.plataformaSku).subscribe({next:t=>{this.planos=t}})}selecionarPlano(t){if(!t.ativo)throw new Error("Plano inativo");this.store.dispatch(new n.K(t)),this.router.navigate(["dados",this.plataformaSku,t.sku])}ngOnDestroy(){this.subs.unsubscribe()}}return t.\u0275fac=function(a){return new(a||t)(e.Y36(h),e.Y36(o.gz),e.Y36(o.F0),e.Y36(f.yh))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-planos"]],decls:6,vars:1,consts:[["title","Planos","prevRoute","/plataformas"],[1,"container"],[1,"title"],[1,"grid"],["class","col-12 md:col-4",3,"inativo",4,"ngFor","ngForOf"],[1,"col-12","md:col-4"],[3,"title","subtitle","click"]],template:function(t,a){1&t&&(e._UZ(0,"app-topbar",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e._uU(3,"Planos dispon\xedveis"),e.qZA(),e.TgZ(4,"div",3),e.YNc(5,d,2,4,"div",4),e.qZA(),e.qZA()),2&t&&(e.xp6(5),e.Q6J("ngForOf",a.planos))},directives:[v.o,r.sg,m.A],styles:[""]}),t})();const k=[{path:"",component:g},{path:":plataformaSku",component:g}];let P=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[o.Bz.forChild(k)],o.Bz]}),t})();var b=s(5425);let w=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[r.ez,P,b.m]]}),t})()}}]);