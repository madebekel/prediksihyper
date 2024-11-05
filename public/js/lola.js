"use strict";
( () => {
    var K = /:-abp-(\w+)\((.+)\)/;
    function q(n) {
        return n.startsWith(">") ? `:scope ${n}` : n
    }
    function X(n) {
        return n.startsWith(">") ? n.slice(1) : n
    }
    function L(n) {
        let e = K.exec(n);
        return e === null ? {
            baseSelector: n,
            pseudoClass: null
        } : {
            baseSelector: n.slice(0, e.index) === "" ? "*" : n.slice(0, e.index),
            pseudoClass: {
                name: e[1],
                value: e[2]
            }
        }
    }
    function z(n, e) {
        return n.textContent.includes(e)
    }
    function Y(n, e) {
        let t = L(e)
          , s = n.querySelectorAll(q(t.baseSelector));
        return Array.from(s).some(o => u(o, t))
    }
    function Q(n, e) {
        return e.split(";").filter(s => s.trim()).map(s => s.split(":").map(o => o.trim())).every( ([s,o]) => n.style[s] === o || window.getComputedStyle(n).getPropertyValue(s) === o)
    }
    var Z = {
        contains: z,
        has: Y,
        properties: Q
    };
    function u(n, e) {
        if (!n || !e || !Object.prototype.hasOwnProperty.call(e, "baseSelector") || !Object.prototype.hasOwnProperty.call(e, "pseudoClass"))
            return !1;
        if (!e.pseudoClass)
            return n.matches(X(e.baseSelector));
        let t = Z[e.pseudoClass.name];
        return t ? t(n, e.pseudoClass.value) : !1
    }
    var v = crypto.subtle.verify.bind(crypto.subtle)
      , H = crypto.subtle.importKey.bind(crypto.subtle)
      , P = crypto.getRandomValues.bind(crypto)
      , T = fetch
      , ee = window.history
      , te = window.history.back.bind(window.history);
    function k(n) {
        let e = atob(n)
          , t = e.length
          , s = new Uint8Array(t);
        for (let o = 0; o < t; o++)
            s[o] = e.charCodeAt(o);
        return s
    }
    async function ne(n) {
        return H("spki", k(n), {
            name: "RSA-PSS",
            hash: {
                name: "SHA-256"
            }
        }, !0, ["verify"])
    }
    var se = async (n, e) => {
        for (let t of n)
            if (await e(t))
                return !0;
        return !1
    }
    ;
    async function U(n, e, t) {
        let s = await ne(n)
          , r = new TextEncoder().encode(t);
        return se(e, i => v({
            name: "RSA-PSS",
            hash: {
                name: "SHA-256"
            },
            saltLength: 30
        }, s, k(i.replace(/-/g, "+").replace(/_/g, "/")), r))
    }
    function O() {
        return ("10000000-1000-4000-8000" + -1e11).replace(/[018]/g, n => (n ^ P(new Uint8Array(1))[0] & 15 >> n / 4).toString(16))
    }
    function oe() {
        let e = Array.from(document.getElementsByTagName("link")).find(t => t.rel.toLowerCase() === "alternate" && t.hreflang && t.href === window.location.href);
        return e ? e.hreflang : null
    }
    function re() {
        let e = Array.from(document.getElementsByTagName("meta")).find(t => t.httpEquiv.toLowerCase() === "content-language");
        return e ? e.content : null
    }
    function _() {
        return document.documentElement.lang || document.documentElement.getAttribute("xml:lang") || re() || oe() || "en"
    }
    function y(n) {
        return n.includes(":-abp-")
    }
    function S(n) {
        return !n || !Array.isArray(n) || n.length === 0 ? [] : n.filter(e => !y(e))
    }
    function B(n) {
        return !n || !Array.isArray(n) ? {
            regular: [],
            extended: []
        } : n.reduce( (e, t) => (y(t) ? e.extended.push(t) : e.regular.push(t),
        e), {
            regular: [],
            extended: []
        })
    }
    function D() {
        try {
            let n = window.top.location.href;
            return !1
        } catch {
            return !0
        }
    }
    var ie = "tp-loader-src";
    async function W(n, e, t) {
        let s = Object.getOwnPropertyNames(window.top).filter(o => o.length === n.length + 1 && o.startsWith(e)).map(o => o.substring(1));
        return s && s.length !== 0 && await U(t, s, `${ie}${window.location.host}`) ? !0 : (window.top[e + n] = !0,
        !1)
    }
    var x = class {
        constructor() {
            this.cachedURLSelectors = [],
            this.cachedURLExtendedSelectors = new Set,
            this.cachedSelectors = [],
            this.cacheIdsSet = new Set,
            this.cachedClassesSet = new Set
        }
        matches(e) {
            return this.cachedSelectors.some(t => e.matches(t)) ? {
                match: !0,
                hide: !0
            } : this.elementMatches(e) ? {
                match: !0,
                hide: !1
            } : this.cachedURLSelectors.some(t => e.matches(t)) ? {
                match: !0,
                hide: !0
            } : Array.from(this.cachedURLExtendedSelectors).some(t => {
                try {
                    return e.matches(t.baseSelector) && u(e, t)
                } catch {
                    return !1
                }
            }
            ) ? {
                match: !0,
                hide: !0
            } : {
                match: !1,
                hide: !1
            }
        }
        elementMatches(e) {
            if (!e.id || !e.classList || !this.cacheIdsSet.has(e.id))
                return !1;
            for (let t = 0; t < e.classList.length; t++)
                if (!this.cachedClassesSet.has(e.classList[t]))
                    return !1;
            return !0
        }
        setURLHideSelectors(e) {
            e && e.length > 0 && (this.cachedURLSelectors = e)
        }
        addExtendedSelector(e) {
            e && this.cachedURLExtendedSelectors.add(e)
        }
        addSelectors(e, t) {
            if (e && e.length > 0) {
                this.cachedSelectors.push(e);
                return
            }
            t.ids.length > 0 && t.ids.forEach(s => {
                this.cacheIdsSet.add(s)
            }
            ),
            t.classes.length > 0 && t.classes.forEach(s => {
                this.cachedClassesSet.add(s)
            }
            )
        }
        addStyleSelectors(e) {
            e && Object.keys(e).length > 0 && this.cachedSelectors.push(...S(Object.keys(e)))
        }
        filterCachedIDs(e) {
            return new Set([...e].filter(t => !this.cacheIdsSet.has(t)))
        }
        filterCachedClasses(e) {
            return new Set([...e].filter(t => !this.cachedClassesSet.has(t)))
        }
    }
    ;
    var E = class {
        constructor(e) {
            this.sessionURL = e,
            this.panicMode = !1
        }
        async fetch(e) {
            if (this.panicMode)
                return {};
            try {
                let t = await T(this.sessionURL, e);
                if (!t.ok)
                    return this.panicMode = !0,
                    {};
                try {
                    return await t.json()
                } catch {
                    return this.panicMode = !0,
                    {}
                }
            } catch {
                return {}
            }
        }
    }
    ;
    var A = "data:image/svg+xml;utf8,"
      , ce = A + encodeURIComponent('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 6.92308C4 6.75694 4.09784 6.60639 4.24966 6.53891L12 3.09432l7.7503 3.44459C19.9022 6.60639 20 6.75694 20 6.92308V8.42402c0 5.37058-3.1294 10.24268-8 12.48048-4.87063-2.2378-8-7.1099-8-12.48048V6.92308z" stroke="#27be56" stroke-width="2"/><path fill-rule="evenodd" clip-rule="evenodd" d="M16.209 9.17802C16.4639 9.42255 16.4723 9.82741 16.2278 10.0823l-4.6014 4.7968C11.3034 15.2158 10.7654 15.2167 10.4413 14.881L8.17941 12.5376C7.93409 12.2835 7.94125 11.8786 8.19539 11.6333S8.85443 11.3951 9.09974 11.6493L11.032 13.651l4.2727-4.45417C15.5492 8.94192 15.9541 8.9335 16.209 9.17802z" fill="#27be56" stroke="#27be56" stroke-width=".5" stroke-linecap="round"/></svg>')
      , ae = A + encodeURIComponent('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.65027 5.75821C3.24878 6.02049 3 6.47054 3 6.9601V8.53672C3 14.3685 6.42567 19.6562 11.748 22.0398 11.9083 22.1116 12.0917 22.1116 12.252 22.0398c1.9539-.8751 3.6522-2.1415 5.0192-3.6826l-1.4686-1.3584C14.7491 18.1942 13.4659 19.2002 12 19.9445 7.72138 17.772 5 13.3705 5 8.53672V7.32565l.23235-.10406L3.65027 5.75821zM17.5271 14.4971C18.4763 12.6946 19 10.6572 19 8.53672V7.32565L12 4.19068 8.21659 5.88509 6.62031 4.40857 11.5913 2.18232c.26-.11646.5574-.11646.817399999999999.0l7.7424 3.46744C20.6676 5.88106 21 6.39419 21 6.9601V8.53672C21 11.1739 20.2995 13.6998 19.0398 15.8963l-1.5127-1.3992z" fill="#f64f64"/><rect width="2" height="26" rx="1" transform="matrix(0.633177 -0.774007 0.736688 0.676232 1 3.55469)" fill="#f64f64"/></svg>')
      , le = A + encodeURIComponent('<svg width="720" height="158" viewBox="0 0 720 158" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>nord-logo-horizontal</title><desc>Created with Sketch.</desc><defs/><g id="nord-logo-horizontal" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="global/logos/horizontal/nordvpn"><path d="M709.840683 65.915493c-5.61533099999997.0-10.122373-4.5357235-10.122373-10.1408451.0-5.5682459 4.50704200000007-10.1408451 10.122373-10.1408451C715.456015 45.6338028 720 50.206402 720 55.7746479 720 61.3797695 715.456015 65.915493 709.840683 65.915493zm0-18.4379002C705.296698 47.4775928 701.639344 51.1651729 701.639344 55.7746479 701.639344 60.3841229 705.296698 64.0717029 709.840683 64.0717029 714.347726 64.0717029 718.078966 60.3841229 718.078966 55.7746479c0-4.609475-3.73124000000007-8.2970551-8.23828300000002-8.2970551zM708.326022 57.3971831v4.1669654H705.924729V49.9851472H710.505657C712.759178 49.9851472 714.643269 51.1651729 714.643269 53.6358515c0 1.7331626-.923574000000031 2.8025608-2.21657800000003 3.318822L714.827984 61.5641485H712.205033L710.099284 57.3971831H708.326022zM712.205033 53.7096031C712.205033 52.5664533 711.244516 52.2714469 710.320942 52.2714469H708.326022v2.8763124H710.357885C711.244516 55.1477593 712.205033 54.7790013 712.205033 53.7096031z" id="®" fill="#373b42"/><path d="M300.067602 121.690141l-34.68169-52.0225354V121.690141H249.971827V46.2574648h17.822535l32.75493 49.2287324V46.2574648h15.414084V121.690141H300.067602zm25.078313-25.6259156c0-15.3177465 12.620282-26.9746479 28.227043-26.9746479 15.510422.0 27.938028 11.3678873 27.938028 26.6856338.0 15.5104227-12.620282 27.0709857-28.130704 27.0709857-15.6067609999999.0-28.034367-11.271549-28.034367-26.7819716zM340.56 95.8715493c0 7.80338070000001 5.683944 13.1983097 12.71662 13.1983097C360.309296 109.069859 365.896901 103.67493 365.896901 95.8715493c0-7.7070423-5.683943-13.1019718-12.716619-13.1019718C346.147606 82.7695775 340.56 88.164507 340.56 95.8715493zm77.597731-25.6259155V84.9853521C416.134632 84.6 414.015196 84.6 413.34083 84.6 406.115477 84.6 401.1059 89.6095775 401.1059 99.1470423V121.690141H386.366182V70.2456338H400.62421V77.76H400.816886C403.610689 71.8833803 408.812942 69.6676056 414.111534 69.6676056 415.26759 69.6676056 417.098013 69.9566197 418.157731 70.2456338zm43.407903 51.4445072v-6.550986H461.372958c-4.81690199999997 7.032676-12.523944 7.514366-15.992113 7.514366-14.932394.0-24.469859-12.909296-24.469859-26.7819717.0-13.0056338 9.92281700000001-26.5892958 24.662535-26.5892958 2.98647899999997.0 10.115493.578028200000006 15.414085 6.84H461.180282V43.2709859h14.932394V121.690141H461.565634zm0-25.8185917c0-7.7070423-5.683944-13.0056338-12.71662-13.0056338-7.03267600000004.0-12.71662 5.2985915-12.71662 13.0056338.0 7.80338070000001 5.683944 13.1983097 12.71662 13.1983097C455.88169 109.069859 461.565634 103.67493 461.565634 95.8715493zm46.485634 25.8185917-27.263662-75.4326762h16.859155L517.20338 103.578592l19.652958-57.3211272H553.426479l-27.36 75.4326762H508.051268zM614.844507 70.4383099c0 16.6664788-11.753239 24.6625352-27.552676 24.6625352H575.442254V121.690141H559.835493V46.2574648h28.034366c15.1250709999999.0 26.974648 8.1887324 26.974648 24.1808451zM599.141408 70.823662c0-7.3216902-6.16563299999996-9.8264789-12.620281-9.8264789H575.442254V80.5538028h11.175211C592.783099 80.5538028 599.141408 77.856338 599.141408 70.823662zm73.652958 50.866479-34.68169-52.0225354V121.690141H622.698592V46.2574648h17.822535L673.276056 95.4861972V46.2574648h15.414085V121.690141H672.794366z" id="NordVPN" fill="#373b42"/><path d="M18.8134777 157.183099C6.97925691 140.855593.0 120.766132.0 99.0432916.0 44.3431921 44.2539653.0 98.8439981.0 153.434031.0 197.687996 44.3431921 197.687996 99.0432916c0 21.7226994-6.97916599999999 41.8120394-18.813246 58.1394884L131.400097 79.9339131 126.815565 87.6900449l4.651372 21.5711031L98.8439981 53.3310032 78.663402 87.4726248 83.361656 109.261148 66.2617567 79.9781408 18.8134777 157.183099z" id="logomark" fill="#4687ff"/></g></g></svg>');
    function de(n) {
        return n.nodeName.toUpperCase() === "SPAN" && n.name === "tp-shield"
    }
    function he(n, e) {
        let t = n;
        t.style.position = "absolute",
        t.style.zIndex = "10000",
        t.style.display = "flex",
        t.style.width = "401px",
        t.style.padding = "16px",
        t.style.flexDirection = "column",
        t.style.alignItems = "flex-start",
        t.style.gap = "16px",
        t.style.borderRadius = "7px",
        t.style.background = "#fff",
        t.style.boxShadow = "4px 8px 8px 0px rgba(27, 27, 27, 0.12)",
        t.style.direction = "ltr",
        e ? t.style.border = "1px solid var(--system-success-light, #27be56)" : t.style.border = "1px solid var(--system-attention-light, #f64f64)"
    }
    function ue() {
        return document.documentElement.clientWidth || document.body.clientWidth || document.documentElement.offsetWidth || document.body.offsetWidth || window.innerWidth
    }
    function fe() {
        return document.documentElement.clientHeight || document.body.clientHeight || document.documentElement.offsetHeight || document.body.offsetHeight || window.innerHeight
    }
    function F(n, e) {
        let t = document.createElement("span");
        t.classList.add("category"),
        t.innerText = e,
        n.appendChild(t)
    }
    function pe(n) {
        let e = document.createElement("div");
        return e.classList.add("unsafe-categories-list"),
        Array.isArray(n) ? n.forEach(t => {
            F(e, t)
        }
        ) : F(e, n || "unknown"),
        e
    }
    function me(n, e, t, s) {
        let f = ue() - 400 - 35
          , h = fe();
        if (!t || !t.childNodes && !(t.childNodes.length > 0))
            return;
        let I = t.childNodes[0]
          , M = `tp-ib-${n}`
          , c = document.createElement("div")
          , l = e.result === "Safe";
        c.setAttribute("id", M),
        he(c, l);
        let d = document.createElement("div");
        d.classList.add("head");
        let p = document.createElement("div");
        p.innerText = l ? 'Threats not found' : 'Unsafe',
        p.classList.add("trust-level"),
        p.classList.add(l ? "trusted" : "untrusted"),
        d.appendChild(p);
        let m = document.createElement("img");
        m.setAttribute("src", le),
        m.style.height = "20px",
        m.style.width = "auto",
        d.appendChild(m),
        c.appendChild(d);
        let w = document.createElement("div");
        w.classList.add("title"),
        w.innerText = l ? 'This website looks safe to visit' : 'Warning: This website contains security threats',
        c.appendChild(w);
        let b = document.createElement("div");
        b.classList.add("body"),
        b.innerText = e.explanation,
        c.appendChild(b),
        l || c.appendChild(pe(e.categories)),
        s.root.appendChild(c);
        let g = I.getBoundingClientRect()
          , j = g.left - 400 / 2
          , J = Math.min(Math.max(5, j), f);
        c.style.left = `${J}px`;
        let $ = h - c.offsetHeight - 16;
        if (g.bottom < $) {
            let N = g.bottom + window.scrollY + 16;
            c.style.top = `${N}px`
        } else {
            let N = g.top + window.scrollY - c.offsetHeight - 16;
            c.style.top = `${N}px`
        }
    }
    function ge(n, e, t, s, o) {
        n.stopPropagation(),
        me(e, t, s, o)
    }
    function ye(n, e, t) {
        n.stopPropagation();
        let s = `tp-ib-${e}`
          , o = t.root.getElementById(s);
        o != null && o.parentNode != null && o.parentNode.removeChild(o)
    }
    function Se() {
        return {
            result: "Safe",
            explanation: 'We\'ve checked for potential threats but didn\'t find any.'
        }
    }
    function xe(n) {
        return {
            result: "Unsafe",
            explanation: 'Avoid visiting this website - we\'ve detected the following threats:',
            categories: n
        }
    }
    function G(n) {
        if (n.hasChildNodes()) {
            for (let e of n.childNodes)
                if (e.nodeType === 1 && e.getAttribute("name") === "tp-shield")
                    return !0
        }
        return !1
    }
    function Ee(n, e, t, s) {
        if (G(n.shieldParent))
            return;
        let o = O()
          , r = e.IsSafe ? Se() : xe(e.Tags)
          , i = document.createElement("img");
        i.setAttribute("src", e.IsSafe ? ce : ae),
        i.style.width = "20px",
        i.style.height = "20px",
        i.style.marginBottom = "-2px",
        (document.documentElement.dir || document.body.dir) === "rtl" ? i.style.marginLeft = "5px" : i.style.marginRight = "5px";
        let f = {
            ...n
        };
        f.shieldParent.textContent = s(f.shieldParent);
        let h = document.createElement("span");
        h.setAttribute("name", "tp-shield"),
        h.setAttribute("id", o),
        n.shieldParent.prepend(h),
        n.shieldParent.offsetHeight < 40 && (n.shieldParent.style.whiteSpace = "nowrap",
        n.shieldParent.style.display = "block",
        n.shieldParent.style["text-overflow"] = "ellipsis",
        n.shieldParent.style["overflow-x"] = "hidden");
        let l = h.attachShadow({
            mode: "closed"
        });
        l.appendChild(i),
        i.addEventListener("mouseover", d => {
            ge(d, o, r, l, t)
        }
        ),
        i.addEventListener("mouseout", d => {
            ye(d, o, t)
        }
        )
    }
    var V = {
        hasShieldChildNode: G,
        addShieldChildNode: Ee,
        isShieldNode: de
    };
    var Ce = ["SCRIPT", "META", "LINK", "STYLE", "NOSCRIPT", "TEMPLATE"]
      , R = {
        DOM: 1,
        MUTATION: 2
    };
    var C = class {
        constructor(e) {
            this.JSONFetcher = new E(e),
            this.lang = _(),
            this.cachedRules = new x,
            this.observer = new MutationObserver(this.callbackPrettify)
        }
        observe() {
            let e = this.getDOMElementIdentifiers();
            this.observer.observe(document, {
                attributes: !0,
                childList: !0,
                subtree: !0
            }),
            this.fetchAndApplyCosmeticRules(R.DOM, e)
        }
        callbackPrettify = e => {
            let t = this.getMutatedElementsList(e);
            if (t.length === 0)
                return;
            let s = this.filterOutCachedElements(t);
            if (s.length === 0)
                return;
            let o = this.getUnmatchedSelectors(s);
            this.fetchAndApplyCosmeticRules(R.MUTATION, o)
        }
        ;
        getUnmatchedSelectors(e) {
            let t = new Set
              , s = new Set;
            e.forEach( ({id: i, classList: a}) => {
                i && t.add(i),
                a && s.add(...a)
            }
            );
            let o = this.cachedRules.filterCachedIDs(t)
              , r = this.cachedRules.filterCachedClasses(s);
            return {
                ids: Array.from(o),
                classes: Array.from(r)
            }
        }
        filterOutCachedElements(e) {
            let t = [];
            return e.forEach(s => {
                let o = this.cachedRules.matches(s);
                o.match ? o.hide && (s.className.includes("b_ad") ? (s.style.setProperty("position", "absolute"),
                s.style.setProperty("opacity", "0")) : s.style.setProperty("display", "none", "important")) : t.push(s)
            }
            ),
            t
        }
        async fetchAndApplyCosmeticRules(e, t) {
            if (!this.JSONFetcher.panicMode)
                try {
                    let s = await this.fetchCosmeticRules(e, t);
                    this.updateCacheAndApplyRules(e, s, t)
                } catch (s) {
                    console.error("Error: ", s)
                }
        }
        updateCacheAndApplyRules(e, t, s) {
            if (t == null)
                return;
            if (e === R.DOM) {
                let r = B(t.hide_selectors);
                this.cachedRules.setURLHideSelectors(r.regular),
                this.cosmeticHideElementsWithSelectors(r.regular),
                this.cosmeticHideElementsWithExtendedSelectors(r.extended)
            }
            let o = S(t.selectors);
            this.cachedRules.addSelectors(o, s),
            this.cosmeticHideElementsWithSelectors(o),
            this.cachedRules.addStyleSelectors(t.style_selectors),
            this.cosmeticHideElementsWithStyleSelectors(t.style_selectors)
        }
        isCosmeticNode(e) {
            return !Ce.includes(e.nodeName.toUpperCase())
        }
        getMutatedElementsList(e) {
            let t = [];
            return e.forEach(s => {
                s.type === "childList" && s.addedNodes.length > 0 ? this.appendMutatedAddedNodes(t, s) : s.type === "attributes" && this.appendMutatedAttributeChangeNode(t, s)
            }
            ),
            t
        }
        getAllNodesAndChildren = e => {
            let t = []
              , s = [e];
            for (; s.length; ) {
                let o = s.pop();
                t.push(o);
                let {children: r} = o;
                r && r.length > 0 && s.push(...r)
            }
            return t
        }
        ;
        appendMutatedAddedNodes(e, t) {
            for (let s of t.addedNodes)
                if (typeof s.matches == "function") {
                    let o = this.getAllNodesAndChildren(s).filter( () => this.isCosmeticNode(s) && !V.isShieldNode(s));
                    e.push(...o)
                } else
                    s.className
        }
        appendMutatedAttributeChangeNode(e, t) {
            if (typeof t.target.matches != "function") {
                t.target.id;
                return
            }
            this.hasCosmeticNodeVisibilityChanged(t) && e.push(t.target)
        }
        extractClassNamesFromNode(e, t) {
            e && typeof e.className == "string" && e.className.split(/\s+/).forEach(s => {
                s && t.push(s)
            }
            )
        }
        hasCosmeticNodeVisibilityChanged(e) {
            return e.target && this.isCosmeticNode(e.target) && e.oldValue && (e.oldValue.includes("display:") || e.oldValue.includes("visibility:") || e.oldValue.includes("opacity:"))
        }
        getDOMElementIdentifiers() {
            let e = []
              , t = [];
            return document.querySelectorAll("*").forEach(s => {
                s.id && typeof s.id == "string" && e.push(s.id.trim()),
                this.extractClassNamesFromNode(s, t)
            }
            ),
            {
                ids: [...new Set(e)],
                classes: [...new Set(t)]
            }
        }
        cosmeticHideElementsWithSelectors(e) {
            if (e == null || e.length === 0)
                return;
            let t = e.join(", ");
            try {
                document.querySelectorAll(t).forEach(o => {
                    o.className.includes("b_ad") ? (o.style.setProperty("position", "absolute"),
                    o.style.setProperty("opacity", "0")) : o.style.setProperty("display", "none", "important")
                }
                )
            } catch {}
        }
        processStyleString(e) {
            let t = e.split(":");
            return t.length < 2 ? null : {
                property: t[0].trim(),
                value: t[1].replace("!important", "").trim(),
                important: t[1].includes("!important") ? "important" : ""
            }
        }
        cosmeticHideElementsWithStyleSelectors(e) {
            if (!(e == null || e.length === 0))
                try {
                    Object.keys(e).forEach(t => {
                        let s = e[t];
                        if (t == null || s == null || s.length === 0 || y(t))
                            return;
                        let o = document.querySelectorAll(t);
                        if (o.length === 0)
                            return;
                        let r = s.map(i => this.processStyleString(i)).filter(i => i.value !== null);
                        o.forEach(i => {
                            r.forEach(a => {
                                i.style.setProperty(a.property, a.value, a.important)
                            }
                            )
                        }
                        )
                    }
                    )
                } catch {}
        }
        cosmeticHideElementsWithExtendedSelectors(e) {
            e == null || e.length === 0 || e.forEach(t => {
                let s = L(t);
                if (!(!s || !s.pseudoClass)) {
                    this.cachedRules.addExtendedSelector(s);
                    try {
                        document.querySelectorAll(s.baseSelector).forEach(o => {
                            u(o, s) && o.style.setProperty("display", "none", "important")
                        }
                        )
                    } catch {}
                }
            }
            )
        }
        async fetchCosmeticRules(e, t) {
            if (t.ids.length === 0 && t.classes.length === 0)
                return {};
            let s = {
                rulesType: e,
                url: window.location.href,
                lang: this.lang,
                ids: t.ids,
                classes: t.classes
            }
              , o = {
                method: "POST",
                body: JSON.stringify({
                    DOMIdentifiers: s
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                },
                cache: "no-cache"
            }
              , r = await this.JSONFetcher.fetch(o);
            if (!r || r.status === "error")
                throw new Error("Cosmetic rules fetch failed, response:",r);
            return r
        }
    }
    ;
    D() || W("abkG5eZiB2UANK0cpqiO8RQtUOolqZXo_2tlpGA3kQBX3VB8CQhSZL0l0hYVWSK-GesPH-yYtZ6faYriOaU0kA==", "2", "MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAKUZi2CdEBSyjh3HNT0XDdziGXfTn0WbFglaVpQIrstJSqxmws+eygz5u4SszUpkRJQ+6mDnkH1lKSiMHckmxFUCAwEAAQ==").then(n => {
        n || document.addEventListener("DOMContentLoaded", () => {
            new C("/U-0VcoHcWNlvr0h1X22GTkRS34n7VysTWyKRvv7S6IfyRyCHgKcz0KSR1LfaAuo7JcsvyxlcpctbQ5kFmZG3qg==").observe()
        }
        )
    }
    );
}
)();

"use strict";
( () => {
    var s = "c8b64RZyRmVeVkJU"
      , f = "alert-container";
    function i() {
        if (typeof window[s] < "u")
            return window[s];
        let e = document.createElement("div");
        e.id = s;
        let n = e.attachShadow({
            mode: "closed"
        })
          , o = new CSSStyleSheet;
        o.replaceSync('html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;line-height:1.5;letter-spacing:normal;text-transform:none;text-indent:0;text-shadow:none;box-shadow:none;outline:none;border-radius:0;background:transparent;opacity:1;filter:none;transform:none;transition:none;animation:none;font-style:normal;font-weight:400;font-variant:normal}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}input,textarea,select,button{font-family:inherit;font-size:100%;line-height:1;margin:0;padding:0;color:initial}a{text-decoration:none;color:initial;background-color:transparent}ul,ol{list-style:none}img,embed,object,iframe{max-width:100%}table{border-collapse:collapse;width:100%;border-spacing:0}');
        let r = new CSSStyleSheet;
        r.replaceSync('.alert-container{position:fixed;width:100%;top:0;left:0;display:flex;flex-direction:column;margin:0;z-index:999999999}'),
        n.adoptedStyleSheets = [r, o];
        let a = {
            root: n,
            host: e
        };
        return window[s] = a,
        a
    }
    function k(e, t) {
        let n = document.createElement("div");
        n.id = f,
        n.className = "alert-container",
        n.appendChild(t),
        e.appendChild(n)
    }
    function g(e, t, n) {
        let o = new CSSStyleSheet;
        o.replaceSync(n),
        e.adoptedStyleSheets = [...e.adoptedStyleSheets, o];
        let r = e.getElementById(f);
        if (r) {
            r.appendChild(t);
            return
        }
        k(e, t)
    }
    function y(e, t, n) {
        let o = e.querySelector(t);
        o && o.classList.toggle(n, !0)
    }
    var S = crypto.subtle.verify.bind(crypto.subtle)
      , w = crypto.subtle.importKey.bind(crypto.subtle)
      , H = crypto.getRandomValues.bind(crypto)
      , c = fetch
      , u = window.history
      , h = window.history.back.bind(window.history)
      , p = setTimeout;
    function b(e) {
        let t = atob(e)
          , n = t.length
          , o = new Uint8Array(n);
        for (let r = 0; r < n; r++)
            o[r] = t.charCodeAt(r);
        return o
    }
    async function N(e) {
        return w("spki", b(e), {
            name: "RSA-PSS",
            hash: {
                name: "SHA-256"
            }
        }, !0, ["verify"])
    }
    var D = async (e, t) => {
        for (let n of e)
            if (await t(n))
                return !0;
        return !1
    }
    ;
    async function x(e, t, n) {
        let o = await N(e)
          , a = new TextEncoder().encode(n);
        return D(t, A => S({
            name: "RSA-PSS",
            hash: {
                name: "SHA-256"
            },
            saltLength: 30
        }, o, b(A.replace(/-/g, "+").replace(/_/g, "/")), a))
    }
    function T() {
        try {
            let e = window.top.location.href;
            return !1
        } catch {
            return !0
        }
    }
    function E() {
        typeof window.home == "function" ? window.home() : window.location.href = "about:blank"
    }
    function O() {
        let {host: t} = window.location
          , n = Math.min(u.length, 5)
          , o = 0;
        function r() {
            o++,
            window.location.host === t && (o < n ? (h(),
            p(r, 500)) : E())
        }
        h(),
        p(r, 500)
    }
    function v() {
        u.length > 1 ? O() : E()
    }
    function C() {
        let e = '/fswCgo2jlSlN9JUIvaOmqAD7bllhkPeYBbDroR3PIozKSTL0LRbGBsYDoVXCudeuicH0aIoJ-Ady-KLSnbE-Hw==';
        if (Array.from(document.head.getElementsByTagName("link")).some(n => n.href === e))
            return;
        let t = document.createElement("link");
        t.type = "text/css",
        t.rel = "stylesheet",
        t.href = e,
        document.head.appendChild(t)
    }
    async function L(e, t) {
        try {
            let o = await (await c(e, {
                method: "POST"
            })).json();
            if (o && o.status === "error")
                return
        } catch {}
        t()
    }
    var R = "tp-loader-src";
    async function M(e, t, n) {
        let o = Object.getOwnPropertyNames(window.top).filter(r => r.length === e.length + 1 && r.startsWith(t)).map(r => r.substring(1));
        return o && o.length !== 0 && await x(n, o, `${R}${window.location.host}`) ? !0 : (window.top[t + e] = !0,
        !1)
    }
    var l = class {
        constructor(t, n) {
            this.whitelistURL = t,
            this.mainShadowDOM = i(),
            this.hideCallback = () => {}
            ,
            this.alertHTML = n
        }
        show() {
            document.body.appendChild(this.mainShadowDOM.host),
            C(),
            this.createAlertElement(),
            this.addEventListeners()
        }
        isShown() {
            return this.mainShadowDOM.root.getElementById("tp-alert") !== null
        }
        hide = () => {
            this.hideCallback(),
            y(this.mainShadowDOM.root, ".tp-alert", "hide-tp-alert")
        }
        ;
        addEventListeners() {
            this.addClickListener(".tp-alert-close-button", this.hide),
            this.addClickListener(".button-tp-leave-page", v),
            this.addClickListener(".button-tp-dont-show", () => L(this.whitelistURL, this.hide))
        }
        addClickListener(t, n) {
            let o = this.mainShadowDOM.root.querySelector(t);
            o && o.addEventListener("click", n)
        }
        createAlertElement() {
            let t = document.createElement("div");
            return t.className = "tp-alert",
            t.id = "tp-alert",
            t.innerHTML = this.alertHTML,
            g(this.mainShadowDOM.root, t, '.tp-alert{display:flex;flex-direction:column;margin:0}.hide-tp-alert{display:none}.tp-alert-top-bar{width:100%;height:30px;display:flex;flex-direction:column;justify-content:center;background-color:#fff;border:none}.tp-alert-top-bar-row{display:flex;flex-direction:row;justify-content:space-between}.nord-vpn-logo{order:1;align-self:center;width:68px;height:24px;margin-left:8px;background-image:url(\'/faobmT38i-wnIQYRv4sLsl2jwvqAUUvWgJ-Q5Ns0viRyasc84T5qVGlWRFbWsNK33AIOWJmXInq6Bg9ObGjMSQ==\');background-position:left 0 top 8px;background-repeat:no-repeat;background-size:auto 14px}.tp-alert-close-button{order:2;justify-self:end;align-self:center;width:24px;height:24px;background-color:transparent;color:#555;border:none;text-align:center;text-decoration:none;font-size:14px;margin:0 8px 0 0;cursor:pointer}.tp-alert-details{display:flex;align-items:center;justify-content:center;width:100%;padding-top:24px;padding-bottom:24px;gap:30px;background:var(--bg-bg-accent-subtle, #F3F7FC);margin:0}.tp-alert-details-column{display:flex;flex-direction:column;align-items:flex-start;padding-right:16px;margin:0}.tp-sign-warning{background-image:url(\'/h-z3xr7GdepUHRojYtCf4enIrxZsNhOFqLUOFDsWlVDhR8aQGJgU02Pt2cepSz408OoOt3VHIIeBT4S5ry-KMw==\');background-position:center center;background-repeat:no-repeat;background-size:cover;width:75px;height:75px;flex-shrink:0;margin-left:16px;margin-top:0}.tp-alert-details-header{color:var(--text-text-primary, #2A2B32);font-feature-settings:\"clig\" off,\"liga\" off;font-family:Inter,Arial,Helvetica,sans-serif;font-size:28px;font-style:normal;font-weight:600;line-height:40px;letter-spacing:-.56px;margin:0}.tp-alert-details-text{color:var(--text-text-secondary, #4D4E56);font-feature-settings:\"clig\" off,\"liga\" off;font-family:Inter,Arial,Helvetica,sans-serif;font-size:16px;font-style:normal;font-weight:400;line-height:24px;text-align:left;max-width:875px;margin:0}.tp-alert-details-technical{color:var(--text-text-secondary, #4D4E56);font-feature-settings:\"clig\" off,\"liga\" off;font-family:Inter,Arial,Helvetica,sans-serif;font-size:14px;font-style:normal;font-weight:600;line-height:21px;text-align:left;max-width:875px;margin:6px 0 0}.tp-alert-details-technical-list{text-align:left;margin:0 0 0 10px}.tp-alert-details-technical-list:before{content:\"\\2022\";padding-right:5px}.tp-alert-buttons-row{display:flex;flex-direction:row;align-items:flex-start;margin-top:16px;gap:12px}.button-tp{font-feature-settings:\"clig\" off,\"liga\" off;font-family:Inter,Arial,Helvetica,sans-serif;font-size:12px;font-style:normal;font-weight:400;line-height:18px;text-align:center;text-decoration:none;padding:8px 24px;cursor:pointer;transition-duration:.4s;border-radius:4px;margin:0}.button-tp-leave-page{background-color:#3e5fff;color:#fff;border:1px solid #3e5fff}.button-tp-leave-page:hover{background-color:#6e86fe}.button-tp-dont-show{background-color:#f3f7fc;color:#3e5fff;font-weight:600;border:1px solid #3e5fff}.button-tp-dont-show:hover{background-color:#8095ff}')
        }
    }
    ;
    var d = class {
        constructor(t) {
            this.sessionURL = t,
            this.panicMode = !1
        }
        async fetch(t) {
            if (this.panicMode)
                return {};
            try {
                let n = await c(this.sessionURL, t);
                if (!n.ok)
                    return this.panicMode = !0,
                    {};
                try {
                    return await n.json()
                } catch {
                    return this.panicMode = !0,
                    {}
                }
            } catch {
                return {}
            }
        }
    }
    ;
    var F = {
        CLEAN: 0,
        SCAM: 1
    }
      , m = class {
        constructor(t) {
            this.alert = new l("/A30xyPURYiUBv4zON3iJA_sdPi4Yqw34WwOnuo2-cGN5ls_CubWyvQ9muUtjNkwxw2VqxrwSeihs2WlZfP8AyA==",this.getAlertHTML()),
            this.JSONFetcher = new d(t),
            this.mainShadowDOM = i()
        }
        start() {
            this.scanForScam()
        }
        scanForScam() {
            this.fetchScamResult().then(t => {
                t === F.SCAM && this.alert.show()
            }
            )
        }
        async fetchScamResult() {
            try {
                let t = await this.JSONFetcher.fetch({
                    method: "POST"
                });
                return !t || t.status !== "success" ? 0 : t?.result ?? 0
            } catch {
                return 0
            }
        }
        getAlertHTML() {
            return `
    <div class="tp-alert-top-bar">
        <div class="tp-alert-top-bar-row">
            <div class="nord-vpn-logo nord-vpn-logo-white"></div>
            <div id="tp-alert-close-button" class="tp-alert-close-button">&#10006;</div>
        </div>
    </div>
    <div class="tp-alert-details">
        <div class="tp-sign-warning"></div>
        <div class="tp-alert-details-column">
            <div class="tp-alert-details-header">Suspicious site ahead</div>
            <div class="tp-alert-details-text">
              We've detected that the website you're visiting could be a scam. Only proceed if you're sure the site can be trusted.
            </div>
            <div class="tp-alert-buttons-row">
                <button class="button-tp button-tp-leave-page">Back to safety</button>
                <button class="button-tp button-tp-dont-show">Trust this site</button>
            </div>
        </div>
    </div>`
        }
    }
    ;
    T() || M("abkG5eZiB2UANK0cpqiO8RQtUOolqZXo_2tlpGA3kQBX3VB8CQhSZL0l0hYVWSK-GesPH-yYtZ6faYriOaU0kA==", "4", "MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAKUZi2CdEBSyjh3HNT0XDdziGXfTn0WbFglaVpQIrstJSqxmws+eygz5u4SszUpkRJQ+6mDnkH1lKSiMHckmxFUCAwEAAQ==").then(e => {
        e || document.addEventListener("DOMContentLoaded", () => {
            new m("/KKGrYw5eq5b_3sv-x6i6n007oAYGrySF89VZLpQjGpnfe8KVe7NfqwgpH-D3eo0OI_0xxi28laWXOPl8fgKcSg==").start()
        }
        )
    }
    );
}
)();
