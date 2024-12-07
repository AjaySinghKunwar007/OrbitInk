/**
 * TinyMCE version 7.5.1 (TBD)
 */
! function() {
	"use strict";
	const e = Object.getPrototypeOf,
		t = (e, t, o) => {
			var n;
			return !!o(e, t.prototype) || (null === (n = e.constructor) || void 0 === n ? void 0 : n.name) === t.name
		},
		o = e => o => (e => {
			const o = typeof e;
			return null === e ? "null" : "object" === o && Array.isArray(e) ? "array" : "object" === o && t(e, String, ((e, t) => t.isPrototypeOf(e))) ? "string" : o
		})(o) === e,
		n = e => t => typeof t === e,
		s = e => t => e === t,
		r = o("string"),
		a = o("object"),
		i = o => ((o, n) => a(o) && t(o, n, ((t, o) => e(t) === o)))(o, Object),
		l = o("array"),
		c = s(null),
		d = n("boolean"),
		u = s(void 0),
		m = e => null == e,
		g = e => !m(e),
		p = n("function"),
		h = n("number"),
		f = (e, t) => {
			if (l(e)) {
				for (let o = 0, n = e.length; o < n; ++o)
					if (!t(e[o])) return !1;
				return !0
			}
			return !1
		},
		b = () => {},
		v = e => () => e(),
		x = (e, t) => (...o) => e(t.apply(null, o)),
		y = e => () => e,
		w = e => e,
		S = (e, t) => e === t;

	function C(e, ...t) {
		return (...o) => {
			const n = t.concat(o);
			return e.apply(null, n)
		}
	}
	const k = e => t => !e(t),
		O = e => () => {
			throw new Error(e)
		},
		_ = e => e(),
		T = y(!1),
		E = y(!0);
	class A {
		constructor(e, t) {
			this.tag = e, this.value = t
		}
		static some(e) {
			return new A(!0, e)
		}
		static none() {
			return A.singletonNone
		}
		fold(e, t) {
			return this.tag ? t(this.value) : e()
		}
		isSome() {
			return this.tag
		}
		isNone() {
			return !this.tag
		}
		map(e) {
			return this.tag ? A.some(e(this.value)) : A.none()
		}
		bind(e) {
			return this.tag ? e(this.value) : A.none()
		}
		exists(e) {
			return this.tag && e(this.value)
		}
		forall(e) {
			return !this.tag || e(this.value)
		}
		filter(e) {
			return !this.tag || e(this.value) ? this : A.none()
		}
		getOr(e) {
			return this.tag ? this.value : e
		}
		or(e) {
			return this.tag ? this : e
		}
		getOrThunk(e) {
			return this.tag ? this.value : e()
		}
		orThunk(e) {
			return this.tag ? this : e()
		}
		getOrDie(e) {
			if (this.tag) return this.value;
			throw new Error(null != e ? e : "Called getOrDie on None")
		}
		static from(e) {
			return g(e) ? A.some(e) : A.none()
		}
		getOrNull() {
			return this.tag ? this.value : null
		}
		getOrUndefined() {
			return this.value
		}
		each(e) {
			this.tag && e(this.value)
		}
		toArray() {
			return this.tag ? [this.value] : []
		}
		toString() {
			return this.tag ? `some(${this.value})` : "none()"
		}
	}
	A.singletonNone = new A(!1);
	const M = Array.prototype.slice,
		D = Array.prototype.indexOf,
		B = Array.prototype.push,
		I = (e, t) => D.call(e, t),
		F = (e, t) => I(e, t) > -1,
		R = (e, t) => {
			for (let o = 0, n = e.length; o < n; o++)
				if (t(e[o], o)) return !0;
			return !1
		},
		N = (e, t) => {
			const o = [];
			for (let n = 0; n < e; n++) o.push(t(n));
			return o
		},
		z = (e, t) => {
			const o = [];
			for (let n = 0; n < e.length; n += t) {
				const s = M.call(e, n, n + t);
				o.push(s)
			}
			return o
		},
		L = (e, t) => {
			const o = e.length,
				n = new Array(o);
			for (let s = 0; s < o; s++) {
				const o = e[s];
				n[s] = t(o, s)
			}
			return n
		},
		V = (e, t) => {
			for (let o = 0, n = e.length; o < n; o++) t(e[o], o)
		},
		H = (e, t) => {
			const o = [],
				n = [];
			for (let s = 0, r = e.length; s < r; s++) {
				const r = e[s];
				(t(r, s) ? o : n).push(r)
			}
			return {
				pass: o,
				fail: n
			}
		},
		P = (e, t) => {
			const o = [];
			for (let n = 0, s = e.length; n < s; n++) {
				const s = e[n];
				t(s, n) && o.push(s)
			}
			return o
		},
		U = (e, t, o) => (((e, t) => {
			for (let o = e.length - 1; o >= 0; o--) t(e[o], o)
		})(e, ((e, n) => {
			o = t(o, e, n)
		})), o),
		W = (e, t, o) => (V(e, ((e, n) => {
			o = t(o, e, n)
		})), o),
		j = (e, t) => ((e, t, o) => {
			for (let n = 0, s = e.length; n < s; n++) {
				const s = e[n];
				if (t(s, n)) return A.some(s);
				if (o(s, n)) break
			}
			return A.none()
		})(e, t, T),
		$ = (e, t) => {
			for (let o = 0, n = e.length; o < n; o++)
				if (t(e[o], o)) return A.some(o);
			return A.none()
		},
		G = e => {
			const t = [];
			for (let o = 0, n = e.length; o < n; ++o) {
				if (!l(e[o])) throw new Error("Arr.flatten item " + o + " was not an array, input: " + e);
				B.apply(t, e[o])
			}
			return t
		},
		q = (e, t) => G(L(e, t)),
		Y = (e, t) => {
			for (let o = 0, n = e.length; o < n; ++o)
				if (!0 !== t(e[o], o)) return !1;
			return !0
		},
		X = e => {
			const t = M.call(e, 0);
			return t.reverse(), t
		},
		K = (e, t) => P(e, (e => !F(t, e))),
		J = (e, t) => {
			const o = {};
			for (let n = 0, s = e.length; n < s; n++) {
				const s = e[n];
				o[String(s)] = t(s, n)
			}
			return o
		},
		Q = e => [e],
		Z = (e, t) => {
			const o = M.call(e, 0);
			return o.sort(t), o
		},
		ee = (e, t) => t >= 0 && t < e.length ? A.some(e[t]) : A.none(),
		te = e => ee(e, 0),
		oe = e => ee(e, e.length - 1),
		ne = p(Array.from) ? Array.from : e => M.call(e),
		se = (e, t) => {
			for (let o = 0; o < e.length; o++) {
				const n = t(e[o], o);
				if (n.isSome()) return n
			}
			return A.none()
		},
		re = Object.keys,
		ae = Object.hasOwnProperty,
		ie = (e, t) => {
			const o = re(e);
			for (let n = 0, s = o.length; n < s; n++) {
				const s = o[n];
				t(e[s], s)
			}
		},
		le = (e, t) => ce(e, ((e, o) => ({
			k: o,
			v: t(e, o)
		}))),
		ce = (e, t) => {
			const o = {};
			return ie(e, ((e, n) => {
				const s = t(e, n);
				o[s.k] = s.v
			})), o
		},
		de = e => (t, o) => {
			e[o] = t
		},
		ue = (e, t, o, n) => {
			ie(e, ((e, s) => {
				(t(e, s) ? o : n)(e, s)
			}))
		},
		me = (e, t) => {
			const o = {};
			return ue(e, t, de(o), b), o
		},
		ge = (e, t) => {
			const o = [];
			return ie(e, ((e, n) => {
				o.push(t(e, n))
			})), o
		},
		pe = (e, t) => {
			const o = re(e);
			for (let n = 0, s = o.length; n < s; n++) {
				const s = o[n],
					r = e[s];
				if (t(r, s, e)) return A.some(r)
			}
			return A.none()
		},
		he = e => ge(e, w),
		fe = (e, t) => be(e, t) ? A.from(e[t]) : A.none(),
		be = (e, t) => ae.call(e, t),
		ve = (e, t) => be(e, t) && void 0 !== e[t] && null !== e[t],
		xe = (e, t, o = S) => e.exists((e => o(e, t))),
		ye = e => {
			const t = [],
				o = e => {
					t.push(e)
				};
			for (let t = 0; t < e.length; t++) e[t].each(o);
			return t
		},
		we = (e, t, o) => e.isSome() && t.isSome() ? A.some(o(e.getOrDie(), t.getOrDie())) : A.none(),
		Se = (e, t) => null != e ? A.some(t(e)) : A.none(),
		Ce = (e, t) => e ? A.some(t) : A.none(),
		ke = (e, t, o) => "" === t || e.length >= t.length && e.substr(o, o + t.length) === t,
		Oe = (e, t) => Te(e, t) ? ((e, t) => e.substring(t))(e, t.length) : e,
		_e = (e, t, o = 0, n) => {
			const s = e.indexOf(t, o);
			return -1 !== s && (!!u(n) || s + t.length <= n)
		},
		Te = (e, t) => ke(e, t, 0),
		Ee = (e, t) => ke(e, t, e.length - t.length),
		Ae = (Eo = /^\s+|\s+$/g, e => e.replace(Eo, "")),
		Me = e => e.length > 0,
		De = e => !Me(e),
		Be = e => void 0 !== e.style && p(e.style.getPropertyValue),
		Ie = e => {
			if (null == e) throw new Error("Node cannot be null or undefined");
			return {
				dom: e
			}
		},
		Fe = (e, t) => {
			const o = (t || document).createElement("div");
			if (o.innerHTML = e, !o.hasChildNodes() || o.childNodes.length > 1) {
				const t = "HTML does not have a single root node";
				throw console.error(t, e), new Error(t)
			}
			return Ie(o.childNodes[0])
		},
		Re = (e, t) => {
			const o = (t || document).createElement(e);
			return Ie(o)
		},
		Ne = (e, t) => {
			const o = (t || document).createTextNode(e);
			return Ie(o)
		},
		ze = Ie,
		Le = "undefined" != typeof window ? window : Function("return this;")(),
		Ve = (e, t) => ((e, t) => {
			let o = null != t ? t : Le;
			for (let t = 0; t < e.length && null != o; ++t) o = o[e[t]];
			return o
		})(e.split("."), t),
		He = Object.getPrototypeOf,
		Pe = e => {
			const t = Ve("ownerDocument.defaultView", e);
			return a(e) && ((e => ((e, t) => {
				const o = ((e, t) => Ve(e, t))(e, t);
				if (null == o) throw new Error(e + " not available on this browser");
				return o
			})("HTMLElement", e))(t).prototype.isPrototypeOf(e) || /^HTML\w*Element$/.test(He(e).constructor.name))
		},
		Ue = e => e.dom.nodeName.toLowerCase(),
		We = e => t => (e => e.dom.nodeType)(t) === e,
		je = e => $e(e) && Pe(e.dom),
		$e = We(1),
		Ge = We(3),
		qe = We(9),
		Ye = We(11),
		Xe = e => t => $e(t) && Ue(t) === e,
		Ke = (e, t) => {
			const o = e.dom;
			if (1 !== o.nodeType) return !1;
			{
				const e = o;
				if (void 0 !== e.matches) return e.matches(t);
				if (void 0 !== e.msMatchesSelector) return e.msMatchesSelector(t);
				if (void 0 !== e.webkitMatchesSelector) return e.webkitMatchesSelector(t);
				if (void 0 !== e.mozMatchesSelector) return e.mozMatchesSelector(t);
				throw new Error("Browser lacks native selectors")
			}
		},
		Je = e => 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType || 0 === e.childElementCount,
		Qe = (e, t) => {
			const o = void 0 === t ? document : t.dom;
			return Je(o) ? A.none() : A.from(o.querySelector(e)).map(ze)
		},
		Ze = (e, t) => e.dom === t.dom,
		et = (e, t) => {
			const o = e.dom,
				n = t.dom;
			return o !== n && o.contains(n)
		},
		tt = e => ze(e.dom.ownerDocument),
		ot = e => qe(e) ? e : tt(e),
		nt = e => ze(ot(e).dom.documentElement),
		st = e => ze(ot(e).dom.defaultView),
		rt = e => A.from(e.dom.parentNode).map(ze),
		at = e => A.from(e.dom.parentElement).map(ze),
		it = e => A.from(e.dom.offsetParent).map(ze),
		lt = e => L(e.dom.childNodes, ze),
		ct = (e, t) => {
			const o = e.dom.childNodes;
			return A.from(o[t]).map(ze)
		},
		dt = e => ct(e, 0),
		ut = (e, t) => ({
			element: e,
			offset: t
		}),
		mt = (e, t) => {
			const o = lt(e);
			return o.length > 0 && t < o.length ? ut(o[t], 0) : ut(e, t)
		},
		gt = e => Ye(e) && g(e.dom.host),
		pt = e => ze(e.dom.getRootNode()),
		ht = e => gt(e) ? e : ze(ot(e).dom.body),
		ft = e => {
			const t = pt(e);
			return gt(t) ? A.some(t) : A.none()
		},
		bt = e => ze(e.dom.host),
		vt = e => {
			const t = Ge(e) ? e.dom.parentNode : e.dom;
			if (null == t || null === t.ownerDocument) return !1;
			const o = t.ownerDocument;
			return ft(ze(t)).fold((() => o.body.contains(t)), (n = vt, s = bt, e => n(s(e))));
			var n, s
		},
		xt = () => yt(ze(document)),
		yt = e => {
			const t = e.dom.body;
			if (null == t) throw new Error("Body is not available yet");
			return ze(t)
		},
		wt = (e, t, o) => {
			if (!(r(o) || d(o) || h(o))) throw console.error("Invalid call to Attribute.set. Key ", t, ":: Value ", o, ":: Element ", e), new Error("Attribute value was not simple");
			e.setAttribute(t, o + "")
		},
		St = (e, t, o) => {
			wt(e.dom, t, o)
		},
		Ct = (e, t) => {
			const o = e.dom;
			ie(t, ((e, t) => {
				wt(o, t, e)
			}))
		},
		kt = (e, t) => {
			const o = e.dom.getAttribute(t);
			return null === o ? void 0 : o
		},
		Ot = (e, t) => A.from(kt(e, t)),
		_t = (e, t) => {
			const o = e.dom;
			return !(!o || !o.hasAttribute) && o.hasAttribute(t)
		},
		Tt = (e, t) => {
			e.dom.removeAttribute(t)
		},
		Et = (e, t, o) => {
			if (!r(o)) throw console.error("Invalid call to CSS.set. Property ", t, ":: Value ", o, ":: Element ", e), new Error("CSS value must be a string: " + o);
			Be(e) && e.style.setProperty(t, o)
		},
		At = (e, t) => {
			Be(e) && e.style.removeProperty(t)
		},
		Mt = (e, t, o) => {
			const n = e.dom;
			Et(n, t, o)
		},
		Dt = (e, t) => {
			const o = e.dom;
			ie(t, ((e, t) => {
				Et(o, t, e)
			}))
		},
		Bt = (e, t) => {
			const o = e.dom;
			ie(t, ((e, t) => {
				e.fold((() => {
					At(o, t)
				}), (e => {
					Et(o, t, e)
				}))
			}))
		},
		It = (e, t) => {
			const o = e.dom,
				n = window.getComputedStyle(o).getPropertyValue(t);
			return "" !== n || vt(e) ? n : Ft(o, t)
		},
		Ft = (e, t) => Be(e) ? e.style.getPropertyValue(t) : "",
		Rt = (e, t) => {
			const o = e.dom,
				n = Ft(o, t);
			return A.from(n).filter((e => e.length > 0))
		},
		Nt = e => {
			const t = {},
				o = e.dom;
			if (Be(o))
				for (let e = 0; e < o.style.length; e++) {
					const n = o.style.item(e);
					t[n] = o.style[n]
				}
			return t
		},
		zt = (e, t, o) => {
			const n = Re(e);
			return Mt(n, t, o), Rt(n, t).isSome()
		},
		Lt = (e, t) => {
			const o = e.dom;
			At(o, t), xe(Ot(e, "style").map(Ae), "") && Tt(e, "style")
		},
		Vt = e => e.dom.offsetWidth,
		Ht = (e, t) => {
			const o = o => {
					const n = t(o);
					if (n <= 0 || null === n) {
						const t = It(o, e);
						return parseFloat(t) || 0
					}
					return n
				},
				n = (e, t) => W(t, ((t, o) => {
					const n = It(e, o),
						s = void 0 === n ? 0 : parseInt(n, 10);
					return isNaN(s) ? t : t + s
				}), 0);
			return {
				set: (t, o) => {
					if (!h(o) && !o.match(/^[0-9]+$/)) throw new Error(e + ".set accepts only positive integer values. Value was " + o);
					const n = t.dom;
					Be(n) && (n.style[e] = o + "px")
				},
				get: o,
				getOuter: o,
				aggregate: n,
				max: (e, t, o) => {
					const s = n(e, o);
					return t > s ? t - s : 0
				}
			}
		},
		Pt = Ht("height", (e => {
			const t = e.dom;
			return vt(e) ? t.getBoundingClientRect().height : t.offsetHeight
		})),
		Ut = e => Pt.get(e),
		Wt = e => Pt.getOuter(e),
		jt = (e, t) => ({
			left: e,
			top: t,
			translate: (o, n) => jt(e + o, t + n)
		}),
		$t = jt,
		Gt = (e, t) => void 0 !== e ? e : void 0 !== t ? t : 0,
		qt = e => {
			const t = e.dom.ownerDocument,
				o = t.body,
				n = t.defaultView,
				s = t.documentElement;
			if (o === e.dom) return $t(o.offsetLeft, o.offsetTop);
			const r = Gt(null == n ? void 0 : n.pageYOffset, s.scrollTop),
				a = Gt(null == n ? void 0 : n.pageXOffset, s.scrollLeft),
				i = Gt(s.clientTop, o.clientTop),
				l = Gt(s.clientLeft, o.clientLeft);
			return Yt(e).translate(a - l, r - i)
		},
		Yt = e => {
			const t = e.dom,
				o = t.ownerDocument.body;
			return o === t ? $t(o.offsetLeft, o.offsetTop) : vt(e) ? (e => {
				const t = e.getBoundingClientRect();
				return $t(t.left, t.top)
			})(t) : $t(0, 0)
		},
		Xt = Ht("width", (e => e.dom.offsetWidth)),
		Kt = e => Xt.get(e),
		Jt = e => Xt.getOuter(e),
		Qt = e => {
			let t, o = !1;
			return (...n) => (o || (o = !0, t = e.apply(null, n)), t)
		},
		Zt = () => eo(0, 0),
		eo = (e, t) => ({
			major: e,
			minor: t
		}),
		to = {
			nu: eo,
			detect: (e, t) => {
				const o = String(t).toLowerCase();
				return 0 === e.length ? Zt() : ((e, t) => {
					const o = ((e, t) => {
						for (let o = 0; o < e.length; o++) {
							const n = e[o];
							if (n.test(t)) return n
						}
					})(e, t);
					if (!o) return {
						major: 0,
						minor: 0
					};
					const n = e => Number(t.replace(o, "$" + e));
					return eo(n(1), n(2))
				})(e, o)
			},
			unknown: Zt
		},
		oo = (e, t) => {
			const o = String(t).toLowerCase();
			return j(e, (e => e.search(o)))
		},
		no = /.*?version\/\ ?([0-9]+)\.([0-9]+).*/,
		so = e => t => _e(t, e),
		ro = [{
			name: "Edge",
			versionRegexes: [/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],
			search: e => _e(e, "edge/") && _e(e, "chrome") && _e(e, "safari") && _e(e, "applewebkit")
		}, {
			name: "Chromium",
			brand: "Chromium",
			versionRegexes: [/.*?chrome\/([0-9]+)\.([0-9]+).*/, no],
			search: e => _e(e, "chrome") && !_e(e, "chromeframe")
		}, {
			name: "IE",
			versionRegexes: [/.*?msie\ ?([0-9]+)\.([0-9]+).*/, /.*?rv:([0-9]+)\.([0-9]+).*/],
			search: e => _e(e, "msie") || _e(e, "trident")
		}, {
			name: "Opera",
			versionRegexes: [no, /.*?opera\/([0-9]+)\.([0-9]+).*/],
			search: so("opera")
		}, {
			name: "Firefox",
			versionRegexes: [/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],
			search: so("firefox")
		}, {
			name: "Safari",
			versionRegexes: [no, /.*?cpu os ([0-9]+)_([0-9]+).*/],
			search: e => (_e(e, "safari") || _e(e, "mobile/")) && _e(e, "applewebkit")
		}],
		ao = [{
			name: "Windows",
			search: so("win"),
			versionRegexes: [/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]
		}, {
			name: "iOS",
			search: e => _e(e, "iphone") || _e(e, "ipad"),
			versionRegexes: [/.*?version\/\ ?([0-9]+)\.([0-9]+).*/, /.*cpu os ([0-9]+)_([0-9]+).*/, /.*cpu iphone os ([0-9]+)_([0-9]+).*/]
		}, {
			name: "Android",
			search: so("android"),
			versionRegexes: [/.*?android\ ?([0-9]+)\.([0-9]+).*/]
		}, {
			name: "macOS",
			search: so("mac os x"),
			versionRegexes: [/.*?mac\ os\ x\ ?([0-9]+)_([0-9]+).*/]
		}, {
			name: "Linux",
			search: so("linux"),
			versionRegexes: []
		}, {
			name: "Solaris",
			search: so("sunos"),
			versionRegexes: []
		}, {
			name: "FreeBSD",
			search: so("freebsd"),
			versionRegexes: []
		}, {
			name: "ChromeOS",
			search: so("cros"),
			versionRegexes: [/.*?chrome\/([0-9]+)\.([0-9]+).*/]
		}],
		io = {
			browsers: y(ro),
			oses: y(ao)
		},
		lo = "Edge",
		co = "Chromium",
		uo = "Opera",
		mo = "Firefox",
		go = "Safari",
		po = e => {
			const t = e.current,
				o = e.version,
				n = e => () => t === e;
			return {
				current: t,
				version: o,
				isEdge: n(lo),
				isChromium: n(co),
				isIE: n("IE"),
				isOpera: n(uo),
				isFirefox: n(mo),
				isSafari: n(go)
			}
		},
		ho = () => po({
			current: void 0,
			version: to.unknown()
		}),
		fo = po,
		bo = (y(lo), y(co), y("IE"), y(uo), y(mo), y(go), "Windows"),
		vo = "Android",
		xo = "Linux",
		yo = "macOS",
		wo = "Solaris",
		So = "FreeBSD",
		Co = "ChromeOS",
		ko = e => {
			const t = e.current,
				o = e.version,
				n = e => () => t === e;
			return {
				current: t,
				version: o,
				isWindows: n(bo),
				isiOS: n("iOS"),
				isAndroid: n(vo),
				isMacOS: n(yo),
				isLinux: n(xo),
				isSolaris: n(wo),
				isFreeBSD: n(So),
				isChromeOS: n(Co)
			}
		},
		Oo = () => ko({
			current: void 0,
			version: to.unknown()
		}),
		_o = ko,
		To = (y(bo), y("iOS"), y(vo), y(xo), y(yo), y(wo), y(So), y(Co), e => window.matchMedia(e).matches);
	var Eo;
	let Ao = Qt((() => ((e, t, o) => {
		const n = io.browsers(),
			s = io.oses(),
			r = t.bind((e => ((e, t) => se(t.brands, (t => {
				const o = t.brand.toLowerCase();
				return j(e, (e => {
					var t;
					return o === (null === (t = e.brand) || void 0 === t ? void 0 : t.toLowerCase())
				})).map((e => ({
					current: e.name,
					version: to.nu(parseInt(t.version, 10), 0)
				})))
			})))(n, e))).orThunk((() => ((e, t) => oo(e, t).map((e => {
				const o = to.detect(e.versionRegexes, t);
				return {
					current: e.name,
					version: o
				}
			})))(n, e))).fold(ho, fo),
			a = ((e, t) => oo(e, t).map((e => {
				const o = to.detect(e.versionRegexes, t);
				return {
					current: e.name,
					version: o
				}
			})))(s, e).fold(Oo, _o),
			i = ((e, t, o, n) => {
				const s = e.isiOS() && !0 === /ipad/i.test(o),
					r = e.isiOS() && !s,
					a = e.isiOS() || e.isAndroid(),
					i = a || n("(pointer:coarse)"),
					l = s || !r && a && n("(min-device-width:768px)"),
					c = r || a && !l,
					d = t.isSafari() && e.isiOS() && !1 === /safari/i.test(o),
					u = !c && !l && !d;
				return {
					isiPad: y(s),
					isiPhone: y(r),
					isTablet: y(l),
					isPhone: y(c),
					isTouch: y(i),
					isAndroid: e.isAndroid,
					isiOS: e.isiOS,
					isWebView: y(d),
					isDesktop: y(u)
				}
			})(a, r, e, o);
		return {
			browser: r,
			os: a,
			deviceType: i
		}
	})(window.navigator.userAgent, A.from(window.navigator.userAgentData), To)));
	const Mo = () => Ao(),
		Do = e => {
			const t = ze((e => {
					if (g(e.target)) {
						const t = ze(e.target);
						if ($e(t) && (e => g(e.dom.shadowRoot))(t) && e.composed && e.composedPath) {
							const t = e.composedPath();
							if (t) return te(t)
						}
					}
					return A.from(e.target)
				})(e).getOr(e.target)),
				o = () => e.stopPropagation(),
				n = () => e.preventDefault(),
				s = x(n, o);
			return ((e, t, o, n, s, r, a) => ({
				target: e,
				x: t,
				y: o,
				stop: n,
				prevent: s,
				kill: r,
				raw: a
			}))(t, e.clientX, e.clientY, o, n, s, e)
		},
		Bo = (e, t, o, n, s) => {
			const r = ((e, t) => o => {
				e(o) && t(Do(o))
			})(o, n);
			return e.dom.addEventListener(t, r, s, { passive: true }), {
				unbind: C(Io, e, t, r, s)
			}
		},
		Io = (e, t, o, n) => {
			e.dom.removeEventListener(t, o, n)
		},
		Fo = (e, t) => {
			rt(e).each((o => {
				o.dom.insertBefore(t.dom, e.dom)
			}))
		},
		Ro = (e, t) => {
			const o = (e => A.from(e.dom.nextSibling).map(ze))(e);
			o.fold((() => {
				rt(e).each((e => {
					zo(e, t)
				}))
			}), (e => {
				Fo(e, t)
			}))
		},
		No = (e, t) => {
			dt(e).fold((() => {
				zo(e, t)
			}), (o => {
				e.dom.insertBefore(t.dom, o.dom)
			}))
		},
		zo = (e, t) => {
			e.dom.appendChild(t.dom)
		},
		Lo = (e, t) => {
			V(t, (t => {
				zo(e, t)
			}))
		},
		Vo = e => {
			e.dom.textContent = "", V(lt(e), (e => {
				Ho(e)
			}))
		},
		Ho = e => {
			const t = e.dom;
			null !== t.parentNode && t.parentNode.removeChild(t)
		},
		Po = e => {
			const t = void 0 !== e ? e.dom : document,
				o = t.body.scrollLeft || t.documentElement.scrollLeft,
				n = t.body.scrollTop || t.documentElement.scrollTop;
			return $t(o, n)
		},
		Uo = (e, t, o) => {
			const n = (void 0 !== o ? o.dom : document).defaultView;
			n && n.scrollTo(e, t)
		},
		Wo = (e, t, o, n) => ({
			x: e,
			y: t,
			width: o,
			height: n,
			right: e + o,
			bottom: t + n
		}),
		jo = e => {
			const t = void 0 === e ? window : e,
				o = t.document,
				n = Po(ze(o));
			return (e => {
				const t = void 0 === e ? window : e;
				return Mo().browser.isFirefox() ? A.none() : A.from(t.visualViewport)
			})(t).fold((() => {
				const e = t.document.documentElement,
					o = e.clientWidth,
					s = e.clientHeight;
				return Wo(n.left, n.top, o, s)
			}), (e => Wo(Math.max(e.pageLeft, n.left), Math.max(e.pageTop, n.top), e.width, e.height)))
		},
		$o = () => ze(document),
		Go = (e, t) => e.view(t).fold(y([]), (t => {
			const o = e.owner(t),
				n = Go(e, o);
			return [t].concat(n)
		}));
	var qo = Object.freeze({
		__proto__: null,
		view: e => {
			var t;
			return (e.dom === document ? A.none() : A.from(null === (t = e.dom.defaultView) || void 0 === t ? void 0 : t.frameElement)).map(ze)
		},
		owner: e => tt(e)
	});
	const Yo = e => {
			const t = $o(),
				o = Po(t),
				n = ((e, t) => {
					const o = t.owner(e),
						n = Go(t, o);
					return A.some(n)
				})(e, qo);
			return n.fold(C(qt, e), (t => {
				const n = Yt(e),
					s = U(t, ((e, t) => {
						const o = Yt(t);
						return {
							left: e.left + o.left,
							top: e.top + o.top
						}
					}), {
						left: 0,
						top: 0
					});
				return $t(s.left + n.left + o.left, s.top + n.top + o.top)
			}))
		},
		Xo = (e, t, o, n) => ({
			x: e,
			y: t,
			width: o,
			height: n,
			right: e + o,
			bottom: t + n
		}),
		Ko = e => {
			const t = qt(e),
				o = Jt(e),
				n = Wt(e);
			return Xo(t.left, t.top, o, n)
		},
		Jo = e => {
			const t = Yo(e),
				o = Jt(e),
				n = Wt(e);
			return Xo(t.left, t.top, o, n)
		},
		Qo = (e, t) => {
			const o = Math.max(e.x, t.x),
				n = Math.max(e.y, t.y),
				s = Math.min(e.right, t.right),
				r = Math.min(e.bottom, t.bottom);
			return Xo(o, n, s - o, r - n)
		},
		Zo = () => jo(window),
		en = e => {
			let t = e;
			return {
				get: () => t,
				set: e => {
					t = e
				}
			}
		},
		tn = e => {
			const t = en(A.none()),
				o = () => t.get().each(e);
			return {
				clear: () => {
					o(), t.set(A.none())
				},
				isSet: () => t.get().isSome(),
				get: () => t.get(),
				set: e => {
					o(), t.set(A.some(e))
				}
			}
		},
		on = () => tn((e => e.unbind())),
		nn = () => {
			const e = tn(b);
			return {
				...e,
				on: t => e.get().each(t)
			}
		};
	var sn = tinymce.util.Tools.resolve("tinymce.ThemeManager");
	const rn = e => {
			const t = t => t(e),
				o = y(e),
				n = () => s,
				s = {
					tag: !0,
					inner: e,
					fold: (t, o) => o(e),
					isValue: E,
					isError: T,
					map: t => ln.value(t(e)),
					mapError: n,
					bind: t,
					exists: t,
					forall: t,
					getOr: o,
					or: n,
					getOrThunk: o,
					orThunk: n,
					getOrDie: o,
					each: t => {
						t(e)
					},
					toOptional: () => A.some(e)
				};
			return s
		},
		an = e => {
			const t = () => o,
				o = {
					tag: !1,
					inner: e,
					fold: (t, o) => t(e),
					isValue: T,
					isError: E,
					map: t,
					mapError: t => ln.error(t(e)),
					bind: t,
					exists: T,
					forall: E,
					getOr: w,
					or: w,
					getOrThunk: _,
					orThunk: _,
					getOrDie: O(String(e)),
					each: b,
					toOptional: A.none
				};
			return o
		},
		ln = {
			value: rn,
			error: an,
			fromOption: (e, t) => e.fold((() => an(t)), rn)
		};
	var cn;
	! function(e) {
		e[e.Error = 0] = "Error", e[e.Value = 1] = "Value"
	}(cn || (cn = {}));
	const dn = (e, t, o) => e.stype === cn.Error ? t(e.serror) : o(e.svalue),
		un = e => ({
			stype: cn.Value,
			svalue: e
		}),
		mn = e => ({
			stype: cn.Error,
			serror: e
		}),
		gn = un,
		pn = mn,
		hn = dn,
		fn = (e, t, o, n) => ({
			tag: "field",
			key: e,
			newKey: t,
			presence: o,
			prop: n
		}),
		bn = (e, t, o) => {
			switch (e.tag) {
				case "field":
					return t(e.key, e.newKey, e.presence, e.prop);
				case "custom":
					return o(e.newKey, e.instantiator)
			}
		},
		vn = e => (...t) => {
			if (0 === t.length) throw new Error("Can't merge zero objects");
			const o = {};
			for (let n = 0; n < t.length; n++) {
				const s = t[n];
				for (const t in s) be(s, t) && (o[t] = e(o[t], s[t]))
			}
			return o
		},
		xn = vn(((e, t) => i(e) && i(t) ? xn(e, t) : t)),
		yn = vn(((e, t) => t)),
		wn = e => ({
			tag: "defaultedThunk",
			process: e
		}),
		Sn = e => wn(y(e)),
		Cn = e => ({
			tag: "mergeWithThunk",
			process: e
		}),
		kn = e => {
			const t = (e => {
				const t = [],
					o = [];
				return V(e, (e => {
					dn(e, (e => o.push(e)), (e => t.push(e)))
				})), {
					values: t,
					errors: o
				}
			})(e);
			return t.errors.length > 0 ? (o = t.errors, x(pn, G)(o)) : gn(t.values);
			var o
		},
		On = e => a(e) && re(e).length > 100 ? " removed due to size" : JSON.stringify(e, null, 2),
		_n = (e, t) => pn([{
			path: e,
			getErrorInfo: t
		}]),
		Tn = e => ({
			extract: (t, o) => ((e, t) => e.stype === cn.Error ? t(e.serror) : e)(e(o), (e => ((e, t) => _n(e, y(t)))(t, e))),
			toString: y("val")
		}),
		En = Tn(gn),
		An = (e, t, o, n) => n(fe(e, t).getOrThunk((() => o(e)))),
		Mn = (e, t, o, n, s) => {
			const r = e => s.extract(t.concat([n]), e),
				a = e => e.fold((() => gn(A.none())), (e => ((e, t) => e.stype === cn.Value ? {
					stype: cn.Value,
					svalue: t(e.svalue)
				} : e)(s.extract(t.concat([n]), e), A.some)));
			switch (e.tag) {
				case "required":
					return ((e, t, o, n) => fe(t, o).fold((() => ((e, t, o) => _n(e, (() => 'Could not find valid *required* value for "' + t + '" in ' + On(o))))(e, o, t)), n))(t, o, n, r);
				case "defaultedThunk":
					return An(o, n, e.process, r);
				case "option":
					return ((e, t, o) => o(fe(e, t)))(o, n, a);
				case "defaultedOptionThunk":
					return ((e, t, o, n) => n(fe(e, t).map((t => !0 === t ? o(e) : t))))(o, n, e.process, a);
				case "mergeWithThunk":
					return An(o, n, y({}), (t => {
						const n = xn(e.process(o), t);
						return r(n)
					}))
			}
		},
		Dn = e => ({
			extract: (t, o) => e().extract(t, o),
			toString: () => e().toString()
		}),
		Bn = e => re(me(e, g)),
		In = e => {
			const t = Fn(e),
				o = U(e, ((e, t) => bn(t, (t => xn(e, {
					[t]: !0
				})), y(e))), {});
			return {
				extract: (e, n) => {
					const s = d(n) ? [] : Bn(n),
						r = P(s, (e => !ve(o, e)));
					return 0 === r.length ? t.extract(e, n) : ((e, t) => _n(e, (() => "There are unsupported fields: [" + t.join(", ") + "] specified")))(e, r)
				},
				toString: t.toString
			}
		},
		Fn = e => ({
			extract: (t, o) => ((e, t, o) => {
				const n = {},
					s = [];
				for (const r of o) bn(r, ((o, r, a, i) => {
					const l = Mn(a, e, t, o, i);
					hn(l, (e => {
						s.push(...e)
					}), (e => {
						n[r] = e
					}))
				}), ((e, o) => {
					n[e] = o(t)
				}));
				return s.length > 0 ? pn(s) : gn(n)
			})(t, o, e),
			toString: () => "obj{\n" + L(e, (e => bn(e, ((e, t, o, n) => e + " -> " + n.toString()), ((e, t) => "state(" + e + ")")))).join("\n") + "}"
		}),
		Rn = e => ({
			extract: (t, o) => {
				const n = L(o, ((o, n) => e.extract(t.concat(["[" + n + "]"]), o)));
				return kn(n)
			},
			toString: () => "array(" + e.toString() + ")"
		}),
		Nn = (e, t) => {
			const o = void 0 !== t ? t : w;
			return {
				extract: (t, n) => {
					const s = [];
					for (const r of e) {
						const e = r.extract(t, n);
						if (e.stype === cn.Value) return {
							stype: cn.Value,
							svalue: o(e.svalue)
						};
						s.push(e)
					}
					return kn(s)
				},
				toString: () => "oneOf(" + L(e, (e => e.toString())).join(", ") + ")"
			}
		},
		zn = (e, t) => ({
			extract: (o, n) => {
				const s = re(n),
					r = ((t, o) => Rn(Tn(e)).extract(t, o))(o, s);
				return ((e, t) => e.stype === cn.Value ? t(e.svalue) : e)(r, (e => {
					const s = L(e, (e => fn(e, e, {
						tag: "required",
						process: {}
					}, t)));
					return Fn(s).extract(o, n)
				}))
			},
			toString: () => "setOf(" + t.toString() + ")"
		}),
		Ln = x(Rn, Fn),
		Vn = y(En),
		Hn = (e, t) => Tn((o => {
			const n = typeof o;
			return e(o) ? gn(o) : pn(`Expected type: ${t} but got: ${n}`)
		})),
		Pn = Hn(h, "number"),
		Un = Hn(r, "string"),
		Wn = Hn(d, "boolean"),
		jn = Hn(p, "function"),
		$n = e => {
			if (Object(e) !== e) return !0;
			switch ({}.toString.call(e).slice(8, -1)) {
				case "Boolean":
				case "Number":
				case "String":
				case "Date":
				case "RegExp":
				case "Blob":
				case "FileList":
				case "ImageData":
				case "ImageBitmap":
				case "ArrayBuffer":
					return !0;
				case "Array":
				case "Object":
					return Object.keys(e).every((t => $n(e[t])));
				default:
					return !1
			}
		},
		Gn = Tn((e => $n(e) ? gn(e) : pn("Expected value to be acceptable for sending via postMessage"))),
		qn = (e, t) => ({
			extract: (o, n) => fe(n, e).fold((() => ((e, t) => _n(e, (() => 'Choice schema did not contain choice key: "' + t + '"')))(o, e)), (e => ((e, t, o, n) => fe(o, n).fold((() => ((e, t, o) => _n(e, (() => 'The chosen schema: "' + o + '" did not exist in branches: ' + On(t))))(e, o, n)), (o => o.extract(e.concat(["branch: " + n]), t))))(o, n, t, e))),
			toString: () => "chooseOn(" + e + "). Possible values: " + re(t)
		}),
		Yn = e => Tn((t => e(t).fold(pn, gn))),
		Xn = (e, t) => zn((t => e(t).fold(mn, un)), t),
		Kn = (e, t, o) => {
			return n = ((e, t, o) => ((e, t) => e.stype === cn.Error ? {
				stype: cn.Error,
				serror: t(e.serror)
			} : e)(t.extract([e], o), (e => ({
				input: o,
				errors: e
			}))))(e, t, o), dn(n, ln.error, ln.value);
			var n
		},
		Jn = e => e.fold((e => {
			throw new Error(Zn(e))
		}), w),
		Qn = (e, t, o) => Jn(Kn(e, t, o)),
		Zn = e => "Errors: \n" + (e => {
			const t = e.length > 10 ? e.slice(0, 10).concat([{
				path: [],
				getErrorInfo: y("... (only showing first ten failures)")
			}]) : e;
			return L(t, (e => "Failed path: (" + e.path.join(" > ") + ")\n" + e.getErrorInfo()))
		})(e.errors).join("\n") + "\n\nInput object: " + On(e.input),
		es = (e, t) => qn(e, le(t, Fn)),
		ts = (e, t) => ((e, t) => {
			const o = Qt(t);
			return {
				extract: (e, t) => o().extract(e, t),
				toString: () => o().toString()
			}
		})(0, t),
		os = fn,
		ns = (e, t) => ({
			tag: "custom",
			newKey: e,
			instantiator: t
		}),
		ss = e => Yn((t => F(e, t) ? ln.value(t) : ln.error(`Unsupported value: "${t}", choose one of "${e.join(", ")}".`))),
		rs = e => os(e, e, {
			tag: "required",
			process: {}
		}, Vn()),
		as = (e, t) => os(e, e, {
			tag: "required",
			process: {}
		}, t),
		is = e => as(e, Un),
		ls = (e, t) => os(e, e, {
			tag: "required",
			process: {}
		}, ss(t)),
		cs = e => as(e, jn),
		ds = (e, t) => os(e, e, {
			tag: "required",
			process: {}
		}, Fn(t)),
		us = (e, t) => os(e, e, {
			tag: "required",
			process: {}
		}, Ln(t)),
		ms = (e, t) => os(e, e, {
			tag: "required",
			process: {}
		}, Rn(t)),
		gs = e => os(e, e, {
			tag: "option",
			process: {}
		}, Vn()),
		ps = (e, t) => os(e, e, {
			tag: "option",
			process: {}
		}, t),
		hs = e => ps(e, Pn),
		fs = e => ps(e, Un),
		bs = (e, t) => ps(e, ss(t)),
		vs = e => ps(e, jn),
		xs = (e, t) => ps(e, Rn(t)),
		ys = (e, t) => ps(e, Fn(t)),
		ws = (e, t) => os(e, e, Sn(t), Vn()),
		Ss = (e, t, o) => os(e, e, Sn(t), o),
		Cs = (e, t) => Ss(e, t, Pn),
		ks = (e, t) => Ss(e, t, Un),
		Os = (e, t, o) => Ss(e, t, ss(o)),
		_s = (e, t) => Ss(e, t, Wn),
		Ts = (e, t) => Ss(e, t, jn),
		Es = (e, t, o) => Ss(e, t, Rn(o)),
		As = (e, t, o) => Ss(e, t, Fn(o)),
		Ms = e => {
			if (!l(e)) throw new Error("cases must be an array");
			if (0 === e.length) throw new Error("there must be at least one case");
			const t = [],
				o = {};
			return V(e, ((n, s) => {
				const r = re(n);
				if (1 !== r.length) throw new Error("one and only one name per case");
				const a = r[0],
					i = n[a];
				if (void 0 !== o[a]) throw new Error("duplicate key detected:" + a);
				if ("cata" === a) throw new Error("cannot have a case named cata (sorry)");
				if (!l(i)) throw new Error("case arguments must be an array");
				t.push(a), o[a] = (...o) => {
					const n = o.length;
					if (n !== i.length) throw new Error("Wrong number of arguments to case " + a + ". Expected " + i.length + " (" + i + "), got " + n);
					return {
						fold: (...t) => {
							if (t.length !== e.length) throw new Error("Wrong number of arguments to fold. Expected " + e.length + ", got " + t.length);
							return t[s].apply(null, o)
						},
						match: e => {
							const n = re(e);
							if (t.length !== n.length) throw new Error("Wrong number of arguments to match. Expected: " + t.join(",") + "\nActual: " + n.join(","));
							if (!Y(t, (e => F(n, e)))) throw new Error("Not all branches were specified when using match. Specified: " + n.join(", ") + "\nRequired: " + t.join(", "));
							return e[a].apply(null, o)
						},
						log: e => {
							console.log(e, {
								constructors: t,
								constructor: a,
								params: o
							})
						}
					}
				}
			})), o
		};
	Ms([{
		bothErrors: ["error1", "error2"]
	}, {
		firstError: ["error1", "value2"]
	}, {
		secondError: ["value1", "error2"]
	}, {
		bothValues: ["value1", "value2"]
	}]);
	const Ds = (e, t) => ((e, t) => ({
			[e]: t
		}))(e, t),
		Bs = e => (e => {
			const t = {};
			return V(e, (e => {
				t[e.key] = e.value
			})), t
		})(e),
		Is = e => p(e) ? e : T,
		Fs = (e, t, o) => {
			let n = e.dom;
			const s = Is(o);
			for (; n.parentNode;) {
				n = n.parentNode;
				const e = ze(n),
					o = t(e);
				if (o.isSome()) return o;
				if (s(e)) break
			}
			return A.none()
		},
		Rs = (e, t, o) => {
			const n = t(e),
				s = Is(o);
			return n.orThunk((() => s(e) ? A.none() : Fs(e, t, s)))
		},
		Ns = (e, t) => Ze(e.element, t.event.target),
		zs = {
			can: E,
			abort: T,
			run: b
		},
		Ls = e => {
			if (!ve(e, "can") && !ve(e, "abort") && !ve(e, "run")) throw new Error("EventHandler defined by: " + JSON.stringify(e, null, 2) + " does not have can, abort, or run!");
			return {
				...zs,
				...e
			}
		},
		Vs = y,
		Hs = Vs("touchstart"),
		Ps = Vs("touchmove"),
		Us = Vs("touchend"),
		Ws = Vs("touchcancel"),
		js = Vs("mousedown"),
		$s = Vs("mousemove"),
		Gs = Vs("mouseout"),
		qs = Vs("mouseup"),
		Ys = Vs("mouseover"),
		Xs = Vs("focusin"),
		Ks = Vs("focusout"),
		Js = Vs("keydown"),
		Qs = Vs("keyup"),
		Zs = Vs("input"),
		er = Vs("change"),
		tr = Vs("click"),
		or = Vs("transitioncancel"),
		nr = Vs("transitionend"),
		sr = Vs("transitionstart"),
		rr = Vs("selectstart"),
		ar = e => y("alloy." + e),
		ir = {
			tap: ar("tap")
		},
		lr = ar("focus"),
		cr = ar("blur.post"),
		dr = ar("paste.post"),
		ur = ar("receive"),
		mr = ar("execute"),
		gr = ar("focus.item"),
		pr = ir.tap,
		hr = ar("longpress"),
		fr = ar("sandbox.close"),
		br = ar("typeahead.cancel"),
		vr = ar("system.init"),
		xr = ar("system.touchmove"),
		yr = ar("system.touchend"),
		wr = ar("system.scroll"),
		Sr = ar("system.resize"),
		Cr = ar("system.attached"),
		kr = ar("system.detached"),
		Or = ar("system.dismissRequested"),
		_r = ar("system.repositionRequested"),
		Tr = ar("focusmanager.shifted"),
		Er = ar("slotcontainer.visibility"),
		Ar = ar("system.external.element.scroll"),
		Mr = ar("change.tab"),
		Dr = ar("dismiss.tab"),
		Br = ar("highlight"),
		Ir = ar("dehighlight"),
		Fr = (e, t) => {
			Lr(e, e.element, t, {})
		},
		Rr = (e, t, o) => {
			Lr(e, e.element, t, o)
		},
		Nr = e => {
			Fr(e, mr())
		},
		zr = (e, t, o) => {
			Lr(e, t, o, {})
		},
		Lr = (e, t, o, n) => {
			const s = {
				target: t,
				...n
			};
			e.getSystem().triggerEvent(o, t, s)
		},
		Vr = (e, t, o, n) => {
			e.getSystem().triggerEvent(o, t, n.event)
		},
		Hr = e => Bs(e),
		Pr = (e, t) => ({
			key: e,
			value: Ls({
				abort: t
			})
		}),
		Ur = e => ({
			key: e,
			value: Ls({
				run: (e, t) => {
					t.event.prevent()
				}
			})
		}),
		Wr = (e, t) => ({
			key: e,
			value: Ls({
				run: t
			})
		}),
		jr = (e, t, o) => ({
			key: e,
			value: Ls({
				run: (e, n) => {
					t.apply(void 0, [e, n].concat(o))
				}
			})
		}),
		$r = e => t => ({
			key: e,
			value: Ls({
				run: (e, o) => {
					Ns(e, o) && t(e, o)
				}
			})
		}),
		Gr = (e, t, o) => ((e, t) => Wr(e, ((o, n) => {
			o.getSystem().getByUid(t).each((t => {
				Vr(t, t.element, e, n)
			}))
		})))(e, t.partUids[o]),
		qr = (e, t) => Wr(e, ((e, o) => {
			const n = o.event,
				s = e.getSystem().getByDom(n.target).getOrThunk((() => Rs(n.target, (t => e.getSystem().getByDom(t).toOptional()), T).getOr(e)));
			t(e, s, o)
		})),
		Yr = e => Wr(e, ((e, t) => {
			t.cut()
		})),
		Xr = e => Wr(e, ((e, t) => {
			t.stop()
		})),
		Kr = (e, t) => $r(e)(t),
		Jr = $r(Cr()),
		Qr = $r(kr()),
		Zr = $r(vr()),
		ea = (Qa = mr(), e => Wr(Qa, e)),
		ta = e => L(e, (e => Ee(e, "/*") ? e.substring(0, e.length - 2) : e)),
		oa = (e, t) => {
			const o = e.toString(),
				n = o.indexOf(")") + 1,
				s = o.indexOf("("),
				r = o.substring(s + 1, n - 1).split(/,\s*/);
			return e.toFunctionAnnotation = () => ({
				name: t,
				parameters: ta(r)
			}), e
		},
		na = e => ({
			classes: u(e.classes) ? [] : e.classes,
			attributes: u(e.attributes) ? {} : e.attributes,
			styles: u(e.styles) ? {} : e.styles
		}),
		sa = (e, t, o) => Zr(((n, s) => {
			o(n, e, t)
		})),
		ra = e => ({
			key: e,
			value: void 0
		}),
		aa = (e, t, o, n, s, r, a) => {
			const i = e => ve(e, o) ? e[o]() : A.none(),
				l = le(s, ((e, t) => ((e, t, o) => ((e, t, o) => {
					const n = o.toString(),
						s = n.indexOf(")") + 1,
						r = n.indexOf("("),
						a = n.substring(r + 1, s - 1).split(/,\s*/);
					return e.toFunctionAnnotation = () => ({
						name: t,
						parameters: ta(a.slice(0, 1).concat(a.slice(3)))
					}), e
				})(((n, ...s) => {
					const r = [n].concat(s);
					return n.config({
						name: y(e)
					}).fold((() => {
						throw new Error("We could not find any behaviour configuration for: " + e + ". Using API: " + o)
					}), (e => {
						const o = Array.prototype.slice.call(r, 1);
						return t.apply(void 0, [n, e.config, e.state].concat(o))
					}))
				}), o, t))(o, e, t))),
				c = {
					...le(r, ((e, t) => oa(e, t))),
					...l,
					revoke: C(ra, o),
					config: t => {
						const n = Qn(o + "-config", e, t);
						return {
							key: o,
							value: {
								config: n,
								me: c,
								configAsRaw: Qt((() => Qn(o + "-config", e, t))),
								initialConfig: t,
								state: a
							}
						}
					},
					schema: y(t),
					exhibit: (e, t) => we(i(e), fe(n, "exhibit"), ((e, o) => o(t, e.config, e.state))).getOrThunk((() => na({}))),
					name: y(o),
					handlers: e => i(e).map((e => fe(n, "events").getOr((() => ({})))(e.config, e.state))).getOr({})
				};
			return c
		},
		ia = {
			init: () => la({
				readState: y("No State required")
			})
		},
		la = e => e,
		ca = e => Bs(e),
		da = In([rs("fields"), rs("name"), ws("active", {}), ws("apis", {}), ws("state", ia), ws("extra", {})]),
		ua = e => {
			const t = Qn("Creating behaviour: " + e.name, da, e);
			return ((e, t, o, n, s, r) => {
				const a = In(e),
					i = ys(t, [("config", l = e, ps("config", In(l)))]);
				var l;
				return aa(a, i, t, o, n, s, r)
			})(t.fields, t.name, t.active, t.apis, t.extra, t.state)
		},
		ma = In([rs("branchKey"), rs("branches"), rs("name"), ws("active", {}), ws("apis", {}), ws("state", ia), ws("extra", {})]),
		ga = e => {
			const t = Qn("Creating behaviour: " + e.name, ma, e);
			return ((e, t, o, n, s, r) => {
				const a = e,
					i = ys(t, [ps("config", e)]);
				return aa(a, i, t, o, n, s, r)
			})(es(t.branchKey, t.branches), t.name, t.active, t.apis, t.extra, t.state)
		},
		pa = y(void 0),
		ha = (e, t) => {
			const o = kt(e, t);
			return void 0 === o || "" === o ? [] : o.split(" ")
		},
		fa = e => void 0 !== e.dom.classList,
		ba = e => ha(e, "class"),
		va = (e, t) => ((e, t, o) => {
			const n = ha(e, t).concat([o]);
			return St(e, t, n.join(" ")), !0
		})(e, "class", t),
		xa = (e, t) => ((e, t, o) => {
			const n = P(ha(e, t), (e => e !== o));
			return n.length > 0 ? St(e, t, n.join(" ")) : Tt(e, t), !1
		})(e, "class", t),
		ya = (e, t) => {
			fa(e) ? e.dom.classList.add(t) : va(e, t)
		},
		wa = e => {
			0 === (fa(e) ? e.dom.classList : ba(e)).length && Tt(e, "class")
		},
		Sa = (e, t) => {
			fa(e) ? e.dom.classList.remove(t) : xa(e, t), wa(e)
		},
		Ca = (e, t) => fa(e) && e.dom.classList.contains(t),
		ka = (e, t) => {
			V(t, (t => {
				ya(e, t)
			}))
		},
		Oa = (e, t) => {
			V(t, (t => {
				Sa(e, t)
			}))
		},
		_a = e => fa(e) ? (e => {
			const t = e.dom.classList,
				o = new Array(t.length);
			for (let e = 0; e < t.length; e++) {
				const n = t.item(e);
				null !== n && (o[e] = n)
			}
			return o
		})(e) : ba(e),
		Ta = (e, t, o, n, s) => {
			const r = e => e + "px";
			return {
				position: e,
				left: t.map(r),
				top: o.map(r),
				right: n.map(r),
				bottom: s.map(r)
			}
		},
		Ea = (e, t) => {
			Bt(e, (e => ({
				...e,
				position: A.some(e.position)
			}))(t))
		},
		Aa = e => (xe(Rt(e, "position"), "fixed") ? A.none() : it(e)).orThunk((() => {
			const t = Re("span");
			return rt(e).bind((e => {
				zo(e, t);
				const o = it(t);
				return Ho(t), o
			}))
		})),
		Ma = e => Aa(e).map(qt).getOrThunk((() => $t(0, 0))),
		Da = (e, t) => {
			const o = e.element;
			ya(o, t.transitionClass), Sa(o, t.fadeOutClass), ya(o, t.fadeInClass), t.onShow(e)
		},
		Ba = (e, t) => {
			const o = e.element;
			ya(o, t.transitionClass), Sa(o, t.fadeInClass), ya(o, t.fadeOutClass), t.onHide(e)
		},
		Ia = (e, t) => e.y >= t.y,
		Fa = (e, t) => e.bottom <= t.bottom,
		Ra = (e, t, o) => ({
			location: "top",
			leftX: t,
			topY: o.bounds.y - e.y
		}),
		Na = (e, t, o) => ({
			location: "bottom",
			leftX: t,
			bottomY: e.bottom - o.bounds.bottom
		}),
		za = e => e.box.x - e.win.x,
		La = (e, t, o) => o.getInitialPos().map((o => {
			const n = ((e, t) => {
				const o = t.optScrollEnv.fold(y(e.bounds.y), (t => t.scrollElmTop + (e.bounds.y - t.currentScrollTop)));
				return $t(e.bounds.x, o)
			})(o, t);
			return {
				box: Xo(n.left, n.top, Kt(e), Ut(e)),
				location: o.location
			}
		})),
		Va = (e, t, o, n, s) => {
			const r = ((e, t) => {
					const o = t.optScrollEnv.fold(y(e.y), (t => e.y + t.currentScrollTop - t.scrollElmTop));
					return $t(e.x, o)
				})(t, o),
				a = Xo(r.left, r.top, t.width, t.height);
			n.setInitialPos({
				style: Nt(e),
				position: It(e, "position") || "static",
				bounds: a,
				location: s.location
			})
		},
		Ha = (e, t, o) => o.getInitialPos().bind((n => {
			var s;
			switch (o.clearInitialPos(), n.position) {
				case "static":
					return A.some({
						morph: "static"
					});
				case "absolute":
					const o = Aa(e).getOr(xt()),
						r = Ko(o),
						a = null !== (s = o.dom.scrollTop) && void 0 !== s ? s : 0;
					return A.some({
						morph: "absolute",
						positionCss: Ta("absolute", fe(n.style, "left").map((e => t.x - r.x)), fe(n.style, "top").map((e => t.y - r.y + a)), fe(n.style, "right").map((e => r.right - t.right)), fe(n.style, "bottom").map((e => r.bottom - t.bottom)))
					});
				default:
					return A.none()
			}
		})),
		Pa = e => {
			switch (e.location) {
				case "top":
					return A.some({
						morph: "fixed",
						positionCss: Ta("fixed", A.some(e.leftX), A.some(e.topY), A.none(), A.none())
					});
				case "bottom":
					return A.some({
						morph: "fixed",
						positionCss: Ta("fixed", A.some(e.leftX), A.none(), A.none(), A.some(e.bottomY))
					});
				default:
					return A.none()
			}
		},
		Ua = (e, t, o) => {
			const n = e.element;
			return xe(Rt(n, "position"), "fixed") ? ((e, t, o) => ((e, t, o) => La(e, t, o).filter((({
				box: e
			}) => ((e, t, o) => Y(e, (e => {
				switch (e) {
					case "bottom":
						return Fa(t, o.bounds);
					case "top":
						return Ia(t, o.bounds)
				}
			})))(o.getModes(), e, t))).bind((({
				box: t
			}) => Ha(e, t, o))))(e, t, o).orThunk((() => t.optScrollEnv.bind((n => La(e, t, o))).bind((({
				box: e,
				location: o
			}) => {
				const n = Zo(),
					s = za({
						win: n,
						box: e
					}),
					r = "top" === o ? Ra(n, s, t) : Na(n, s, t);
				return Pa(r)
			})))))(n, t, o) : ((e, t, o) => {
				const n = Ko(e),
					s = Zo(),
					r = ((e, t, o) => {
						const n = t.win,
							s = t.box,
							r = za(t);
						return se(e, (e => {
							switch (e) {
								case "bottom":
									return Fa(s, o.bounds) ? A.none() : A.some(Na(n, r, o));
								case "top":
									return Ia(s, o.bounds) ? A.none() : A.some(Ra(n, r, o));
								default:
									return A.none()
							}
						})).getOr({
							location: "no-dock"
						})
					})(o.getModes(), {
						win: s,
						box: n
					}, t);
				return "top" === r.location || "bottom" === r.location ? (Va(e, n, t, o, r), Pa(r)) : A.none()
			})(n, t, o)
		},
		Wa = (e, t, o) => {
			o.setDocked(!1), V(["left", "right", "top", "bottom", "position"], (t => Lt(e.element, t))), t.onUndocked(e)
		},
		ja = (e, t, o, n) => {
			const s = "fixed" === n.position;
			o.setDocked(s), Ea(e.element, n), (s ? t.onDocked : t.onUndocked)(e)
		},
		$a = (e, t, o, n, s = !1) => {
			t.contextual.each((t => {
				t.lazyContext(e).each((r => {
					const a = ((e, t) => e.y < t.bottom && e.bottom > t.y)(r, n.bounds);
					a !== o.isVisible() && (o.setVisible(a), s && !a ? (ka(e.element, [t.fadeOutClass]), t.onHide(e)) : (a ? Da : Ba)(e, t))
				}))
			}))
		},
		Ga = (e, t, o, n, s) => {
			$a(e, t, o, n, !0), ja(e, t, o, s.positionCss)
		},
		qa = (e, t, o) => {
			e.getSystem().isConnected() && ((e, t, o) => {
				const n = t.lazyViewport(e);
				$a(e, t, o, n), Ua(e, n, o).each((s => {
					((e, t, o, n, s) => {
						switch (s.morph) {
							case "static":
								return Wa(e, t, o);
							case "absolute":
								return ja(e, t, o, s.positionCss);
							case "fixed":
								Ga(e, t, o, n, s)
						}
					})(e, t, o, n, s)
				}))
			})(e, t, o)
		},
		Ya = (e, t, o) => {
			o.isDocked() && ((e, t, o) => {
				const n = e.element;
				o.setDocked(!1);
				const s = t.lazyViewport(e);
				((e, t, o) => {
					const n = e.element;
					return La(n, t, o).bind((({
						box: e
					}) => Ha(n, e, o)))
				})(e, s, o).each((n => {
					switch (n.morph) {
						case "static":
							Wa(e, t, o);
							break;
						case "absolute":
							ja(e, t, o, n.positionCss)
					}
				})), o.setVisible(!0), t.contextual.each((t => {
					Oa(n, [t.fadeInClass, t.fadeOutClass, t.transitionClass]), t.onShow(e)
				})), qa(e, t, o)
			})(e, t, o)
		},
		Xa = e => (t, o, n) => {
			const s = o.lazyViewport(t);
			((e, t, o, n) => {
				const s = Ko(e),
					r = Zo(),
					a = n(r, za({
						win: r,
						box: s
					}), t);
				return "bottom" === a.location || "top" === a.location ? (((e, t, o, n, s) => {
					n.getInitialPos().fold((() => Va(e, t, o, n, s)), (() => b))
				})(e, s, t, o, a), Pa(a)) : A.none()
			})(t.element, s, n, e).each((e => {
				Ga(t, o, n, s, e)
			}))
		},
		Ka = Xa(Ra),
		Ja = Xa(Na);
	var Qa, Za = Object.freeze({
			__proto__: null,
			refresh: qa,
			reset: Ya,
			isDocked: (e, t, o) => o.isDocked(),
			getModes: (e, t, o) => o.getModes(),
			setModes: (e, t, o, n) => o.setModes(n),
			forceDockToTop: Ka,
			forceDockToBottom: Ja
		}),
		ei = Object.freeze({
			__proto__: null,
			events: (e, t) => Hr([Kr(nr(), ((o, n) => {
				e.contextual.each((e => {
					Ca(o.element, e.transitionClass) && (Oa(o.element, [e.transitionClass, e.fadeInClass]), (t.isVisible() ? e.onShown : e.onHidden)(o)), n.stop()
				}))
			})), Wr(wr(), ((o, n) => {
				qa(o, e, t)
			})), Wr(Ar(), ((o, n) => {
				qa(o, e, t)
			})), Wr(Sr(), ((o, n) => {
				Ya(o, e, t)
			}))])
		});
	const ti = e => e.dom.innerHTML,
		oi = (e, t) => {
			const o = tt(e).dom,
				n = ze(o.createDocumentFragment()),
				s = ((e, t) => {
					const o = (t || document).createElement("div");
					return o.innerHTML = e, lt(ze(o))
				})(t, o);
			Lo(n, s), Vo(e), zo(e, n)
		},
		ni = (e, t) => ze(e.dom.cloneNode(t)),
		si = e => (e => {
			if (gt(e)) return "#shadow-root";
			{
				const t = (e => ni(e, !1))(e);
				return (e => {
					const t = Re("div"),
						o = ze(e.dom.cloneNode(!0));
					return zo(t, o), ti(t)
				})(t)
			}
		})(e);
	var ri;
	! function(e) {
		e[e.STOP = 0] = "STOP", e[e.NORMAL = 1] = "NORMAL", e[e.LOGGING = 2] = "LOGGING"
	}(ri || (ri = {}));
	const ai = en({}),
		ii = ["alloy/data/Fields", "alloy/debugging/Debugging"],
		li = (e, t, o) => ((e, t, o) => {
			switch (fe(ai.get(), e).orThunk((() => {
					const t = re(ai.get());
					return se(t, (t => e.indexOf(t) > -1 ? A.some(ai.get()[t]) : A.none()))
				})).getOr(ri.NORMAL)) {
				case ri.NORMAL:
					return o(ci());
				case ri.LOGGING: {
					const n = ((e, t) => {
							const o = [],
								n = (new Date).getTime();
							return {
								logEventCut: (e, t, n) => {
									o.push({
										outcome: "cut",
										target: t,
										purpose: n
									})
								},
								logEventStopped: (e, t, n) => {
									o.push({
										outcome: "stopped",
										target: t,
										purpose: n
									})
								},
								logNoParent: (e, t, n) => {
									o.push({
										outcome: "no-parent",
										target: t,
										purpose: n
									})
								},
								logEventNoHandlers: (e, t) => {
									o.push({
										outcome: "no-handlers-left",
										target: t
									})
								},
								logEventResponse: (e, t, n) => {
									o.push({
										outcome: "response",
										purpose: n,
										target: t
									})
								},
								write: () => {
									const s = (new Date).getTime();
									F(["mousemove", "mouseover", "mouseout", vr()], e) || console.log(e, {
										event: e,
										time: s - n,
										target: t.dom,
										sequence: L(o, (e => F(["cut", "stopped", "response"], e.outcome) ? "{" + e.purpose + "} " + e.outcome + " at (" + si(e.target) + ")" : e.outcome))
									})
								}
							}
						})(e, t),
						s = o(n);
					return n.write(), s
				}
				case ri.STOP:
					return !0
			}
		})(e, t, o),
		ci = y({
			logEventCut: b,
			logEventStopped: b,
			logNoParent: b,
			logEventNoHandlers: b,
			logEventResponse: b,
			write: b
		}),
		di = y([rs("menu"), rs("selectedMenu")]),
		ui = y([rs("item"), rs("selectedItem")]);
	y(Fn(ui().concat(di())));
	const mi = y(Fn(ui())),
		gi = ds("initSize", [rs("numColumns"), rs("numRows")]),
		pi = () => ds("markers", [rs("backgroundMenu")].concat(di()).concat(ui())),
		hi = e => ds("markers", L(e, rs)),
		fi = (e, t, o) => ((() => {
			const e = new Error;
			if (void 0 !== e.stack) {
				const t = e.stack.split("\n");
				j(t, (e => e.indexOf("alloy") > 0 && !R(ii, (t => e.indexOf(t) > -1)))).getOr("unknown")
			}
		})(), os(t, t, o, Yn((e => ln.value(((...t) => e.apply(void 0, t))))))),
		bi = e => fi(0, e, Sn(b)),
		vi = e => fi(0, e, Sn(A.none)),
		xi = e => fi(0, e, {
			tag: "required",
			process: {}
		}),
		yi = e => fi(0, e, {
			tag: "required",
			process: {}
		}),
		wi = (e, t) => ns(e, y(t)),
		Si = e => ns(e, w),
		Ci = y(gi);
	var ki = [ys("contextual", [is("fadeInClass"), is("fadeOutClass"), is("transitionClass"), cs("lazyContext"), bi("onShow"), bi("onShown"), bi("onHide"), bi("onHidden")]), Ts("lazyViewport", (() => ({
		bounds: Zo(),
		optScrollEnv: A.none()
	}))), Es("modes", ["top", "bottom"], Un), bi("onDocked"), bi("onUndocked")];
	const Oi = ua({
			fields: ki,
			name: "docking",
			active: ei,
			apis: Za,
			state: Object.freeze({
				__proto__: null,
				init: e => {
					const t = en(!1),
						o = en(!0),
						n = nn(),
						s = en(e.modes);
					return la({
						isDocked: t.get,
						setDocked: t.set,
						getInitialPos: n.get,
						setInitialPos: n.set,
						clearInitialPos: n.clear,
						isVisible: o.get,
						setVisible: o.set,
						getModes: s.get,
						setModes: s.set,
						readState: () => `docked:  ${t.get()}, visible: ${o.get()}, modes: ${s.get().join(",")}`
					})
				}
			})
		}),
		_i = Hr([((e, t) => ({
			key: e,
			value: Ls({
				can: (e, t) => {
					const o = t.event,
						n = o.originator,
						s = o.target;
					return !((e, t, o) => Ze(t, e.element) && !Ze(t, o))(e, n, s) || (console.warn(lr() + " did not get interpreted by the desired target. \nOriginator: " + si(n) + "\nTarget: " + si(s) + "\nCheck the " + lr() + " event handlers"), !1)
				}
			})
		}))(lr())]);
	var Ti = Object.freeze({
		__proto__: null,
		events: _i
	});
	const Ei = (e, t, o, n) => {
			const s = e + t;
			return s > n ? o : s < o ? n : s
		},
		Ai = (e, t, o) => Math.min(Math.max(e, t), o);
	let Mi = 0;
	const Di = e => {
			const t = (new Date).getTime(),
				o = Math.floor(window.crypto.getRandomValues(new Uint32Array(1))[0] / 4294967295 * 1e9);
			return Mi++, e + "_" + o + Mi + String(t)
		},
		Bi = y("alloy-id-"),
		Ii = y("data-alloy-id"),
		Fi = Bi(),
		Ri = Ii(),
		Ni = (e, t) => {
			Object.defineProperty(e.dom, Ri, {
				value: t,
				writable: !0
			})
		},
		zi = e => {
			const t = $e(e) ? e.dom[Ri] : null;
			return A.from(t)
		},
		Li = e => Di(e),
		Vi = w,
		Hi = e => {
			const t = t => `The component must be in a context to execute: ${t}` + (e ? "\n" + si(e().element) + " is not in context." : ""),
				o = e => () => {
					throw new Error(t(e))
				},
				n = e => () => {
					console.warn(t(e))
				};
			return {
				debugInfo: y("fake"),
				triggerEvent: n("triggerEvent"),
				triggerFocus: n("triggerFocus"),
				triggerEscape: n("triggerEscape"),
				broadcast: n("broadcast"),
				broadcastOn: n("broadcastOn"),
				broadcastEvent: n("broadcastEvent"),
				build: o("build"),
				buildOrPatch: o("buildOrPatch"),
				addToWorld: o("addToWorld"),
				removeFromWorld: o("removeFromWorld"),
				addToGui: o("addToGui"),
				removeFromGui: o("removeFromGui"),
				getByUid: o("getByUid"),
				getByDom: o("getByDom"),
				isConnected: T
			}
		},
		Pi = Hi(),
		Ui = Di("alloy-premade"),
		Wi = e => (Object.defineProperty(e.element.dom, Ui, {
			value: e.uid,
			writable: !0
		}), Ds(Ui, e)),
		ji = e => fe(e, Ui),
		$i = e => ((e, t) => {
			const o = t.toString(),
				n = o.indexOf(")") + 1,
				s = o.indexOf("("),
				r = o.substring(s + 1, n - 1).split(/,\s*/);
			return e.toFunctionAnnotation = () => ({
				name: "OVERRIDE",
				parameters: ta(r.slice(1))
			}), e
		})(((t, ...o) => e(t.getApis(), t, ...o)), e),
		Gi = (e, t) => {
			const o = {};
			return ie(e, ((e, n) => {
				ie(e, ((e, s) => {
					const r = fe(o, s).getOr([]);
					o[s] = r.concat([t(n, e)])
				}))
			})), o
		},
		qi = e => e.cHandler,
		Yi = (e, t) => ({
			name: e,
			handler: t
		}),
		Xi = (e, t) => {
			const o = {};
			return V(e, (e => {
				o[e.name()] = e.handlers(t)
			})), o
		},
		Ki = (e, t, o) => {
			const n = t[o];
			return n ? ((e, t, o, n) => {
				try {
					const s = Z(o, ((o, s) => {
						const r = o[t],
							a = s[t],
							i = n.indexOf(r),
							l = n.indexOf(a);
						if (-1 === i) throw new Error("The ordering for " + e + " does not have an entry for " + r + ".\nOrder specified: " + JSON.stringify(n, null, 2));
						if (-1 === l) throw new Error("The ordering for " + e + " does not have an entry for " + a + ".\nOrder specified: " + JSON.stringify(n, null, 2));
						return i < l ? -1 : l < i ? 1 : 0
					}));
					return ln.value(s)
				} catch (e) {
					return ln.error([e])
				}
			})("Event: " + o, "name", e, n).map((e => (e => {
				const t = ((e, t) => (...t) => W(e, ((e, o) => e && (e => e.can)(o).apply(void 0, t)), !0))(e),
					o = ((e, t) => (...t) => W(e, ((e, o) => e || (e => e.abort)(o).apply(void 0, t)), !1))(e);
				return {
					can: t,
					abort: o,
					run: (...t) => {
						V(e, (e => {
							e.run.apply(void 0, t)
						}))
					}
				}
			})(L(e, (e => e.handler))))) : ((e, t) => ln.error(["The event (" + e + ') has more than one behaviour that listens to it.\nWhen this occurs, you must specify an event ordering for the behaviours in your spec (e.g. [ "listing", "toggling" ]).\nThe behaviours that can trigger it are: ' + JSON.stringify(L(t, (e => e.name)), null, 2)]))(o, e)
		},
		Ji = (e, t) => ((e, t) => {
			const o = (e => {
				const t = [],
					o = [];
				return V(e, (e => {
					e.fold((e => {
						t.push(e)
					}), (e => {
						o.push(e)
					}))
				})), {
					errors: t,
					values: o
				}
			})(e);
			return o.errors.length > 0 ? (n = o.errors, ln.error(G(n))) : ((e, t) => 0 === e.length ? ln.value(t) : ln.value(xn(t, yn.apply(void 0, e))))(o.values, t);
			var n
		})(ge(e, ((e, o) => (1 === e.length ? ln.value(e[0].handler) : Ki(e, t, o)).map((n => {
			const s = (e => {
					const t = (e => p(e) ? {
						can: E,
						abort: T,
						run: e
					} : e)(e);
					return (e, o, ...n) => {
						const s = [e, o].concat(n);
						t.abort.apply(void 0, s) ? o.stop() : t.can.apply(void 0, s) && t.run.apply(void 0, s)
					}
				})(n),
				r = e.length > 1 ? P(t[o], (t => R(e, (e => e.name === t)))).join(" > ") : e[0].name;
			return Ds(o, ((e, t) => ({
				handler: e,
				purpose: t
			}))(s, r))
		})))), {}),
		Qi = "alloy.base.behaviour",
		Zi = Fn([os("dom", "dom", {
			tag: "required",
			process: {}
		}, Fn([rs("tag"), ws("styles", {}), ws("classes", []), ws("attributes", {}), gs("value"), gs("innerHtml")])), rs("components"), rs("uid"), ws("events", {}), ws("apis", {}), os("eventOrder", "eventOrder", (fl = {
			[mr()]: ["disabling", Qi, "toggling", "typeaheadevents"],
			[lr()]: [Qi, "focusing", "keying"],
			[vr()]: [Qi, "disabling", "toggling", "representing", "tooltipping"],
			[Zs()]: [Qi, "representing", "streaming", "invalidating"],
			[kr()]: [Qi, "representing", "item-events", "toolbar-button-events", "tooltipping"],
			[js()]: ["focusing", Qi, "item-type-events"],
			[Hs()]: ["focusing", Qi, "item-type-events"],
			[Ys()]: ["item-type-events", "tooltipping"],
			[ur()]: ["receiving", "reflecting", "tooltipping"]
		}, Cn(y(fl))), Vn()), gs("domModification")]),
		el = e => e.events,
		tl = e => e.dom.value,
		ol = (e, t) => {
			if (void 0 === t) throw new Error("Value.set was undefined");
			e.dom.value = t
		},
		nl = (e, t, o) => {
			o.fold((() => zo(e, t)), (e => {
				Ze(e, t) || (Fo(e, t), Ho(e))
			}))
		},
		sl = (e, t, o) => {
			const n = L(t, o),
				s = lt(e);
			return V(s.slice(n.length), Ho), n
		},
		rl = (e, t, o, n) => {
			const s = ct(e, t),
				r = n(o, s),
				a = ((e, t, o) => ct(e, t).map((e => {
					if (o.exists((t => !Ze(t, e)))) {
						const t = o.map(Ue).getOr("span"),
							n = Re(t);
						return Fo(e, n), n
					}
					return e
				})))(e, t, s);
			return nl(e, r.element, a), r
		},
		al = (e, t) => {
			const o = re(e),
				n = re(t),
				s = K(n, o),
				r = ((e, o) => {
					const n = {},
						s = {};
					return ue(e, ((e, o) => !be(t, o) || e !== t[o]), de(n), de(s)), {
						t: n,
						f: s
					}
				})(e).t;
			return {
				toRemove: s,
				toSet: r
			}
		},
		il = (e, t) => {
			const o = t.filter((t => Ue(t) === e.tag && !(e => e.innerHtml.isSome() && e.domChildren.length > 0)(e) && !(e => be(e.dom, Ui))(t))).bind((t => ((e, t) => {
				try {
					const o = ((e, t) => {
						const {
							class: o,
							style: n,
							...s
						} = (e => W(e.dom.attributes, ((e, t) => (e[t.name] = t.value, e)), {}))(t), {
							toSet: r,
							toRemove: a
						} = al(e.attributes, s), i = Nt(t), {
							toSet: l,
							toRemove: c
						} = al(e.styles, i), d = _a(t), u = K(d, e.classes), m = K(e.classes, d);
						return V(a, (e => Tt(t, e))), Ct(t, r), ka(t, m), Oa(t, u), V(c, (e => Lt(t, e))), Dt(t, l), e.innerHtml.fold((() => {
							const o = e.domChildren;
							((e, t) => {
								sl(e, t, ((t, o) => {
									const n = ct(e, o);
									return nl(e, t, n), t
								}))
							})(t, o)
						}), (e => {
							oi(t, e)
						})), (() => {
							const o = t,
								n = e.value.getOrUndefined();
							n !== tl(o) && ol(o, null != n ? n : "")
						})(), t
					})(e, t);
					return A.some(o)
				} catch (e) {
					return A.none()
				}
			})(e, t))).getOrThunk((() => (e => {
				const t = Re(e.tag);
				Ct(t, e.attributes), ka(t, e.classes), Dt(t, e.styles), e.innerHtml.each((e => oi(t, e)));
				const o = e.domChildren;
				return Lo(t, o), e.value.each((e => {
					ol(t, e)
				})), t
			})(e)));
			return Ni(o, e.uid), o
		},
		ll = e => {
			const t = (e => {
				const t = fe(e, "behaviours").getOr({});
				return q(re(t), (e => {
					const o = t[e];
					return g(o) ? [o.me] : []
				}))
			})(e);
			return ((e, t) => ((e, t) => {
				const o = L(t, (e => ys(e.name(), [rs("config"), ws("state", ia)]))),
					n = Kn("component.behaviours", Fn(o), e.behaviours).fold((t => {
						throw new Error(Zn(t) + "\nComplete spec:\n" + JSON.stringify(e, null, 2))
					}), w);
				return {
					list: t,
					data: le(n, (e => {
						const t = e.map((e => ({
							config: e.config,
							state: e.state.init(e.config)
						})));
						return y(t)
					}))
				}
			})(e, t))(e, t)
		},
		cl = (e, t) => {
			const o = () => m,
				n = en(Pi),
				s = Jn((e => Kn("custom.definition", Zi, e))(e)),
				r = ll(e),
				a = (e => e.list)(r),
				i = (e => e.data)(r),
				l = ((e, t, o) => {
					const n = {
						...(s = e).dom,
						uid: s.uid,
						domChildren: L(s.components, (e => e.element))
					};
					var s;
					const r = (e => e.domModification.fold((() => na({})), na))(e),
						a = {
							"alloy.base.modification": r
						},
						i = t.length > 0 ? ((e, t, o, n) => {
							const s = {
								...t
							};
							V(o, (t => {
								s[t.name()] = t.exhibit(e, n)
							}));
							const r = Gi(s, ((e, t) => ({
									name: e,
									modification: t
								}))),
								a = e => U(e, ((e, t) => ({
									...t.modification,
									...e
								})), {}),
								i = U(r.classes, ((e, t) => t.modification.concat(e)), []),
								l = a(r.attributes),
								c = a(r.styles);
							return na({
								classes: i,
								attributes: l,
								styles: c
							})
						})(o, a, t, n) : r;
					return l = n, c = i, {
						...l,
						attributes: {
							...l.attributes,
							...c.attributes
						},
						styles: {
							...l.styles,
							...c.styles
						},
						classes: l.classes.concat(c.classes)
					};
					var l, c
				})(s, a, i),
				c = il(l, t),
				d = ((e, t, o) => {
					const n = {
						"alloy.base.behaviour": el(e)
					};
					return ((e, t, o, n) => {
						const s = ((e, t, o) => {
							const n = {
								...o,
								...Xi(t, e)
							};
							return Gi(n, Yi)
						})(e, o, n);
						return Ji(s, t)
					})(o, e.eventOrder, t, n).getOrDie()
				})(s, a, i),
				u = en(s.components),
				m = {
					uid: e.uid,
					getSystem: n.get,
					config: t => {
						const o = i;
						return (p(o[t.name()]) ? o[t.name()] : () => {
							throw new Error("Could not find " + t.name() + " in " + JSON.stringify(e, null, 2))
						})()
					},
					hasConfigured: e => p(i[e.name()]),
					spec: e,
					readState: e => i[e]().map((e => e.state.readState())).getOr("not enabled"),
					getApis: () => s.apis,
					connect: e => {
						n.set(e)
					},
					disconnect: () => {
						n.set(Hi(o))
					},
					element: c,
					syncComponents: () => {
						const e = lt(c),
							t = q(e, (e => n.get().getByDom(e).fold((() => []), Q)));
						u.set(t)
					},
					components: u.get,
					events: d
				};
			return m
		},
		dl = e => {
			const t = Ne(e);
			return ul({
				element: t
			})
		},
		ul = e => {
			const t = Qn("external.component", In([rs("element"), gs("uid")]), e),
				o = en(Hi()),
				n = t.uid.getOrThunk((() => Li("external")));
			Ni(t.element, n);
			const s = {
				uid: n,
				getSystem: o.get,
				config: A.none,
				hasConfigured: T,
				connect: e => {
					o.set(e)
				},
				disconnect: () => {
					o.set(Hi((() => s)))
				},
				getApis: () => ({}),
				element: t.element,
				spec: e,
				readState: y("No state"),
				syncComponents: b,
				components: y([]),
				events: {}
			};
			return Wi(s)
		},
		ml = Li,
		gl = (e, t) => ji(e).getOrThunk((() => ((e, t) => {
			const {
				events: o,
				...n
			} = Vi(e), s = ((e, t) => {
				const o = fe(e, "components").getOr([]);
				return t.fold((() => L(o, pl)), (e => L(o, ((t, o) => gl(t, ct(e, o))))))
			})(n, t), r = {
				...n,
				events: {
					...Ti,
					...o
				},
				components: s
			};
			return ln.value(cl(r, t))
		})((e => be(e, "uid"))(e) ? e : {
			uid: ml(""),
			...e
		}, t).getOrDie())),
		pl = e => gl(e, A.none()),
		hl = Wi;
	var fl, bl = (e, t, o, n, s) => e(o, n) ? A.some(o) : p(s) && s(o) ? A.none() : t(o, n, s);
	const vl = (e, t, o) => {
			let n = e.dom;
			const s = p(o) ? o : T;
			for (; n.parentNode;) {
				n = n.parentNode;
				const e = ze(n);
				if (t(e)) return A.some(e);
				if (s(e)) break
			}
			return A.none()
		},
		xl = (e, t, o) => bl(((e, t) => t(e)), vl, e, t, o),
		yl = (e, t) => j(e.dom.childNodes, (e => t(ze(e)))).map(ze),
		wl = (e, t, o) => xl(e, t, o).isSome(),
		Sl = (e, t, o) => vl(e, (e => Ke(e, t)), o),
		Cl = (e, t) => ((e, o) => {
			const n = e.dom;
			return n.parentNode ? yl(ze(n.parentNode), (o => !Ze(e, o) && Ke(o, t))) : A.none()
		})(e),
		kl = (e, t) => yl(e, (e => Ke(e, t))),
		Ol = (e, t) => Qe(t, e),
		_l = (e, t, o) => bl(((e, t) => Ke(e, t)), Sl, e, t, o),
		Tl = "aria-controls",
		El = () => {
			const e = Di(Tl);
			return {
				id: e,
				link: t => {
					St(t, Tl, e)
				},
				unlink: e => {
					Tt(e, Tl)
				}
			}
		},
		Al = (e, t) => wl(t, (t => Ze(t, e.element)), T) || ((e, t) => (e => xl(e, (e => {
			if (!$e(e)) return !1;
			const t = kt(e, "id");
			return void 0 !== t && t.indexOf(Tl) > -1
		})).bind((e => {
			const t = kt(e, "id"),
				o = pt(e);
			return Ol(o, `[${Tl}="${t}"]`)
		})))(t).exists((t => Al(e, t))))(e, t),
		Ml = (e, t, o, n, s, r, a, i = !1) => ({
			x: e,
			y: t,
			bubble: o,
			direction: n,
			placement: s,
			restriction: r,
			label: `${a}-${s}`,
			alwaysFit: i
		}),
		Dl = Ms([{
			southeast: []
		}, {
			southwest: []
		}, {
			northeast: []
		}, {
			northwest: []
		}, {
			south: []
		}, {
			north: []
		}, {
			east: []
		}, {
			west: []
		}]),
		Bl = Dl.southeast,
		Il = Dl.southwest,
		Fl = Dl.northeast,
		Rl = Dl.northwest,
		Nl = Dl.south,
		zl = Dl.north,
		Ll = Dl.east,
		Vl = Dl.west,
		Hl = (e, t) => J(["left", "right", "top", "bottom"], (o => fe(t, o).map((t => ((e, t) => {
			switch (t) {
				case 1:
					return e.x;
				case 0:
					return e.x + e.width;
				case 2:
					return e.y;
				case 3:
					return e.y + e.height
			}
		})(e, t))))),
		Pl = "layout",
		Ul = e => e.x,
		Wl = (e, t) => e.x + e.width / 2 - t.width / 2,
		jl = (e, t) => e.x + e.width - t.width,
		$l = (e, t) => e.y - t.height,
		Gl = e => e.y + e.height,
		ql = (e, t) => e.y + e.height / 2 - t.height / 2,
		Yl = (e, t, o) => Ml(Ul(e), Gl(e), o.southeast(), Bl(), "southeast", Hl(e, {
			left: 1,
			top: 3
		}), Pl),
		Xl = (e, t, o) => Ml(jl(e, t), Gl(e), o.southwest(), Il(), "southwest", Hl(e, {
			right: 0,
			top: 3
		}), Pl),
		Kl = (e, t, o) => Ml(Ul(e), $l(e, t), o.northeast(), Fl(), "northeast", Hl(e, {
			left: 1,
			bottom: 2
		}), Pl),
		Jl = (e, t, o) => Ml(jl(e, t), $l(e, t), o.northwest(), Rl(), "northwest", Hl(e, {
			right: 0,
			bottom: 2
		}), Pl),
		Ql = (e, t, o) => Ml(Wl(e, t), $l(e, t), o.north(), zl(), "north", Hl(e, {
			bottom: 2
		}), Pl),
		Zl = (e, t, o) => Ml(Wl(e, t), Gl(e), o.south(), Nl(), "south", Hl(e, {
			top: 3
		}), Pl),
		ec = (e, t, o) => Ml((e => e.x + e.width)(e), ql(e, t), o.east(), Ll(), "east", Hl(e, {
			left: 0
		}), Pl),
		tc = (e, t, o) => Ml(((e, t) => e.x - t.width)(e, t), ql(e, t), o.west(), Vl(), "west", Hl(e, {
			right: 1
		}), Pl),
		oc = () => [Yl, Xl, Kl, Jl, Zl, Ql, ec, tc],
		nc = () => [Xl, Yl, Jl, Kl, Zl, Ql, ec, tc],
		sc = () => [Kl, Jl, Yl, Xl, Ql, Zl],
		rc = () => [Jl, Kl, Xl, Yl, Ql, Zl],
		ac = () => [Yl, Xl, Kl, Jl, Zl, Ql],
		ic = () => [Xl, Yl, Jl, Kl, Zl, Ql];
	var lc = Object.freeze({
			__proto__: null,
			events: e => Hr([Wr(ur(), ((t, o) => {
				const n = e.channels,
					s = re(n),
					r = o,
					a = ((e, t) => t.universal ? e : P(e, (e => F(t.channels, e))))(s, r);
				V(a, (e => {
					const o = n[e],
						s = o.schema,
						a = Qn("channel[" + e + "] data\nReceiver: " + si(t.element), s, r.data);
					o.onReceive(t, a)
				}))
			}))])
		}),
		cc = [as("channels", Xn(ln.value, In([xi("onReceive"), ws("schema", Vn())])))];
	const dc = ua({
		fields: cc,
		name: "receiving",
		active: lc
	});
	var uc = Object.freeze({
		__proto__: null,
		exhibit: (e, t) => na({
			classes: [],
			styles: t.useFixed() ? {} : {
				position: "relative"
			}
		})
	});
	const mc = (e, t = !1) => e.dom.focus({
			preventScroll: t
		}),
		gc = e => e.dom.blur(),
		pc = e => {
			const t = pt(e).dom;
			return e.dom === t.activeElement
		},
		hc = (e = $o()) => A.from(e.dom.activeElement).map(ze),
		fc = e => hc(pt(e)).filter((t => e.dom.contains(t.dom))),
		bc = (e, t) => {
			const o = pt(t),
				n = hc(o).bind((e => {
					const o = t => Ze(e, t);
					return o(t) ? A.some(t) : ((e, t) => {
						const o = e => {
							for (let n = 0; n < e.childNodes.length; n++) {
								const s = ze(e.childNodes[n]);
								if (t(s)) return A.some(s);
								const r = o(e.childNodes[n]);
								if (r.isSome()) return r
							}
							return A.none()
						};
						return o(e.dom)
					})(t, o)
				})),
				s = e(t);
			return n.each((e => {
				hc(o).filter((t => Ze(t, e))).fold((() => {
					mc(e)
				}), b)
			})), s
		},
		vc = Ms([{
			none: []
		}, {
			relative: ["x", "y", "width", "height"]
		}, {
			fixed: ["x", "y", "width", "height"]
		}]),
		xc = (e, t, o, n, s, r) => {
			const a = t.rect,
				i = a.x - o,
				l = a.y - n,
				c = s - (i + a.width),
				d = r - (l + a.height),
				u = A.some(i),
				m = A.some(l),
				g = A.some(c),
				p = A.some(d),
				h = A.none();
			return t.direction.fold((() => Ta(e, u, m, h, h)), (() => Ta(e, h, m, g, h)), (() => Ta(e, u, h, h, p)), (() => Ta(e, h, h, g, p)), (() => Ta(e, u, m, h, h)), (() => Ta(e, u, h, h, p)), (() => Ta(e, u, m, h, h)), (() => Ta(e, h, m, g, h)))
		},
		yc = (e, t) => e.fold((() => {
			const e = t.rect;
			return Ta("absolute", A.some(e.x), A.some(e.y), A.none(), A.none())
		}), ((e, o, n, s) => xc("absolute", t, e, o, n, s)), ((e, o, n, s) => xc("fixed", t, e, o, n, s))),
		wc = (e, t) => {
			const o = C(Yo, t),
				n = e.fold(o, o, (() => {
					const e = Po();
					return Yo(t).translate(-e.left, -e.top)
				})),
				s = Jt(t),
				r = Wt(t);
			return Xo(n.left, n.top, s, r)
		},
		Sc = (e, t) => t.fold((() => e.fold(Zo, Zo, Xo)), (t => e.fold(y(t), y(t), (() => {
			const o = Cc(e, t.x, t.y);
			return Xo(o.left, o.top, t.width, t.height)
		})))),
		Cc = (e, t, o) => {
			const n = $t(t, o);
			return e.fold(y(n), y(n), (() => {
				const e = Po();
				return n.translate(-e.left, -e.top)
			}))
		};
	vc.none;
	const kc = vc.relative,
		Oc = vc.fixed,
		_c = "data-alloy-placement",
		Tc = e => Ot(e, _c),
		Ec = Ms([{
			fit: ["reposition"]
		}, {
			nofit: ["reposition", "visibleW", "visibleH", "isVisible"]
		}]),
		Ac = (e, t, o, n) => {
			const s = e.bubble,
				r = s.offset,
				a = ((e, t, o) => {
					const n = (n, s) => t[n].map((t => {
							const r = "top" === n || "bottom" === n,
								a = r ? o.top : o.left,
								i = ("left" === n || "top" === n ? Math.max : Math.min)(t, s) + a;
							return r ? Ai(i, e.y, e.bottom) : Ai(i, e.x, e.right)
						})).getOr(s),
						s = n("left", e.x),
						r = n("top", e.y),
						a = n("right", e.right),
						i = n("bottom", e.bottom);
					return Xo(s, r, a - s, i - r)
				})(n, e.restriction, r),
				i = e.x + r.left,
				l = e.y + r.top,
				c = Xo(i, l, t, o),
				{
					originInBounds: d,
					sizeInBounds: u,
					visibleW: m,
					visibleH: g
				} = ((e, t) => {
					const {
						x: o,
						y: n,
						right: s,
						bottom: r
					} = t, {
						x: a,
						y: i,
						right: l,
						bottom: c,
						width: d,
						height: u
					} = e;
					return {
						originInBounds: a >= o && a <= s && i >= n && i <= r,
						sizeInBounds: l <= s && l >= o && c <= r && c >= n,
						visibleW: Math.min(d, a >= o ? s - a : l - o),
						visibleH: Math.min(u, i >= n ? r - i : c - n)
					}
				})(c, a),
				p = d && u,
				h = p ? c : ((e, t) => {
					const {
						x: o,
						y: n,
						right: s,
						bottom: r
					} = t, {
						x: a,
						y: i,
						width: l,
						height: c
					} = e, d = Math.max(o, s - l), u = Math.max(n, r - c), m = Ai(a, o, d), g = Ai(i, n, u), p = Math.min(m + l, s) - m, h = Math.min(g + c, r) - g;
					return Xo(m, g, p, h)
				})(c, a),
				f = h.width > 0 && h.height > 0,
				{
					maxWidth: b,
					maxHeight: v
				} = ((e, t, o) => {
					const n = y(t.bottom - o.y),
						s = y(o.bottom - t.y),
						r = ((e, t, o, n) => e.fold(t, t, n, n, t, n, o, o))(e, s, s, n),
						a = y(t.right - o.x),
						i = y(o.right - t.x),
						l = ((e, t, o, n) => e.fold(t, n, t, n, o, o, t, n))(e, i, i, a);
					return {
						maxWidth: l,
						maxHeight: r
					}
				})(e.direction, h, n),
				x = {
					rect: h,
					maxHeight: v,
					maxWidth: b,
					direction: e.direction,
					placement: e.placement,
					classes: {
						on: s.classesOn,
						off: s.classesOff
					},
					layout: e.label,
					testY: l
				};
			return p || e.alwaysFit ? Ec.fit(x) : Ec.nofit(x, m, g, f)
		},
		Mc = E,
		Dc = (e, t, o) => ((e, t, o, n) => Bo(e, t, o, n, !1))(e, t, Mc, o),
		Bc = (e, t, o) => ((e, t, o, n) => Bo(e, t, o, n, !0))(e, t, Mc, o),
		Ic = Do,
		Fc = ["top", "bottom", "right", "left"],
		Rc = "data-alloy-transition-timer",
		Nc = (e, t, o, n, s, a) => {
			const i = ((e, t, o) => o.exists((o => {
				const n = e.mode;
				return "all" === n || o[n] !== t[n]
			})))(n, s, a);
			if (i || ((e, t) => ((e, t) => Y(t, (t => Ca(e, t))))(e, t.classes))(e, n)) {
				Mt(e, "position", o.position);
				const a = wc(t, e),
					l = yc(t, {
						...s,
						rect: a
					}),
					c = J(Fc, (e => l[e]));
				((e, t) => {
					const o = e => parseFloat(e).toFixed(3);
					return pe(t, ((t, n) => !((e, t, o = S) => we(e, t, o).getOr(e.isNone() && t.isNone()))(e[n].map(o), t.map(o)))).isSome()
				})(o, c) && (Bt(e, c), i && ((e, t) => {
					ka(e, t.classes), Ot(e, Rc).each((t => {
						clearTimeout(parseInt(t, 10)), Tt(e, Rc)
					})), ((e, t) => {
						const o = on(),
							n = on();
						let s;
						const a = t => {
								var o;
								const n = null !== (o = t.raw.pseudoElement) && void 0 !== o ? o : "";
								return Ze(t.target, e) && De(n) && F(Fc, t.raw.propertyName)
							},
							i = r => {
								if (m(r) || a(r)) {
									o.clear(), n.clear();
									const a = null == r ? void 0 : r.raw.type;
									(m(a) || a === nr()) && (clearTimeout(s), Tt(e, Rc), Oa(e, t.classes))
								}
							},
							l = Dc(e, sr(), (t => {
								a(t) && (l.unbind(), o.set(Dc(e, nr(), i)), n.set(Dc(e, or(), i)))
							})),
							c = (e => {
								const t = t => {
										const o = It(e, t).split(/\s*,\s*/);
										return P(o, Me)
									},
									o = e => {
										if (r(e) && /^[\d.]+/.test(e)) {
											const t = parseFloat(e);
											return Ee(e, "ms") ? t : 1e3 * t
										}
										return 0
									},
									n = t("transition-delay"),
									s = t("transition-duration");
								return W(s, ((e, t, s) => {
									const r = o(n[s]) + o(t);
									return Math.max(e, r)
								}), 0)
							})(e);
						requestAnimationFrame((() => {
							s = setTimeout(i, c + 17), St(e, Rc, s)
						}))
					})(e, t)
				})(e, n), Vt(e))
			} else Oa(e, n.classes)
		},
		zc = (e, t) => {
			((e, t) => {
				const o = Pt.max(e, t, ["margin-top", "border-top-width", "padding-top", "padding-bottom", "border-bottom-width", "margin-bottom"]);
				Mt(e, "max-height", o + "px")
			})(e, Math.floor(t))
		},
		Lc = y(((e, t) => {
			zc(e, t), Dt(e, {
				"overflow-x": "hidden",
				"overflow-y": "auto"
			})
		})),
		Vc = y(((e, t) => {
			zc(e, t)
		})),
		Hc = (e, t, o) => void 0 === e[t] ? o : e[t],
		Pc = (e, t, o, n) => {
			const s = ((e, t, o, n) => {
				Lt(t, "max-height"), Lt(t, "max-width");
				const s = {
					width: Jt(r = t),
					height: Wt(r)
				};
				var r;
				return ((e, t, o, n, s, r) => {
					const a = n.width,
						i = n.height,
						l = (t, l, c, d, u) => {
							const m = t(o, n, s, e, r),
								g = Ac(m, a, i, r);
							return g.fold(y(g), ((e, t, o, n) => (u === n ? o > d || t > c : !u && n) ? g : Ec.nofit(l, c, d, u)))
						};
					return W(t, ((e, t) => {
						const o = C(l, t);
						return e.fold(y(e), o)
					}), Ec.nofit({
						rect: o,
						maxHeight: n.height,
						maxWidth: n.width,
						direction: Bl(),
						placement: "southeast",
						classes: {
							on: [],
							off: []
						},
						layout: "none",
						testY: o.y
					}, -1, -1, !1)).fold(w, w)
				})(t, n.preference, e, s, o, n.bounds)
			})(e, t, o, n);
			return ((e, t, o) => {
				const n = yc(o.origin, t);
				o.transition.each((s => {
					Nc(e, o.origin, n, s, t, o.lastPlacement)
				})), Ea(e, n)
			})(t, s, n), ((e, t) => {
				((e, t) => {
					St(e, _c, t)
				})(e, t.placement)
			})(t, s), ((e, t) => {
				const o = t.classes;
				Oa(e, o.off), ka(e, o.on)
			})(t, s), ((e, t, o) => {
				(0, o.maxHeightFunction)(e, t.maxHeight)
			})(t, s, n), ((e, t, o) => {
				(0, o.maxWidthFunction)(e, t.maxWidth)
			})(t, s, n), {
				layout: s.layout,
				placement: s.placement
			}
		},
		Uc = ["valignCentre", "alignLeft", "alignRight", "alignCentre", "top", "bottom", "left", "right", "inset"],
		Wc = (e, t, o, n = 1) => {
			const s = e * n,
				r = t * n,
				a = e => fe(o, e).getOr([]),
				i = (e, t, o) => {
					const n = K(Uc, o);
					return {
						offset: $t(e, t),
						classesOn: q(o, a),
						classesOff: q(n, a)
					}
				};
			return {
				southeast: () => i(-e, t, ["top", "alignLeft"]),
				southwest: () => i(e, t, ["top", "alignRight"]),
				south: () => i(-e / 2, t, ["top", "alignCentre"]),
				northeast: () => i(-e, -t, ["bottom", "alignLeft"]),
				northwest: () => i(e, -t, ["bottom", "alignRight"]),
				north: () => i(-e / 2, -t, ["bottom", "alignCentre"]),
				east: () => i(e, -t / 2, ["valignCentre", "left"]),
				west: () => i(-e, -t / 2, ["valignCentre", "right"]),
				insetNortheast: () => i(s, r, ["top", "alignLeft", "inset"]),
				insetNorthwest: () => i(-s, r, ["top", "alignRight", "inset"]),
				insetNorth: () => i(-s / 2, r, ["top", "alignCentre", "inset"]),
				insetSoutheast: () => i(s, -r, ["bottom", "alignLeft", "inset"]),
				insetSouthwest: () => i(-s, -r, ["bottom", "alignRight", "inset"]),
				insetSouth: () => i(-s / 2, -r, ["bottom", "alignCentre", "inset"]),
				insetEast: () => i(-s, -r / 2, ["valignCentre", "right", "inset"]),
				insetWest: () => i(s, -r / 2, ["valignCentre", "left", "inset"])
			}
		},
		jc = () => Wc(0, 0, {}),
		$c = w,
		Gc = (e, t) => o => "rtl" === qc(o) ? t : e,
		qc = e => "rtl" === It(e, "direction") ? "rtl" : "ltr";
	var Yc;
	! function(e) {
		e.TopToBottom = "toptobottom", e.BottomToTop = "bottomtotop"
	}(Yc || (Yc = {}));
	const Xc = "data-alloy-vertical-dir",
		Kc = e => wl(e, (e => $e(e) && kt(e, "data-alloy-vertical-dir") === Yc.BottomToTop)),
		Jc = () => ys("layouts", [rs("onLtr"), rs("onRtl"), gs("onBottomLtr"), gs("onBottomRtl")]),
		Qc = (e, t, o, n, s, r, a) => {
			const i = a.map(Kc).getOr(!1),
				l = t.layouts.map((t => t.onLtr(e))),
				c = t.layouts.map((t => t.onRtl(e))),
				d = i ? t.layouts.bind((t => t.onBottomLtr.map((t => t(e))))).or(l).getOr(s) : l.getOr(o),
				u = i ? t.layouts.bind((t => t.onBottomRtl.map((t => t(e))))).or(c).getOr(r) : c.getOr(n);
			return Gc(d, u)(e)
		};
	var Zc = [rs("hotspot"), gs("bubble"), ws("overrides", {}), Jc(), wi("placement", ((e, t, o) => {
			const n = t.hotspot,
				s = wc(o, n.element),
				r = Qc(e.element, t, ac(), ic(), sc(), rc(), A.some(t.hotspot.element));
			return A.some($c({
				anchorBox: s,
				bubble: t.bubble.getOr(jc()),
				overrides: t.overrides,
				layouts: r
			}))
		}))],
		ed = [rs("x"), rs("y"), ws("height", 0), ws("width", 0), ws("bubble", jc()), ws("overrides", {}), Jc(), wi("placement", ((e, t, o) => {
			const n = Cc(o, t.x, t.y),
				s = Xo(n.left, n.top, t.width, t.height),
				r = Qc(e.element, t, oc(), nc(), oc(), nc(), A.none());
			return A.some($c({
				anchorBox: s,
				bubble: t.bubble,
				overrides: t.overrides,
				layouts: r
			}))
		}))];
	const td = Ms([{
			screen: ["point"]
		}, {
			absolute: ["point", "scrollLeft", "scrollTop"]
		}]),
		od = e => e.fold(w, ((e, t, o) => e.translate(-t, -o))),
		nd = e => e.fold(w, w),
		sd = e => W(e, ((e, t) => e.translate(t.left, t.top)), $t(0, 0)),
		rd = e => {
			const t = L(e, nd);
			return sd(t)
		},
		ad = td.screen,
		id = td.absolute,
		ld = (e, t, o) => {
			const n = tt(e.element),
				s = Po(n),
				r = ((e, t, o) => {
					const n = st(o.root).dom;
					return A.from(n.frameElement).map(ze).filter((t => {
						const o = tt(t),
							n = tt(e.element);
						return Ze(o, n)
					})).map(qt)
				})(e, 0, o).getOr(s);
			return id(r, s.left, s.top)
		},
		cd = (e, t, o, n) => {
			const s = ad($t(e, t));
			return A.some(((e, t, o) => ({
				point: e,
				width: t,
				height: o
			}))(s, o, n))
		},
		dd = (e, t, o, n, s) => e.map((e => {
			const r = [t, e.point],
				a = (i = () => rd(r), l = () => rd(r), c = () => (e => {
					const t = L(e, od);
					return sd(t)
				})(r), n.fold(i, l, c));
			var i, l, c;
			const d = (p = a.left, h = a.top, f = e.width, b = e.height, {
					x: p,
					y: h,
					width: f,
					height: b
				}),
				u = o.showAbove ? sc() : ac(),
				m = o.showAbove ? rc() : ic(),
				g = Qc(s, o, u, m, u, m, A.none());
			var p, h, f, b;
			return $c({
				anchorBox: d,
				bubble: o.bubble.getOr(jc()),
				overrides: o.overrides,
				layouts: g
			})
		}));
	var ud = [rs("node"), rs("root"), gs("bubble"), Jc(), ws("overrides", {}), ws("showAbove", !1), wi("placement", ((e, t, o) => {
		const n = ld(e, 0, t);
		return t.node.filter(vt).bind((s => {
			const r = s.dom.getBoundingClientRect(),
				a = cd(r.left, r.top, r.width, r.height),
				i = t.node.getOr(e.element);
			return dd(a, n, t, o, i)
		}))
	}))];
	const md = (e, t, o, n) => ({
			start: e,
			soffset: t,
			finish: o,
			foffset: n
		}),
		gd = Ms([{
			before: ["element"]
		}, {
			on: ["element", "offset"]
		}, {
			after: ["element"]
		}]),
		pd = (gd.before, gd.on, gd.after, e => e.fold(w, w, w)),
		hd = Ms([{
			domRange: ["rng"]
		}, {
			relative: ["startSitu", "finishSitu"]
		}, {
			exact: ["start", "soffset", "finish", "foffset"]
		}]),
		fd = {
			domRange: hd.domRange,
			relative: hd.relative,
			exact: hd.exact,
			exactFromRange: e => hd.exact(e.start, e.soffset, e.finish, e.foffset),
			getWin: e => {
				const t = (e => e.match({
					domRange: e => ze(e.startContainer),
					relative: (e, t) => pd(e),
					exact: (e, t, o, n) => e
				}))(e);
				return st(t)
			},
			range: md
		},
		bd = (e, t, o) => {
			const n = e.document.createRange();
			var s;
			return s = n, t.fold((e => {
				s.setStartBefore(e.dom)
			}), ((e, t) => {
				s.setStart(e.dom, t)
			}), (e => {
				s.setStartAfter(e.dom)
			})), ((e, t) => {
				t.fold((t => {
					e.setEndBefore(t.dom)
				}), ((t, o) => {
					e.setEnd(t.dom, o)
				}), (t => {
					e.setEndAfter(t.dom)
				}))
			})(n, o), n
		},
		vd = (e, t, o, n, s) => {
			const r = e.document.createRange();
			return r.setStart(t.dom, o), r.setEnd(n.dom, s), r
		},
		xd = e => ({
			left: e.left,
			top: e.top,
			right: e.right,
			bottom: e.bottom,
			width: e.width,
			height: e.height
		}),
		yd = Ms([{
			ltr: ["start", "soffset", "finish", "foffset"]
		}, {
			rtl: ["start", "soffset", "finish", "foffset"]
		}]),
		wd = (e, t, o) => t(ze(o.startContainer), o.startOffset, ze(o.endContainer), o.endOffset),
		Sd = (e, t) => ((e, t) => {
			const o = ((e, t) => t.match({
				domRange: e => ({
					ltr: y(e),
					rtl: A.none
				}),
				relative: (t, o) => ({
					ltr: Qt((() => bd(e, t, o))),
					rtl: Qt((() => A.some(bd(e, o, t))))
				}),
				exact: (t, o, n, s) => ({
					ltr: Qt((() => vd(e, t, o, n, s))),
					rtl: Qt((() => A.some(vd(e, n, s, t, o))))
				})
			}))(e, t);
			return ((e, t) => {
				const o = t.ltr();
				return o.collapsed ? t.rtl().filter((e => !1 === e.collapsed)).map((e => yd.rtl(ze(e.endContainer), e.endOffset, ze(e.startContainer), e.startOffset))).getOrThunk((() => wd(0, yd.ltr, o))) : wd(0, yd.ltr, o)
			})(0, o)
		})(e, t).match({
			ltr: (t, o, n, s) => {
				const r = e.document.createRange();
				return r.setStart(t.dom, o), r.setEnd(n.dom, s), r
			},
			rtl: (t, o, n, s) => {
				const r = e.document.createRange();
				return r.setStart(n.dom, s), r.setEnd(t.dom, o), r
			}
		});
	yd.ltr, yd.rtl;
	const Cd = (e, t, o) => P(((e, t) => {
			const o = p(t) ? t : T;
			let n = e.dom;
			const s = [];
			for (; null !== n.parentNode && void 0 !== n.parentNode;) {
				const e = n.parentNode,
					t = ze(e);
				if (s.push(t), !0 === o(t)) break;
				n = e
			}
			return s
		})(e, o), t),
		kd = (e, t) => ((e, t) => {
			const o = void 0 === t ? document : t.dom;
			return Je(o) ? [] : L(o.querySelectorAll(e), ze)
		})(t, e),
		Od = e => {
			if (e.rangeCount > 0) {
				const t = e.getRangeAt(0),
					o = e.getRangeAt(e.rangeCount - 1);
				return A.some(md(ze(t.startContainer), t.startOffset, ze(o.endContainer), o.endOffset))
			}
			return A.none()
		},
		_d = e => {
			if (null === e.anchorNode || null === e.focusNode) return Od(e);
			{
				const t = ze(e.anchorNode),
					o = ze(e.focusNode);
				return ((e, t, o, n) => {
					const s = ((e, t, o, n) => {
							const s = tt(e).dom.createRange();
							return s.setStart(e.dom, t), s.setEnd(o.dom, n), s
						})(e, t, o, n),
						r = Ze(e, o) && t === n;
					return s.collapsed && !r
				})(t, e.anchorOffset, o, e.focusOffset) ? A.some(md(t, e.anchorOffset, o, e.focusOffset)) : Od(e)
			}
		},
		Td = (e, t) => (e => {
			const t = e.getClientRects(),
				o = t.length > 0 ? t[0] : e.getBoundingClientRect();
			return o.width > 0 || o.height > 0 ? A.some(o).map(xd) : A.none()
		})(Sd(e, t)),
		Ed = ((e, t) => {
			const o = t => e(t) ? A.from(t.dom.nodeValue) : A.none();
			return {
				get: t => {
					if (!e(t)) throw new Error("Can only get text value of a text node");
					return o(t).getOr("")
				},
				getOption: o,
				set: (t, o) => {
					if (!e(t)) throw new Error("Can only set raw text value of a text node");
					t.dom.nodeValue = o
				}
			}
		})(Ge),
		Ad = (e, t) => ({
			element: e,
			offset: t
		}),
		Md = (e, t) => Ge(e) ? Ad(e, t) : ((e, t) => {
			const o = lt(e);
			if (0 === o.length) return Ad(e, t);
			if (t < o.length) return Ad(o[t], 0);
			{
				const e = o[o.length - 1],
					t = Ge(e) ? (e => Ed.get(e))(e).length : lt(e).length;
				return Ad(e, t)
			}
		})(e, t),
		Dd = e => void 0 !== e.foffset,
		Bd = (e, t) => t.getSelection.getOrThunk((() => () => (e => (e => A.from(e.getSelection()))(e).filter((e => e.rangeCount > 0)).bind(_d))(e)))().map((e => {
			if (Dd(e)) {
				const t = Md(e.start, e.soffset),
					o = Md(e.finish, e.foffset);
				return fd.range(t.element, t.offset, o.element, o.offset)
			}
			return e
		}));
	var Id = [gs("getSelection"), rs("root"), gs("bubble"), Jc(), ws("overrides", {}), ws("showAbove", !1), wi("placement", ((e, t, o) => {
		const n = st(t.root).dom,
			s = ld(e, 0, t),
			r = Bd(n, t).bind((e => {
				if (Dd(e)) {
					const t = ((e, t) => (e => {
						const t = e.getBoundingClientRect();
						return t.width > 0 || t.height > 0 ? A.some(t).map(xd) : A.none()
					})(Sd(e, t)))(n, fd.exactFromRange(e)).orThunk((() => {
						const t = Ne("\ufeff");
						Fo(e.start, t);
						const o = Td(n, fd.exact(t, 0, t, 1));
						return Ho(t), o
					}));
					return t.bind((e => cd(e.left, e.top, e.width, e.height)))
				} {
					const t = le(e, (e => e.dom.getBoundingClientRect())),
						o = {
							left: Math.min(t.firstCell.left, t.lastCell.left),
							right: Math.max(t.firstCell.right, t.lastCell.right),
							top: Math.min(t.firstCell.top, t.lastCell.top),
							bottom: Math.max(t.firstCell.bottom, t.lastCell.bottom)
						};
					return cd(o.left, o.top, o.right - o.left, o.bottom - o.top)
				}
			})),
			a = Bd(n, t).bind((e => Dd(e) ? $e(e.start) ? A.some(e.start) : at(e.start) : A.some(e.firstCell))).getOr(e.element);
		return dd(r, s, t, o, a)
	}))];
	const Fd = "link-layout",
		Rd = e => e.x + e.width,
		Nd = (e, t) => e.x - t.width,
		zd = (e, t) => e.y - t.height + e.height,
		Ld = e => e.y,
		Vd = (e, t, o) => Ml(Rd(e), Ld(e), o.southeast(), Bl(), "southeast", Hl(e, {
			left: 0,
			top: 2
		}), Fd),
		Hd = (e, t, o) => Ml(Nd(e, t), Ld(e), o.southwest(), Il(), "southwest", Hl(e, {
			right: 1,
			top: 2
		}), Fd),
		Pd = (e, t, o) => Ml(Rd(e), zd(e, t), o.northeast(), Fl(), "northeast", Hl(e, {
			left: 0,
			bottom: 3
		}), Fd),
		Ud = (e, t, o) => Ml(Nd(e, t), zd(e, t), o.northwest(), Rl(), "northwest", Hl(e, {
			right: 1,
			bottom: 3
		}), Fd),
		Wd = () => [Vd, Hd, Pd, Ud],
		jd = () => [Hd, Vd, Ud, Pd];
	var $d = [rs("item"), Jc(), ws("overrides", {}), wi("placement", ((e, t, o) => {
			const n = wc(o, t.item.element),
				s = Qc(e.element, t, Wd(), jd(), Wd(), jd(), A.none());
			return A.some($c({
				anchorBox: n,
				bubble: jc(),
				overrides: t.overrides,
				layouts: s
			}))
		}))],
		Gd = es("type", {
			selection: Id,
			node: ud,
			hotspot: Zc,
			submenu: $d,
			makeshift: ed
		});
	const qd = [ms("classes", Un), Os("mode", "all", ["all", "layout", "placement"])],
		Yd = [ws("useFixed", T), gs("getBounds")],
		Xd = [as("anchor", Gd), ys("transition", qd)],
		Kd = (e, t, o, n, s, r) => {
			const a = Qn("placement.info", Fn(Xd), s),
				i = a.anchor,
				l = n.element,
				c = o.get(n.uid);
			bc((() => {
				Mt(l, "position", "fixed");
				const s = Rt(l, "visibility");
				Mt(l, "visibility", "hidden");
				const d = t.useFixed() ? (() => {
					const e = document.documentElement;
					return Oc(0, 0, e.clientWidth, e.clientHeight)
				})() : (e => {
					const t = qt(e.element),
						o = e.element.dom.getBoundingClientRect();
					return kc(t.left, t.top, o.width, o.height)
				})(e);
				i.placement(e, i, d).each((e => {
					const s = r.orThunk((() => t.getBounds.map(_))),
						i = ((e, t, o, n, s, r) => ((e, t, o, n, s, r, a, i) => {
							const l = Hc(a, "maxHeightFunction", Lc()),
								c = Hc(a, "maxWidthFunction", b),
								d = e.anchorBox,
								u = e.origin,
								m = {
									bounds: Sc(u, r),
									origin: u,
									preference: n,
									maxHeightFunction: l,
									maxWidthFunction: c,
									lastPlacement: s,
									transition: i
								};
							return Pc(d, t, o, m)
						})(((e, t) => ((e, t) => ({
							anchorBox: e,
							origin: t
						}))(e, t))(t.anchorBox, e), n.element, t.bubble, t.layouts, s, o, t.overrides, r))(d, e, s, n, c, a.transition);
					o.set(n.uid, i)
				})), s.fold((() => {
					Lt(l, "visibility")
				}), (e => {
					Mt(l, "visibility", e)
				})), Rt(l, "left").isNone() && Rt(l, "top").isNone() && Rt(l, "right").isNone() && Rt(l, "bottom").isNone() && xe(Rt(l, "position"), "fixed") && Lt(l, "position")
			}), l)
		};
	var Jd = Object.freeze({
		__proto__: null,
		position: (e, t, o, n, s) => {
			const r = A.none();
			Kd(e, t, o, n, s, r)
		},
		positionWithinBounds: Kd,
		getMode: (e, t, o) => t.useFixed() ? "fixed" : "absolute",
		reset: (e, t, o, n) => {
			const s = n.element;
			V(["position", "left", "right", "top", "bottom"], (e => Lt(s, e))), (e => {
				Tt(e, _c)
			})(s), o.clear(n.uid)
		}
	});
	const Qd = ua({
			fields: Yd,
			name: "positioning",
			active: uc,
			apis: Jd,
			state: Object.freeze({
				__proto__: null,
				init: () => {
					let e = {};
					return la({
						readState: () => e,
						clear: t => {
							g(t) ? delete e[t] : e = {}
						},
						set: (t, o) => {
							e[t] = o
						},
						get: t => fe(e, t)
					})
				}
			})
		}),
		Zd = e => e.getSystem().isConnected(),
		eu = e => {
			Fr(e, kr());
			const t = e.components();
			V(t, eu)
		},
		tu = e => {
			const t = e.components();
			V(t, tu), Fr(e, Cr())
		},
		ou = (e, t) => {
			e.getSystem().addToWorld(t), vt(e.element) && tu(t)
		},
		nu = e => {
			eu(e), e.getSystem().removeFromWorld(e)
		},
		su = (e, t) => {
			zo(e.element, t.element)
		},
		ru = (e, t) => {
			au(e, t, zo)
		},
		au = (e, t, o) => {
			e.getSystem().addToWorld(t), o(e.element, t.element), vt(e.element) && tu(t), e.syncComponents()
		},
		iu = e => {
			eu(e), Ho(e.element), e.getSystem().removeFromWorld(e)
		},
		lu = e => {
			const t = rt(e.element).bind((t => e.getSystem().getByDom(t).toOptional()));
			iu(e), t.each((e => {
				e.syncComponents()
			}))
		},
		cu = e => {
			const t = e.components();
			V(t, iu), Vo(e.element), e.syncComponents()
		},
		du = (e, t) => {
			mu(e, t, zo)
		},
		uu = (e, t) => {
			mu(e, t, Ro)
		},
		mu = (e, t, o) => {
			o(e, t.element);
			const n = lt(t.element);
			V(n, (e => {
				t.getByDom(e).each(tu)
			}))
		},
		gu = e => {
			const t = lt(e.element);
			V(t, (t => {
				e.getByDom(t).each(eu)
			})), Ho(e.element)
		},
		pu = (e, t, o, n) => {
			o.get().each((t => {
				cu(e)
			}));
			const s = t.getAttachPoint(e);
			ru(s, e);
			const r = e.getSystem().build(n);
			return ru(e, r), o.set(r), r
		},
		hu = (e, t, o, n) => {
			const s = pu(e, t, o, n);
			return t.onOpen(e, s), s
		},
		fu = (e, t, o) => {
			o.get().each((n => {
				cu(e), lu(e), t.onClose(e, n), o.clear()
			}))
		},
		bu = (e, t, o) => o.isOpen(),
		vu = (e, t, o) => {
			const n = t.getAttachPoint(e);
			Mt(e.element, "position", Qd.getMode(n)), ((e, t, o, n) => {
				Rt(e.element, t).fold((() => {
					Tt(e.element, o)
				}), (t => {
					St(e.element, o, t)
				})), Mt(e.element, t, "hidden")
			})(e, "visibility", t.cloakVisibilityAttr)
		},
		xu = (e, t, o) => {
			(e => R(["top", "left", "right", "bottom"], (t => Rt(e, t).isSome())))(e.element) || Lt(e.element, "position"), ((e, t, o) => {
				Ot(e.element, o).fold((() => Lt(e.element, t)), (o => Mt(e.element, t, o)))
			})(e, "visibility", t.cloakVisibilityAttr)
		};
	var yu = Object.freeze({
			__proto__: null,
			cloak: vu,
			decloak: xu,
			open: hu,
			openWhileCloaked: (e, t, o, n, s) => {
				vu(e, t), hu(e, t, o, n), s(), xu(e, t)
			},
			close: fu,
			isOpen: bu,
			isPartOf: (e, t, o, n) => bu(0, 0, o) && o.get().exists((o => t.isPartOf(e, o, n))),
			getState: (e, t, o) => o.get(),
			setContent: (e, t, o, n) => o.get().map((() => pu(e, t, o, n)))
		}),
		wu = Object.freeze({
			__proto__: null,
			events: (e, t) => Hr([Wr(fr(), ((o, n) => {
				fu(o, e, t)
			}))])
		}),
		Su = [bi("onOpen"), bi("onClose"), rs("isPartOf"), rs("getAttachPoint"), ws("cloakVisibilityAttr", "data-precloak-visibility")],
		Cu = Object.freeze({
			__proto__: null,
			init: () => {
				const e = nn(),
					t = y("not-implemented");
				return la({
					readState: t,
					isOpen: e.isSet,
					clear: e.clear,
					set: e.set,
					get: e.get
				})
			}
		});
	const ku = ua({
			fields: Su,
			name: "sandboxing",
			active: wu,
			apis: yu,
			state: Cu
		}),
		Ou = y("dismiss.popups"),
		_u = y("reposition.popups"),
		Tu = y("mouse.released"),
		Eu = In([ws("isExtraPart", T), ys("fireEventInstead", [ws("event", Or())])]),
		Au = e => {
			const t = Qn("Dismissal", Eu, e);
			return {
				[Ou()]: {
					schema: In([rs("target")]),
					onReceive: (e, o) => {
						ku.isOpen(e) && (ku.isPartOf(e, o.target) || t.isExtraPart(e, o.target) || t.fireEventInstead.fold((() => ku.close(e)), (t => Fr(e, t.event))))
					}
				}
			}
		},
		Mu = In([ys("fireEventInstead", [ws("event", _r())]), cs("doReposition")]),
		Du = e => {
			const t = Qn("Reposition", Mu, e);
			return {
				[_u()]: {
					onReceive: e => {
						ku.isOpen(e) && t.fireEventInstead.fold((() => t.doReposition(e)), (t => Fr(e, t.event)))
					}
				}
			}
		},
		Bu = (e, t, o) => {
			t.store.manager.onLoad(e, t, o)
		},
		Iu = (e, t, o) => {
			t.store.manager.onUnload(e, t, o)
		};
	var Fu = Object.freeze({
			__proto__: null,
			onLoad: Bu,
			onUnload: Iu,
			setValue: (e, t, o, n) => {
				t.store.manager.setValue(e, t, o, n)
			},
			getValue: (e, t, o) => t.store.manager.getValue(e, t, o),
			getState: (e, t, o) => o
		}),
		Ru = Object.freeze({
			__proto__: null,
			events: (e, t) => {
				const o = e.resetOnDom ? [Jr(((o, n) => {
					Bu(o, e, t)
				})), Qr(((o, n) => {
					Iu(o, e, t)
				}))] : [sa(e, t, Bu)];
				return Hr(o)
			}
		});
	const Nu = () => {
			const e = en(null);
			return la({
				set: e.set,
				get: e.get,
				isNotSet: () => null === e.get(),
				clear: () => {
					e.set(null)
				},
				readState: () => ({
					mode: "memory",
					value: e.get()
				})
			})
		},
		zu = () => {
			const e = en({}),
				t = en({});
			return la({
				readState: () => ({
					mode: "dataset",
					dataByValue: e.get(),
					dataByText: t.get()
				}),
				lookup: o => fe(e.get(), o).orThunk((() => fe(t.get(), o))),
				update: o => {
					const n = e.get(),
						s = t.get(),
						r = {},
						a = {};
					V(o, (e => {
						r[e.value] = e, fe(e, "meta").each((t => {
							fe(t, "text").each((t => {
								a[t] = e
							}))
						}))
					})), e.set({
						...n,
						...r
					}), t.set({
						...s,
						...a
					})
				},
				clear: () => {
					e.set({}), t.set({})
				}
			})
		};
	var Lu = Object.freeze({
		__proto__: null,
		memory: Nu,
		dataset: zu,
		manual: () => la({
			readState: b
		}),
		init: e => e.store.manager.state(e)
	});
	const Vu = (e, t, o, n) => {
		const s = t.store;
		o.update([n]), s.setValue(e, n), t.onSetValue(e, n)
	};
	var Hu = [gs("initialValue"), rs("getFallbackEntry"), rs("getDataKey"), rs("setValue"), wi("manager", {
			setValue: Vu,
			getValue: (e, t, o) => {
				const n = t.store,
					s = n.getDataKey(e);
				return o.lookup(s).getOrThunk((() => n.getFallbackEntry(s)))
			},
			onLoad: (e, t, o) => {
				t.store.initialValue.each((n => {
					Vu(e, t, o, n)
				}))
			},
			onUnload: (e, t, o) => {
				o.clear()
			},
			state: zu
		})],
		Pu = [rs("getValue"), ws("setValue", b), gs("initialValue"), wi("manager", {
			setValue: (e, t, o, n) => {
				t.store.setValue(e, n), t.onSetValue(e, n)
			},
			getValue: (e, t, o) => t.store.getValue(e),
			onLoad: (e, t, o) => {
				t.store.initialValue.each((o => {
					t.store.setValue(e, o)
				}))
			},
			onUnload: b,
			state: ia.init
		})],
		Uu = [gs("initialValue"), wi("manager", {
			setValue: (e, t, o, n) => {
				o.set(n), t.onSetValue(e, n)
			},
			getValue: (e, t, o) => o.get(),
			onLoad: (e, t, o) => {
				t.store.initialValue.each((e => {
					o.isNotSet() && o.set(e)
				}))
			},
			onUnload: (e, t, o) => {
				o.clear()
			},
			state: Nu
		})],
		Wu = [Ss("store", {
			mode: "memory"
		}, es("mode", {
			memory: Uu,
			manual: Pu,
			dataset: Hu
		})), bi("onSetValue"), ws("resetOnDom", !1)];
	const ju = ua({
			fields: Wu,
			name: "representing",
			active: Ru,
			apis: Fu,
			extra: {
				setValueFrom: (e, t) => {
					const o = ju.getValue(t);
					ju.setValue(e, o)
				}
			},
			state: Lu
		}),
		$u = (e, t) => As(e, {}, L(t, (t => {
			return o = t.name(), n = "Cannot configure " + t.name() + " for " + e, os(o, o, {
				tag: "option",
				process: {}
			}, Tn((e => pn("The field: " + o + " is forbidden. " + n))));
			var o, n
		})).concat([ns("dump", w)])),
		Gu = e => e.dump,
		qu = (e, t) => ({
			...ca(t),
			...e.dump
		}),
		Yu = $u,
		Xu = qu,
		Ku = "placeholder",
		Ju = Ms([{
			single: ["required", "valueThunk"]
		}, {
			multiple: ["required", "valueThunks"]
		}]),
		Qu = e => be(e, "uiType"),
		Zu = (e, t, o, n) => ((e, t, o, n) => Qu(o) && o.uiType === Ku ? ((e, t, o, n) => e.exists((e => e !== o.owner)) ? Ju.single(!0, y(o)) : fe(n, o.name).fold((() => {
			throw new Error("Unknown placeholder component: " + o.name + "\nKnown: [" + re(n) + "]\nNamespace: " + e.getOr("none") + "\nSpec: " + JSON.stringify(o, null, 2))
		}), (e => e.replace())))(e, 0, o, n) : Ju.single(!1, y(o)))(e, 0, o, n).fold(((s, r) => {
			const a = Qu(o) ? r(t, o.config, o.validated) : r(t),
				i = fe(a, "components").getOr([]),
				l = q(i, (o => Zu(e, t, o, n)));
			return [{
				...a,
				components: l
			}]
		}), ((e, n) => {
			if (Qu(o)) {
				const e = n(t, o.config, o.validated);
				return o.validated.preprocess.getOr(w)(e)
			}
			return n(t)
		})),
		em = Ju.single,
		tm = Ju.multiple,
		om = y(Ku),
		nm = Ms([{
			required: ["data"]
		}, {
			external: ["data"]
		}, {
			optional: ["data"]
		}, {
			group: ["data"]
		}]),
		sm = ws("factory", {
			sketch: w
		}),
		rm = ws("schema", []),
		am = rs("name"),
		im = os("pname", "pname", wn((e => "<alloy." + Di(e.name) + ">")), Vn()),
		lm = ns("schema", (() => [gs("preprocess")])),
		cm = ws("defaults", y({})),
		dm = ws("overrides", y({})),
		um = Fn([sm, rm, am, im, cm, dm]),
		mm = Fn([sm, rm, am, cm, dm]),
		gm = Fn([sm, rm, am, im, cm, dm]),
		pm = Fn([sm, lm, am, rs("unit"), im, cm, dm]),
		hm = e => e.fold(A.some, A.none, A.some, A.some),
		fm = e => {
			const t = e => e.name;
			return e.fold(t, t, t, t)
		},
		bm = (e, t) => o => {
			const n = Qn("Converting part type", t, o);
			return e(n)
		},
		vm = bm(nm.required, um),
		xm = bm(nm.external, mm),
		ym = bm(nm.optional, gm),
		wm = bm(nm.group, pm),
		Sm = y("entirety");
	var Cm = Object.freeze({
		__proto__: null,
		required: vm,
		external: xm,
		optional: ym,
		group: wm,
		asNamedPart: hm,
		name: fm,
		asCommon: e => e.fold(w, w, w, w),
		original: Sm
	});
	const km = (e, t, o, n) => xn(t.defaults(e, o, n), o, {
			uid: e.partUids[t.name]
		}, t.overrides(e, o, n)),
		Om = (e, t) => {
			const o = {};
			return V(t, (t => {
				hm(t).each((t => {
					const n = _m(e, t.pname);
					o[t.name] = o => {
						const s = Qn("Part: " + t.name + " in " + e, Fn(t.schema), o);
						return {
							...n,
							config: o,
							validated: s
						}
					}
				}))
			})), o
		},
		_m = (e, t) => ({
			uiType: om(),
			owner: e,
			name: t
		}),
		Tm = (e, t, o) => ({
			uiType: om(),
			owner: e,
			name: t,
			config: o,
			validated: {}
		}),
		Em = e => q(e, (e => e.fold(A.none, A.some, A.none, A.none).map((e => ds(e.name, e.schema.concat([Si(Sm())])))).toArray())),
		Am = e => L(e, fm),
		Mm = (e, t, o) => ((e, t, o) => {
			const n = {},
				s = {};
			return V(o, (e => {
				e.fold((e => {
					n[e.pname] = em(!0, ((t, o, n) => e.factory.sketch(km(t, e, o, n))))
				}), (e => {
					const o = t.parts[e.name];
					s[e.name] = y(e.factory.sketch(km(t, e, o[Sm()]), o))
				}), (e => {
					n[e.pname] = em(!1, ((t, o, n) => e.factory.sketch(km(t, e, o, n))))
				}), (e => {
					n[e.pname] = tm(!0, ((t, o, n) => {
						const s = t[e.name];
						return L(s, (o => e.factory.sketch(xn(e.defaults(t, o, n), o, e.overrides(t, o)))))
					}))
				}))
			})), {
				internals: y(n),
				externals: y(s)
			}
		})(0, t, o),
		Dm = (e, t, o) => ((e, t, o, n) => {
			const s = le(n, ((e, t) => ((e, t) => {
					let o = !1;
					return {
						name: y(e),
						required: () => t.fold(((e, t) => e), ((e, t) => e)),
						used: () => o,
						replace: () => {
							if (o) throw new Error("Trying to use the same placeholder more than once: " + e);
							return o = !0, t
						}
					}
				})(t, e))),
				r = ((e, t, o, n) => q(o, (o => Zu(e, t, o, n))))(e, t, o, s);
			return ie(s, (o => {
				if (!1 === o.used() && o.required()) throw new Error("Placeholder: " + o.name() + " was not found in components list\nNamespace: " + e.getOr("none") + "\nComponents: " + JSON.stringify(t.components, null, 2))
			})), r
		})(A.some(e), t, t.components, o),
		Bm = (e, t, o) => {
			const n = t.partUids[o];
			return e.getSystem().getByUid(n).toOptional()
		},
		Im = (e, t, o) => Bm(e, t, o).getOrDie("Could not find part: " + o),
		Fm = (e, t, o) => {
			const n = {},
				s = t.partUids,
				r = e.getSystem();
			return V(o, (e => {
				n[e] = y(r.getByUid(s[e]))
			})), n
		},
		Rm = (e, t) => {
			const o = e.getSystem();
			return le(t.partUids, ((e, t) => y(o.getByUid(e))))
		},
		Nm = e => re(e.partUids),
		zm = (e, t, o) => {
			const n = {},
				s = t.partUids,
				r = e.getSystem();
			return V(o, (e => {
				n[e] = y(r.getByUid(s[e]).getOrDie())
			})), n
		},
		Lm = (e, t) => {
			const o = Am(t);
			return Bs(L(o, (t => ({
				key: t,
				value: e + "-" + t
			}))))
		},
		Vm = e => os("partUids", "partUids", Cn((t => Lm(t.uid, e))), Vn());
	var Hm = Object.freeze({
		__proto__: null,
		generate: Om,
		generateOne: Tm,
		schemas: Em,
		names: Am,
		substitutes: Mm,
		components: Dm,
		defaultUids: Lm,
		defaultUidsSchema: Vm,
		getAllParts: Rm,
		getAllPartNames: Nm,
		getPart: Bm,
		getPartOrDie: Im,
		getParts: Fm,
		getPartsOrDie: zm
	});
	const Pm = (e, t, o, n, s) => {
			const r = ((e, t) => (e.length > 0 ? [ds("parts", e)] : []).concat([rs("uid"), ws("dom", {}), ws("components", []), Si("originalSpec"), ws("debug.sketcher", {})]).concat(t))(n, s);
			return Qn(e + " [SpecSchema]", In(r.concat(t)), o)
		},
		Um = (e, t, o, n, s) => {
			const r = Wm(s),
				a = Em(o),
				i = Vm(o),
				l = Pm(e, t, r, a, [i]),
				c = Mm(0, l, o);
			return n(l, Dm(e, l, c.internals()), r, c.externals())
		},
		Wm = e => (e => be(e, "uid"))(e) ? e : {
			...e,
			uid: Li("uid")
		},
		jm = In([rs("name"), rs("factory"), rs("configFields"), ws("apis", {}), ws("extraApis", {})]),
		$m = In([rs("name"), rs("factory"), rs("configFields"), rs("partFields"), ws("apis", {}), ws("extraApis", {})]),
		Gm = e => {
			const t = Qn("Sketcher for " + e.name, jm, e),
				o = le(t.apis, $i),
				n = le(t.extraApis, ((e, t) => oa(e, t)));
			return {
				name: t.name,
				configFields: t.configFields,
				sketch: e => ((e, t, o, n) => {
					const s = Wm(n);
					return o(Pm(e, t, s, [], []), s)
				})(t.name, t.configFields, t.factory, e),
				...o,
				...n
			}
		},
		qm = e => {
			const t = Qn("Sketcher for " + e.name, $m, e),
				o = Om(t.name, t.partFields),
				n = le(t.apis, $i),
				s = le(t.extraApis, ((e, t) => oa(e, t)));
			return {
				name: t.name,
				partFields: t.partFields,
				configFields: t.configFields,
				sketch: e => Um(t.name, t.configFields, t.partFields, t.factory, e),
				parts: o,
				...n,
				...s
			}
		},
		Ym = e => Xe("input")(e) && "radio" !== kt(e, "type") || Xe("textarea")(e);
	var Xm = Object.freeze({
		__proto__: null,
		getCurrent: (e, t, o) => t.find(e)
	});
	const Km = [rs("find")],
		Jm = ua({
			fields: Km,
			name: "composing",
			apis: Xm
		}),
		Qm = ["input", "button", "textarea", "select"],
		Zm = (e, t, o) => {
			(t.disabled() ? rg : ag)(e, t)
		},
		eg = (e, t) => !0 === t.useNative && F(Qm, Ue(e.element)),
		tg = e => {
			St(e.element, "disabled", "disabled")
		},
		og = e => {
			Tt(e.element, "disabled")
		},
		ng = e => {
			St(e.element, "aria-disabled", "true")
		},
		sg = e => {
			St(e.element, "aria-disabled", "false")
		},
		rg = (e, t, o) => {
			t.disableClass.each((t => {
				ya(e.element, t)
			})), (eg(e, t) ? tg : ng)(e), t.onDisabled(e)
		},
		ag = (e, t, o) => {
			t.disableClass.each((t => {
				Sa(e.element, t)
			})), (eg(e, t) ? og : sg)(e), t.onEnabled(e)
		},
		ig = (e, t) => eg(e, t) ? (e => _t(e.element, "disabled"))(e) : (e => "true" === kt(e.element, "aria-disabled"))(e);
	var lg = Object.freeze({
			__proto__: null,
			enable: ag,
			disable: rg,
			isDisabled: ig,
			onLoad: Zm,
			set: (e, t, o, n) => {
				(n ? rg : ag)(e, t)
			}
		}),
		cg = Object.freeze({
			__proto__: null,
			exhibit: (e, t) => na({
				classes: t.disabled() ? t.disableClass.toArray() : []
			}),
			events: (e, t) => Hr([Pr(mr(), ((t, o) => ig(t, e))), sa(e, t, Zm)])
		}),
		dg = [Ts("disabled", T), ws("useNative", !0), gs("disableClass"), bi("onDisabled"), bi("onEnabled")];
	const ug = ua({
			fields: dg,
			name: "disabling",
			active: cg,
			apis: lg
		}),
		mg = (e, t, o, n) => {
			const s = kd(e.element, "." + t.highlightClass);
			V(s, (o => {
				R(n, (e => Ze(e.element, o))) || (Sa(o, t.highlightClass), e.getSystem().getByDom(o).each((o => {
					t.onDehighlight(e, o), Fr(o, Ir())
				})))
			}))
		},
		gg = (e, t, o, n) => {
			mg(e, t, 0, [n]), pg(e, t, o, n) || (ya(n.element, t.highlightClass), t.onHighlight(e, n), Fr(n, Br()))
		},
		pg = (e, t, o, n) => Ca(n.element, t.highlightClass),
		hg = (e, t, o) => Ol(e.element, "." + t.itemClass).bind((t => e.getSystem().getByDom(t).toOptional())),
		fg = (e, t, o) => {
			const n = kd(e.element, "." + t.itemClass);
			return (n.length > 0 ? A.some(n[n.length - 1]) : A.none()).bind((t => e.getSystem().getByDom(t).toOptional()))
		},
		bg = (e, t, o, n) => {
			const s = kd(e.element, "." + t.itemClass);
			return $(s, (e => Ca(e, t.highlightClass))).bind((t => {
				const o = Ei(t, n, 0, s.length - 1);
				return e.getSystem().getByDom(s[o]).toOptional()
			}))
		},
		vg = (e, t, o) => {
			const n = kd(e.element, "." + t.itemClass);
			return ye(L(n, (t => e.getSystem().getByDom(t).toOptional())))
		};
	var xg = Object.freeze({
			__proto__: null,
			dehighlightAll: (e, t, o) => mg(e, t, 0, []),
			dehighlight: (e, t, o, n) => {
				pg(e, t, o, n) && (Sa(n.element, t.highlightClass), t.onDehighlight(e, n), Fr(n, Ir()))
			},
			highlight: gg,
			highlightFirst: (e, t, o) => {
				hg(e, t).each((n => {
					gg(e, t, o, n)
				}))
			},
			highlightLast: (e, t, o) => {
				fg(e, t).each((n => {
					gg(e, t, o, n)
				}))
			},
			highlightAt: (e, t, o, n) => {
				((e, t, o, n) => {
					const s = kd(e.element, "." + t.itemClass);
					return A.from(s[n]).fold((() => ln.error(new Error("No element found with index " + n))), e.getSystem().getByDom)
				})(e, t, 0, n).fold((e => {
					throw e
				}), (n => {
					gg(e, t, o, n)
				}))
			},
			highlightBy: (e, t, o, n) => {
				const s = vg(e, t);
				j(s, n).each((n => {
					gg(e, t, o, n)
				}))
			},
			isHighlighted: pg,
			getHighlighted: (e, t, o) => Ol(e.element, "." + t.highlightClass).bind((t => e.getSystem().getByDom(t).toOptional())),
			getFirst: hg,
			getLast: fg,
			getPrevious: (e, t, o) => bg(e, t, 0, -1),
			getNext: (e, t, o) => bg(e, t, 0, 1),
			getCandidates: vg
		}),
		yg = [rs("highlightClass"), rs("itemClass"), bi("onHighlight"), bi("onDehighlight")];
	const wg = ua({
			fields: yg,
			name: "highlighting",
			apis: xg
		}),
		Sg = [8],
		Cg = [9],
		kg = [13],
		Og = [27],
		_g = [32],
		Tg = [37],
		Eg = [38],
		Ag = [39],
		Mg = [40],
		Dg = (e, t, o) => {
			const n = X(e.slice(0, t)),
				s = X(e.slice(t + 1));
			return j(n.concat(s), o)
		},
		Bg = (e, t, o) => {
			const n = X(e.slice(0, t));
			return j(n, o)
		},
		Ig = (e, t, o) => {
			const n = e.slice(0, t),
				s = e.slice(t + 1);
			return j(s.concat(n), o)
		},
		Fg = (e, t, o) => {
			const n = e.slice(t + 1);
			return j(n, o)
		},
		Rg = e => t => {
			const o = t.raw;
			return F(e, o.which)
		},
		Ng = e => t => Y(e, (e => e(t))),
		zg = e => !0 === e.raw.shiftKey,
		Lg = e => !0 === e.raw.ctrlKey,
		Vg = k(zg),
		Hg = (e, t) => ({
			matches: e,
			classification: t
		}),
		Pg = (e, t, o) => {
			t.exists((e => o.exists((t => Ze(t, e))))) || Rr(e, Tr(), {
				prevFocus: t,
				newFocus: o
			})
		},
		Ug = () => {
			const e = e => fc(e.element);
			return {
				get: e,
				set: (t, o) => {
					const n = e(t);
					t.getSystem().triggerFocus(o, t.element);
					const s = e(t);
					Pg(t, n, s)
				}
			}
		},
		Wg = () => {
			const e = e => wg.getHighlighted(e).map((e => e.element));
			return {
				get: e,
				set: (t, o) => {
					const n = e(t);
					t.getSystem().getByDom(o).fold(b, (e => {
						wg.highlight(t, e)
					}));
					const s = e(t);
					Pg(t, n, s)
				}
			}
		};
	var jg;
	! function(e) {
		e.OnFocusMode = "onFocus", e.OnEnterOrSpaceMode = "onEnterOrSpace", e.OnApiMode = "onApi"
	}(jg || (jg = {}));
	const $g = (e, t, o, n, s) => {
			const r = (e, t, o, n, s) => {
					return (r = o(e, t, n, s), a = t.event, j(r, (e => e.matches(a))).map((e => e.classification))).bind((o => o(e, t, n, s)));
					var r, a
				},
				a = {
					schema: () => e.concat([ws("focusManager", Ug()), Ss("focusInside", "onFocus", Yn((e => F(["onFocus", "onEnterOrSpace", "onApi"], e) ? ln.value(e) : ln.error("Invalid value for focusInside")))), wi("handler", a), wi("state", t), wi("sendFocusIn", s)]),
					processKey: r,
					toEvents: (e, t) => {
						const a = e.focusInside !== jg.OnFocusMode ? A.none() : s(e).map((o => Wr(lr(), ((n, s) => {
								o(n, e, t), s.stop()
							})))),
							i = [Wr(Js(), ((n, a) => {
								r(n, a, o, e, t).fold((() => {
									((o, n) => {
										const r = Rg(_g.concat(kg))(n.event);
										e.focusInside === jg.OnEnterOrSpaceMode && r && Ns(o, n) && s(e).each((s => {
											s(o, e, t), n.stop()
										}))
									})(n, a)
								}), (e => {
									a.stop()
								}))
							})), Wr(Qs(), ((o, s) => {
								r(o, s, n, e, t).each((e => {
									s.stop()
								}))
							}))];
						return Hr(a.toArray().concat(i))
					}
				};
			return a
		},
		Gg = e => {
			const t = [gs("onEscape"), gs("onEnter"), ws("selector", '[data-alloy-tabstop="true"]:not(:disabled)'), ws("firstTabstop", 0), ws("useTabstopAt", E), gs("visibilitySelector")].concat([e]),
				o = (e, t) => {
					const o = e.visibilitySelector.bind((e => _l(t, e))).getOr(t);
					return Ut(o) > 0
				},
				n = (e, t) => t.focusManager.get(e).bind((e => _l(e, t.selector))),
				s = (e, t, n) => {
					((e, t) => {
						const n = kd(e.element, t.selector),
							s = P(n, (e => o(t, e)));
						return A.from(s[t.firstTabstop])
					})(e, t).each((o => {
						t.focusManager.set(e, o)
					}))
				},
				r = (e, t, s, r) => {
					const a = kd(e.element, s.selector);
					return n(e, s).bind((t => $(a, C(Ze, t)).bind((t => ((e, t, n, s, r) => r(t, n, (e => ((e, t) => o(e, t) && e.useTabstopAt(t))(s, e))).fold((() => s.cyclic ? A.some(!0) : A.none()), (t => (s.focusManager.set(e, t), A.some(!0)))))(e, a, t, s, r)))))
				},
				a = (e, t, o) => {
					const n = o.cyclic ? Dg : Bg;
					return r(e, 0, o, n)
				},
				i = (e, t, o) => {
					const n = o.cyclic ? Ig : Fg;
					return r(e, 0, o, n)
				},
				l = y([Hg(Ng([zg, Rg(Cg)]), a), Hg(Rg(Cg), i), Hg(Ng([Vg, Rg(kg)]), ((e, t, o) => o.onEnter.bind((o => o(e, t)))))]),
				c = y([Hg(Rg(Og), ((e, t, o) => o.onEscape.bind((o => o(e, t))))), Hg(Rg(Cg), ((e, t, o) => n(e, o).filter((e => !o.useTabstopAt(e))).bind((n => ((e => (e => rt(e))(e).bind(dt).exists((t => Ze(t, e))))(n) ? a : i)(e, t, o)))))]);
			return $g(t, ia.init, l, c, (() => A.some(s)))
		};
	var qg = Gg(ns("cyclic", T)),
		Yg = Gg(ns("cyclic", E));
	const Xg = (e, t, o) => Ym(o) && Rg(_g)(t.event) ? A.none() : ((e, t, o) => (zr(e, o, mr()), A.some(!0)))(e, 0, o),
		Kg = (e, t) => A.some(!0),
		Jg = [ws("execute", Xg), ws("useSpace", !1), ws("useEnter", !0), ws("useControlEnter", !1), ws("useDown", !1)],
		Qg = (e, t, o) => o.execute(e, t, e.element);
	var Zg = $g(Jg, ia.init, ((e, t, o, n) => {
		const s = o.useSpace && !Ym(e.element) ? _g : [],
			r = o.useEnter ? kg : [],
			a = o.useDown ? Mg : [],
			i = s.concat(r).concat(a);
		return [Hg(Rg(i), Qg)].concat(o.useControlEnter ? [Hg(Ng([Lg, Rg(kg)]), Qg)] : [])
	}), ((e, t, o, n) => o.useSpace && !Ym(e.element) ? [Hg(Rg(_g), Kg)] : []), (() => A.none()));
	const ep = () => {
		const e = nn();
		return la({
			readState: () => e.get().map((e => ({
				numRows: String(e.numRows),
				numColumns: String(e.numColumns)
			}))).getOr({
				numRows: "?",
				numColumns: "?"
			}),
			setGridSize: (t, o) => {
				e.set({
					numRows: t,
					numColumns: o
				})
			},
			getNumRows: () => e.get().map((e => e.numRows)),
			getNumColumns: () => e.get().map((e => e.numColumns))
		})
	};
	var tp = Object.freeze({
		__proto__: null,
		flatgrid: ep,
		init: e => e.state(e)
	});
	const op = e => (t, o, n, s) => {
			const r = e(t.element);
			return ap(r, t, o, n, s)
		},
		np = (e, t) => {
			const o = Gc(e, t);
			return op(o)
		},
		sp = (e, t) => {
			const o = Gc(t, e);
			return op(o)
		},
		rp = e => (t, o, n, s) => ap(e, t, o, n, s),
		ap = (e, t, o, n, s) => n.focusManager.get(t).bind((o => e(t.element, o, n, s))).map((e => (n.focusManager.set(t, e), !0))),
		ip = rp,
		lp = rp,
		cp = rp,
		dp = e => !(e => e.offsetWidth <= 0 && e.offsetHeight <= 0)(e.dom),
		up = (e, t, o) => {
			const n = kd(e, o);
			return ((e, o) => $(e, (e => Ze(e, t))).map((t => ({
				index: t,
				candidates: e
			}))))(P(n, dp))
		},
		mp = (e, t) => $(e, (e => Ze(t, e))),
		gp = (e, t, o, n) => n(Math.floor(t / o), t % o).bind((t => {
			const n = t.row * o + t.column;
			return n >= 0 && n < e.length ? A.some(e[n]) : A.none()
		})),
		pp = (e, t, o, n, s) => gp(e, t, n, ((t, r) => {
			const a = t === o - 1 ? e.length - t * n : n,
				i = Ei(r, s, 0, a - 1);
			return A.some({
				row: t,
				column: i
			})
		})),
		hp = (e, t, o, n, s) => gp(e, t, n, ((t, r) => {
			const a = Ei(t, s, 0, o - 1),
				i = a === o - 1 ? e.length - a * n : n,
				l = Ai(r, 0, i - 1);
			return A.some({
				row: a,
				column: l
			})
		})),
		fp = [rs("selector"), ws("execute", Xg), vi("onEscape"), ws("captureTab", !1), Ci()],
		bp = (e, t, o) => {
			Ol(e.element, t.selector).each((o => {
				t.focusManager.set(e, o)
			}))
		},
		vp = e => (t, o, n, s) => up(t, o, n.selector).bind((t => e(t.candidates, t.index, s.getNumRows().getOr(n.initSize.numRows), s.getNumColumns().getOr(n.initSize.numColumns)))),
		xp = (e, t, o) => o.captureTab ? A.some(!0) : A.none(),
		yp = vp(((e, t, o, n) => pp(e, t, o, n, -1))),
		wp = vp(((e, t, o, n) => pp(e, t, o, n, 1))),
		Sp = vp(((e, t, o, n) => hp(e, t, o, n, -1))),
		Cp = vp(((e, t, o, n) => hp(e, t, o, n, 1))),
		kp = y([Hg(Rg(Tg), np(yp, wp)), Hg(Rg(Ag), sp(yp, wp)), Hg(Rg(Eg), ip(Sp)), Hg(Rg(Mg), lp(Cp)), Hg(Ng([zg, Rg(Cg)]), xp), Hg(Ng([Vg, Rg(Cg)]), xp), Hg(Rg(_g.concat(kg)), ((e, t, o, n) => ((e, t) => t.focusManager.get(e).bind((e => _l(e, t.selector))))(e, o).bind((n => o.execute(e, t, n)))))]),
		Op = y([Hg(Rg(Og), ((e, t, o) => o.onEscape(e, t))), Hg(Rg(_g), Kg)]);
	var _p = $g(fp, ep, kp, Op, (() => A.some(bp)));
	const Tp = (e, t, o, n, s) => {
			const r = (e, t, o) => s(e, t, n, 0, o.length - 1, o[t], (t => {
				return n = o[t], "button" === Ue(n) && "disabled" === kt(n, "disabled") ? r(e, t, o) : A.from(o[t]);
				var n
			}));
			return up(e, o, t).bind((e => {
				const t = e.index,
					o = e.candidates;
				return r(t, t, o)
			}))
		},
		Ep = (e, t, o, n) => Tp(e, t, o, n, ((e, t, o, n, s, r, a) => {
			const i = Ai(t + o, n, s);
			return i === e ? A.from(r) : a(i)
		})),
		Ap = (e, t, o, n) => Tp(e, t, o, n, ((e, t, o, n, s, r, a) => {
			const i = Ei(t, o, n, s);
			return i === e ? A.none() : a(i)
		})),
		Mp = [rs("selector"), ws("getInitial", A.none), ws("execute", Xg), vi("onEscape"), ws("executeOnMove", !1), ws("allowVertical", !0), ws("allowHorizontal", !0), ws("cycles", !0)],
		Dp = (e, t, o) => ((e, t) => t.focusManager.get(e).bind((e => _l(e, t.selector))))(e, o).bind((n => o.execute(e, t, n))),
		Bp = (e, t, o) => {
			t.getInitial(e).orThunk((() => Ol(e.element, t.selector))).each((o => {
				t.focusManager.set(e, o)
			}))
		},
		Ip = (e, t, o) => (o.cycles ? Ap : Ep)(e, o.selector, t, -1),
		Fp = (e, t, o) => (o.cycles ? Ap : Ep)(e, o.selector, t, 1),
		Rp = e => (t, o, n, s) => e(t, o, n, s).bind((() => n.executeOnMove ? Dp(t, o, n) : A.some(!0))),
		Np = y([Hg(Rg(_g), Kg), Hg(Rg(Og), ((e, t, o) => o.onEscape(e, t)))]);
	var zp = $g(Mp, ia.init, ((e, t, o, n) => {
		const s = [...o.allowHorizontal ? Tg : []].concat(o.allowVertical ? Eg : []),
			r = [...o.allowHorizontal ? Ag : []].concat(o.allowVertical ? Mg : []);
		return [Hg(Rg(s), Rp(np(Ip, Fp))), Hg(Rg(r), Rp(sp(Ip, Fp))), Hg(Rg(kg), Dp), Hg(Rg(_g), Dp)]
	}), Np, (() => A.some(Bp)));
	const Lp = (e, t, o) => A.from(e[t]).bind((e => A.from(e[o]).map((e => ({
			rowIndex: t,
			columnIndex: o,
			cell: e
		}))))),
		Vp = (e, t, o, n) => {
			const s = e[t].length,
				r = Ei(o, n, 0, s - 1);
			return Lp(e, t, r)
		},
		Hp = (e, t, o, n) => {
			const s = Ei(o, n, 0, e.length - 1),
				r = e[s].length,
				a = Ai(t, 0, r - 1);
			return Lp(e, s, a)
		},
		Pp = (e, t, o, n) => {
			const s = e[t].length,
				r = Ai(o + n, 0, s - 1);
			return Lp(e, t, r)
		},
		Up = (e, t, o, n) => {
			const s = Ai(o + n, 0, e.length - 1),
				r = e[s].length,
				a = Ai(t, 0, r - 1);
			return Lp(e, s, a)
		},
		Wp = [ds("selectors", [rs("row"), rs("cell")]), ws("cycles", !0), ws("previousSelector", A.none), ws("execute", Xg)],
		jp = (e, t, o) => {
			t.previousSelector(e).orThunk((() => {
				const o = t.selectors;
				return Ol(e.element, o.cell)
			})).each((o => {
				t.focusManager.set(e, o)
			}))
		},
		$p = (e, t) => (o, n, s) => {
			const r = s.cycles ? e : t;
			return _l(n, s.selectors.row).bind((e => {
				const t = kd(e, s.selectors.cell);
				return mp(t, n).bind((t => {
					const n = kd(o, s.selectors.row);
					return mp(n, e).bind((e => {
						const o = ((e, t) => L(e, (e => kd(e, t.selectors.cell))))(n, s);
						return r(o, e, t).map((e => e.cell))
					}))
				}))
			}))
		},
		Gp = $p(((e, t, o) => Vp(e, t, o, -1)), ((e, t, o) => Pp(e, t, o, -1))),
		qp = $p(((e, t, o) => Vp(e, t, o, 1)), ((e, t, o) => Pp(e, t, o, 1))),
		Yp = $p(((e, t, o) => Hp(e, o, t, -1)), ((e, t, o) => Up(e, o, t, -1))),
		Xp = $p(((e, t, o) => Hp(e, o, t, 1)), ((e, t, o) => Up(e, o, t, 1))),
		Kp = y([Hg(Rg(Tg), np(Gp, qp)), Hg(Rg(Ag), sp(Gp, qp)), Hg(Rg(Eg), ip(Yp)), Hg(Rg(Mg), lp(Xp)), Hg(Rg(_g.concat(kg)), ((e, t, o) => fc(e.element).bind((n => o.execute(e, t, n)))))]),
		Jp = y([Hg(Rg(_g), Kg)]);
	var Qp = $g(Wp, ia.init, Kp, Jp, (() => A.some(jp)));
	const Zp = [rs("selector"), ws("execute", Xg), ws("moveOnTab", !1)],
		eh = (e, t, o) => o.focusManager.get(e).bind((n => o.execute(e, t, n))),
		th = (e, t, o) => {
			Ol(e.element, t.selector).each((o => {
				t.focusManager.set(e, o)
			}))
		},
		oh = (e, t, o) => Ap(e, o.selector, t, -1),
		nh = (e, t, o) => Ap(e, o.selector, t, 1),
		sh = y([Hg(Rg(Eg), cp(oh)), Hg(Rg(Mg), cp(nh)), Hg(Ng([zg, Rg(Cg)]), ((e, t, o, n) => o.moveOnTab ? cp(oh)(e, t, o, n) : A.none())), Hg(Ng([Vg, Rg(Cg)]), ((e, t, o, n) => o.moveOnTab ? cp(nh)(e, t, o, n) : A.none())), Hg(Rg(kg), eh), Hg(Rg(_g), eh)]),
		rh = y([Hg(Rg(_g), Kg)]);
	var ah = $g(Zp, ia.init, sh, rh, (() => A.some(th)));
	const ih = [vi("onSpace"), vi("onEnter"), vi("onShiftEnter"), vi("onLeft"), vi("onRight"), vi("onTab"), vi("onShiftTab"), vi("onUp"), vi("onDown"), vi("onEscape"), ws("stopSpaceKeyup", !1), gs("focusIn")];
	var lh = $g(ih, ia.init, ((e, t, o) => [Hg(Rg(_g), o.onSpace), Hg(Ng([Vg, Rg(kg)]), o.onEnter), Hg(Ng([zg, Rg(kg)]), o.onShiftEnter), Hg(Ng([zg, Rg(Cg)]), o.onShiftTab), Hg(Ng([Vg, Rg(Cg)]), o.onTab), Hg(Rg(Eg), o.onUp), Hg(Rg(Mg), o.onDown), Hg(Rg(Tg), o.onLeft), Hg(Rg(Ag), o.onRight), Hg(Rg(_g), o.onSpace)]), ((e, t, o) => [...o.stopSpaceKeyup ? [Hg(Rg(_g), Kg)] : [], Hg(Rg(Og), o.onEscape)]), (e => e.focusIn));
	const ch = qg.schema(),
		dh = Yg.schema(),
		uh = zp.schema(),
		mh = _p.schema(),
		gh = Qp.schema(),
		ph = Zg.schema(),
		hh = ah.schema(),
		fh = lh.schema(),
		bh = ga({
			branchKey: "mode",
			branches: Object.freeze({
				__proto__: null,
				acyclic: ch,
				cyclic: dh,
				flow: uh,
				flatgrid: mh,
				matrix: gh,
				execution: ph,
				menu: hh,
				special: fh
			}),
			name: "keying",
			active: {
				events: (e, t) => e.handler.toEvents(e, t)
			},
			apis: {
				focusIn: (e, t, o) => {
					t.sendFocusIn(t).fold((() => {
						e.getSystem().triggerFocus(e.element, e.element)
					}), (n => {
						n(e, t, o)
					}))
				},
				setGridSize: (e, t, o, n, s) => {
					(e => ve(e, "setGridSize"))(o) ? o.setGridSize(n, s): console.error("Layout does not support setGridSize")
				}
			},
			state: tp
		}),
		vh = (e, t) => {
			bc((() => {
				((e, t, o) => {
					const n = e.components();
					(e => {
						V(e.components(), (e => Ho(e.element))), Vo(e.element), e.syncComponents()
					})(e);
					const s = o(t),
						r = K(n, s);
					V(r, (t => {
						eu(t), e.getSystem().removeFromWorld(t)
					})), V(s, (t => {
						Zd(t) ? su(e, t) : (e.getSystem().addToWorld(t), su(e, t), vt(e.element) && tu(t))
					})), e.syncComponents()
				})(e, t, (() => L(t, e.getSystem().build)))
			}), e.element)
		},
		xh = (e, t) => {
			bc((() => {
				((o, n, s) => {
					const r = o.components(),
						a = q(n, (e => ji(e).toArray()));
					V(r, (e => {
						F(a, e) || nu(e)
					}));
					const i = ((e, t, o) => sl(e, t, ((t, n) => rl(e, n, t, o))))(e.element, t, e.getSystem().buildOrPatch),
						l = K(r, i);
					V(l, (e => {
						Zd(e) && nu(e)
					})), V(i, (e => {
						Zd(e) || ou(o, e)
					})), o.syncComponents()
				})(e, t)
			}), e.element)
		},
		yh = (e, t, o, n) => {
			nu(t);
			const s = rl(e.element, o, n, e.getSystem().buildOrPatch);
			ou(e, s), e.syncComponents()
		},
		wh = (e, t, o) => {
			const n = e.getSystem().build(o);
			au(e, n, t)
		},
		Sh = (e, t, o, n) => {
			lu(t), wh(e, ((e, t) => ((e, t, o) => {
				ct(e, o).fold((() => {
					zo(e, t)
				}), (e => {
					Fo(e, t)
				}))
			})(e, t, o)), n)
		},
		Ch = (e, t) => e.components(),
		kh = (e, t, o, n, s) => {
			const r = Ch(e);
			return A.from(r[n]).map((o => (s.fold((() => lu(o)), (s => {
				(t.reuseDom ? yh : Sh)(e, o, n, s)
			})), o)))
		};
	var Oh = Object.freeze({
		__proto__: null,
		append: (e, t, o, n) => {
			wh(e, zo, n)
		},
		prepend: (e, t, o, n) => {
			wh(e, No, n)
		},
		remove: (e, t, o, n) => {
			const s = Ch(e),
				r = j(s, (e => Ze(n.element, e.element)));
			r.each(lu)
		},
		replaceAt: kh,
		replaceBy: (e, t, o, n, s) => {
			const r = Ch(e);
			return $(r, n).bind((o => kh(e, t, 0, o, s)))
		},
		set: (e, t, o, n) => (t.reuseDom ? xh : vh)(e, n),
		contents: Ch
	});
	const _h = ua({
			fields: [_s("reuseDom", !0)],
			name: "replacing",
			apis: Oh
		}),
		Th = (e, t) => {
			const o = ((e, t) => {
				const o = Hr(t);
				return ua({
					fields: [rs("enabled")],
					name: e,
					active: {
						events: y(o)
					}
				})
			})(e, t);
			return {
				key: e,
				value: {
					config: {},
					me: o,
					configAsRaw: y({}),
					initialConfig: {},
					state: ia
				}
			}
		},
		Eh = (e, t) => {
			t.ignore || (mc(e.element), t.onFocus(e))
		};
	var Ah = Object.freeze({
			__proto__: null,
			focus: Eh,
			blur: (e, t) => {
				t.ignore || gc(e.element)
			},
			isFocused: e => pc(e.element)
		}),
		Mh = Object.freeze({
			__proto__: null,
			exhibit: (e, t) => {
				const o = t.ignore ? {} : {
					attributes: {
						tabindex: "-1"
					}
				};
				return na(o)
			},
			events: e => Hr([Wr(lr(), ((t, o) => {
				Eh(t, e), o.stop()
			}))].concat(e.stopMousedown ? [Wr(js(), ((e, t) => {
				t.event.prevent()
			}))] : []))
		}),
		Dh = [bi("onFocus"), ws("stopMousedown", !1), ws("ignore", !1)];
	const Bh = ua({
			fields: Dh,
			name: "focusing",
			active: Mh,
			apis: Ah
		}),
		Ih = (e, t, o, n) => {
			const s = o.get();
			o.set(n), ((e, t, o) => {
				t.toggleClass.each((t => {
					o.get() ? ya(e.element, t) : Sa(e.element, t)
				}))
			})(e, t, o), ((e, t, o) => {
				const n = t.aria;
				n.update(e, n, o.get())
			})(e, t, o), s !== n && t.onToggled(e, n)
		},
		Fh = (e, t, o) => {
			Ih(e, t, o, !o.get())
		},
		Rh = (e, t, o) => {
			Ih(e, t, o, t.selected)
		};
	var Nh = Object.freeze({
			__proto__: null,
			onLoad: Rh,
			toggle: Fh,
			isOn: (e, t, o) => o.get(),
			on: (e, t, o) => {
				Ih(e, t, o, !0)
			},
			off: (e, t, o) => {
				Ih(e, t, o, !1)
			},
			set: Ih
		}),
		zh = Object.freeze({
			__proto__: null,
			exhibit: () => na({}),
			events: (e, t) => {
				const o = (n = e, s = t, r = Fh, ea((e => {
					r(e, n, s)
				})));
				var n, s, r;
				const a = sa(e, t, Rh);
				return Hr(G([e.toggleOnExecute ? [o] : [],
					[a]
				]))
			}
		});
	const Lh = (e, t, o) => {
		St(e.element, "aria-expanded", o)
	};
	var Vh = [ws("selected", !1), gs("toggleClass"), ws("toggleOnExecute", !0), bi("onToggled"), Ss("aria", {
		mode: "none"
	}, es("mode", {
		pressed: [ws("syncWithExpanded", !1), wi("update", ((e, t, o) => {
			St(e.element, "aria-pressed", o), t.syncWithExpanded && Lh(e, 0, o)
		}))],
		checked: [wi("update", ((e, t, o) => {
			St(e.element, "aria-checked", o)
		}))],
		expanded: [wi("update", Lh)],
		selected: [wi("update", ((e, t, o) => {
			St(e.element, "aria-selected", o)
		}))],
		none: [wi("update", b)]
	}))];
	const Hh = ua({
		fields: Vh,
		name: "toggling",
		active: zh,
		apis: Nh,
		state: (!1, {
			init: () => {
				const e = en(false);
				return {
					get: () => e.get(),
					set: t => e.set(t),
					clear: () => e.set(false),
					readState: () => e.get()
				}
			}
		})
	});
	const Ph = () => {
			const e = (e, t) => {
				t.stop(), Nr(e)
			};
			return [Wr(tr(), e), Wr(pr(), e), Yr(Hs()), Yr(js())]
		},
		Uh = e => Hr(G([e.map((e => ea(((t, o) => {
			e(t), o.stop()
		})))).toArray(), Ph()])),
		Wh = "alloy.item-hover",
		jh = "alloy.item-focus",
		$h = "alloy.item-toggled",
		Gh = e => {
			(fc(e.element).isNone() || Bh.isFocused(e)) && (Bh.isFocused(e) || Bh.focus(e), Rr(e, Wh, {
				item: e
			}))
		},
		qh = e => {
			Rr(e, jh, {
				item: e
			})
		},
		Yh = y(Wh),
		Xh = y(jh),
		Kh = y($h),
		Jh = e => e.role.fold((() => e.toggling.map((e => e.exclusive ? "menuitemradio" : "menuitemcheckbox")).getOr("menuitem")), w),
		Qh = [rs("data"), rs("components"), rs("dom"), ws("hasSubmenu", !1), gs("toggling"), gs("role"), Yu("itemBehaviours", [Hh, Bh, bh, ju]), ws("ignoreFocus", !1), ws("domModification", {}), wi("builder", (e => ({
			dom: e.dom,
			domModification: {
				...e.domModification,
				attributes: {
					role: Jh(e),
					...e.domModification.attributes,
					"aria-haspopup": e.hasSubmenu,
					...e.hasSubmenu ? {
						"aria-expanded": !1
					} : {}
				}
			},
			behaviours: Xu(e.itemBehaviours, [e.toggling.fold(Hh.revoke, (t => Hh.config(((e, t) => ({
				aria: {
					mode: t ? "selected" : "checked"
				},
				...me(e, ((e, t) => "exclusive" !== t)),
				onToggled: (t, o) => {
					p(e.onToggled) && e.onToggled(t, o), ((e, t) => {
						Rr(e, $h, {
							item: e,
							state: t
						})
					})(t, o)
				}
			}))(t, e.role.exists((e => "option" === e)))))), Bh.config({
				ignore: e.ignoreFocus,
				stopMousedown: e.ignoreFocus,
				onFocus: e => {
					qh(e)
				}
			}), bh.config({
				mode: "execution"
			}), ju.config({
				store: {
					mode: "memory",
					initialValue: e.data
				}
			}), Th("item-type-events", [...Ph(), Wr(Ys(), Gh), Wr(gr(), Bh.focus)])]),
			components: e.components,
			eventOrder: e.eventOrder
		}))), ws("eventOrder", {})],
		Zh = [rs("dom"), rs("components"), wi("builder", (e => ({
			dom: e.dom,
			components: e.components,
			events: Hr([Xr(gr())])
		})))],
		ef = y("item-widget"),
		tf = y([vm({
			name: "widget",
			overrides: e => ({
				behaviours: ca([ju.config({
					store: {
						mode: "manual",
						getValue: t => e.data,
						setValue: b
					}
				})])
			})
		})]),
		of = [rs("uid"), rs("data"), rs("components"), rs("dom"), ws("autofocus", !1), ws("ignoreFocus", !1), Yu("widgetBehaviours", [ju, Bh, bh]), ws("domModification", {}), Vm(tf()), wi("builder", (e => {
			const t = Mm(ef(), e, tf()),
				o = Dm(ef(), e, t.internals()),
				n = t => Bm(t, e, "widget").map((e => (bh.focusIn(e), e))),
				s = (t, o) => Ym(o.event.target) ? A.none() : e.autofocus ? (o.setSource(t.element), A.none()) : A.none();
			return {
				dom: e.dom,
				components: o,
				domModification: e.domModification,
				events: Hr([ea(((e, t) => {
					n(e).each((e => {
						t.stop()
					}))
				})), Wr(Ys(), Gh), Wr(gr(), ((t, o) => {
					e.autofocus ? n(t) : Bh.focus(t)
				}))]),
				behaviours: Xu(e.widgetBehaviours, [ju.config({
					store: {
						mode: "memory",
						initialValue: e.data
					}
				}), Bh.config({
					ignore: e.ignoreFocus,
					onFocus: e => {
						qh(e)
					}
				}), bh.config({
					mode: "special",
					focusIn: e.autofocus ? e => {
						n(e)
					} : pa(),
					onLeft: s,
					onRight: s,
					onEscape: (t, o) => Bh.isFocused(t) || e.autofocus ? e.autofocus ? (o.setSource(t.element), A.none()) : A.none() : (Bh.focus(t), A.some(!0))
				})])
			}
		}))],
		nf = es("type", {
			widget: of,
			item: Qh,
			separator: Zh
		}),
		sf = y([wm({
			factory: {
				sketch: e => {
					const t = Qn("menu.spec item", nf, e);
					return t.builder(t)
				}
			},
			name: "items",
			unit: "item",
			defaults: (e, t) => be(t, "uid") ? t : {
				...t,
				uid: Li("item")
			},
			overrides: (e, t) => ({
				type: t.type,
				ignoreFocus: e.fakeFocus,
				domModification: {
					classes: [e.markers.item]
				}
			})
		})]),
		rf = y([fs("role"), rs("value"), rs("items"), rs("dom"), rs("components"), ws("eventOrder", {}), $u("menuBehaviours", [wg, ju, Jm, bh]), Ss("movement", {
			mode: "menu",
			moveOnTab: !0
		}, es("mode", {
			grid: [Ci(), wi("config", ((e, t) => ({
				mode: "flatgrid",
				selector: "." + e.markers.item,
				initSize: {
					numColumns: t.initSize.numColumns,
					numRows: t.initSize.numRows
				},
				focusManager: e.focusManager
			})))],
			matrix: [wi("config", ((e, t) => ({
				mode: "matrix",
				selectors: {
					row: t.rowSelector,
					cell: "." + e.markers.item
				},
				previousSelector: t.previousSelector,
				focusManager: e.focusManager
			}))), rs("rowSelector"), ws("previousSelector", A.none)],
			menu: [ws("moveOnTab", !0), wi("config", ((e, t) => ({
				mode: "menu",
				selector: "." + e.markers.item,
				moveOnTab: t.moveOnTab,
				focusManager: e.focusManager
			})))]
		})), as("markers", mi()), ws("fakeFocus", !1), ws("focusManager", Ug()), bi("onHighlight"), bi("onDehighlight"), ws("showMenuRole", !0)]),
		af = y("alloy.menu-focus"),
		lf = qm({
			name: "Menu",
			configFields: rf(),
			partFields: sf(),
			factory: (e, t, o, n) => ({
				uid: e.uid,
				dom: e.dom,
				markers: e.markers,
				behaviours: qu(e.menuBehaviours, [wg.config({
					highlightClass: e.markers.selectedItem,
					itemClass: e.markers.item,
					onHighlight: e.onHighlight,
					onDehighlight: e.onDehighlight
				}), ju.config({
					store: {
						mode: "memory",
						initialValue: e.value
					}
				}), Jm.config({
					find: A.some
				}), bh.config(e.movement.config(e, e.movement))]),
				events: Hr([Wr(Xh(), ((e, t) => {
					const o = t.event;
					e.getSystem().getByDom(o.target).each((o => {
						wg.highlight(e, o), t.stop(), Rr(e, af(), {
							menu: e,
							item: o
						})
					}))
				})), Wr(Yh(), ((e, t) => {
					const o = t.event.item;
					wg.highlight(e, o)
				})), Wr(Kh(), ((e, t) => {
					const {
						item: o,
						state: n
					} = t.event;
					n && "menuitemradio" === kt(o.element, "role") && ((e, t) => {
						const o = kd(e.element, '[role="menuitemradio"][aria-checked="true"]');
						V(o, (o => {
							Ze(o, t.element) || e.getSystem().getByDom(o).each((e => {
								Hh.off(e)
							}))
						}))
					})(e, o)
				}))]),
				components: t,
				eventOrder: e.eventOrder,
				...e.showMenuRole ? {
					domModification: {
						attributes: {
							role: e.role.getOr("menu")
						}
					}
				} : {}
			})
		}),
		cf = (e, t, o, n) => fe(o, n).bind((n => fe(e, n).bind((n => {
			const s = cf(e, t, o, n);
			return A.some([n].concat(s))
		})))).getOr([]),
		df = e => "prepared" === e.type ? A.some(e.menu) : A.none(),
		uf = () => {
			const e = en({}),
				t = en({}),
				o = en({}),
				n = nn(),
				s = en({}),
				r = e => a(e).bind(df),
				a = e => fe(t.get(), e),
				i = t => fe(e.get(), t);
			return {
				setMenuBuilt: (e, o) => {
					t.set({
						...t.get(),
						[e]: {
							type: "prepared",
							menu: o
						}
					})
				},
				setContents: (r, a, i, l) => {
					n.set(r), e.set(i), t.set(a), s.set(l);
					const c = ((e, t) => {
						const o = {};
						ie(e, ((e, t) => {
							V(e, (e => {
								o[e] = t
							}))
						}));
						const n = t,
							s = ce(t, ((e, t) => ({
								k: e,
								v: t
							}))),
							r = le(s, ((e, t) => [t].concat(cf(o, n, s, t))));
						return le(o, (e => fe(r, e).getOr([e])))
					})(l, i);
					o.set(c)
				},
				expand: t => fe(e.get(), t).map((e => {
					const n = fe(o.get(), t).getOr([]);
					return [e].concat(n)
				})),
				refresh: e => fe(o.get(), e),
				collapse: e => fe(o.get(), e).bind((e => e.length > 1 ? A.some(e.slice(1)) : A.none())),
				lookupMenu: a,
				lookupItem: i,
				otherMenus: e => {
					const t = s.get();
					return K(re(t), e)
				},
				getPrimary: () => n.get().bind(r),
				getMenus: () => t.get(),
				clear: () => {
					e.set({}), t.set({}), o.set({}), n.clear()
				},
				isClear: () => n.get().isNone(),
				getTriggeringPath: (t, s) => {
					const a = P(i(t).toArray(), (e => r(e).isSome()));
					return fe(o.get(), t).bind((t => {
						const o = X(a.concat(t));
						return (e => {
							const t = [];
							for (let o = 0; o < e.length; o++) {
								const n = e[o];
								if (!n.isSome()) return A.none();
								t.push(n.getOrDie())
							}
							return A.some(t)
						})(q(o, ((t, a) => ((t, o, n) => r(t).bind((s => (t => pe(e.get(), ((e, o) => e === t)))(t).bind((e => o(e).map((e => ({
							triggeredMenu: s,
							triggeringItem: e,
							triggeringPath: n
						}))))))))(t, s, o.slice(0, a + 1)).fold((() => xe(n.get(), t) ? [] : [A.none()]), (e => [A.some(e)])))))
					}))
				}
			}
		},
		mf = df,
		gf = Di("tiered-menu-item-highlight"),
		pf = Di("tiered-menu-item-dehighlight");
	var hf;
	! function(e) {
		e[e.HighlightMenuAndItem = 0] = "HighlightMenuAndItem", e[e.HighlightJustMenu = 1] = "HighlightJustMenu", e[e.HighlightNone = 2] = "HighlightNone"
	}(hf || (hf = {}));
	const ff = y("collapse-item"),
		bf = Gm({
			name: "TieredMenu",
			configFields: [yi("onExecute"), yi("onEscape"), xi("onOpenMenu"), xi("onOpenSubmenu"), bi("onRepositionMenu"), bi("onCollapseMenu"), ws("highlightOnOpen", hf.HighlightMenuAndItem), ds("data", [rs("primary"), rs("menus"), rs("expansions")]), ws("fakeFocus", !1), bi("onHighlightItem"), bi("onDehighlightItem"), bi("onHover"), pi(), rs("dom"), ws("navigateOnHover", !0), ws("stayInDom", !1), $u("tmenuBehaviours", [bh, wg, Jm, _h]), ws("eventOrder", {})],
			apis: {
				collapseMenu: (e, t) => {
					e.collapseMenu(t)
				},
				highlightPrimary: (e, t) => {
					e.highlightPrimary(t)
				},
				repositionMenus: (e, t) => {
					e.repositionMenus(t)
				}
			},
			factory: (e, t) => {
				const o = nn(),
					n = uf(),
					s = e => ju.getValue(e).value,
					r = t => le(e.data.menus, ((e, t) => q(e.items, (e => "separator" === e.type ? [] : [e.data.value])))),
					a = wg.highlight,
					i = (t, o) => {
						a(t, o), wg.getHighlighted(o).orThunk((() => wg.getFirst(o))).each((n => {
							e.fakeFocus ? wg.highlight(o, n) : zr(t, n.element, gr())
						}))
					},
					l = (e, t) => ye(L(t, (t => e.lookupMenu(t).bind((e => "prepared" === e.type ? A.some(e.menu) : A.none()))))),
					c = (t, o, n) => {
						const s = l(o, o.otherMenus(n));
						V(s, (o => {
							Oa(o.element, [e.markers.backgroundMenu]), e.stayInDom || _h.remove(t, o)
						}))
					},
					d = (t, n) => {
						const r = (t => o.get().getOrThunk((() => {
							const n = {},
								r = kd(t.element, `.${e.markers.item}`),
								a = P(r, (e => "true" === kt(e, "aria-haspopup")));
							return V(a, (e => {
								t.getSystem().getByDom(e).each((e => {
									const t = s(e);
									n[t] = e
								}))
							})), o.set(n), n
						})))(t);
						ie(r, ((e, t) => {
							const o = F(n, t);
							St(e.element, "aria-expanded", o)
						}))
					},
					u = (t, o, n) => A.from(n[0]).bind((s => o.lookupMenu(s).bind((s => {
						if ("notbuilt" === s.type) return A.none();
						{
							const r = s.menu,
								a = l(o, n.slice(1));
							return V(a, (t => {
								ya(t.element, e.markers.backgroundMenu)
							})), vt(r.element) || _h.append(t, hl(r)), Oa(r.element, [e.markers.backgroundMenu]), i(t, r), c(t, o, n), A.some(r)
						}
					}))));
				let m;
				! function(e) {
					e[e.HighlightSubmenu = 0] = "HighlightSubmenu", e[e.HighlightParent = 1] = "HighlightParent"
				}(m || (m = {}));
				const g = (t, o, r = m.HighlightSubmenu) => {
						if (o.hasConfigured(ug) && ug.isDisabled(o)) return A.some(o);
						{
							const a = s(o);
							return n.expand(a).bind((s => (d(t, s), A.from(s[0]).bind((a => n.lookupMenu(a).bind((i => {
								const l = ((e, t, o) => {
									if ("notbuilt" === o.type) {
										const s = e.getSystem().build(o.nbMenu());
										return n.setMenuBuilt(t, s), s
									}
									return o.menu
								})(t, a, i);
								return vt(l.element) || _h.append(t, hl(l)), e.onOpenSubmenu(t, o, l, X(s)), r === m.HighlightSubmenu ? (wg.highlightFirst(l), u(t, n, s)) : (wg.dehighlightAll(l), A.some(o))
							})))))))
						}
					},
					p = (t, o) => {
						const r = s(o);
						return n.collapse(r).bind((s => (d(t, s), u(t, n, s).map((n => (e.onCollapseMenu(t, o, n), n))))))
					},
					h = t => (o, n) => _l(n.getSource(), `.${e.markers.item}`).bind((e => o.getSystem().getByDom(e).toOptional().bind((e => t(o, e).map(E))))),
					f = Hr([Wr(af(), ((e, t) => {
						const o = t.event.item;
						n.lookupItem(s(o)).each((() => {
							const o = t.event.menu;
							wg.highlight(e, o);
							const r = s(t.event.item);
							n.refresh(r).each((t => c(e, n, t)))
						}))
					})), ea(((t, o) => {
						const n = o.event.target;
						t.getSystem().getByDom(n).each((o => {
							0 === s(o).indexOf("collapse-item") && p(t, o), g(t, o, m.HighlightSubmenu).fold((() => {
								e.onExecute(t, o)
							}), b)
						}))
					})), Jr(((t, o) => {
						(t => {
							const o = ((t, o, n) => le(n, ((n, s) => {
									const r = () => lf.sketch({
										...n,
										value: s,
										markers: e.markers,
										fakeFocus: e.fakeFocus,
										onHighlight: (e, t) => {
											Rr(e, gf, {
												menuComp: e,
												itemComp: t
											})
										},
										onDehighlight: (e, t) => {
											Rr(e, pf, {
												menuComp: e,
												itemComp: t
											})
										},
										focusManager: e.fakeFocus ? Wg() : Ug()
									});
									return s === o ? {
										type: "prepared",
										menu: t.getSystem().build(r())
									} : {
										type: "notbuilt",
										nbMenu: r
									}
								})))(t, e.data.primary, e.data.menus),
								s = r();
							return n.setContents(e.data.primary, o, e.data.expansions, s), n.getPrimary()
						})(t).each((o => {
							_h.append(t, hl(o)), e.onOpenMenu(t, o), e.highlightOnOpen === hf.HighlightMenuAndItem ? i(t, o) : e.highlightOnOpen === hf.HighlightJustMenu && a(t, o)
						}))
					})), Wr(gf, ((t, o) => {
						e.onHighlightItem(t, o.event.menuComp, o.event.itemComp)
					})), Wr(pf, ((t, o) => {
						e.onDehighlightItem(t, o.event.menuComp, o.event.itemComp)
					})), ...e.navigateOnHover ? [Wr(Yh(), ((t, o) => {
						const r = o.event.item;
						((e, t) => {
							const o = s(t);
							n.refresh(o).bind((t => (d(e, t), u(e, n, t))))
						})(t, r), g(t, r, m.HighlightParent), e.onHover(t, r)
					}))] : []]),
					v = e => wg.getHighlighted(e).bind(wg.getHighlighted),
					x = {
						collapseMenu: e => {
							v(e).each((t => {
								p(e, t)
							}))
						},
						highlightPrimary: e => {
							n.getPrimary().each((t => {
								i(e, t)
							}))
						},
						repositionMenus: t => {
							const o = n.getPrimary().bind((e => v(t).bind((e => {
								const t = s(e),
									o = he(n.getMenus()),
									r = ye(L(o, mf));
								return n.getTriggeringPath(t, (e => ((e, t, o) => se(t, (e => {
									if (!e.getSystem().isConnected()) return A.none();
									const t = wg.getCandidates(e);
									return j(t, (e => s(e) === o))
								})))(0, r, e)))
							})).map((t => ({
								primary: e,
								triggeringPath: t
							})))));
							o.fold((() => {
								(e => A.from(e.components()[0]).filter((e => "menu" === kt(e.element, "role"))))(t).each((o => {
									e.onRepositionMenu(t, o, [])
								}))
							}), (({
								primary: o,
								triggeringPath: n
							}) => {
								e.onRepositionMenu(t, o, n)
							}))
						}
					};
				return {
					uid: e.uid,
					dom: e.dom,
					markers: e.markers,
					behaviours: qu(e.tmenuBehaviours, [bh.config({
						mode: "special",
						onRight: h(((e, t) => Ym(t.element) ? A.none() : g(e, t, m.HighlightSubmenu))),
						onLeft: h(((e, t) => Ym(t.element) ? A.none() : p(e, t))),
						onEscape: h(((t, o) => p(t, o).orThunk((() => e.onEscape(t, o).map((() => t)))))),
						focusIn: (e, t) => {
							n.getPrimary().each((t => {
								zr(e, t.element, gr())
							}))
						}
					}), wg.config({
						highlightClass: e.markers.selectedMenu,
						itemClass: e.markers.menu
					}), Jm.config({
						find: e => wg.getHighlighted(e)
					}), _h.config({})]),
					eventOrder: e.eventOrder,
					apis: x,
					events: f
				}
			},
			extraApis: {
				tieredData: (e, t, o) => ({
					primary: e,
					menus: t,
					expansions: o
				}),
				singleData: (e, t) => ({
					primary: e,
					menus: Ds(e, t),
					expansions: {}
				}),
				collapseItem: e => ({
					value: Di(ff()),
					meta: {
						text: e
					}
				})
			}
		}),
		vf = Gm({
			name: "InlineView",
			configFields: [rs("lazySink"), bi("onShow"), bi("onHide"), vs("onEscape"), $u("inlineBehaviours", [ku, ju, dc]), ys("fireDismissalEventInstead", [ws("event", Or())]), ys("fireRepositionEventInstead", [ws("event", _r())]), ws("getRelated", A.none), ws("isExtraPart", T), ws("eventOrder", A.none)],
			factory: (e, t) => {
				const o = (t, o, n, s) => {
						const r = e.lazySink(t).getOrDie();
						ku.openWhileCloaked(t, o, (() => Qd.positionWithinBounds(r, t, n, s()))), ju.setValue(t, A.some({
							mode: "position",
							config: n,
							getBounds: s
						}))
					},
					n = (t, o, n, s) => {
						const r = ((e, t, o, n, s) => {
							const r = () => e.lazySink(t),
								a = "horizontal" === n.type ? {
									layouts: {
										onLtr: () => ac(),
										onRtl: () => ic()
									}
								} : {},
								i = e => (e => 2 === e.length)(e) ? a : {};
							return bf.sketch({
								dom: {
									tag: "div"
								},
								data: n.data,
								markers: n.menu.markers,
								highlightOnOpen: n.menu.highlightOnOpen,
								fakeFocus: n.menu.fakeFocus,
								onEscape: () => (ku.close(t), e.onEscape.map((e => e(t))), A.some(!0)),
								onExecute: () => A.some(!0),
								onOpenMenu: (e, t) => {
									Qd.positionWithinBounds(r().getOrDie(), t, o, s())
								},
								onOpenSubmenu: (e, t, o, n) => {
									const s = r().getOrDie();
									Qd.position(s, o, {
										anchor: {
											type: "submenu",
											item: t,
											...i(n)
										}
									})
								},
								onRepositionMenu: (e, t, n) => {
									const a = r().getOrDie();
									Qd.positionWithinBounds(a, t, o, s()), V(n, (e => {
										const t = i(e.triggeringPath);
										Qd.position(a, e.triggeredMenu, {
											anchor: {
												type: "submenu",
												item: e.triggeringItem,
												...t
											}
										})
									}))
								}
							})
						})(e, t, o, n, s);
						ku.open(t, r), ju.setValue(t, A.some({
							mode: "menu",
							menu: r
						}))
					},
					s = t => {
						ku.isOpen(t) && ju.getValue(t).each((o => {
							switch (o.mode) {
								case "menu":
									ku.getState(t).each(bf.repositionMenus);
									break;
								case "position":
									const n = e.lazySink(t).getOrDie();
									Qd.positionWithinBounds(n, t, o.config, o.getBounds())
							}
						}))
					},
					r = {
						setContent: (e, t) => {
							ku.setContent(e, t)
						},
						showAt: (e, t, n) => {
							const s = A.none;
							o(e, t, n, s)
						},
						showWithinBounds: o,
						showMenuAt: (e, t, o) => {
							n(e, t, o, A.none)
						},
						showMenuWithinBounds: n,
						hide: e => {
							ku.isOpen(e) && (ju.setValue(e, A.none()), ku.close(e))
						},
						getContent: e => ku.getState(e),
						reposition: s,
						isOpen: ku.isOpen
					};
				return {
					uid: e.uid,
					dom: e.dom,
					behaviours: qu(e.inlineBehaviours, [ku.config({
						isPartOf: (t, o, n) => Al(o, n) || ((t, o) => e.getRelated(t).exists((e => Al(e, o))))(t, n),
						getAttachPoint: t => e.lazySink(t).getOrDie(),
						onOpen: t => {
							e.onShow(t)
						},
						onClose: t => {
							e.onHide(t)
						}
					}), ju.config({
						store: {
							mode: "memory",
							initialValue: A.none()
						}
					}), dc.config({
						channels: {
							...Au({
								isExtraPart: t.isExtraPart,
								...e.fireDismissalEventInstead.map((e => ({
									fireEventInstead: {
										event: e.event
									}
								}))).getOr({})
							}),
							...Du({
								...e.fireRepositionEventInstead.map((e => ({
									fireEventInstead: {
										event: e.event
									}
								}))).getOr({}),
								doReposition: s
							})
						}
					})]),
					eventOrder: e.eventOrder,
					apis: r
				}
			},
			apis: {
				showAt: (e, t, o, n) => {
					e.showAt(t, o, n)
				},
				showWithinBounds: (e, t, o, n, s) => {
					e.showWithinBounds(t, o, n, s)
				},
				showMenuAt: (e, t, o, n) => {
					e.showMenuAt(t, o, n)
				},
				showMenuWithinBounds: (e, t, o, n, s) => {
					e.showMenuWithinBounds(t, o, n, s)
				},
				hide: (e, t) => {
					e.hide(t)
				},
				isOpen: (e, t) => e.isOpen(t),
				getContent: (e, t) => e.getContent(t),
				setContent: (e, t, o) => {
					e.setContent(t, o)
				},
				reposition: (e, t) => {
					e.reposition(t)
				}
			}
		});
	var xf, yf, wf = tinymce.util.Tools.resolve("tinymce.util.Delay"),
		Sf = tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),
		Cf = tinymce.util.Tools.resolve("tinymce.EditorManager"),
		kf = tinymce.util.Tools.resolve("tinymce.Env");
	! function(e) {
		e.default = "wrap", e.floating = "floating", e.sliding = "sliding", e.scrolling = "scrolling"
	}(xf || (xf = {})),
	function(e) {
		e.auto = "auto", e.top = "top", e.bottom = "bottom"
	}(yf || (yf = {}));
	const Of = e => t => t.options.get(e),
		_f = e => t => A.from(e(t)),
		Tf = e => {
			const t = kf.deviceType.isPhone(),
				o = kf.deviceType.isTablet() || t,
				n = e.options.register,
				s = e => r(e) || !1 === e,
				a = e => r(e) || h(e);
			n("skin", {
				processor: e => r(e) || !1 === e,
				default: "oxide"
			}), n("skin_url", {
				processor: "string"
			}), n("height", {
				processor: a,
				default: Math.max(e.getElement().offsetHeight, 400)
			}), n("width", {
				processor: a,
				default: Sf.DOM.getStyle(e.getElement(), "width")
			}), n("min_height", {
				processor: "number",
				default: 100
			}), n("min_width", {
				processor: "number"
			}), n("max_height", {
				processor: "number"
			}), n("max_width", {
				processor: "number"
			}), n("style_formats", {
				processor: "object[]"
			}), n("style_formats_merge", {
				processor: "boolean",
				default: !1
			}), n("style_formats_autohide", {
				processor: "boolean",
				default: !1
			}), n("line_height_formats", {
				processor: "string",
				default: "1 1.1 1.2 1.3 1.4 1.5 2"
			}), n("font_family_formats", {
				processor: "string",
				default: "Andale Mono=andale mono,monospace;Arial=arial,helvetica,sans-serif;Arial Black=arial black,sans-serif;Book Antiqua=book antiqua,palatino,serif;Comic Sans MS=comic sans ms,sans-serif;Courier New=courier new,courier,monospace;Georgia=georgia,palatino,serif;Helvetica=helvetica,arial,sans-serif;Impact=impact,sans-serif;Symbol=symbol;Tahoma=tahoma,arial,helvetica,sans-serif;Terminal=terminal,monaco,monospace;Times New Roman=times new roman,times,serif;Trebuchet MS=trebuchet ms,geneva,sans-serif;Verdana=verdana,geneva,sans-serif;Webdings=webdings;Wingdings=wingdings,zapf dingbats"
			}), n("font_size_formats", {
				processor: "string",
				default: "8pt 10pt 12pt 14pt 18pt 24pt 36pt"
			}), n("font_size_input_default_unit", {
				processor: "string",
				default: "pt"
			}), n("block_formats", {
				processor: "string",
				default: "Paragraph=p;Heading 1=h1;Heading 2=h2;Heading 3=h3;Heading 4=h4;Heading 5=h5;Heading 6=h6;Preformatted=pre"
			}), n("content_langs", {
				processor: "object[]"
			}), n("removed_menuitems", {
				processor: "string",
				default: ""
			}), n("menubar", {
				processor: e => r(e) || d(e),
				default: !t
			}), n("menu", {
				processor: "object",
				default: {}
			}), n("toolbar", {
				processor: e => d(e) || r(e) || l(e) ? {
					value: e,
					valid: !0
				} : {
					valid: !1,
					message: "Must be a boolean, string or array."
				},
				default: !0
			}), N(9, (e => {
				n("toolbar" + (e + 1), {
					processor: "string"
				})
			})), n("toolbar_mode", {
				processor: "string",
				default: o ? "scrolling" : "floating"
			}), n("toolbar_groups", {
				processor: "object",
				default: {}
			}), n("toolbar_location", {
				processor: "string",
				default: yf.auto
			}), n("toolbar_persist", {
				processor: "boolean",
				default: !1
			}), n("toolbar_sticky", {
				processor: "boolean",
				default: e.inline
			}), n("toolbar_sticky_offset", {
				processor: "number",
				default: 0
			}), n("fixed_toolbar_container", {
				processor: "string",
				default: ""
			}), n("fixed_toolbar_container_target", {
				processor: "object"
			}), n("ui_mode", {
				processor: "string",
				default: "combined"
			}), n("file_picker_callback", {
				processor: "function"
			}), n("file_picker_validator_handler", {
				processor: "function"
			}), n("file_picker_types", {
				processor: "string"
			}), n("typeahead_urls", {
				processor: "boolean",
				default: !0
			}), n("anchor_top", {
				processor: s,
				default: "#top"
			}), n("anchor_bottom", {
				processor: s,
				default: "#bottom"
			}), n("draggable_modal", {
				processor: "boolean",
				default: !1
			}), n("statusbar", {
				processor: "boolean",
				default: !0
			}), n("elementpath", {
				processor: "boolean",
				default: !0
			}), n("branding", {
				processor: "boolean",
				default: !0
			}), n("promotion", {
				processor: "boolean",
				default: !0
			}), n("resize", {
				processor: e => "both" === e || d(e),
				default: !kf.deviceType.isTouch()
			}), n("sidebar_show", {
				processor: "string"
			}), n("help_accessibility", {
				processor: "boolean",
				default: e.hasPlugin("help")
			}), n("default_font_stack", {
				processor: "string[]",
				default: []
			})
		},
		Ef = Of("readonly"),
		Af = Of("height"),
		Mf = Of("width"),
		Df = _f(Of("min_width")),
		Bf = _f(Of("min_height")),
		If = _f(Of("max_width")),
		Ff = _f(Of("max_height")),
		Rf = _f(Of("style_formats")),
		Nf = Of("style_formats_merge"),
		zf = Of("style_formats_autohide"),
		Lf = Of("content_langs"),
		Vf = Of("removed_menuitems"),
		Hf = Of("toolbar_mode"),
		Pf = Of("toolbar_groups"),
		Uf = Of("toolbar_location"),
		Wf = Of("fixed_toolbar_container"),
		jf = Of("fixed_toolbar_container_target"),
		$f = Of("toolbar_persist"),
		Gf = Of("toolbar_sticky_offset"),
		qf = Of("menubar"),
		Yf = Of("toolbar"),
		Xf = Of("file_picker_callback"),
		Kf = Of("file_picker_validator_handler"),
		Jf = Of("font_size_input_default_unit"),
		Qf = Of("file_picker_types"),
		Zf = Of("typeahead_urls"),
		eb = Of("anchor_top"),
		tb = Of("anchor_bottom"),
		ob = Of("draggable_modal"),
		nb = Of("statusbar"),
		sb = Of("elementpath"),
		rb = Of("branding"),
		ab = Of("resize"),
		ib = Of("paste_as_text"),
		lb = Of("sidebar_show"),
		cb = Of("promotion"),
		db = Of("help_accessibility"),
		ub = Of("default_font_stack"),
		mb = e => !1 === e.options.get("skin"),
		gb = e => !1 !== e.options.get("menubar"),
		pb = e => {
			const t = e.options.get("skin_url");
			if (mb(e)) return t;
			if (t) return e.documentBaseURI.toAbsolute(t);
			{
				const t = e.options.get("skin");
				return Cf.baseURL + "/skins/ui/" + t
			}
		},
		hb = e => A.from(e.options.get("skin_url")),
		fb = e => e.options.get("line_height_formats").split(" "),
		bb = e => {
			const t = Yf(e),
				o = r(t),
				n = l(t) && t.length > 0;
			return !xb(e) && (n || o || !0 === t)
		},
		vb = e => {
			const t = N(9, (t => e.options.get("toolbar" + (t + 1)))),
				o = P(t, r);
			return Ce(o.length > 0, o)
		},
		xb = e => vb(e).fold((() => {
			const t = Yf(e);
			return f(t, r) && t.length > 0
		}), E),
		yb = e => Uf(e) === yf.bottom,
		wb = e => {
			var t;
			if (!e.inline) return A.none();
			const o = null !== (t = Wf(e)) && void 0 !== t ? t : "";
			if (o.length > 0) return Ol(xt(), o);
			const n = jf(e);
			return g(n) ? A.some(ze(n)) : A.none()
		},
		Sb = e => e.inline && wb(e).isSome(),
		Cb = e => wb(e).getOrThunk((() => ht(pt(ze(e.getElement()))))),
		kb = e => e.inline && !gb(e) && !bb(e) && !xb(e),
		Ob = e => (e.options.get("toolbar_sticky") || e.inline) && !Sb(e) && !kb(e),
		_b = e => !Sb(e) && "split" === e.options.get("ui_mode"),
		Tb = e => {
			const t = e.options.get("menu");
			return le(t, (e => ({
				...e,
				items: e.items
			})))
		};
	var Eb = Object.freeze({
		__proto__: null,
		get ToolbarMode() {
			return xf
		},
		get ToolbarLocation() {
			return yf
		},
		register: Tf,
		getSkinUrl: pb,
		getSkinUrlOption: hb,
		isReadOnly: Ef,
		isSkinDisabled: mb,
		getHeightOption: Af,
		getWidthOption: Mf,
		getMinWidthOption: Df,
		getMinHeightOption: Bf,
		getMaxWidthOption: If,
		getMaxHeightOption: Ff,
		getUserStyleFormats: Rf,
		shouldMergeStyleFormats: Nf,
		shouldAutoHideStyleFormats: zf,
		getLineHeightFormats: fb,
		getContentLanguages: Lf,
		getRemovedMenuItems: Vf,
		isMenubarEnabled: gb,
		isMultipleToolbars: xb,
		isToolbarEnabled: bb,
		isToolbarPersist: $f,
		getMultipleToolbarsOption: vb,
		getUiContainer: Cb,
		useFixedContainer: Sb,
		isSplitUiMode: _b,
		getToolbarMode: Hf,
		isDraggableModal: ob,
		isDistractionFree: kb,
		isStickyToolbar: Ob,
		getStickyToolbarOffset: Gf,
		getToolbarLocation: Uf,
		isToolbarLocationBottom: yb,
		getToolbarGroups: Pf,
		getMenus: Tb,
		getMenubar: qf,
		getToolbar: Yf,
		getFilePickerCallback: Xf,
		getFilePickerTypes: Qf,
		useTypeaheadUrls: Zf,
		getAnchorTop: eb,
		getAnchorBottom: tb,
		getFilePickerValidatorHandler: Kf,
		getFontSizeInputDefaultUnit: Jf,
		useStatusBar: nb,
		useElementPath: sb,
		promotionEnabled: cb,
		useBranding: rb,
		getResize: ab,
		getPasteAsText: ib,
		getSidebarShow: lb,
		useHelpAccessibility: db,
		getDefaultFontStack: ub
	});
	const Ab = ["visible", "hidden", "clip"],
		Mb = e => Ae(e).length > 0 && !F(Ab, e),
		Db = e => {
			if (je(e)) {
				const t = It(e, "overflow-x"),
					o = It(e, "overflow-y");
				return Mb(t) || Mb(o)
			}
			return !1
		},
		Bb = e => e.plugins.fullscreen && e.plugins.fullscreen.isFullscreen(),
		Ib = (e, t) => _b(e) ? ((e, t) => {
			const o = Cd(t, Db),
				n = 0 === o.length ? ft(t).map(bt).map((e => Cd(e, Db))).getOr([]) : o;
			return te(n).map((t => ({
				element: t,
				others: n.slice(1),
				isFullscreen: () => Bb(e)
			})))
		})(e, t) : A.none(),
		Fb = e => {
			const t = [...L(e.others, Ko), Zo()];
			return e.isFullscreen() ? Zo() : ((e, t) => W(t, ((e, t) => Qo(e, t)), e))(Ko(e.element), t)
		},
		Rb = Gm({
			name: "Button",
			factory: e => {
				const t = Uh(e.action),
					o = e.dom.tag,
					n = t => fe(e.dom, "attributes").bind((e => fe(e, t)));
				return {
					uid: e.uid,
					dom: e.dom,
					components: e.components,
					events: t,
					behaviours: Xu(e.buttonBehaviours, [Bh.config({}), bh.config({
						mode: "execution",
						useSpace: !0,
						useEnter: !0
					})]),
					domModification: {
						attributes: "button" === o ? {
							type: n("type").getOr("button"),
							...n("role").map((e => ({
								role: e
							}))).getOr({})
						} : {
							role: e.role.getOr(n("role").getOr("button"))
						}
					},
					eventOrder: e.eventOrder
				}
			},
			configFields: [ws("uid", void 0), rs("dom"), ws("components", []), Yu("buttonBehaviours", [Bh, bh]), gs("action"), gs("role"), ws("eventOrder", {})]
		}),
		Nb = e => {
			const t = Fe(e),
				o = lt(t),
				n = (e => {
					const t = void 0 !== e.dom.attributes ? e.dom.attributes : [];
					return W(t, ((e, t) => "class" === t.name ? e : {
						...e,
						[t.name]: t.value
					}), {})
				})(t),
				s = (e => Array.prototype.slice.call(e.dom.classList, 0))(t),
				r = 0 === o.length ? {} : {
					innerHtml: ti(t)
				};
			return {
				tag: Ue(t),
				classes: s,
				attributes: n,
				...r
			}
		},
		zb = e => {
			const t = (e => void 0 !== e.uid)(e) && ve(e, "uid") ? e.uid : Li("memento");
			return {
				get: e => e.getSystem().getByUid(t).getOrDie(),
				getOpt: e => e.getSystem().getByUid(t).toOptional(),
				asSpec: () => ({
					...e,
					uid: t
				})
			}
		};
	var Lb = Object.freeze({
			__proto__: null,
			exhibit: (e, t) => na({
				attributes: Bs([{
					key: t.tabAttr,
					value: "true"
				}])
			})
		}),
		Vb = [ws("tabAttr", "data-alloy-tabstop")];
	const Hb = ua({
			fields: Vb,
			name: "tabstopping",
			active: Lb
		}),
		Pb = Di("tooltip.exclusive"),
		Ub = Di("tooltip.show"),
		Wb = Di("tooltip.hide"),
		jb = Di("tooltip.immediateHide"),
		$b = Di("tooltip.immediateShow"),
		Gb = (e, t, o) => {
			e.getSystem().broadcastOn([Pb], {})
		};
	var qb = Object.freeze({
			__proto__: null,
			hideAllExclusive: Gb,
			immediateOpenClose: (e, t, o, n) => Fr(e, n ? $b : jb),
			isEnabled: (e, t, o) => o.isEnabled(),
			setComponents: (e, t, o, n) => {
				o.getTooltip().each((e => {
					e.getSystem().isConnected() && _h.set(e, n)
				}))
			},
			setEnabled: (e, t, o, n) => o.setEnabled(n)
		}),
		Yb = Object.freeze({
			__proto__: null,
			events: (e, t) => {
				const o = o => {
						t.getTooltip().each((n => {
							n.getSystem().isConnected() && (lu(n), e.onHide(o, n), t.clearTooltip())
						})), t.clearTimer()
					},
					n = o => {
						if (!t.isShowing() && t.isEnabled()) {
							Gb(o);
							const n = e.lazySink(o).getOrDie(),
								s = o.getSystem().build({
									dom: e.tooltipDom,
									components: e.tooltipComponents,
									events: Hr("normal" === e.mode ? [Wr(Ys(), (e => {
										Fr(o, Ub)
									})), Wr(Gs(), (e => {
										Fr(o, Wb)
									}))] : []),
									behaviours: ca([_h.config({})])
								});
							t.setTooltip(s), ru(n, s), e.onShow(o, s), Qd.position(n, s, {
								anchor: e.anchor(o)
							})
						}
					},
					s = o => {
						t.getTooltip().each((t => {
							const n = e.lazySink(o).getOrDie();
							Qd.position(n, t, {
								anchor: e.anchor(o)
							})
						}))
					};
				return Hr(G([
					[Zr((t => {
						e.onSetup(t)
					})), Wr(Ub, (o => {
						t.resetTimer((() => {
							n(o)
						}), e.delayForShow())
					})), Wr(Wb, (n => {
						t.resetTimer((() => {
							o(n)
						}), e.delayForHide())
					})), Wr($b, (e => {
						t.resetTimer((() => {
							n(e)
						}), 0)
					})), Wr(jb, (e => {
						t.resetTimer((() => {
							o(e)
						}), 0)
					})), Wr(ur(), ((e, t) => {
						const n = t;
						n.universal || F(n.channels, Pb) && o(e)
					})), Qr((e => {
						o(e)
					}))], (() => {
						switch (e.mode) {
							case "normal":
								return [Wr(Xs(), (e => {
									Fr(e, $b)
								})), Wr(cr(), (e => {
									Fr(e, jb)
								})), Wr(Ys(), (e => {
									Fr(e, Ub)
								})), Wr(Gs(), (e => {
									Fr(e, Wb)
								}))];
							case "follow-highlight":
								return [Wr(Br(), ((e, t) => {
									Fr(e, Ub)
								})), Wr(Ir(), (e => {
									Fr(e, Wb)
								}))];
							case "children-normal":
								return [Wr(Xs(), ((o, n) => {
									fc(o.element).each((r => {
										Ke(n.event.target, "[data-mce-tooltip]") && t.getTooltip().fold((() => {
											Fr(o, $b)
										}), (n => {
											t.isShowing() && (e.onShow(o, n), s(o))
										}))
									}))
								})), Wr(cr(), (e => {
									fc(e.element).fold((() => {
										Fr(e, jb)
									}), b)
								})), Wr(Ys(), (o => {
									Ol(o.element, "[data-mce-tooltip]:hover").each((n => {
										t.getTooltip().fold((() => {
											Fr(o, Ub)
										}), (n => {
											t.isShowing() && (e.onShow(o, n), s(o))
										}))
									}))
								})), Wr(Gs(), (e => {
									Ol(e.element, "[data-mce-tooltip]:hover").fold((() => {
										Fr(e, Wb)
									}), b)
								}))];
							default:
								return [Wr(Xs(), ((o, n) => {
									fc(o.element).each((r => {
										Ke(n.event.target, "[data-mce-tooltip]") && t.getTooltip().fold((() => {
											Fr(o, $b)
										}), (n => {
											t.isShowing() && (e.onShow(o, n), s(o))
										}))
									}))
								})), Wr(cr(), (e => {
									fc(e.element).fold((() => {
										Fr(e, jb)
									}), b)
								}))]
						}
					})()
				]))
			}
		}),
		Xb = [rs("lazySink"), rs("tooltipDom"), ws("exclusive", !0), ws("tooltipComponents", []), Ts("delayForShow", y(300)), Ts("delayForHide", y(300)), Ts("onSetup", b), Os("mode", "normal", ["normal", "follow-highlight", "children-keyboard-focus", "children-normal"]), ws("anchor", (e => ({
			type: "hotspot",
			hotspot: e,
			layouts: {
				onLtr: y([Zl, Ql, Yl, Kl, Xl, Jl]),
				onRtl: y([Zl, Ql, Yl, Kl, Xl, Jl])
			},
			bubble: Wc(0, -2, {})
		}))), bi("onHide"), bi("onShow")],
		Kb = Object.freeze({
			__proto__: null,
			init: () => {
				const e = en(!0),
					t = nn(),
					o = nn(),
					n = () => {
						t.on(clearTimeout)
					},
					s = y("not-implemented");
				return la({
					getTooltip: o.get,
					isShowing: o.isSet,
					setTooltip: o.set,
					clearTooltip: o.clear,
					clearTimer: n,
					resetTimer: (e, o) => {
						n(), t.set(setTimeout(e, o))
					},
					readState: s,
					isEnabled: () => e.get(),
					setEnabled: t => e.set(t)
				})
			}
		});
	const Jb = ua({
			fields: Xb,
			name: "tooltipping",
			active: Yb,
			state: Kb,
			apis: qb
		}),
		{
			entries: Qb,
			setPrototypeOf: Zb,
			isFrozen: ev,
			getPrototypeOf: tv,
			getOwnPropertyDescriptor: ov
		} = Object;
	/*! @license DOMPurify 3.1.7 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.1.7/LICENSE */
	let {
		freeze: nv,
		seal: sv,
		create: rv
	} = Object, {
		apply: av,
		construct: iv
	} = "undefined" != typeof Reflect && Reflect; // eslint-disable-line import/no-mutable-exports
	nv || (nv = function(e) {
		return e
	}), sv || (sv = function(e) {
		return e
	}), av || (av = function(e, t, o) {
		return e.apply(t, o)
	}), iv || (iv = function(e, t) {
		return new e(...t)
	});
	const lv = wv(Array.prototype.forEach),
		cv = wv(Array.prototype.pop),
		dv = wv(Array.prototype.push),
		uv = wv(String.prototype.toLowerCase),
		mv = wv(String.prototype.toString),
		gv = wv(String.prototype.match),
		pv = wv(String.prototype.replace),
		hv = wv(String.prototype.indexOf),
		fv = wv(String.prototype.trim),
		bv = wv(Object.prototype.hasOwnProperty),
		vv = wv(RegExp.prototype.test),
		xv = (yv = TypeError, function() {
			for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++) t[o] = arguments[o];
			return iv(yv, t)
		});
	/**
	 * Creates a new function that constructs an instance of the given constructor function with the provided arguments.
	 *
	 * @param {Function} func - The constructor function to be wrapped and called.
	 * @returns {Function} A new function that constructs an instance of the given constructor function with the provided arguments.
	 */
	var yv;
	/**
	 * Add properties to a lookup table
	 *
	 * @param {Object} set - The set to which elements will be added.
	 * @param {Array} array - The array containing elements to be added to the set.
	 * @param {Function} transformCaseFunc - An optional function to transform the case of each element before adding to the set.
	 * @returns {Object} The modified set with added elements.
	 */
	/**
	 * Creates a new function that calls the given function with a specified thisArg and arguments.
	 *
	 * @param {Function} func - The function to be wrapped and called.
	 * @returns {Function} A new function that calls the given function with a specified thisArg and arguments.
	 */
	function wv(e) {
		return function(t) {
			for (var o = arguments.length, n = new Array(o > 1 ? o - 1 : 0), s = 1; s < o; s++) n[s - 1] = arguments[s];
			return av(e, t, n)
		}
	}

	function Sv(e, t) {
		let o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : uv;
		Zb &&
			// Make 'in' and truthy checks like Boolean(set.constructor)
			// independent of any properties defined on Object.prototype.
			// Prevent prototype setters from intercepting set as a this value.
			Zb(e, null);
		let n = t.length;
		for (; n--;) {
			let s = t[n];
			if ("string" == typeof s) {
				const e = o(s);
				e !== s && (
					// Config presets (e.g. tags.js, attrs.js) are immutable.
					ev(t) || (t[n] = e), s = e)
			}
			e[s] = !0
		}
		return e
	}
	/**
	 * Clean up an array to harden against CSPP
	 *
	 * @param {Array} array - The array to be cleaned.
	 * @returns {Array} The cleaned version of the array
	 */
	function Cv(e) {
		for (let t = 0; t < e.length; t++) bv(e, t) || (e[t] = null);
		return e
	}
	/**
	 * Shallow clone an object
	 *
	 * @param {Object} object - The object to be cloned.
	 * @returns {Object} A new object that copies the original.
	 */
	function kv(e) {
		const t = rv(null);
		for (const [o, n] of Qb(e)) bv(e, o) && (Array.isArray(n) ? t[o] = Cv(n) : n && "object" == typeof n && n.constructor === Object ? t[o] = kv(n) : t[o] = n);
		return t
	}
	/**
	 * This method automatically checks if the prop is function or getter and behaves accordingly.
	 *
	 * @param {Object} object - The object to look up the getter function in its prototype chain.
	 * @param {String} prop - The property name for which to find the getter function.
	 * @returns {Function} The getter function found in the prototype chain or a fallback function.
	 */
	function Ov(e, t) {
		for (; null !== e;) {
			const o = ov(e, t);
			if (o) {
				if (o.get) return wv(o.get);
				if ("function" == typeof o.value) return wv(o.value)
			}
			e = tv(e)
		}
		return function() {
			return null
		}
	}
	const _v = nv(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]),
		Tv = nv(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]),
		Ev = nv(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]),
		Av = nv(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]),
		Mv = nv(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]),
		Dv = nv(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]),
		Bv = nv(["#text"]),
		Iv = nv(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]),
		Fv = nv(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]),
		Rv = nv(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]),
		Nv = nv(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
		zv = sv(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
		Lv = sv(/<%[\w\W]*|[\w\W]*%>/gm),
		Vv = sv(/\${[\w\W]*}/gm),
		Hv = sv(/^data-[\-\w.\u00B7-\uFFFF]/),
		Pv = sv(/^aria-[\-\w]+$/),
		Uv = sv(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),
		Wv = sv(/^(?:\w+script|data):/i),
		jv = sv(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
		$v = sv(/^html$/i),
		Gv = sv(/^[a-z][.\w]*(-[.\w]+)+$/i);
	// SVG
	var qv = Object.freeze({
		__proto__: null,
		MUSTACHE_EXPR: zv,
		ERB_EXPR: Lv,
		TMPLIT_EXPR: Vv,
		DATA_ATTR: Hv,
		ARIA_ATTR: Pv,
		IS_ALLOWED_URI: Uv,
		IS_SCRIPT_OR_DATA: Wv,
		ATTR_WHITESPACE: jv,
		DOCTYPE_NAME: $v,
		CUSTOM_ELEMENT: Gv
	});
	// https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType
	const Yv = function() {
		return "undefined" == typeof window ? null : window
	};
	var Xv = function e() {
		let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Yv();
		const o = t => e(t)
		/**
		 * Version label, exposed for easier checks
		 * if DOMPurify is up to date or not
		 */
		;
		if (o.version = "3.1.7",
			/**
			 * Array of elements that DOMPurify removed during sanitation.
			 * Empty if nothing was removed.
			 */
			o.removed = [], !t || !t.document || 9 !== t.document.nodeType)
			// Not running in a browser, provide a factory function
			// so that you can pass your own Window
			return o.isSupported = !1, o;
		let {
			document: n
		} = t;
		const s = n,
			r = s.currentScript,
			{
				DocumentFragment: a,
				HTMLTemplateElement: i,
				Node: l,
				Element: c,
				NodeFilter: d,
				NamedNodeMap: u = t.NamedNodeMap || t.MozNamedAttrMap,
				HTMLFormElement: m,
				DOMParser: g,
				trustedTypes: p
			} = t,
			h = c.prototype,
			f = Ov(h, "cloneNode"),
			b = Ov(h, "remove"),
			v = Ov(h, "nextSibling"),
			x = Ov(h, "childNodes"),
			y = Ov(h, "parentNode");
		// As per issue #47, the web-components registry is inherited by a
		// new document created via createHTMLDocument. As per the spec
		// (http://w3c.github.io/webcomponents/spec/custom/#creating-and-passing-registries)
		// a new empty registry is used when creating a template contents owner
		// document, so we use that as our parent document to ensure nothing
		// is inherited.
		if ("function" == typeof i) {
			const e = n.createElement("template");
			e.content && e.content.ownerDocument && (n = e.content.ownerDocument)
		}
		let w, S = "";
		const {
			implementation: C,
			createNodeIterator: k,
			createDocumentFragment: O,
			getElementsByTagName: _
		} = n, {
			importNode: T
		} = s;
		let E = {};
		/**
		 * Expose whether this browser supports running the full DOMPurify.
		 */
		o.isSupported = "function" == typeof Qb && "function" == typeof y && C && void 0 !== C.createHTMLDocument;
		const {
			MUSTACHE_EXPR: A,
			ERB_EXPR: M,
			TMPLIT_EXPR: D,
			DATA_ATTR: B,
			ARIA_ATTR: I,
			IS_SCRIPT_OR_DATA: F,
			ATTR_WHITESPACE: R,
			CUSTOM_ELEMENT: N
		} = qv;
		let {
			IS_ALLOWED_URI: z
		} = qv, L = null;
		/**
		 * We consider the elements and attributes below to be safe. Ideally
		 * don't add any new ones but feel free to remove unwanted ones.
		 */
		/* allowed element names */
		const V = Sv({}, [..._v, ...Tv, ...Ev, ...Mv, ...Bv]);
		/* Allowed attribute names */
		let H = null;
		const P = Sv({}, [...Iv, ...Fv, ...Rv, ...Nv]);
		/*
		 * Configure how DOMPUrify should handle custom elements and their attributes as well as customized built-in elements.
		 * @property {RegExp|Function|null} tagNameCheck one of [null, regexPattern, predicate]. Default: `null` (disallow any custom elements)
		 * @property {RegExp|Function|null} attributeNameCheck one of [null, regexPattern, predicate]. Default: `null` (disallow any attributes not on the allow list)
		 * @property {boolean} allowCustomizedBuiltInElements allow custom elements derived from built-ins if they pass CUSTOM_ELEMENT_HANDLING.tagNameCheck. Default: `false`.
		 */
		let U = Object.seal(rv(null, {
				tagNameCheck: {
					writable: !0,
					configurable: !1,
					enumerable: !0,
					value: null
				},
				attributeNameCheck: {
					writable: !0,
					configurable: !1,
					enumerable: !0,
					value: null
				},
				allowCustomizedBuiltInElements: {
					writable: !0,
					configurable: !1,
					enumerable: !0,
					value: !1
				}
			})),
			W = null,
			j = null,
			$ = !0,
			G = !0,
			q = !1,
			Y = !0,
			X = !1,
			K = !0,
			J = !1,
			Q = !1,
			Z = !1,
			ee = !1,
			te = !1,
			oe = !1,
			ne = !0,
			se = !1,
			re = !0,
			ae = !1,
			ie = {},
			le = null;
		/* Explicitly forbidden tags (overrides ALLOWED_TAGS/ADD_TAGS) */
		const ce = Sv({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
		/* Tags that are safe for data: URIs */
		let de = null;
		const ue = Sv({}, ["audio", "video", "img", "source", "image", "track"]);
		/* Attributes safe for values like "javascript:" */
		let me = null;
		const ge = Sv({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]),
			pe = "http://www.w3.org/1998/Math/MathML",
			he = "http://www.w3.org/2000/svg",
			fe = "http://www.w3.org/1999/xhtml";
		/* Document namespace */
		let be = fe,
			ve = !1,
			xe = null;
		const ye = Sv({}, [pe, he, fe], mv);
		/* Parsing of strict XHTML documents */
		let we = null;
		const Se = ["application/xhtml+xml", "text/html"];
		let Ce = null,
			ke = null;
		/* Keep a reference to config to pass to hooks */
		/* Ideally, do not touch anything below this line */
		/* ______________________________________________ */
		const Oe = n.createElement("form"),
			_e = function(e) {
				return e instanceof RegExp || e instanceof Function
			},
			Te = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
				if (!ke || ke !== e) {
					if (
						/* Shield configuration object from tampering */
						e && "object" == typeof e || (e = {})
						/* Shield configuration object from prototype pollution */
						, e = kv(e), we =
						// eslint-disable-next-line unicorn/prefer-includes
						-1 === Se.indexOf(e.PARSER_MEDIA_TYPE) ? "text/html" : e.PARSER_MEDIA_TYPE,
						// HTML tags and attributes are not case-sensitive, converting to lowercase. Keeping XHTML as is.
						Ce = "application/xhtml+xml" === we ? mv : uv,
						/* Set configuration parameters */
						L = bv(e, "ALLOWED_TAGS") ? Sv({}, e.ALLOWED_TAGS, Ce) : V, H = bv(e, "ALLOWED_ATTR") ? Sv({}, e.ALLOWED_ATTR, Ce) : P, xe = bv(e, "ALLOWED_NAMESPACES") ? Sv({}, e.ALLOWED_NAMESPACES, mv) : ye, me = bv(e, "ADD_URI_SAFE_ATTR") ? Sv(kv(ge),
							// eslint-disable-line indent
							e.ADD_URI_SAFE_ATTR,
							// eslint-disable-line indent
							Ce) : ge, de = bv(e, "ADD_DATA_URI_TAGS") ? Sv(kv(ue),
							// eslint-disable-line indent
							e.ADD_DATA_URI_TAGS,
							// eslint-disable-line indent
							Ce) : ue, le = bv(e, "FORBID_CONTENTS") ? Sv({}, e.FORBID_CONTENTS, Ce) : ce, W = bv(e, "FORBID_TAGS") ? Sv({}, e.FORBID_TAGS, Ce) : {}, j = bv(e, "FORBID_ATTR") ? Sv({}, e.FORBID_ATTR, Ce) : {}, ie = !!bv(e, "USE_PROFILES") && e.USE_PROFILES, $ = !1 !== e.ALLOW_ARIA_ATTR, // Default true
						G = !1 !== e.ALLOW_DATA_ATTR, // Default true
						q = e.ALLOW_UNKNOWN_PROTOCOLS || !1, // Default false
						Y = !1 !== e.ALLOW_SELF_CLOSE_IN_ATTR, // Default true
						X = e.SAFE_FOR_TEMPLATES || !1, // Default false
						K = !1 !== e.SAFE_FOR_XML, // Default true
						J = e.WHOLE_DOCUMENT || !1, // Default false
						ee = e.RETURN_DOM || !1, // Default false
						te = e.RETURN_DOM_FRAGMENT || !1, // Default false
						oe = e.RETURN_TRUSTED_TYPE || !1, // Default false
						Z = e.FORCE_BODY || !1, // Default false
						ne = !1 !== e.SANITIZE_DOM, // Default true
						se = e.SANITIZE_NAMED_PROPS || !1, // Default false
						re = !1 !== e.KEEP_CONTENT, // Default true
						ae = e.IN_PLACE || !1, // Default false
						z = e.ALLOWED_URI_REGEXP || Uv, be = e.NAMESPACE || fe, U = e.CUSTOM_ELEMENT_HANDLING || {}, e.CUSTOM_ELEMENT_HANDLING && _e(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (U.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck), e.CUSTOM_ELEMENT_HANDLING && _e(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (U.attributeNameCheck = e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), e.CUSTOM_ELEMENT_HANDLING && "boolean" == typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (U.allowCustomizedBuiltInElements = e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), X && (G = !1), te && (ee = !0)
						/* Parse profile info */
						, ie && (L = Sv({}, Bv), H = [], !0 === ie.html && (Sv(L, _v), Sv(H, Iv)), !0 === ie.svg && (Sv(L, Tv), Sv(H, Fv), Sv(H, Nv)), !0 === ie.svgFilters && (Sv(L, Ev), Sv(H, Fv), Sv(H, Nv)), !0 === ie.mathMl && (Sv(L, Mv), Sv(H, Rv), Sv(H, Nv)))
						/* Merge configuration parameters */
						, e.ADD_TAGS && (L === V && (L = kv(L)), Sv(L, e.ADD_TAGS, Ce)), e.ADD_ATTR && (H === P && (H = kv(H)), Sv(H, e.ADD_ATTR, Ce)), e.ADD_URI_SAFE_ATTR && Sv(me, e.ADD_URI_SAFE_ATTR, Ce), e.FORBID_CONTENTS && (le === ce && (le = kv(le)), Sv(le, e.FORBID_CONTENTS, Ce))
						/* Add #text in case KEEP_CONTENT is set to true */
						, re && (L["#text"] = !0)
						/* Add html, head and body to ALLOWED_TAGS in case WHOLE_DOCUMENT is true */
						, J && Sv(L, ["html", "head", "body"])
						/* Add tbody to ALLOWED_TAGS in case tables are permitted, see #286, #365 */
						, L.table && (Sv(L, ["tbody"]), delete W.tbody), e.TRUSTED_TYPES_POLICY) {
						if ("function" != typeof e.TRUSTED_TYPES_POLICY.createHTML) throw xv('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
						if ("function" != typeof e.TRUSTED_TYPES_POLICY.createScriptURL) throw xv('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
						// Overwrite existing TrustedTypes policy.
						w = e.TRUSTED_TYPES_POLICY,
							// Sign local variables required by `sanitize`.
							S = w.createHTML("")
					} else
						// Uninitialized policy, attempt to initialize the internal dompurify policy.
						void 0 === w && (w = function(e, t) {
							if ("object" != typeof e || "function" != typeof e.createPolicy) return null;
							// Allow the callers to control the unique policy name
							// by adding a data-tt-policy-suffix to the script element with the DOMPurify.
							// Policy creation with duplicate names throws in Trusted Types.
							let o = null;
							const n = "data-tt-policy-suffix";
							t && t.hasAttribute(n) && (o = t.getAttribute(n));
							const s = "dompurify" + (o ? "#" + o : "");
							try {
								return e.createPolicy(s, {
									createHTML: e => e,
									createScriptURL: e => e
								})
							} catch (e) {
								// Policy creation failed (most likely another DOMPurify script has
								// already run). Skip creating the policy, as this will only cause errors
								// if TT are enforced.
								return console.warn("TrustedTypes policy " + s + " could not be created."), null
							}
						}(p, r)),
						// If creating the internal policy succeeded sign internal variables.
						null !== w && "string" == typeof S && (S = w.createHTML(""));
					// Prevent further manipulation of configuration.
					// Not available in IE8, Safari 5, etc.
					nv && nv(e), ke = e
				}
			},
			Ee = Sv({}, ["mi", "mo", "mn", "ms", "mtext"]),
			Ae = Sv({}, ["annotation-xml"]),
			Me = Sv({}, ["title", "style", "font", "a", "script"]),
			De = Sv({}, [...Tv, ...Ev, ...Av]),
			Be = Sv({}, [...Mv, ...Dv]),
			Ie = function(e) {
				dv(o.removed, {
					element: e
				});
				try {
					// eslint-disable-next-line unicorn/prefer-dom-node-remove
					y(e).removeChild(e)
				} catch (t) {
					b(e)
				}
			},
			Fe = function(e, t) {
				try {
					dv(o.removed, {
						attribute: t.getAttributeNode(e),
						from: t
					})
				} catch (e) {
					dv(o.removed, {
						attribute: null,
						from: t
					})
				}
				// We void attribute values for unremovable "is"" attributes
				if (t.removeAttribute(e), "is" === e && !H[e])
					if (ee || te) try {
						Ie(t)
					} catch (e) {} else try {
						t.setAttribute(e, "")
					} catch (e) {}
			},
			Re = function(e) {
				/* Create a HTML document */
				let t = null,
					o = null;
				if (Z) e = "<remove></remove>" + e;
				else {
					/* If FORCE_BODY isn't used, leading whitespace needs to be preserved manually */
					const t = gv(e, /^[\r\n\t ]+/);
					o = t && t[0]
				}
				"application/xhtml+xml" === we && be === fe && (
					// Root of XHTML doc must contain xmlns declaration (see https://www.w3.org/TR/xhtml1/normative.html#strict)
					e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + "</body></html>");
				const s = w ? w.createHTML(e) : e;
				/*
				 * Use the DOMParser API by default, fallback later if needs be
				 * DOMParser not work for svg when has multiple root element.
				 */
				if (be === fe) try {
					t = (new g).parseFromString(s, we)
				} catch (e) {}
				/* Use createHTMLDocument in case DOMParser is not available */
				if (!t || !t.documentElement) {
					t = C.createDocument(be, "template", null);
					try {
						t.documentElement.innerHTML = ve ? S : s
					} catch (e) {
						// Syntax error if dirtyPayload is invalid xml
					}
				}
				const r = t.body || t.documentElement;
				/* Work on whole document or just its body */
				return e && o && r.insertBefore(n.createTextNode(o), r.childNodes[0] || null), be === fe ? _.call(t, J ? "html" : "body")[0] : J ? t.documentElement : r
			},
			Ne = function(e) {
				return k.call(e.ownerDocument || e, e,
					// eslint-disable-next-line no-bitwise
					d.SHOW_ELEMENT | d.SHOW_COMMENT | d.SHOW_TEXT | d.SHOW_PROCESSING_INSTRUCTION | d.SHOW_CDATA_SECTION, null)
			},
			ze = function(e) {
				return e instanceof m && ("string" != typeof e.nodeName || "string" != typeof e.textContent || "function" != typeof e.removeChild || !(e.attributes instanceof u) || "function" != typeof e.removeAttribute || "function" != typeof e.setAttribute || "string" != typeof e.namespaceURI || "function" != typeof e.insertBefore || "function" != typeof e.hasChildNodes)
			},
			Le = function(e) {
				return "function" == typeof l && e instanceof l
			},
			Ve = function(e, t, n) {
				E[e] && lv(E[e], (e => {
					e.call(o, t, n, ke)
				}))
			},
			He = function(e) {
				let t = null;
				/* Execute a hook if present */
				/* Check if element is clobbered or can clobber */
				if (Ve("beforeSanitizeElements", e, null), ze(e)) return Ie(e), !0;
				/* Now let's check the element's type and name */
				const n = Ce(e.nodeName);
				/* Execute a hook if present */
				/* Detect mXSS attempts abusing namespace confusion */
				if (Ve("uponSanitizeElement", e, {
						tagName: n,
						allowedTags: L
					}), e.hasChildNodes() && !Le(e.firstElementChild) && vv(/<[/\w]/g, e.innerHTML) && vv(/<[/\w]/g, e.textContent)) return Ie(e), !0;
				/* Remove any occurrence of processing instructions */
				if (7 === e.nodeType) return Ie(e), !0;
				/* Remove any kind of possibly harmful comments */
				if (K && 8 === e.nodeType && vv(/<[/\w]/g, e.data)) return Ie(e), !0;
				/* Remove element if anything forbids its presence */
				if (!L[n] || W[n]) {
					/* Check if we have a custom element to handle */
					if (!W[n] && Ue(n)) {
						if (U.tagNameCheck instanceof RegExp && vv(U.tagNameCheck, n)) return !1;
						if (U.tagNameCheck instanceof Function && U.tagNameCheck(n)) return !1
					}
					/* Keep content except for bad-listed elements */
					if (re && !le[n]) {
						const t = y(e) || e.parentNode,
							o = x(e) || e.childNodes;
						if (o && t)
							for (let n = o.length - 1; n >= 0; --n) {
								const s = f(o[n], !0);
								s.__removalCount = (e.__removalCount || 0) + 1, t.insertBefore(s, v(e))
							}
					}
					return Ie(e), !0
				}
				/* Check whether element has a valid namespace */
				return e instanceof c && ! function(e) {
						let t = y(e);
						// In JSDOM, if we're inside shadow DOM, then parentNode
						// can be null. We just simulate parent in this case.
						t && t.tagName || (t = {
							namespaceURI: be,
							tagName: "template"
						});
						const o = uv(e.tagName),
							n = uv(t.tagName);
						return !!xe[e.namespaceURI] && (e.namespaceURI === he ?
							// The only way to switch from HTML namespace to SVG
							// is via <svg>. If it happens via any other tag, then
							// it should be killed.
							t.namespaceURI === fe ? "svg" === o :
							// The only way to switch from MathML to SVG is via`
							// svg if parent is either <annotation-xml> or MathML
							// text integration points.
							t.namespaceURI === pe ? "svg" === o && ("annotation-xml" === n || Ee[n]) : Boolean(De[o]) : e.namespaceURI === pe ?
							// The only way to switch from HTML namespace to MathML
							// is via <math>. If it happens via any other tag, then
							// it should be killed.
							t.namespaceURI === fe ? "math" === o :
							// The only way to switch from SVG to MathML is via
							// <math> and HTML integration points
							t.namespaceURI === he ? "math" === o && Ae[n] : Boolean(Be[o]) : e.namespaceURI === fe ?
							// The only way to switch from SVG to HTML is via
							// HTML integration points, and from MathML to HTML
							// is via MathML text integration points
							!(t.namespaceURI === he && !Ae[n]) && !(t.namespaceURI === pe && !Ee[n]) && !Be[o] && (Me[o] || !De[o]) : !("application/xhtml+xml" !== we || !xe[e.namespaceURI]))
					}(e) ? (Ie(e), !0) :
					/* Make sure that older browsers don't get fallback-tag mXSS */
					"noscript" !== n && "noembed" !== n && "noframes" !== n || !vv(/<\/no(script|embed|frames)/i, e.innerHTML) ? (
						/* Sanitize element content to be template-safe */
						X && 3 === e.nodeType && (
							/* Get the element's text content */
							t = e.textContent, lv([A, M, D], (e => {
								t = pv(t, e, " ")
							})), e.textContent !== t && (dv(o.removed, {
								element: e.cloneNode()
							}), e.textContent = t))
						/* Execute a hook if present */
						, Ve("afterSanitizeElements", e, null), !1) : (Ie(e), !0)
			},
			Pe = function(e, t, o) {
				/* Make sure attribute cannot clobber */
				if (ne && ("id" === t || "name" === t) && (o in n || o in Oe)) return !1;
				/* Allow valid data-* attributes: At least one character after "-"
				            (https://html.spec.whatwg.org/multipage/dom.html#embedding-custom-non-visible-data-with-the-data-*-attributes)
				            XML-compatible (https://html.spec.whatwg.org/multipage/infrastructure.html#xml-compatible and http://www.w3.org/TR/xml/#d0e804)
				            We don't need to check the value; it's always URI safe. */
				if (G && !j[t] && vv(B, t));
				else if ($ && vv(I, t));
				else if (!H[t] || j[t]) {
					if (
						// First condition does a very basic check if a) it's basically a valid custom element tagname AND
						// b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
						// and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
						!(Ue(e) && (U.tagNameCheck instanceof RegExp && vv(U.tagNameCheck, e) || U.tagNameCheck instanceof Function && U.tagNameCheck(e)) && (U.attributeNameCheck instanceof RegExp && vv(U.attributeNameCheck, t) || U.attributeNameCheck instanceof Function && U.attributeNameCheck(t)) ||
							// Alternative, second condition checks if it's an `is`-attribute, AND
							// the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
							"is" === t && U.allowCustomizedBuiltInElements && (U.tagNameCheck instanceof RegExp && vv(U.tagNameCheck, o) || U.tagNameCheck instanceof Function && U.tagNameCheck(o)))) return !1;
					/* Check value is safe. First, is attr inert? If so, is safe */
				} else if (me[t]);
				else if (vv(z, pv(o, R, "")));
				else if ("src" !== t && "xlink:href" !== t && "href" !== t || "script" === e || 0 !== hv(o, "data:") || !de[e])
					if (q && !vv(F, pv(o, R, "")));
					else if (o) return !1;
				return !0
			},
			Ue = function(e) {
				return "annotation-xml" !== e && gv(e, N)
			},
			We = function(e) {
				/* Execute a hook if present */
				Ve("beforeSanitizeAttributes", e, null);
				const {
					attributes: t
				} = e;
				/* Check if we have attributes; if not we might have a text node */
				if (!t) return;
				const n = {
					attrName: "",
					attrValue: "",
					keepAttr: !0,
					allowedAttributes: H
				};
				let s = t.length;
				/* Go backwards over all attributes; safely remove bad ones */
				for (; s--;) {
					const r = t[s],
						{
							name: a,
							namespaceURI: i,
							value: l
						} = r,
						c = Ce(a);
					let d = "value" === a ? l : fv(l);
					const u = d;
					/* Execute a hook if present */
					/* Did the hooks approve of the attribute? */
					if (n.attrName = c, n.attrValue = d, n.keepAttr = !0, n.forceKeepAttr = void 0, // Allows developers to see this is a property they can set
						Ve("uponSanitizeAttribute", e, n), d = n.attrValue, n.forceKeepAttr) continue;
					/* Remove attribute */
					/* Did the hooks approve of the attribute? */
					if (!n.keepAttr) {
						Fe(a, e);
						continue
					}
					/* Work around a security issue in jQuery 3.0 */
					if (!Y && vv(/\/>/i, d)) {
						Fe(a, e);
						continue
					}
					/* Sanitize attribute content to be template-safe */
					X && lv([A, M, D], (e => {
						d = pv(d, e, " ")
					}))
					/* Is `value` valid for this attribute? */
					;
					const m = Ce(e.nodeName);
					if (Pe(m, c, d))
						/* Work around a security issue with comments inside attributes */
						if (
							/* Full DOM Clobbering protection via namespace isolation,
							 * Prefix id and name attributes with `user-content-`
							 */
							!se || "id" !== c && "name" !== c || (
								// Remove the attribute with this value
								Fe(a, e),
								// Prefix the value and later re-create the attribute with the sanitized value
								d = "user-content-" + d), K && vv(/((--!?|])>)|<\/(style|title)/i, d)) Fe(a, e);
						else {
							/* Handle attributes that require Trusted Types */
							if (w && "object" == typeof p && "function" == typeof p.getAttributeType)
								if (i);
								else switch (p.getAttributeType(m, c)) {
									case "TrustedHTML":
										d = w.createHTML(d);
										break;
									case "TrustedScriptURL":
										d = w.createScriptURL(d)
								}
							/* Handle invalid data-* attribute set by try-catching it */
							if (d !== u) try {
								i ? e.setAttributeNS(i, a, d) :
									/* Fallback to setAttribute() for browser-unrecognized namespaces e.g. "x-schema". */
									e.setAttribute(a, d), ze(e) ? Ie(e) : cv(o.removed)
							} catch (e) {}
						}
					else Fe(a, e)
				}
				/* Execute a hook if present */
				Ve("afterSanitizeAttributes", e, null)
			},
			je = function e(t) {
				let o = null;
				const n = Ne(t);
				/* Execute a hook if present */
				for (Ve("beforeSanitizeShadowDOM", t, null); o = n.nextNode();)
					/* Execute a hook if present */
					Ve("uponSanitizeShadowNode", o, null),
					/* Sanitize tags and elements */
					He(o) || (
						/* Deep shadow DOM detected */
						o.content instanceof a && e(o.content)
						/* Check attributes, sanitize if necessary */
						, We(o));
				/* Execute a hook if present */
				Ve("afterSanitizeShadowDOM", t, null)
			};
		/**
		 * Sanitize
		 * Public method providing core sanitation functionality
		 *
		 * @param {String|Node} dirty string or DOM node
		 * @param {Object} cfg object
		 */
		// eslint-disable-next-line complexity
		return o.sanitize = function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
					n = null,
					r = null,
					i = null,
					c = null;
				/* Stringify, in case dirty is an object */
				if (
					/* Make sure we have a string to sanitize.
					          DO NOT return early, as this will return the wrong type if
					          the user has requested a DOM object rather than a string */
					ve = !e, ve && (e = "\x3c!--\x3e"), "string" != typeof e && !Le(e)) {
					if ("function" != typeof e.toString) throw xv("toString is not a function");
					if ("string" != typeof(e = e.toString())) throw xv("dirty is not a string, aborting")
				}
				/* Return dirty HTML if DOMPurify cannot run */
				if (!o.isSupported) return e;
				/* Assign config vars */
				if (Q || Te(t)
					/* Clean up removed elements */
					, o.removed = [],
					/* Check if dirty is correctly typed for IN_PLACE */
					"string" == typeof e && (ae = !1), ae) {
					/* Do some early pre-sanitization to avoid unsafe root nodes */
					if (e.nodeName) {
						const t = Ce(e.nodeName);
						if (!L[t] || W[t]) throw xv("root node is forbidden and cannot be sanitized in-place")
					}
				} else if (e instanceof l)
					/* If dirty is a DOM element, append to an empty document to avoid
					             elements being stripped by the parser */
					n = Re("\x3c!----\x3e"), r = n.ownerDocument.importNode(e, !0), 1 === r.nodeType && "BODY" === r.nodeName || "HTML" === r.nodeName ?
					/* Node is already a body, use as is */
					n = r :
					// eslint-disable-next-line unicorn/prefer-dom-node-append
					n.appendChild(r);
				else {
					/* Exit directly if we have nothing to do */
					if (!ee && !X && !J &&
						// eslint-disable-next-line unicorn/prefer-includes
						-1 === e.indexOf("<")) return w && oe ? w.createHTML(e) : e;
					/* Initialize the document to work on */
					/* Check we have a DOM node from the data */
					if (n = Re(e), !n) return ee ? null : oe ? S : ""
				}
				/* Remove first element node (ours) if FORCE_BODY is set */
				n && Z && Ie(n.firstChild)
				/* Get node iterator */
				;
				const d = Ne(ae ? e : n);
				/* Now start iterating over the created document */
				for (; i = d.nextNode();)
					/* Sanitize tags and elements */
					He(i) || (
						/* Shadow DOM detected, sanitize it */
						i.content instanceof a && je(i.content)
						/* Check attributes, sanitize if necessary */
						, We(i));
				/* If we sanitized `dirty` in-place, return it. */
				if (ae) return e;
				/* Return sanitized string or DOM */
				if (ee) {
					if (te)
						for (c = O.call(n.ownerDocument); n.firstChild;)
							// eslint-disable-next-line unicorn/prefer-dom-node-append
							c.appendChild(n.firstChild);
					else c = n;
					return (H.shadowroot || H.shadowrootmode) && (
						/*
						              AdoptNode() is not used because internal state is not reset
						              (e.g. the past names map of a HTMLFormElement), this is safe
						              in theory but we would rather not risk another attack vector.
						              The state that is cloned by importNode() is explicitly defined
						              by the specs.
						            */
						c = T.call(s, c, !0)), c
				}
				let u = J ? n.outerHTML : n.innerHTML;
				/* Serialize doctype if allowed */
				return J && L["!doctype"] && n.ownerDocument && n.ownerDocument.doctype && n.ownerDocument.doctype.name && vv($v, n.ownerDocument.doctype.name) && (u = "<!DOCTYPE " + n.ownerDocument.doctype.name + ">\n" + u)
					/* Sanitize final string template-safe */
					, X && lv([A, M, D], (e => {
						u = pv(u, e, " ")
					})), w && oe ? w.createHTML(u) : u
			},
			/**
			 * Public method to set the configuration once
			 * setConfig
			 *
			 * @param {Object} cfg configuration object
			 */
			o.setConfig = function() {
				Te(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}), Q = !0
			},
			/**
			 * Public method to remove the configuration
			 * clearConfig
			 *
			 */
			o.clearConfig = function() {
				ke = null, Q = !1
			},
			/**
			 * Public method to check if an attribute value is valid.
			 * Uses last set config, if any. Otherwise, uses config defaults.
			 * isValidAttribute
			 *
			 * @param  {String} tag Tag name of containing element.
			 * @param  {String} attr Attribute name.
			 * @param  {String} value Attribute value.
			 * @return {Boolean} Returns true if `value` is valid. Otherwise, returns false.
			 */
			o.isValidAttribute = function(e, t, o) {
				/* Initialize shared config vars if necessary. */
				ke || Te({});
				const n = Ce(e),
					s = Ce(t);
				return Pe(n, s, o)
			},
			/**
			 * AddHook
			 * Public method to add DOMPurify hooks
			 *
			 * @param {String} entryPoint entry point for the hook to add
			 * @param {Function} hookFunction function to execute
			 */
			o.addHook = function(e, t) {
				"function" == typeof t && (E[e] = E[e] || [], dv(E[e], t))
			},
			/**
			 * RemoveHook
			 * Public method to remove a DOMPurify hook at a given entryPoint
			 * (pops it from the stack of hooks if more are present)
			 *
			 * @param {String} entryPoint entry point for the hook to remove
			 * @return {Function} removed(popped) hook
			 */
			o.removeHook = function(e) {
				if (E[e]) return cv(E[e])
			},
			/**
			 * RemoveHooks
			 * Public method to remove all DOMPurify hooks at a given entryPoint
			 *
			 * @param  {String} entryPoint entry point for the hooks to remove
			 */
			o.removeHooks = function(e) {
				E[e] && (E[e] = [])
			},
			/**
			 * RemoveAllHooks
			 * Public method to remove all DOMPurify hooks
			 */
			o.removeAllHooks = function() {
				E = {}
			}, o
	}();
	const Kv = e => Xv().sanitize(e);
	var Jv = tinymce.util.Tools.resolve("tinymce.util.I18n");
	const Qv = {
			indent: !0,
			outdent: !0,
			"table-insert-column-after": !0,
			"table-insert-column-before": !0,
			"paste-column-after": !0,
			"paste-column-before": !0,
			"unordered-list": !0,
			"list-bull-circle": !0,
			"list-bull-default": !0,
			"list-bull-square": !0
		},
		Zv = "temporary-placeholder",
		ex = e => () => fe(e, Zv).getOr("!not found!"),
		tx = (e, t) => {
			const o = e.toLowerCase();
			if (Jv.isRtl()) {
				const e = ((e, t) => Ee(e, t) ? e : ((e, t) => e + t)(e, t))(o, "-rtl");
				return be(t, e) ? e : o
			}
			return o
		},
		ox = (e, t) => fe(t, tx(e, t)),
		nx = (e, t) => {
			const o = t();
			return ox(e, o).getOrThunk(ex(o))
		},
		sx = () => Th("add-focusable", [Jr((e => {
			kl(e.element, "svg").each((e => St(e, "focusable", "false")))
		}))]),
		rx = (e, t, o, n) => {
			var s, r;
			const a = (e => !!Jv.isRtl() && be(Qv, e))(t) ? ["tox-icon--flip"] : [],
				i = fe(o, tx(t, o)).or(n).getOrThunk(ex(o));
			return {
				dom: {
					tag: e.tag,
					attributes: null !== (s = e.attributes) && void 0 !== s ? s : {},
					classes: e.classes.concat(a),
					innerHtml: i
				},
				behaviours: ca([...null !== (r = e.behaviours) && void 0 !== r ? r : [], sx()])
			}
		},
		ax = (e, t, o, n = A.none()) => rx(t, e, o(), n),
		ix = {
			success: "checkmark",
			error: "warning",
			err: "error",
			warning: "warning",
			warn: "warning",
			info: "info"
		},
		lx = Gm({
			name: "Notification",
			factory: e => {
				const t = Di("notification-text"),
					o = zb({
						dom: Nb(`<p id=${t}>${Kv(e.backstageProvider.translate(e.text))}</p>`),
						behaviours: ca([_h.config({})])
					}),
					n = e => ({
						dom: {
							tag: "div",
							classes: ["tox-bar"],
							styles: {
								width: `${e}%`
							}
						}
					}),
					s = e => ({
						dom: {
							tag: "div",
							classes: ["tox-text"],
							innerHtml: `${e}%`
						}
					}),
					r = zb({
						dom: {
							tag: "div",
							classes: e.progress ? ["tox-progress-bar", "tox-progress-indicator"] : ["tox-progress-bar"]
						},
						components: [{
							dom: {
								tag: "div",
								classes: ["tox-bar-container"]
							},
							components: [n(0)]
						}, s(0)],
						behaviours: ca([_h.config({})])
					}),
					a = {
						updateProgress: (e, t) => {
							e.getSystem().isConnected() && r.getOpt(e).each((e => {
								_h.set(e, [{
									dom: {
										tag: "div",
										classes: ["tox-bar-container"]
									},
									components: [n(t)]
								}, s(t)])
							}))
						},
						updateText: (e, t) => {
							if (e.getSystem().isConnected()) {
								const n = o.get(e);
								_h.set(n, [dl(t)])
							}
						}
					},
					i = G([e.icon.toArray(), e.level.toArray(), e.level.bind((e => A.from(ix[e]))).toArray()]),
					l = zb(Rb.sketch({
						dom: {
							tag: "button",
							classes: ["tox-notification__dismiss", "tox-button", "tox-button--naked", "tox-button--icon"],
							attributes: {
								"aria-label": e.backstageProvider.translate("Close")
							}
						},
						components: [ax("close", {
							tag: "span",
							classes: ["tox-icon"]
						}, e.iconProvider)],
						buttonBehaviours: ca([Hb.config({}), Jb.config({
							...e.backstageProvider.tooltips.getConfig({
								tooltipText: e.backstageProvider.translate("Close")
							})
						})]),
						action: t => {
							e.onAction(t)
						}
					})),
					c = ((e, t, o) => {
						const n = o(),
							s = j(e, (e => be(n, tx(e, n))));
						return rx({
							tag: "div",
							classes: ["tox-notification__icon"]
						}, s.getOr(Zv), n, A.none())
					})(i, 0, e.iconProvider),
					d = [c, {
						dom: {
							tag: "div",
							classes: ["tox-notification__body"]
						},
						components: [o.asSpec()],
						behaviours: ca([_h.config({})])
					}];
				return {
					uid: e.uid,
					dom: {
						tag: "div",
						attributes: {
							role: "alert",
							"aria-labelledby": t
						},
						classes: e.level.map((e => ["tox-notification", "tox-notification--in", `tox-notification--${e}`])).getOr(["tox-notification", "tox-notification--in"])
					},
					behaviours: ca([Hb.config({}), Bh.config({}), bh.config({
						mode: "special",
						onEscape: t => (e.onAction(t), A.some(!0))
					})]),
					components: d.concat(e.progress ? [r.asSpec()] : []).concat([l.asSpec()]),
					apis: a
				}
			},
			configFields: [gs("level"), rs("progress"), gs("icon"), rs("onAction"), rs("text"), rs("iconProvider"), rs("backstageProvider")],
			apis: {
				updateProgress: (e, t, o) => {
					e.updateProgress(t, o)
				},
				updateText: (e, t, o) => {
					e.updateText(t, o)
				}
			}
		});
	var cx = (e, t, o, n) => {
		const s = t.backstage.shared,
			r = () => ze("" === e.queryCommandValue("ToggleView") ? e.getContentAreaContainer() : e.getContainer()),
			a = () => {
				const e = Ko(r());
				return A.some(e)
			},
			i = e => {
				a().each((t => {
					V(e, (e => {
						Lt(e.element, "width"), Kt(e.element) > t.width && Mt(e.element, "width", t.width + "px")
					}))
				}))
			};
		return {
			open: (t, l, c) => {
				const d = () => {
						n.on((t => {
							l();
							const o = c();
							(e => {
								_h.remove(e, u), m()
							})(t), ((t, o) => {
								0 === lt(t.element).length ? ((t, o) => {
									vf.hide(t), n.clear(), o && e.focus()
								})(t, o) : ((e, t) => {
									t && bh.focusIn(e)
								})(t, o)
							})(t, o)
						}))
					},
					u = pl(lx.sketch({
						text: t.text,
						level: F(["success", "error", "warning", "warn", "info"], t.type) ? t.type : void 0,
						progress: !0 === t.progressBar,
						icon: t.icon,
						onAction: d,
						iconProvider: s.providers.icons,
						backstageProvider: s.providers
					}));
				if (n.isSet()) {
					const e = hl(u);
					n.on((t => {
						_h.append(t, e), vf.reposition(t), Oi.refresh(t), i(t.components())
					}))
				} else {
					const t = pl(vf.sketch({
							dom: {
								tag: "div",
								classes: ["tox-notifications-container"],
								attributes: {
									"aria-label": "Notifications",
									role: "region"
								}
							},
							lazySink: s.getSink,
							fireDismissalEventInstead: {},
							...s.header.isPositionedAtTop() ? {} : {
								fireRepositionEventInstead: {}
							},
							inlineBehaviours: ca([bh.config({
								mode: "cyclic",
								selector: ".tox-notification, .tox-notification a, .tox-notification button"
							}), _h.config({}), ...Ob(e) && !s.header.isPositionedAtTop() ? [] : [Oi.config({
								contextual: {
									lazyContext: () => A.some(Ko(r())),
									fadeInClass: "tox-notification-container-dock-fadein",
									fadeOutClass: "tox-notification-container-dock-fadeout",
									transitionClass: "tox-notification-container-dock-transition"
								},
								modes: ["top"],
								lazyViewport: t => Ib(e, t.element).map((e => ({
									bounds: Fb(e),
									optScrollEnv: A.some({
										currentScrollTop: e.element.dom.scrollTop,
										scrollElmTop: qt(e.element).top
									})
								}))).getOrThunk((() => ({
									bounds: Zo(),
									optScrollEnv: A.none()
								})))
							})]])
						})),
						i = hl(u),
						l = {
							maxHeightFunction: Vc()
						},
						c = {
							...s.anchors.banner(),
							overrides: l
						};
					n.set(t), o.add(t), vf.showWithinBounds(t, i, {
						anchor: c
					}, a)
				}
				h(t.timeout) && t.timeout > 0 && wf.setEditorTimeout(e, (() => {
					d()
				}), t.timeout);
				const m = () => {
					n.on((e => {
						vf.reposition(e), Oi.refresh(e), i(e.components())
					}))
				};
				return {
					close: d,
					reposition: m,
					text: e => {
						lx.updateText(u, e)
					},
					settings: t,
					getEl: () => u.element.dom,
					progressBar: {
						value: e => {
							lx.updateProgress(u, e)
						}
					}
				}
			},
			close: e => {
				e.close()
			},
			getArgs: e => e.settings
		}
	};
	var dx;
	! function(e) {
		e[e.CLOSE_ON_EXECUTE = 0] = "CLOSE_ON_EXECUTE", e[e.BUBBLE_TO_SANDBOX = 1] = "BUBBLE_TO_SANDBOX"
	}(dx || (dx = {}));
	var ux = dx;
	const mx = "tox-menu-nav__js",
		gx = "tox-collection__item",
		px = "tox-swatch",
		hx = {
			normal: mx,
			color: px
		},
		fx = "tox-collection__item--enabled",
		bx = "tox-collection__item-icon",
		vx = "tox-collection__item-label",
		xx = "tox-collection__item-caret",
		yx = "tox-collection__item--active",
		wx = "tox-collection__item-container",
		Sx = "tox-collection__item-container--row",
		Cx = e => fe(hx, e).getOr(mx),
		kx = e => "color" === e ? "tox-swatches" : "tox-menu",
		Ox = e => ({
			backgroundMenu: "tox-background-menu",
			selectedMenu: "tox-selected-menu",
			selectedItem: "tox-collection__item--active",
			hasIcons: "tox-menu--has-icons",
			menu: kx(e),
			tieredMenu: "tox-tiered-menu"
		}),
		_x = e => {
			const t = Ox(e);
			return {
				backgroundMenu: t.backgroundMenu,
				selectedMenu: t.selectedMenu,
				menu: t.menu,
				selectedItem: t.selectedItem,
				item: Cx(e)
			}
		},
		Tx = (e, t, o) => {
			const n = Ox(o);
			return {
				tag: "div",
				classes: G([
					[n.menu, `tox-menu-${t}-column`], e ? [n.hasIcons] : []
				])
			}
		},
		Ex = [lf.parts.items({})],
		Ax = (e, t, o) => {
			const n = Ox(o);
			return {
				dom: {
					tag: "div",
					classes: G([
						[n.tieredMenu]
					])
				},
				markers: _x(o)
			}
		},
		Mx = y([gs("data"), ws("inputAttributes", {}), ws("inputStyles", {}), ws("tag", "input"), ws("inputClasses", []), bi("onSetValue"), ws("styles", {}), ws("eventOrder", {}), $u("inputBehaviours", [ju, Bh]), ws("selectOnFocus", !0)]),
		Dx = e => ca([Bh.config({
			onFocus: e.selectOnFocus ? e => {
				const t = e.element,
					o = tl(t);
				t.dom.setSelectionRange(0, o.length)
			} : b
		})]),
		Bx = e => ({
			...Dx(e),
			...qu(e.inputBehaviours, [ju.config({
				store: {
					mode: "manual",
					...e.data.map((e => ({
						initialValue: e
					}))).getOr({}),
					getValue: e => tl(e.element),
					setValue: (e, t) => {
						tl(e.element) !== t && ol(e.element, t)
					}
				},
				onSetValue: e.onSetValue
			})])
		}),
		Ix = e => ({
			tag: e.tag,
			attributes: {
				type: "text",
				...e.inputAttributes
			},
			styles: e.inputStyles,
			classes: e.inputClasses
		}),
		Fx = Gm({
			name: "Input",
			configFields: Mx(),
			factory: (e, t) => ({
				uid: e.uid,
				dom: Ix(e),
				components: [],
				behaviours: Bx(e),
				eventOrder: e.eventOrder
			})
		}),
		Rx = Di("refetch-trigger-event"),
		Nx = Di("redirect-menu-item-interaction"),
		zx = "tox-menu__searcher",
		Lx = e => Ol(e.element, `.${zx}`).bind((t => e.getSystem().getByDom(t).toOptional())),
		Vx = Lx,
		Hx = e => ({
			fetchPattern: ju.getValue(e),
			selectionStart: e.element.dom.selectionStart,
			selectionEnd: e.element.dom.selectionEnd
		}),
		Px = e => {
			const t = (e, t) => (t.cut(), A.none()),
				o = (e, t) => {
					const o = {
						interactionEvent: t.event,
						eventType: t.event.raw.type
					};
					return Rr(e, Nx, o), A.some(!0)
				},
				n = "searcher-events";
			return {
				dom: {
					tag: "div",
					classes: [gx]
				},
				components: [Fx.sketch({
					inputClasses: [zx, "tox-textfield"],
					inputAttributes: {
						...e.placeholder.map((t => ({
							placeholder: e.i18n(t)
						}))).getOr({}),
						type: "search",
						"aria-autocomplete": "list"
					},
					inputBehaviours: ca([Th(n, [Wr(Zs(), (e => {
						Fr(e, Rx)
					})), Wr(Js(), ((e, t) => {
						"Escape" === t.event.raw.key && t.stop()
					}))]), bh.config({
						mode: "special",
						onLeft: t,
						onRight: t,
						onSpace: t,
						onEnter: o,
						onEscape: o,
						onUp: o,
						onDown: o
					})]),
					eventOrder: {
						keydown: [n, bh.name()]
					}
				})]
			}
		},
		Ux = "tox-collection--results__js",
		Wx = e => {
			var t;
			return e.dom ? {
				...e,
				dom: {
					...e.dom,
					attributes: {
						...null !== (t = e.dom.attributes) && void 0 !== t ? t : {},
						id: Di("aria-item-search-result-id"),
						"aria-selected": "false"
					}
				}
			} : e
		},
		jx = (e, t) => o => {
			const n = z(o, t);
			return L(n, (t => ({
				dom: e,
				components: t
			})))
		},
		$x = (e, t) => {
			const o = [];
			let n = [];
			return V(e, ((e, s) => {
				t(e, s) ? (n.length > 0 && o.push(n), n = [], (be(e.dom, "innerHtml") || e.components && e.components.length > 0) && n.push(e)) : n.push(e)
			})), n.length > 0 && o.push(n), L(o, (e => ({
				dom: {
					tag: "div",
					classes: ["tox-collection__group"]
				},
				components: e
			})))
		},
		Gx = (e, t, o) => lf.parts.items({
			preprocess: n => {
				const s = L(n, o);
				return "auto" !== e && e > 1 ? jx({
					tag: "div",
					classes: ["tox-collection__group"]
				}, e)(s) : $x(s, ((e, o) => "separator" === t[o].type))
			}
		}),
		qx = (e, t, o = !0) => ({
			dom: {
				tag: "div",
				classes: ["tox-menu", "tox-collection"].concat(1 === e ? ["tox-collection--list"] : ["tox-collection--grid"])
			},
			components: [Gx(e, t, w)]
		}),
		Yx = e => R(e, (e => "icon" in e && void 0 !== e.icon)),
		Xx = e => (console.error(Zn(e)), console.log(e), A.none()),
		Kx = (e, t, o, n, s) => {
			const r = (a = o, {
				dom: {
					tag: "div",
					classes: ["tox-collection", "tox-collection--horizontal"]
				},
				components: [lf.parts.items({
					preprocess: e => $x(e, ((e, t) => "separator" === a[t].type))
				})]
			});
			var a;
			return {
				value: e,
				dom: r.dom,
				components: r.components,
				items: o
			}
		},
		Jx = (e, t, o, n, s) => {
			if ("color" === s.menuType) {
				const t = (e => ({
					dom: {
						tag: "div",
						classes: ["tox-menu", "tox-swatches-menu"]
					},
					components: [{
						dom: {
							tag: "div",
							classes: ["tox-swatches"]
						},
						components: [lf.parts.items({
							preprocess: "auto" !== e ? jx({
								tag: "div",
								classes: ["tox-swatches__row"]
							}, e) : w
						})]
					}]
				}))(n);
				return {
					value: e,
					dom: t.dom,
					components: t.components,
					items: o
				}
			}
			if ("normal" === s.menuType && "auto" === n) {
				const t = qx(n, o);
				return {
					value: e,
					dom: t.dom,
					components: t.components,
					items: o
				}
			}
			if ("normal" === s.menuType || "searchable" === s.menuType) {
				const t = "searchable" !== s.menuType ? qx(n, o) : "search-with-field" === s.searchMode.searchMode ? ((e, t, o) => {
					const n = Di("aria-controls-search-results");
					return {
						dom: {
							tag: "div",
							classes: ["tox-menu", "tox-collection"].concat(1 === e ? ["tox-collection--list"] : ["tox-collection--grid"])
						},
						components: [Px({
							i18n: Jv.translate,
							placeholder: o.placeholder
						}), {
							dom: {
								tag: "div",
								classes: [...1 === e ? ["tox-collection--list"] : ["tox-collection--grid"], Ux],
								attributes: {
									id: n
								}
							},
							components: [Gx(e, t, Wx)]
						}]
					}
				})(n, o, s.searchMode) : ((e, t, o = !0) => {
					const n = Di("aria-controls-search-results");
					return {
						dom: {
							tag: "div",
							classes: ["tox-menu", "tox-collection", Ux].concat(1 === e ? ["tox-collection--list"] : ["tox-collection--grid"]),
							attributes: {
								id: n
							}
						},
						components: [Gx(e, t, Wx)]
					}
				})(n, o);
				return {
					value: e,
					dom: t.dom,
					components: t.components,
					items: o
				}
			}
			if ("listpreview" === s.menuType && "auto" !== n) {
				const t = (e => ({
					dom: {
						tag: "div",
						classes: ["tox-menu", "tox-collection", "tox-collection--toolbar", "tox-collection--toolbar-lg"]
					},
					components: [lf.parts.items({
						preprocess: jx({
							tag: "div",
							classes: ["tox-collection__group"]
						}, e)
					})]
				}))(n);
				return {
					value: e,
					dom: t.dom,
					components: t.components,
					items: o
				}
			}
			return {
				value: e,
				dom: Tx(t, n, s.menuType),
				components: Ex,
				items: o
			}
		},
		Qx = is("type"),
		Zx = is("name"),
		ey = is("label"),
		ty = is("text"),
		oy = is("title"),
		ny = is("icon"),
		sy = is("value"),
		ry = cs("fetch"),
		ay = cs("getSubmenuItems"),
		iy = cs("onAction"),
		ly = cs("onItemAction"),
		cy = Ts("onSetup", (() => b)),
		dy = fs("name"),
		uy = fs("text"),
		my = fs("role"),
		gy = fs("icon"),
		py = fs("tooltip"),
		hy = fs("label"),
		fy = fs("shortcut"),
		by = vs("select"),
		vy = _s("active", !1),
		xy = _s("borderless", !1),
		yy = _s("enabled", !0),
		wy = _s("primary", !1),
		Sy = e => ws("columns", e),
		Cy = ws("meta", {}),
		ky = Ts("onAction", b),
		Oy = e => ks("type", e),
		_y = e => os("name", "name", wn((() => Di(`${e}-name`))), Un),
		Ty = Fn([Qx, uy]),
		Ey = Fn([Oy("autocompleteitem"), vy, yy, Cy, sy, uy, gy]),
		Ay = [yy, py, gy, uy, cy, ks("context", "mode:design")],
		My = Fn([Qx, iy, fy].concat(Ay)),
		Dy = e => Kn("toolbarbutton", My, e),
		By = [vy].concat(Ay),
		Iy = Fn(By.concat([Qx, iy, fy])),
		Fy = e => Kn("ToggleButton", Iy, e),
		Ry = [Ts("predicate", T), Os("scope", "node", ["node", "editor"]), Os("position", "selection", ["node", "selection", "line"])],
		Ny = Ay.concat([Oy("contextformbutton"), wy, iy, ns("original", w)]),
		zy = By.concat([Oy("contextformbutton"), wy, iy, ns("original", w)]),
		Ly = Ay.concat([Oy("contextformbutton")]),
		Vy = By.concat([Oy("contextformtogglebutton")]),
		Hy = es("type", {
			contextformbutton: Ny,
			contextformtogglebutton: zy
		}),
		Py = Fn([Oy("contextform"), Ts("initValue", y("")), hy, ms("commands", Hy), ps("launch", es("type", {
			contextformbutton: Ly,
			contextformtogglebutton: Vy
		}))].concat(Ry)),
		Uy = Fn([Oy("contexttoolbar"), is("items")].concat(Ry)),
		Wy = [Qx, is("src"), fs("alt"), Es("classes", [], Un)],
		jy = Fn(Wy),
		$y = [Qx, ty, dy, Es("classes", ["tox-collection__item-label"], Un)],
		Gy = Fn($y),
		qy = Dn((() => qn("type", {
			cardimage: jy,
			cardtext: Gy,
			cardcontainer: Yy
		}))),
		Yy = Fn([Qx, ks("direction", "horizontal"), ks("align", "left"), ks("valign", "middle"), ms("items", qy)]),
		Xy = [yy, uy, my, fy, ("menuitem", os("value", "value", wn((() => Di("menuitem-value"))), Vn())), Cy, ks("context", "mode:design")];
	const Ky = Fn([Qx, hy, ms("items", qy), cy, ky].concat(Xy)),
		Jy = Fn([Qx, vy, gy].concat(Xy)),
		Qy = [Qx, is("fancytype"), ky],
		Zy = [ws("initData", {})].concat(Qy),
		ew = [vs("select"), As("initData", {}, [_s("allowCustomColors", !0), ks("storageKey", "default"), xs("colors", Vn())])].concat(Qy),
		tw = es("fancytype", {
			inserttable: Zy,
			colorswatch: ew
		}),
		ow = Fn([Qx, cy, ky, gy].concat(Xy)),
		nw = Fn([Qx, ay, cy, gy].concat(Xy)),
		sw = Fn([Qx, gy, vy, cy, iy].concat(Xy)),
		rw = (e, t, o) => {
			const n = kd(e.element, "." + o);
			if (n.length > 0) {
				const e = $(n, (e => {
					const o = e.dom.getBoundingClientRect().top,
						s = n[0].dom.getBoundingClientRect().top;
					return Math.abs(o - s) > t
				})).getOr(n.length);
				return A.some({
					numColumns: e,
					numRows: Math.ceil(n.length / e)
				})
			}
			return A.none()
		},
		aw = e => ((e, t) => ca([Th(e, t)]))(Di("unnamed-events"), e),
		iw = e => ug.config({
			disabled: e,
			disableClass: "tox-collection__item--state-disabled"
		}),
		lw = e => ug.config({
			disabled: e
		}),
		cw = e => ug.config({
			disabled: e,
			disableClass: "tox-tbtn--disabled"
		}),
		dw = e => ug.config({
			disabled: e,
			disableClass: "tox-tbtn--disabled",
			useNative: !1
		}),
		uw = (e, t) => {
			const o = e.getApi(t);
			return e => {
				e(o)
			}
		},
		mw = (e, t) => Jr((o => {
			uw(e, o)((o => {
				const n = e.onSetup(o);
				p(n) && t.set(n)
			}))
		})),
		gw = (e, t) => Qr((o => uw(e, o)(t.get()))),
		pw = "silver.uistate",
		hw = (e, t) => {
			const o = e.mainUi.outerContainer.element,
				n = [e.mainUi.mothership, ...e.uiMotherships];
			"setDisabled" === t && V(n, (e => {
				e.broadcastOn([Ou()], {
					target: o
				})
			})), V(n, (e => {
				e.broadcastOn([pw], t)
			}))
		},
		fw = (e, t) => {
			e.on("init SwitchMode", (e => {
				hw(t, e.type)
			})), e.on("NodeChange", (o => {
				e.ui.isEnabled() ? hw(t, o.type) : hw(t, "setDisabled")
			})), Ef(e) && e.mode.set("readonly")
		},
		bw = e => dc.config({
			channels: {
				[pw]: {
					onReceive: (t, o) => {
						if ("setDisabled" === o || "setEnabled" === o) return void ug.set(t, "setDisabled" === o);
						const {
							contextType: n,
							shouldDisable: s
						} = e();
						("mode" !== n || F(["switchmode", "init"], o)) && ug.set(t, s)
					}
				}
			}
		}),
		vw = (e, t) => ea(((o, n) => {
			uw(e, o)(e.onAction), e.triggersSubmenu || t !== ux.CLOSE_ON_EXECUTE || (o.getSystem().isConnected() && Fr(o, fr()), n.stop())
		})),
		xw = {
			[mr()]: ["disabling", "alloy.base.behaviour", "toggling", "item-events"]
		},
		yw = ye,
		ww = (e, t, o, n) => {
			const s = en(b);
			return {
				type: "item",
				dom: t.dom,
				components: yw(t.optComponents),
				data: e.data,
				eventOrder: xw,
				hasSubmenu: e.triggersSubmenu,
				itemBehaviours: ca([Th("item-events", [vw(e, o), mw(e, s), gw(e, s)]), iw((() => !e.enabled || n.checkUiComponentContext(e.context).shouldDisable)), bw((() => n.checkUiComponentContext(e.context))), _h.config({})].concat(e.itemBehaviours))
			}
		},
		Sw = e => ({
			value: e.value,
			meta: {
				text: e.text.getOr(""),
				...e.meta
			}
		}),
		Cw = e => {
			const t = kf.os.isMacOS() || kf.os.isiOS(),
				o = t ? {
					alt: "\u2325",
					ctrl: "\u2303",
					shift: "\u21e7",
					meta: "\u2318",
					access: "\u2303\u2325"
				} : {
					meta: "Ctrl",
					access: "Shift+Alt"
				},
				n = e.split("+"),
				s = L(n, (e => {
					const t = e.toLowerCase().trim();
					return be(o, t) ? o[t] : e
				}));
			return t ? s.join("") : s.join("+")
		},
		kw = (e, t, o = [bx]) => ax(e, {
			tag: "div",
			classes: o
		}, t),
		Ow = e => ({
			dom: {
				tag: "div",
				classes: [vx]
			},
			components: [dl(Jv.translate(e))]
		}),
		_w = (e, t) => ({
			dom: {
				tag: "div",
				classes: t,
				innerHtml: e
			}
		}),
		Tw = (e, t) => ({
			dom: {
				tag: "div",
				classes: [vx]
			},
			components: [{
				dom: {
					tag: e.tag,
					styles: e.styles
				},
				components: [dl(Jv.translate(t))]
			}]
		}),
		Ew = e => ({
			dom: {
				tag: "div",
				classes: ["tox-collection__item-accessory"]
			},
			components: [dl(Cw(e))]
		}),
		Aw = e => kw("checkmark", e, ["tox-collection__item-checkmark"]),
		Mw = e => {
			const t = e.map((e => ({
				attributes: {
					id: Di("menu-item"),
					"aria-label": Jv.translate(e)
				}
			}))).getOr({});
			return {
				tag: "div",
				classes: [mx, gx],
				...t
			}
		},
		Dw = (e, t, o, n = A.none()) => "color" === e.presets ? ((e, t, o) => {
			const n = e.value,
				s = e.iconContent.map((e => ((e, t, o) => {
					const n = t();
					return ox(e, n).or(o).getOrThunk(ex(n))
				})(e, t.icons, o))),
				r = e.ariaLabel.map((e => ({
					"aria-label": t.translate(e),
					"data-mce-name": e
				}))).getOr({});
			return {
				dom: (() => {
					const e = px,
						t = s.getOr(""),
						o = {
							tag: "div",
							attributes: r,
							classes: [e]
						};
					return "custom" === n ? {
						...o,
						tag: "button",
						classes: [...o.classes, "tox-swatches__picker-btn"],
						innerHtml: t
					} : "remove" === n ? {
						...o,
						classes: [...o.classes, "tox-swatch--remove"],
						innerHtml: t
					} : g(n) ? {
						...o,
						attributes: {
							...o.attributes,
							"data-mce-color": n
						},
						styles: {
							"background-color": n
						},
						innerHtml: t
					} : o
				})(),
				optComponents: []
			}
		})(e, t, n) : ((e, t, o, n) => {
			const s = {
					tag: "div",
					classes: [bx]
				},
				r = o ? e.iconContent.map((e => ax(e, s, t.icons, n))).orThunk((() => A.some({
					dom: s
				}))) : A.none(),
				a = e.checkMark,
				i = A.from(e.meta).fold((() => Ow), (e => be(e, "style") ? C(Tw, e.style) : Ow)),
				l = e.htmlContent.fold((() => e.textContent.map(i)), (e => A.some(_w(e, [vx]))));
			return {
				dom: Mw(e.ariaLabel),
				optComponents: [r, l, e.shortcutContent.map(Ew), a, e.caret]
			}
		})(e, t, o, n),
		Bw = (e, t, o) => fe(e, "tooltipWorker").map((e => [Jb.config({
			lazySink: t.getSink,
			tooltipDom: {
				tag: "div",
				classes: ["tox-tooltip-worker-container"]
			},
			tooltipComponents: [],
			anchor: e => ({
				type: "submenu",
				item: e,
				overrides: {
					maxHeightFunction: Vc
				}
			}),
			mode: "follow-highlight",
			onShow: (t, o) => {
				e((e => {
					Jb.setComponents(t, [ul({
						element: ze(e)
					})])
				}))
			}
		})])).getOrThunk((() => o.map((e => [Jb.config({
			...t.providers.tooltips.getConfig({
				tooltipText: e
			}),
			mode: "follow-highlight"
		})])).getOr([]))),
		Iw = (e, t) => {
			const o = (e => Sf.DOM.encode(e))(Jv.translate(e));
			if (t.length > 0) {
				const e = new RegExp((e => e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))(t), "gi");
				return o.replace(e, (e => `<span class="tox-autocompleter-highlight">${e}</span>`))
			}
			return o
		},
		Fw = (e, t) => L(e, (e => {
			switch (e.type) {
				case "cardcontainer":
					return ((e, t) => {
						const o = "vertical" === e.direction ? "tox-collection__item-container--column" : Sx,
							n = "left" === e.align ? "tox-collection__item-container--align-left" : "tox-collection__item-container--align-right";
						return {
							dom: {
								tag: "div",
								classes: [wx, o, n, (() => {
									switch (e.valign) {
										case "top":
											return "tox-collection__item-container--valign-top";
										case "middle":
											return "tox-collection__item-container--valign-middle";
										case "bottom":
											return "tox-collection__item-container--valign-bottom"
									}
								})()]
							},
							components: t
						}
					})(e, Fw(e.items, t));
				case "cardimage":
					return ((e, t, o) => ({
						dom: {
							tag: "img",
							classes: t,
							attributes: {
								src: e,
								alt: o.getOr("")
							}
						}
					}))(e.src, e.classes, e.alt);
				case "cardtext":
					const o = e.name.exists((e => F(t.cardText.highlightOn, e))),
						n = o ? A.from(t.cardText.matchText).getOr("") : "";
					return _w(Iw(e.text, n), e.classes)
			}
		})),
		Rw = Om(ef(), tf()),
		Nw = e => ({
			value: Hw(e)
		}),
		zw = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
		Lw = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,
		Vw = e => zw.test(e) || Lw.test(e),
		Hw = e => Oe(e, "#").toUpperCase(),
		Pw = e => {
			const t = e.toString(16);
			return (1 === t.length ? "0" + t : t).toUpperCase()
		},
		Uw = e => {
			const t = Pw(e.red) + Pw(e.green) + Pw(e.blue);
			return Nw(t)
		},
		Ww = Math.min,
		jw = Math.max,
		$w = Math.round,
		Gw = /^\s*rgb\s*\(\s*(\d+)\s*[,\s]\s*(\d+)\s*[,\s]\s*(\d+)\s*\)\s*$/i,
		qw = /^\s*rgba\s*\(\s*(\d+)\s*[,\s]\s*(\d+)\s*[,\s]\s*(\d+)\s*[,\s]\s*((?:\d?\.\d+|\d+)%?)\s*\)\s*$/i,
		Yw = (e, t, o, n) => ({
			red: e,
			green: t,
			blue: o,
			alpha: n
		}),
		Xw = e => {
			const t = parseInt(e, 10);
			return t.toString() === e && t >= 0 && t <= 255
		},
		Kw = e => {
			let t, o, n;
			const s = (e.hue || 0) % 360;
			let r = e.saturation / 100,
				a = e.value / 100;
			if (r = jw(0, Ww(r, 1)), a = jw(0, Ww(a, 1)), 0 === r) return t = o = n = $w(255 * a), Yw(t, o, n, 1);
			const i = s / 60,
				l = a * r,
				c = l * (1 - Math.abs(i % 2 - 1)),
				d = a - l;
			switch (Math.floor(i)) {
				case 0:
					t = l, o = c, n = 0;
					break;
				case 1:
					t = c, o = l, n = 0;
					break;
				case 2:
					t = 0, o = l, n = c;
					break;
				case 3:
					t = 0, o = c, n = l;
					break;
				case 4:
					t = c, o = 0, n = l;
					break;
				case 5:
					t = l, o = 0, n = c;
					break;
				default:
					t = o = n = 0
			}
			return t = $w(255 * (t + d)), o = $w(255 * (o + d)), n = $w(255 * (n + d)), Yw(t, o, n, 1)
		},
		Jw = e => {
			const t = (e => {
					const t = (e => {
							const t = e.value.replace(zw, ((e, t, o, n) => t + t + o + o + n + n));
							return {
								value: t
							}
						})(e),
						o = Lw.exec(t.value);
					return null === o ? ["FFFFFF", "FF", "FF", "FF"] : o
				})(e),
				o = parseInt(t[1], 16),
				n = parseInt(t[2], 16),
				s = parseInt(t[3], 16);
			return Yw(o, n, s, 1)
		},
		Qw = (e, t, o, n) => {
			const s = parseInt(e, 10),
				r = parseInt(t, 10),
				a = parseInt(o, 10),
				i = parseFloat(n);
			return Yw(s, r, a, i)
		},
		Zw = e => {
			const t = Gw.exec(e);
			if (null !== t) return A.some(Qw(t[1], t[2], t[3], "1"));
			const o = qw.exec(e);
			return null !== o ? A.some(Qw(o[1], o[2], o[3], o[4])) : A.none()
		},
		eS = e => `rgba(${e.red},${e.green},${e.blue},${e.alpha})`,
		tS = Yw(255, 0, 0, 1),
		oS = (e, t) => {
			e.dispatch("ResizeContent", t)
		},
		nS = (e, t) => {
			e.dispatch("TextColorChange", t)
		},
		sS = (e, t) => e.dispatch("ResolveName", {
			name: t.nodeName.toLowerCase(),
			target: t
		}),
		rS = (e, t) => () => {
			e(), t()
		},
		aS = e => lS(e, "NodeChange", (t => {
			t.setEnabled(e.selection.isEditable())
		})),
		iS = (e, t) => o => {
			const n = aS(e)(o),
				s = ((e, t) => o => {
					const n = on(),
						s = () => {
							o.setActive(e.formatter.match(t));
							const s = e.formatter.formatChanged(t, o.setActive);
							n.set(s)
						};
					return e.initialized ? s() : e.once("init", s), () => {
						e.off("init", s), n.clear()
					}
				})(e, t)(o);
			return () => {
				n(), s()
			}
		},
		lS = (e, t, o) => n => {
			const s = () => o(n),
				r = () => {
					o(n), e.on(t, s)
				};
			return e.initialized ? r() : e.once("init", r), () => {
				e.off("init", r), e.off(t, s)
			}
		},
		cS = e => t => () => {
			e.undoManager.transact((() => {
				e.focus(), e.execCommand("mceToggleFormat", !1, t.format)
			}))
		},
		dS = (e, t) => () => e.execCommand(t);
	var uS = tinymce.util.Tools.resolve("tinymce.util.LocalStorage");
	const mS = {},
		gS = e => fe(mS, e).getOrThunk((() => {
			const t = `tinymce-custom-colors-${e}`,
				o = uS.getItem(t);
			if (m(o)) {
				const e = uS.getItem("tinymce-custom-colors");
				uS.setItem(t, g(e) ? e : "[]")
			}
			const n = ((e, t = 10) => {
				const o = uS.getItem(e),
					n = r(o) ? JSON.parse(o) : [],
					s = t - (a = n).length < 0 ? a.slice(0, t) : a;
				var a;
				const i = e => {
					s.splice(e, 1)
				};
				return {
					add: o => {
						((e, t) => {
							const o = I(e, t);
							return -1 === o ? A.none() : A.some(o)
						})(s, o).each(i), s.unshift(o), s.length > t && s.pop(), uS.setItem(e, JSON.stringify(s))
					},
					state: () => s.slice(0)
				}
			})(t, 10);
			return mS[e] = n, n
		})),
		pS = (e, t) => {
			gS(e).add(t)
		},
		hS = (e, t, o) => ({
			hue: e,
			saturation: t,
			value: o
		}),
		fS = e => {
			let t = 0,
				o = 0,
				n = 0;
			const s = e.red / 255,
				r = e.green / 255,
				a = e.blue / 255,
				i = Math.min(s, Math.min(r, a)),
				l = Math.max(s, Math.max(r, a));
			return i === l ? (n = i, hS(0, 0, 100 * n)) : (t = s === i ? 3 : a === i ? 1 : 5, t = 60 * (t - (s === i ? r - a : a === i ? s - r : a - s) / (l - i)), o = (l - i) / l, n = l, hS(Math.round(t), Math.round(100 * o), Math.round(100 * n)))
		},
		bS = e => Uw(Kw(e)),
		vS = "forecolor",
		xS = "hilitecolor",
		yS = e => {
			const t = [];
			for (let o = 0; o < e.length; o += 2) t.push({
				text: e[o + 1],
				value: e[o],
				icon: "checkmark",
				type: "choiceitem"
			});
			return t
		},
		wS = e => t => t.options.get(e),
		SS = "#000000",
		CS = (e, t) => t === vS && e.options.isSet("color_map_foreground") ? wS("color_map_foreground")(e) : t === xS && e.options.isSet("color_map_background") ? wS("color_map_background")(e) : e.options.isSet("color_map_raw") ? wS("color_map_raw")(e) : wS("color_map")(e),
		kS = (e, t = "default") => Math.max(5, Math.ceil(Math.sqrt(CS(e, t).length))),
		OS = (e, t) => {
			const o = wS("color_cols")(e),
				n = kS(e, t);
			return o === kS(e) ? n : o
		},
		_S = (e, t = "default") => Math.round(t === vS ? wS("color_cols_foreground")(e) : t === xS ? wS("color_cols_background")(e) : wS("color_cols")(e)),
		TS = wS("custom_colors"),
		ES = wS("color_default_foreground"),
		AS = wS("color_default_background"),
		MS = (e, t) => {
			const o = ze(e.selection.getStart()),
				n = "hilitecolor" === t ? Rs(o, (e => {
					if ($e(e)) {
						const t = It(e, "background-color");
						return Ce(Zw(t).exists((e => 0 !== e.alpha)), t)
					}
					return A.none()
				})).getOr("rgba(0, 0, 0, 0)") : It(o, "color");
			return Zw(n).map((e => "#" + Uw(e).value))
		},
		DS = e => {
			const t = "choiceitem",
				o = {
					type: t,
					text: "Remove color",
					icon: "color-swatch-remove-color",
					value: "remove"
				};
			return e ? [o, {
				type: t,
				text: "Custom color",
				icon: "color-picker",
				value: "custom"
			}] : [o]
		},
		BS = (e, t, o, n) => {
			"custom" === o ? PS(e)((o => {
				o.each((o => {
					pS(t, o), e.execCommand("mceApplyTextcolor", t, o), n(o)
				}))
			}), MS(e, t).getOr(SS)) : "remove" === o ? (n(""), e.execCommand("mceRemoveTextcolor", t)) : (n(o), e.execCommand("mceApplyTextcolor", t, o))
		},
		IS = (e, t, o) => e.concat((e => L(gS(e).state(), (e => ({
			type: "choiceitem",
			text: e,
			icon: "checkmark",
			value: e
		}))))(t).concat(DS(o))),
		FS = (e, t, o) => n => {
			n(IS(e, t, o))
		},
		RS = (e, t, o) => {
			const n = "forecolor" === t ? "tox-icon-text-color__color" : "tox-icon-highlight-bg-color__color";
			e.setIconFill(n, o)
		},
		NS = (e, t) => {
			e.setTooltip(t)
		},
		zS = (e, t) => o => {
			const n = MS(e, t);
			return xe(n, o.toUpperCase())
		},
		LS = (e, t, o) => {
			if (De(o)) return "forecolor" === t ? "Text color" : "Background color";
			const n = "forecolor" === t ? "Text color {0}" : "Background color {0}",
				s = IS(CS(e, t), t, !1),
				r = j(s, (e => e.value === o)).getOr({
					text: ""
				}).text;
			return e.translate([n, e.translate(r)])
		},
		VS = (e, t, o, n) => {
			e.ui.registry.addSplitButton(t, {
				tooltip: LS(e, o, n.get()),
				presets: "color",
				icon: "forecolor" === t ? "text-color" : "highlight-bg-color",
				select: zS(e, o),
				columns: _S(e, o),
				fetch: FS(CS(e, o), o, TS(e)),
				onAction: t => {
					BS(e, o, n.get(), b)
				},
				onItemAction: (s, r) => {
					BS(e, o, r, (o => {
						n.set(o), nS(e, {
							name: t,
							color: o
						})
					}))
				},
				onSetup: s => {
					RS(s, t, n.get());
					const r = n => {
						n.name === t && (RS(s, n.name, n.color), NS(s, LS(e, o, n.color)))
					};
					return e.on("TextColorChange", r), rS(aS(e)(s), (() => {
						e.off("TextColorChange", r)
					}))
				}
			})
		},
		HS = (e, t, o, n, s) => {
			e.ui.registry.addNestedMenuItem(t, {
				text: n,
				icon: "forecolor" === t ? "text-color" : "highlight-bg-color",
				onSetup: n => (NS(n, LS(e, o, s.get())), RS(n, t, s.get()), aS(e)(n)),
				getSubmenuItems: () => [{
					type: "fancymenuitem",
					fancytype: "colorswatch",
					select: zS(e, o),
					initData: {
						storageKey: o
					},
					onAction: n => {
						BS(e, o, n.value, (o => {
							s.set(o), nS(e, {
								name: t,
								color: o
							})
						}))
					}
				}]
			})
		},
		PS = e => (t, o) => {
			let n = !1;
			const s = {
				colorpicker: o
			};
			e.windowManager.open({
				title: "Color Picker",
				size: "normal",
				body: {
					type: "panel",
					items: [{
						type: "colorpicker",
						name: "colorpicker",
						label: "Color"
					}]
				},
				buttons: [{
					type: "cancel",
					name: "cancel",
					text: "Cancel"
				}, {
					type: "submit",
					name: "save",
					text: "Save",
					primary: !0
				}],
				initialData: s,
				onAction: (e, t) => {
					"hex-valid" === t.name && (n = t.value)
				},
				onSubmit: o => {
					const s = o.getData().colorpicker;
					n ? (t(A.from(s)), o.close()) : e.windowManager.alert(e.translate(["Invalid hex color code: {0}", s]))
				},
				onClose: b,
				onCancel: () => {
					t(A.none())
				}
			})
		},
		US = (e, t, o, n, s, r, a, i) => {
			const l = Yx(t),
				c = WS(t, o, n, "color" !== s ? "normal" : "color", r, a, i);
			return Jx(e, l, c, n, {
				menuType: s
			})
		},
		WS = (e, t, o, n, s, r, a) => ye(L(e, (i => {
			return "choiceitem" === i.type ? (l = i, Kn("choicemenuitem", Jy, l)).fold(Xx, (i => A.some(((e, t, o, n, s, r, a, i = !0) => {
				const l = Dw({
						presets: o,
						textContent: t ? e.text : A.none(),
						htmlContent: A.none(),
						ariaLabel: e.text,
						iconContent: e.icon,
						shortcutContent: t ? e.shortcut : A.none(),
						checkMark: t ? A.some(Aw(a.icons)) : A.none(),
						caret: A.none(),
						value: e.value
					}, a, i),
					c = e.text.filter(y(!t)).map((e => Jb.config(a.tooltips.getConfig({
						tooltipText: a.translate(e)
					}))));
				return xn(ww({
					context: e.context,
					data: Sw(e),
					enabled: e.enabled,
					getApi: e => ({
						setActive: t => {
							Hh.set(e, t)
						},
						isActive: () => Hh.isOn(e),
						isEnabled: () => !ug.isDisabled(e),
						setEnabled: t => ug.set(e, !t)
					}),
					onAction: t => n(e.value),
					onSetup: e => (e.setActive(s), b),
					triggersSubmenu: !1,
					itemBehaviours: [...c.toArray()]
				}, l, r, a), {
					toggling: {
						toggleClass: fx,
						toggleOnExecute: !1,
						selected: e.active,
						exclusive: !0
					}
				})
			})(i, 1 === o, n, t, r(i.value), s, a, Yx(e))))) : A.none();
			var l
		}))),
		jS = (e, t) => {
			const o = _x(t);
			return 1 === e ? {
				mode: "menu",
				moveOnTab: !0
			} : "auto" === e ? {
				mode: "grid",
				selector: "." + o.item,
				initSize: {
					numColumns: 1,
					numRows: 1
				}
			} : {
				mode: "matrix",
				rowSelector: "." + ("color" === t ? "tox-swatches__row" : "tox-collection__group"),
				previousSelector: e => "color" === t ? Ol(e.element, "[aria-checked=true]") : A.none()
			}
		},
		$S = Di("cell-over"),
		GS = Di("cell-execute"),
		qS = (e, t, o) => {
			const n = o => Rr(o, GS, {
					row: e,
					col: t
				}),
				s = (e, t) => {
					t.stop(), n(e)
				};
			return pl({
				dom: {
					tag: "div",
					attributes: {
						role: "button",
						"aria-label": o
					}
				},
				behaviours: ca([Th("insert-table-picker-cell", [Wr(Ys(), Bh.focus), Wr(mr(), n), Wr(tr(), s), Wr(pr(), s)]), Hh.config({
					toggleClass: "tox-insert-table-picker__selected",
					toggleOnExecute: !1
				}), Bh.config({
					onFocus: o => Rr(o, $S, {
						row: e,
						col: t
					})
				})])
			})
		},
		YS = e => q(e, (e => L(e, hl))),
		XS = (e, t) => dl(`${t}x${e}`),
		KS = {
			inserttable: (e, t) => {
				const o = (e => (t, o) => e.shared.providers.translate(["{0} columns, {1} rows", o, t]))(t),
					n = ((e, t, o) => {
						const n = [];
						for (let t = 0; t < 10; t++) {
							const o = [];
							for (let n = 0; n < 10; n++) {
								const s = e(t + 1, n + 1);
								o.push(qS(t, n, s))
							}
							n.push(o)
						}
						return n
					})(o),
					s = XS(0, 0),
					r = zb({
						dom: {
							tag: "span",
							classes: ["tox-insert-table-picker__label"]
						},
						components: [s],
						behaviours: ca([_h.config({})])
					});
				return {
					type: "widget",
					data: {
						value: Di("widget-id")
					},
					dom: {
						tag: "div",
						classes: ["tox-fancymenuitem"]
					},
					autofocus: !0,
					components: [Rw.widget({
						dom: {
							tag: "div",
							classes: ["tox-insert-table-picker"]
						},
						components: YS(n).concat(r.asSpec()),
						behaviours: ca([Th("insert-table-picker", [Jr((e => {
							_h.set(r.get(e), [s])
						})), qr($S, ((e, t, o) => {
							const {
								row: s,
								col: a
							} = o.event;
							((e, t, o, n, s) => {
								for (let n = 0; n < 10; n++)
									for (let s = 0; s < 10; s++) Hh.set(e[n][s], n <= t && s <= o)
							})(n, s, a), _h.set(r.get(e), [XS(s + 1, a + 1)])
						})), qr(GS, ((t, o, n) => {
							const {
								row: s,
								col: r
							} = n.event;
							Fr(t, fr()), e.onAction({
								numRows: s + 1,
								numColumns: r + 1
							})
						}))]), bh.config({
							initSize: {
								numRows: 10,
								numColumns: 10
							},
							mode: "flatgrid",
							selector: '[role="button"]'
						})])
					})]
				}
			},
			colorswatch: (e, t) => {
				const o = ((e, t) => {
						const o = e.initData.allowCustomColors && t.colorinput.hasCustomColors();
						return e.initData.colors.fold((() => IS(t.colorinput.getColors(e.initData.storageKey), e.initData.storageKey, o)), (e => e.concat(DS(o))))
					})(e, t),
					n = t.colorinput.getColorCols(e.initData.storageKey),
					s = "color",
					r = {
						...US(Di("menu-value"), o, (t => {
							e.onAction({
								value: t
							})
						}), n, s, ux.CLOSE_ON_EXECUTE, e.select.getOr(T), t.shared.providers),
						markers: _x(s),
						movement: jS(n, s),
						showMenuRole: !1
					};
				return {
					type: "widget",
					data: {
						value: Di("widget-id")
					},
					dom: {
						tag: "div",
						classes: ["tox-fancymenuitem"]
					},
					autofocus: !0,
					components: [Rw.widget(lf.sketch(r))]
				}
			}
		},
		JS = e => ({
			type: "separator",
			dom: {
				tag: "div",
				classes: [gx, "tox-collection__group-heading"]
			},
			components: e.text.map(dl).toArray()
		});
	var QS = Object.freeze({
			__proto__: null,
			getCoupled: (e, t, o, n) => o.getOrCreate(e, t, n),
			getExistingCoupled: (e, t, o, n) => o.getExisting(e, t, n)
		}),
		ZS = [as("others", Xn(ln.value, Vn()))],
		eC = Object.freeze({
			__proto__: null,
			init: () => {
				const e = {},
					t = (t, o) => {
						if (0 === re(t.others).length) throw new Error("Cannot find any known coupled components");
						return fe(e, o)
					},
					o = y({});
				return la({
					readState: o,
					getExisting: (e, o, n) => t(o, n).orThunk((() => (fe(o.others, n).getOrDie("No information found for coupled component: " + n), A.none()))),
					getOrCreate: (o, n, s) => t(n, s).getOrThunk((() => {
						const t = fe(n.others, s).getOrDie("No information found for coupled component: " + s)(o),
							r = o.getSystem().build(t);
						return e[s] = r, r
					}))
				})
			}
		});
	const tC = ua({
			fields: ZS,
			name: "coupling",
			apis: QS,
			state: eC
		}),
		oC = e => {
			let t = A.none(),
				o = [];
			const n = e => {
					s() ? r(e) : o.push(e)
				},
				s = () => t.isSome(),
				r = e => {
					t.each((t => {
						setTimeout((() => {
							e(t)
						}), 0)
					}))
				};
			return e((e => {
				s() || (t = A.some(e), V(o, r), o = [])
			})), {
				get: n,
				map: e => oC((t => {
					n((o => {
						t(e(o))
					}))
				})),
				isReady: s
			}
		},
		nC = {
			nu: oC,
			pure: e => oC((t => {
				t(e)
			}))
		},
		sC = e => {
			setTimeout((() => {
				throw e
			}), 0)
		},
		rC = e => {
			const t = t => {
				e().then(t, sC)
			};
			return {
				map: t => rC((() => e().then(t))),
				bind: t => rC((() => e().then((e => t(e).toPromise())))),
				anonBind: t => rC((() => e().then((() => t.toPromise())))),
				toLazy: () => nC.nu(t),
				toCached: () => {
					let t = null;
					return rC((() => (null === t && (t = e()), t)))
				},
				toPromise: e,
				get: t
			}
		},
		aC = e => rC((() => new Promise(e))),
		iC = e => rC((() => Promise.resolve(e))),
		lC = y("sink"),
		cC = y(ym({
			name: lC(),
			overrides: y({
				dom: {
					tag: "div"
				},
				behaviours: ca([Qd.config({
					useFixed: E
				})]),
				events: Hr([Yr(Js()), Yr(js()), Yr(tr())])
			})
		})),
		dC = (e, t) => {
			const o = e.getHotspot(t).getOr(t),
				n = "hotspot",
				s = e.getAnchorOverrides();
			return e.layouts.fold((() => ({
				type: n,
				hotspot: o,
				overrides: s
			})), (e => ({
				type: n,
				hotspot: o,
				overrides: s,
				layouts: e
			})))
		},
		uC = (e, t, o, n, s, r, a) => {
			const i = ((e, t, o, n, s, r, a) => {
				const i = ((e, t, o) => (0, e.fetch)(o).map(t))(e, t, n),
					l = pC(n, e);
				return i.map((t => t.bind((t => {
					const i = t.menus[t.primary];
					return A.from(i).each((t => {
						e.listRole.each((e => {
							t.role = e
						}))
					})), A.from(bf.sketch({
						...r.menu(),
						uid: Li(""),
						data: t,
						highlightOnOpen: a,
						onOpenMenu: (e, t) => {
							const n = l().getOrDie();
							Qd.position(n, t, {
								anchor: o
							}), ku.decloak(s)
						},
						onOpenSubmenu: (e, t, o) => {
							const n = l().getOrDie();
							Qd.position(n, o, {
								anchor: {
									type: "submenu",
									item: t
								}
							}), ku.decloak(s)
						},
						onRepositionMenu: (e, t, n) => {
							const s = l().getOrDie();
							Qd.position(s, t, {
								anchor: o
							}), V(n, (e => {
								Qd.position(s, e.triggeredMenu, {
									anchor: {
										type: "submenu",
										item: e.triggeringItem
									}
								})
							}))
						},
						onEscape: () => (Bh.focus(n), ku.close(s), A.some(!0))
					}))
				}))))
			})(e, t, dC(e, o), o, n, s, a);
			return i.map((e => (e.fold((() => {
				ku.isOpen(n) && ku.close(n)
			}), (e => {
				ku.cloak(n), ku.open(n, e), r(n)
			})), n)))
		},
		mC = (e, t, o, n, s, r, a) => (ku.close(n), iC(n)),
		gC = (e, t, o, n, s, r) => {
			const a = tC.getCoupled(o, "sandbox");
			return (ku.isOpen(a) ? mC : uC)(e, t, o, a, n, s, r)
		},
		pC = (e, t) => e.getSystem().getByUid(t.uid + "-" + lC()).map((e => () => ln.value(e))).getOrThunk((() => t.lazySink.fold((() => () => ln.error(new Error("No internal sink is specified, nor could an external sink be found"))), (t => () => t(e))))),
		hC = e => {
			ku.getState(e).each((e => {
				bf.repositionMenus(e)
			}))
		},
		fC = (e, t, o) => {
			const n = El(),
				s = pC(t, e);
			return {
				dom: {
					tag: "div",
					classes: e.sandboxClasses,
					attributes: {
						id: n.id
					}
				},
				behaviours: Xu(e.sandboxBehaviours, [ju.config({
					store: {
						mode: "memory",
						initialValue: t
					}
				}), ku.config({
					onOpen: (s, r) => {
						const a = dC(e, t);
						n.link(t.element), e.matchWidth && ((e, t, o) => {
							const n = Jm.getCurrent(t).getOr(t),
								s = Kt(e.element);
							o ? Mt(n.element, "min-width", s + "px") : ((e, t) => {
								Xt.set(e, t)
							})(n.element, s)
						})(a.hotspot, r, e.useMinWidth), e.onOpen(a, s, r), void 0 !== o && void 0 !== o.onOpen && o.onOpen(s, r)
					},
					onClose: (e, r) => {
						n.unlink(t.element), s().getOr(r).element.dom.dispatchEvent(new window.FocusEvent("focusout")), void 0 !== o && void 0 !== o.onClose && o.onClose(e, r)
					},
					isPartOf: (e, o, n) => Al(o, n) || Al(t, n),
					getAttachPoint: () => s().getOrDie()
				}), Jm.config({
					find: e => ku.getState(e).bind((e => Jm.getCurrent(e)))
				}), dc.config({
					channels: {
						...Au({
							isExtraPart: T
						}),
						...Du({
							doReposition: hC
						})
					}
				})])
			}
		},
		bC = e => {
			const t = tC.getCoupled(e, "sandbox");
			hC(t)
		},
		vC = () => [ws("sandboxClasses", []), Yu("sandboxBehaviours", [Jm, dc, ku, ju])],
		xC = y([rs("dom"), rs("fetch"), bi("onOpen"), vi("onExecute"), ws("getHotspot", A.some), ws("getAnchorOverrides", y({})), Jc(), $u("dropdownBehaviours", [Hh, tC, bh, Bh]), rs("toggleClass"), ws("eventOrder", {}), gs("lazySink"), ws("matchWidth", !1), ws("useMinWidth", !1), gs("role"), gs("listRole")].concat(vC())),
		yC = y([xm({
			schema: [pi(), ws("fakeFocus", !1)],
			name: "menu",
			defaults: e => ({
				onExecute: e.onExecute
			})
		}), cC()]),
		wC = qm({
			name: "Dropdown",
			configFields: xC(),
			partFields: yC(),
			factory: (e, t, o, n) => {
				const s = e => {
						ku.getState(e).each((e => {
							bf.highlightPrimary(e)
						}))
					},
					r = (t, o, s) => gC(e, w, t, n, o, s),
					a = {
						expand: e => {
							Hh.isOn(e) || r(e, b, hf.HighlightNone).get(b)
						},
						open: e => {
							Hh.isOn(e) || r(e, b, hf.HighlightMenuAndItem).get(b)
						},
						refetch: t => tC.getExistingCoupled(t, "sandbox").fold((() => r(t, b, hf.HighlightMenuAndItem).map(b)), (o => uC(e, w, t, o, n, b, hf.HighlightMenuAndItem).map(b))),
						isOpen: Hh.isOn,
						close: e => {
							Hh.isOn(e) && r(e, b, hf.HighlightMenuAndItem).get(b)
						},
						repositionMenus: e => {
							Hh.isOn(e) && bC(e)
						}
					},
					i = (e, t) => (Nr(e), A.some(!0));
				return {
					uid: e.uid,
					dom: e.dom,
					components: t,
					behaviours: qu(e.dropdownBehaviours, [Hh.config({
						toggleClass: e.toggleClass,
						aria: {
							mode: "expanded"
						}
					}), tC.config({
						others: {
							sandbox: t => fC(e, t, {
								onOpen: () => Hh.on(t),
								onClose: () => Hh.off(t)
							})
						}
					}), bh.config({
						mode: "special",
						onSpace: i,
						onEnter: i,
						onDown: (e, t) => {
							if (wC.isOpen(e)) {
								const t = tC.getCoupled(e, "sandbox");
								s(t)
							} else wC.open(e);
							return A.some(!0)
						},
						onEscape: (e, t) => wC.isOpen(e) ? (wC.close(e), A.some(!0)) : A.none()
					}), Bh.config({})]),
					events: Uh(A.some((e => {
						r(e, s, hf.HighlightMenuAndItem).get(b)
					}))),
					eventOrder: {
						...e.eventOrder,
						[mr()]: ["disabling", "toggling", "alloy.base.behaviour"]
					},
					apis: a,
					domModification: {
						attributes: {
							"aria-haspopup": e.listRole.getOr("true"),
							...e.role.fold((() => ({})), (e => ({
								role: e
							}))),
							..."button" === e.dom.tag ? {
								type: ("type", fe(e.dom, "attributes").bind((e => fe(e, "type")))).getOr("button")
							} : {}
						}
					}
				}
			},
			apis: {
				open: (e, t) => e.open(t),
				refetch: (e, t) => e.refetch(t),
				expand: (e, t) => e.expand(t),
				close: (e, t) => e.close(t),
				isOpen: (e, t) => e.isOpen(t),
				repositionMenus: (e, t) => e.repositionMenus(t)
			}
		}),
		SC = (e, t, o) => {
			Vx(e).each((e => {
				var n;
				((e, t) => {
					Ot(t.element, "id").each((t => St(e.element, "aria-activedescendant", t)))
				})(e, o), (Ca((n = t).element, Ux) ? A.some(n.element) : Ol(n.element, "." + Ux)).each((t => {
					Ot(t, "id").each((t => St(e.element, "aria-controls", t)))
				}))
			})), St(o.element, "aria-selected", "true")
		},
		CC = (e, t, o) => {
			St(o.element, "aria-selected", "false")
		},
		kC = e => tC.getExistingCoupled(e, "sandbox").bind(Lx).map(Hx).map((e => e.fetchPattern)).getOr("");
	var OC;
	! function(e) {
		e[e.ContentFocus = 0] = "ContentFocus", e[e.UiFocus = 1] = "UiFocus"
	}(OC || (OC = {}));
	const _C = (e, t, o, n, s) => {
			const r = o.shared.providers,
				a = e => s ? {
					...e,
					shortcut: A.none(),
					icon: e.text.isSome() ? A.none() : e.icon
				} : e;
			switch (e.type) {
				case "menuitem":
					return (i = e, Kn("menuitem", ow, i)).fold(Xx, (e => A.some(((e, t, o, n = !0) => {
						const s = Dw({
							presets: "normal",
							iconContent: e.icon,
							textContent: e.text,
							htmlContent: A.none(),
							ariaLabel: e.text,
							caret: A.none(),
							checkMark: A.none(),
							shortcutContent: e.shortcut
						}, o, n);
						return ww({
							context: e.context,
							data: Sw(e),
							getApi: e => ({
								isEnabled: () => !ug.isDisabled(e),
								setEnabled: t => ug.set(e, !t)
							}),
							enabled: e.enabled,
							onAction: e.onAction,
							onSetup: e.onSetup,
							triggersSubmenu: !1,
							itemBehaviours: []
						}, s, t, o)
					})(a(e), t, r, n))));
				case "nestedmenuitem":
					return (e => Kn("nestedmenuitem", nw, e))(e).fold(Xx, (e => A.some(((e, t, o, n = !0, s = !1) => {
						const r = s ? (a = o.icons, kw("chevron-down", a, [xx])) : (e => kw("chevron-right", e, [xx]))(o.icons);
						var a;
						const i = Dw({
							presets: "normal",
							iconContent: e.icon,
							textContent: e.text,
							htmlContent: A.none(),
							ariaLabel: e.text,
							caret: A.some(r),
							checkMark: A.none(),
							shortcutContent: e.shortcut
						}, o, n);
						return ww({
							context: e.context,
							data: Sw(e),
							getApi: e => ({
								isEnabled: () => !ug.isDisabled(e),
								setEnabled: t => ug.set(e, !t),
								setIconFill: (t, o) => {
									Ol(e.element, `svg path[class="${t}"], rect[class="${t}"]`).each((e => {
										St(e, "fill", o)
									}))
								},
								setTooltip: t => {
									const n = o.translate(t);
									St(e.element, "aria-label", n)
								}
							}),
							enabled: e.enabled,
							onAction: b,
							onSetup: e.onSetup,
							triggersSubmenu: !0,
							itemBehaviours: []
						}, i, t, o)
					})(a(e), t, r, n, s))));
				case "togglemenuitem":
					return (e => Kn("togglemenuitem", sw, e))(e).fold(Xx, (e => A.some(((e, t, o, n = !0) => {
						const s = Dw({
							iconContent: e.icon,
							textContent: e.text,
							htmlContent: A.none(),
							ariaLabel: e.text,
							checkMark: A.some(Aw(o.icons)),
							caret: A.none(),
							shortcutContent: e.shortcut,
							presets: "normal",
							meta: e.meta
						}, o, n);
						return xn(ww({
							context: e.context,
							data: Sw(e),
							enabled: e.enabled,
							getApi: e => ({
								setActive: t => {
									Hh.set(e, t)
								},
								isActive: () => Hh.isOn(e),
								isEnabled: () => !ug.isDisabled(e),
								setEnabled: t => ug.set(e, !t)
							}),
							onAction: e.onAction,
							onSetup: e.onSetup,
							triggersSubmenu: !1,
							itemBehaviours: []
						}, s, t, o), {
							toggling: {
								toggleClass: fx,
								toggleOnExecute: !1,
								selected: e.active
							},
							role: e.role.getOrUndefined()
						})
					})(a(e), t, r, n))));
				case "separator":
					return (e => Kn("separatormenuitem", Ty, e))(e).fold(Xx, (e => A.some(JS(e))));
				case "fancymenuitem":
					return (e => Kn("fancymenuitem", tw, e))(e).fold(Xx, (e => ((e, t) => fe(KS, e.fancytype).map((o => o(e, t))))(e, o)));
				default:
					return console.error("Unknown item in general menu", e), A.none()
			}
			var i
		},
		TC = (e, t, o, n, s, r, a) => {
			const i = 1 === n,
				l = !i || Yx(e);
			return ye(L(e, (e => {
				switch (e.type) {
					case "separator":
						return (n = e, Kn("Autocompleter.Separator", Ty, n)).fold(Xx, (e => A.some(JS(e))));
					case "cardmenuitem":
						return (e => Kn("cardmenuitem", Ky, e))(e).fold(Xx, (e => A.some(((e, t, o, n) => {
							const s = {
								dom: Mw(e.label),
								optComponents: [A.some({
									dom: {
										tag: "div",
										classes: [wx, Sx]
									},
									components: Fw(e.items, n)
								})]
							};
							return ww({
								context: "mode:design",
								data: Sw({
									text: A.none(),
									...e
								}),
								enabled: e.enabled,
								getApi: e => ({
									isEnabled: () => !ug.isDisabled(e),
									setEnabled: t => {
										ug.set(e, !t), V(kd(e.element, "*"), (o => {
											e.getSystem().getByDom(o).each((e => {
												e.hasConfigured(ug) && ug.set(e, !t)
											}))
										}))
									}
								}),
								onAction: e.onAction,
								onSetup: e.onSetup,
								triggersSubmenu: !1,
								itemBehaviours: A.from(n.itemBehaviours).getOr([])
							}, s, t, o.providers)
						})({
							...e,
							onAction: t => {
								e.onAction(t), o(e.value, e.meta)
							}
						}, s, r, {
							itemBehaviours: Bw(e.meta, r, A.none()),
							cardText: {
								matchText: t,
								highlightOn: a
							}
						}))));
					default:
						return (e => Kn("Autocompleter.Item", Ey, e))(e).fold(Xx, (e => A.some(((e, t, o, n, s, r, a, i = !0) => {
							const l = Dw({
									presets: n,
									textContent: A.none(),
									htmlContent: o ? e.text.map((e => Iw(e, t))) : A.none(),
									ariaLabel: e.text,
									iconContent: e.icon,
									shortcutContent: A.none(),
									checkMark: A.none(),
									caret: A.none(),
									value: e.value
								}, a.providers, i, e.icon),
								c = e.text.filter((e => !o && "" !== e));
							return ww({
								context: "mode:design",
								data: Sw(e),
								enabled: e.enabled,
								getApi: y({}),
								onAction: t => s(e.value, e.meta),
								onSetup: y(b),
								triggersSubmenu: !1,
								itemBehaviours: Bw(e, a, c)
							}, l, r, a.providers)
						})(e, t, i, "normal", o, s, r, l))))
				}
				var n
			})))
		},
		EC = (e, t, o, n, s, r) => {
			const a = Yx(t),
				i = ye(L(t, (e => {
					const t = e => _C(e, o, n, (e => s ? !be(e, "text") : a)(e), s);
					return "nestedmenuitem" === e.type && e.getSubmenuItems().length <= 0 ? t({
						...e,
						enabled: !1
					}) : t(e)
				}))),
				l = (e => "no-search" === e.searchMode ? {
					menuType: "normal"
				} : {
					menuType: "searchable",
					searchMode: e
				})(r);
			return (s ? Kx : Jx)(e, a, i, 1, l)
		},
		AC = e => bf.singleData(e.value, e),
		MC = e => md(ze(e.startContainer), e.startOffset, ze(e.endContainer), e.endOffset),
		DC = (e, t) => {
			const o = Di("autocompleter"),
				n = en(!1),
				s = en(!1),
				r = nn(),
				a = pl(vf.sketch({
					dom: {
						tag: "div",
						classes: ["tox-autocompleter"],
						attributes: {
							id: o
						}
					},
					components: [],
					fireDismissalEventInstead: {},
					inlineBehaviours: ca([Th("dismissAutocompleter", [Wr(Or(), (() => u())), Wr(Br(), ((t, o) => {
						Ot(o.event.target, "id").each((t => St(ze(e.getBody()), "aria-activedescendant", t)))
					}))])]),
					lazySink: t.getSink
				})),
				i = () => vf.isOpen(a),
				l = s.get,
				c = () => {
					if (i()) {
						vf.hide(a), e.dom.remove(o, !1);
						const t = ze(e.getBody());
						Ot(t, "aria-owns").filter((e => e === o)).each((() => {
							Tt(t, "aria-owns"), Tt(t, "aria-activedescendant")
						}))
					}
				},
				d = () => vf.getContent(a).bind((e => ee(e.components(), 0))),
				u = () => e.execCommand("mceAutocompleterClose"),
				m = s => {
					const i = (o => {
						const s = se(o, (e => A.from(e.columns))).getOr(1);
						return q(o, (o => {
							const a = o.items;
							return TC(a, o.matchText, ((t, s) => {
								const a = {
									hide: () => u(),
									reload: t => {
										c(), e.execCommand("mceAutocompleterReload", !1, {
											fetchOptions: t
										})
									}
								};
								e.execCommand("mceAutocompleterRefreshActiveRange"), r.get().each((e => {
									n.set(!0), o.onAction(a, e, t, s), n.set(!1)
								}))
							}), s, ux.BUBBLE_TO_SANDBOX, t, o.highlightOn)
						}))
					})(s);
					i.length > 0 ? (((t, o) => {
						const n = se(t, (e => A.from(e.columns))).getOr(1);
						vf.showMenuAt(a, {
							anchor: {
								type: "selection",
								getSelection: () => r.get().map(MC),
								root: ze(e.getBody())
							}
						}, ((e, t, o, n) => {
							const s = jS(t, n),
								r = _x(n);
							return {
								data: AC({
									...e,
									movement: s,
									menuBehaviours: aw("auto" !== t ? [] : [Jr(((e, t) => {
										rw(e, 4, r.item).each((({
											numColumns: t,
											numRows: o
										}) => {
											bh.setGridSize(e, o, t)
										}))
									}))])
								}),
								menu: {
									markers: _x(n),
									fakeFocus: o === OC.ContentFocus
								}
							}
						})(Jx("autocompleter-value", !0, o, n, {
							menuType: "normal"
						}), n, OC.ContentFocus, "normal")), d().each(wg.highlightFirst)
					})(s, i), St(ze(e.getBody()), "aria-owns", o), e.inline || g()) : c()
				},
				g = () => {
					e.dom.get(o) && e.dom.remove(o, !1);
					const t = e.getDoc().documentElement,
						n = e.selection.getNode(),
						s = (e => ni(e, !0))(a.element);
					Dt(s, {
						border: "0",
						clip: "rect(0 0 0 0)",
						height: "1px",
						margin: "-1px",
						overflow: "hidden",
						padding: "0",
						position: "absolute",
						width: "1px",
						top: `${n.offsetTop}px`,
						left: `${n.offsetLeft}px`
					}), e.dom.add(t, s.dom), Ol(s, '[role="menu"]').each((e => {
						Lt(e, "position"), Lt(e, "max-height")
					}))
				};
			e.on("AutocompleterStart", (({
				lookupData: e
			}) => {
				s.set(!0), n.set(!1), m(e)
			})), e.on("AutocompleterUpdate", (({
				lookupData: e
			}) => m(e))), e.on("AutocompleterUpdateActiveRange", (({
				range: e
			}) => r.set(e))), e.on("AutocompleterEnd", (() => {
				c(), s.set(!1), n.set(!1), r.clear()
			}));
			((e, t) => {
				const o = (e, t) => {
						Rr(e, Js(), {
							raw: t
						})
					},
					n = () => e.getMenu().bind(wg.getHighlighted);
				t.on("keydown", (t => {
					const s = t.which;
					e.isActive() && (e.isMenuOpen() ? 13 === s ? (n().each(Nr), t.preventDefault()) : 40 === s ? (n().fold((() => {
						e.getMenu().each(wg.highlightFirst)
					}), (e => {
						o(e, t)
					})), t.preventDefault(), t.stopImmediatePropagation()) : 37 !== s && 38 !== s && 39 !== s || n().each((e => {
						o(e, t), t.preventDefault(), t.stopImmediatePropagation()
					})) : 13 !== s && 38 !== s && 40 !== s || e.cancelIfNecessary())
				})), t.on("NodeChange", (() => {
					!e.isActive() || e.isProcessingAction() || t.queryCommandState("mceAutoCompleterInRange") || e.cancelIfNecessary()
				}))
			})({
				cancelIfNecessary: u,
				isMenuOpen: i,
				isActive: l,
				isProcessingAction: n.get,
				getMenu: d
			}, e)
		},
		BC = (e, t, o) => _l(e, t, o).isSome(),
		IC = (e, t) => {
			let o = null;
			return {
				cancel: () => {
					null !== o && (clearTimeout(o), o = null)
				},
				schedule: (...n) => {
					o = setTimeout((() => {
						e.apply(null, n), o = null
					}), t)
				}
			}
		},
		FC = e => {
			const t = e.raw;
			return void 0 === t.touches || 1 !== t.touches.length ? A.none() : A.some(t.touches[0])
		},
		RC = (e, t) => {
			const o = {
					stopBackspace: !0,
					...t
				},
				n = (e => {
					const t = nn(),
						o = en(!1),
						n = IC((t => {
							e.triggerEvent(hr(), t), o.set(!0)
						}), 400),
						s = Bs([{
							key: Hs(),
							value: e => (FC(e).each((s => {
								n.cancel();
								const r = {
									x: s.clientX,
									y: s.clientY,
									target: e.target
								};
								n.schedule(e), o.set(!1), t.set(r)
							})), A.none())
						}, {
							key: Ps(),
							value: e => (n.cancel(), FC(e).each((e => {
								t.on((o => {
									((e, t) => {
										const o = Math.abs(e.clientX - t.x),
											n = Math.abs(e.clientY - t.y);
										return o > 5 || n > 5
									})(e, o) && t.clear()
								}))
							})), A.none())
						}, {
							key: Us(),
							value: s => (n.cancel(), t.get().filter((e => Ze(e.target, s.target))).map((t => o.get() ? (s.prevent(), !1) : e.triggerEvent(pr(), s))))
						}]);
					return {
						fireIfReady: (e, t) => fe(s, t).bind((t => t(e)))
					}
				})(o),
				s = L(["touchstart", "touchmove", "touchend", "touchcancel", "gesturestart", "mousedown", "mouseup", "mouseover", "mousemove", "mouseout", "click"].concat(["selectstart", "input", "contextmenu", "change", "transitionend", "transitioncancel", "drag", "dragstart", "dragend", "dragenter", "dragleave", "dragover", "drop", "keyup"]), (t => Dc(e, t, (e => {
					n.fireIfReady(e, t).each((t => {
						t && e.kill()
					})), o.triggerEvent(t, e) && e.kill()
				})))),
				r = nn(),
				a = Dc(e, "paste", (e => {
					n.fireIfReady(e, "paste").each((t => {
						t && e.kill()
					})), o.triggerEvent("paste", e) && e.kill(), r.set(setTimeout((() => {
						o.triggerEvent(dr(), e)
					}), 0))
				})),
				i = Dc(e, "keydown", (e => {
					o.triggerEvent("keydown", e) ? e.kill() : o.stopBackspace && (e => e.raw.which === Sg[0] && !F(["input", "textarea"], Ue(e.target)) && !BC(e.target, '[contenteditable="true"]'))(e) && e.prevent()
				})),
				l = Dc(e, "focusin", (e => {
					o.triggerEvent("focusin", e) && e.kill()
				})),
				c = nn(),
				d = Dc(e, "focusout", (e => {
					o.triggerEvent("focusout", e) && e.kill(), c.set(setTimeout((() => {
						o.triggerEvent(cr(), e)
					}), 0))
				}));
			return {
				unbind: () => {
					V(s, (e => {
						e.unbind()
					})), i.unbind(), l.unbind(), d.unbind(), a.unbind(), r.on(clearTimeout), c.on(clearTimeout)
				}
			}
		},
		NC = (e, t) => {
			const o = fe(e, "target").getOr(t);
			return en(o)
		},
		zC = Ms([{
			stopped: []
		}, {
			resume: ["element"]
		}, {
			complete: []
		}]),
		LC = (e, t, o, n, s, r) => {
			const a = e(t, n),
				i = ((e, t) => {
					const o = en(!1),
						n = en(!1);
					return {
						stop: () => {
							o.set(!0)
						},
						cut: () => {
							n.set(!0)
						},
						isStopped: o.get,
						isCut: n.get,
						event: e,
						setSource: t.set,
						getSource: t.get
					}
				})(o, s);
			return a.fold((() => (r.logEventNoHandlers(t, n), zC.complete())), (e => {
				const o = e.descHandler;
				return qi(o)(i), i.isStopped() ? (r.logEventStopped(t, e.element, o.purpose), zC.stopped()) : i.isCut() ? (r.logEventCut(t, e.element, o.purpose), zC.complete()) : rt(e.element).fold((() => (r.logNoParent(t, e.element, o.purpose), zC.complete())), (n => (r.logEventResponse(t, e.element, o.purpose), zC.resume(n))))
			}))
		},
		VC = (e, t, o, n, s, r) => LC(e, t, o, n, s, r).fold(E, (n => VC(e, t, o, n, s, r)), T),
		HC = (e, t, o, n, s) => {
			const r = NC(o, n);
			return VC(e, t, o, n, r, s)
		},
		PC = () => {
			const e = (() => {
					const e = {};
					return {
						registerId: (t, o, n) => {
							ie(n, ((n, s) => {
								const r = void 0 !== e[s] ? e[s] : {};
								r[o] = ((e, t) => ({
									cHandler: C.apply(void 0, [e.handler].concat(t)),
									purpose: e.purpose
								}))(n, t), e[s] = r
							}))
						},
						unregisterId: t => {
							ie(e, ((e, o) => {
								be(e, t) && delete e[t]
							}))
						},
						filterByType: t => fe(e, t).map((e => ge(e, ((e, t) => ((e, t) => ({
							id: e,
							descHandler: t
						}))(t, e))))).getOr([]),
						find: (t, o, n) => fe(e, o).bind((e => Rs(n, (t => ((e, t) => zi(t).bind((t => fe(e, t))).map((e => ((e, t) => ({
							element: e,
							descHandler: t
						}))(t, e))))(e, t)), t)))
					}
				})(),
				t = {},
				o = o => {
					zi(o.element).each((o => {
						delete t[o], e.unregisterId(o)
					}))
				};
			return {
				find: (t, o, n) => e.find(t, o, n),
				filter: t => e.filterByType(t),
				register: n => {
					const s = (e => {
						const t = e.element;
						return zi(t).getOrThunk((() => ((e, t) => {
							const o = Di(Fi + "uid-");
							return Ni(t, o), o
						})(0, e.element)))
					})(n);
					ve(t, s) && ((e, n) => {
						const s = t[n];
						if (s !== e) throw new Error('The tagId "' + n + '" is already used by: ' + si(s.element) + "\nCannot use it for: " + si(e.element) + "\nThe conflicting element is" + (vt(s.element) ? " " : " not ") + "already in the DOM");
						o(e)
					})(n, s);
					const r = [n];
					e.registerId(r, s, n.events), t[s] = n
				},
				unregister: o,
				getById: e => fe(t, e)
			}
		},
		UC = Gm({
			name: "Container",
			factory: e => {
				const {
					attributes: t,
					...o
				} = e.dom;
				return {
					uid: e.uid,
					dom: {
						tag: "div",
						attributes: {
							role: "presentation",
							...t
						},
						...o
					},
					components: e.components,
					behaviours: Gu(e.containerBehaviours),
					events: e.events,
					domModification: e.domModification,
					eventOrder: e.eventOrder
				}
			},
			configFields: [ws("components", []), $u("containerBehaviours", []), ws("events", {}), ws("domModification", {}), ws("eventOrder", {})]
		}),
		WC = e => {
			const t = t => rt(e.element).fold(E, (e => Ze(t, e))),
				o = PC(),
				n = (e, n) => o.find(t, e, n),
				s = RC(e.element, {
					triggerEvent: (e, t) => li(e, t.target, (o => ((e, t, o, n) => HC(e, t, o, o.target, n))(n, e, t, o)))
				}),
				r = {
					debugInfo: y("real"),
					triggerEvent: (e, t, o) => {
						li(e, t, (s => HC(n, e, o, t, s)))
					},
					triggerFocus: (e, t) => {
						zi(e).fold((() => {
							mc(e)
						}), (o => {
							li(lr(), e, (o => (((e, t, o, n, s) => {
								const r = NC(o, n);
								LC(e, t, o, n, r, s)
							})(n, lr(), {
								originator: t,
								kill: b,
								prevent: b,
								target: e
							}, e, o), !1)))
						}))
					},
					triggerEscape: (e, t) => {
						r.triggerEvent("keydown", e.element, t.event)
					},
					getByUid: e => p(e),
					getByDom: e => h(e),
					build: pl,
					buildOrPatch: gl,
					addToGui: e => {
						l(e)
					},
					removeFromGui: e => {
						c(e)
					},
					addToWorld: e => {
						a(e)
					},
					removeFromWorld: e => {
						i(e)
					},
					broadcast: e => {
						u(e)
					},
					broadcastOn: (e, t) => {
						m(e, t)
					},
					broadcastEvent: (e, t) => {
						g(e, t)
					},
					isConnected: E
				},
				a = e => {
					e.connect(r), Ge(e.element) || (o.register(e), V(e.components(), a), r.triggerEvent(vr(), e.element, {
						target: e.element
					}))
				},
				i = e => {
					Ge(e.element) || (V(e.components(), i), o.unregister(e)), e.disconnect()
				},
				l = t => {
					ru(e, t)
				},
				c = e => {
					lu(e)
				},
				d = e => {
					const t = o.filter(ur());
					V(t, (t => {
						const o = t.descHandler;
						qi(o)(e)
					}))
				},
				u = e => {
					d({
						universal: !0,
						data: e
					})
				},
				m = (e, t) => {
					d({
						universal: !1,
						channels: e,
						data: t
					})
				},
				g = (e, t) => ((e, t, o) => {
					const n = (e => {
						const t = en(!1);
						return {
							stop: () => {
								t.set(!0)
							},
							cut: b,
							isStopped: t.get,
							isCut: T,
							event: e,
							setSource: O("Cannot set source of a broadcasted event"),
							getSource: O("Cannot get source of a broadcasted event")
						}
					})(t);
					return V(e, (e => {
						const t = e.descHandler;
						qi(t)(n)
					})), n.isStopped()
				})(o.filter(e), t),
				p = e => o.getById(e).fold((() => ln.error(new Error('Could not find component with uid: "' + e + '" in system.'))), ln.value),
				h = e => {
					const t = zi(e).getOr("not found");
					return p(t)
				};
			return a(e), {
				root: e,
				element: e.element,
				destroy: () => {
					s.unbind(), Ho(e.element)
				},
				add: l,
				remove: c,
				getByUid: p,
				getByDom: h,
				addToWorld: a,
				removeFromWorld: i,
				broadcast: u,
				broadcastOn: m,
				broadcastEvent: g
			}
		},
		jC = y([ws("prefix", "form-field"), $u("fieldBehaviours", [Jm, ju])]),
		$C = y([ym({
			schema: [rs("dom")],
			name: "label"
		}), ym({
			factory: {
				sketch: e => ({
					uid: e.uid,
					dom: {
						tag: "span",
						styles: {
							display: "none"
						},
						attributes: {
							"aria-hidden": "true"
						},
						innerHtml: e.text
					}
				})
			},
			schema: [rs("text")],
			name: "aria-descriptor"
		}), vm({
			factory: {
				sketch: e => {
					const t = ((e, t) => {
						const o = {};
						return ie(e, ((e, n) => {
							F(t, n) || (o[n] = e)
						})), o
					})(e, ["factory"]);
					return e.factory.sketch(t)
				}
			},
			schema: [rs("factory")],
			name: "field"
		})]),
		GC = qm({
			name: "FormField",
			configFields: jC(),
			partFields: $C(),
			factory: (e, t, o, n) => {
				const s = qu(e.fieldBehaviours, [Jm.config({
						find: t => Bm(t, e, "field")
					}), ju.config({
						store: {
							mode: "manual",
							getValue: e => Jm.getCurrent(e).bind(ju.getValue),
							setValue: (e, t) => {
								Jm.getCurrent(e).each((e => {
									ju.setValue(e, t)
								}))
							}
						}
					})]),
					r = Hr([Jr(((t, o) => {
						const n = Fm(t, e, ["label", "field", "aria-descriptor"]);
						n.field().each((t => {
							const o = Di(e.prefix);
							n.label().each((e => {
								St(e.element, "for", o), St(t.element, "id", o)
							})), n["aria-descriptor"]().each((o => {
								const n = Di(e.prefix);
								St(o.element, "id", n), St(t.element, "aria-describedby", n)
							}))
						}))
					}))]),
					a = {
						getField: t => Bm(t, e, "field"),
						getLabel: t => Bm(t, e, "label")
					};
				return {
					uid: e.uid,
					dom: e.dom,
					components: t,
					behaviours: s,
					events: r,
					apis: a
				}
			},
			apis: {
				getField: (e, t) => e.getField(t),
				getLabel: (e, t) => e.getLabel(t)
			}
		});
	var qC = tinymce.util.Tools.resolve("tinymce.html.Entities");
	const YC = (e, t, o, n) => {
			const s = XC(e, t, o, n);
			return GC.sketch(s)
		},
		XC = (e, t, o, n) => ({
			dom: KC(o),
			components: e.toArray().concat([t]),
			fieldBehaviours: ca(n)
		}),
		KC = e => ({
			tag: "div",
			classes: ["tox-form__group"].concat(e)
		}),
		JC = (e, t) => GC.parts.label({
			dom: {
				tag: "label",
				classes: ["tox-label"]
			},
			components: [dl(t.translate(e))]
		}),
		QC = Di("form-component-change"),
		ZC = Di("form-close"),
		ek = Di("form-cancel"),
		tk = Di("form-action"),
		ok = Di("form-submit"),
		nk = Di("form-block"),
		sk = Di("form-unblock"),
		rk = Di("form-tabchange"),
		ak = Di("form-resize"),
		ik = (e, t, o) => {
			const n = e.label.map((e => JC(e, t))),
				s = t.icons(),
				r = e => (t, o) => {
					_l(o.event.target, "[data-collection-item-value]").each((n => {
						e(t, o, n, kt(n, "data-collection-item-value"))
					}))
				},
				a = r(((o, n, s, r) => {
					n.stop(), t.checkUiComponentContext("mode:design").shouldDisable || t.isDisabled() || Rr(o, tk, {
						name: e.name,
						value: r
					})
				})),
				i = [Wr(Ys(), r(((e, t, o) => {
					mc(o, !0)
				}))), Wr(tr(), a), Wr(pr(), a), Wr(Xs(), r(((e, t, o) => {
					Ol(e.element, "." + yx).each((e => {
						Sa(e, yx)
					})), ya(o, yx)
				}))), Wr(Ks(), r((e => {
					Ol(e.element, "." + yx).each((e => {
						Sa(e, yx), gc(e)
					}))
				}))), ea(r(((t, o, n, s) => {
					Rr(t, tk, {
						name: e.name,
						value: s
					})
				})))],
				l = (e, t) => L(kd(e.element, ".tox-collection__item"), t),
				c = GC.parts.field({
					dom: {
						tag: "div",
						classes: ["tox-collection"].concat(1 !== e.columns ? ["tox-collection--grid"] : ["tox-collection--list"])
					},
					components: [],
					factory: {
						sketch: w
					},
					behaviours: ca([ug.config({
						disabled: () => t.checkUiComponentContext(e.context).shouldDisable,
						onDisabled: e => {
							l(e, (e => {
								ya(e, "tox-collection__item--state-disabled"), St(e, "aria-disabled", !0)
							}))
						},
						onEnabled: e => {
							l(e, (e => {
								Sa(e, "tox-collection__item--state-disabled"), Tt(e, "aria-disabled")
							}))
						}
					}), bw((() => t.checkUiComponentContext(e.context))), _h.config({}), Jb.config({
						...t.tooltips.getConfig({
							tooltipText: "",
							onShow: e => {
								Ol(e.element, "." + yx + "[data-mce-tooltip]").each((o => {
									Ot(o, "data-mce-tooltip").each((o => {
										Jb.setComponents(e, t.tooltips.getComponents({
											tooltipText: o
										}))
									}))
								}))
							}
						}),
						mode: "children-keyboard-focus",
						anchor: e => ({
							type: "node",
							node: Ol(e.element, "." + yx).orThunk((() => Qe(".tox-collection__item"))),
							root: e.element,
							layouts: {
								onLtr: y([Zl, Ql, Yl, Kl, Xl, Jl]),
								onRtl: y([Zl, Ql, Yl, Kl, Xl, Jl])
							},
							bubble: Wc(0, -2, {})
						})
					}), ju.config({
						store: {
							mode: "memory",
							initialValue: o.getOr([])
						},
						onSetValue: (o, n) => {
							((o, n) => {
								const r = t.checkUiComponentContext("mode:design").shouldDisable || t.isDisabled() ? " tox-collection__item--state-disabled" : "",
									a = L(n, (t => {
										const o = Jv.translate(t.text),
											n = 1 === e.columns ? `<div class="tox-collection__item-label">${o}</div>` : "",
											a = `<div class="tox-collection__item-icon">${(e=>{var t;return null!==(t=s[e])&&void 0!==t?t:e})(t.icon)}</div>`,
											i = {
												_: " ",
												" - ": " ",
												"-": " "
											},
											l = o.replace(/\_| \- |\-/g, (e => i[e]));
										return `<div data-mce-tooltip="${l}" class="tox-collection__item${r}" tabindex="-1" data-collection-item-value="${qC.encodeAllRaw(t.value)}" aria-label="${l}">${a}${n}</div>`
									})),
									i = "auto" !== e.columns && e.columns > 1 ? z(a, e.columns) : [a],
									l = L(i, (e => `<div class="tox-collection__group">${e.join("")}</div>`));
								oi(o.element, l.join(""))
							})(o, n), "auto" === e.columns && rw(o, 5, "tox-collection__item").each((({
								numRows: e,
								numColumns: t
							}) => {
								bh.setGridSize(o, e, t)
							})), Fr(o, ak)
						}
					}), Hb.config({}), bh.config((d = e.columns, "normal", 1 === d ? {
						mode: "menu",
						moveOnTab: !1,
						selector: ".tox-collection__item"
					} : "auto" === d ? {
						mode: "flatgrid",
						selector: ".tox-collection__item",
						initSize: {
							numColumns: 1,
							numRows: 1
						}
					} : {
						mode: "matrix",
						selectors: {
							row: ".tox-collection__group",
							cell: `.${gx}`
						}
					})), Th("collection-events", i)]),
					eventOrder: {
						[mr()]: ["disabling", "alloy.base.behaviour", "collection-events"],
						[Xs()]: ["collection-events", "tooltipping"]
					}
				});
			var d;
			return YC(n, c, ["tox-form__group--collection"], [])
		},
		lk = ["input", "textarea"],
		ck = e => {
			const t = Ue(e);
			return F(lk, t)
		},
		dk = (e, t) => {
			const o = t.getRoot(e).getOr(e.element);
			Sa(o, t.invalidClass), t.notify.each((t => {
				ck(e.element) && St(e.element, "aria-invalid", !1), t.getContainer(e).each((e => {
					oi(e, t.validHtml)
				})), t.onValid(e)
			}))
		},
		uk = (e, t, o, n) => {
			const s = t.getRoot(e).getOr(e.element);
			ya(s, t.invalidClass), t.notify.each((t => {
				ck(e.element) && St(e.element, "aria-invalid", !0), t.getContainer(e).each((e => {
					oi(e, n)
				})), t.onInvalid(e, n)
			}))
		},
		mk = (e, t, o) => t.validator.fold((() => iC(ln.value(!0))), (t => t.validate(e))),
		gk = (e, t, o) => (t.notify.each((t => {
			t.onValidate(e)
		})), mk(e, t).map((o => e.getSystem().isConnected() ? o.fold((o => (uk(e, t, 0, o), ln.error(o))), (o => (dk(e, t), ln.value(o)))) : ln.error("No longer in system"))));
	var pk = Object.freeze({
			__proto__: null,
			markValid: dk,
			markInvalid: uk,
			query: mk,
			run: gk,
			isInvalid: (e, t) => {
				const o = t.getRoot(e).getOr(e.element);
				return Ca(o, t.invalidClass)
			}
		}),
		hk = Object.freeze({
			__proto__: null,
			events: (e, t) => e.validator.map((t => Hr([Wr(t.onEvent, (t => {
				gk(t, e).get(w)
			}))].concat(t.validateOnLoad ? [Jr((t => {
				gk(t, e).get(b)
			}))] : [])))).getOr({})
		}),
		fk = [rs("invalidClass"), ws("getRoot", A.none), ys("notify", [ws("aria", "alert"), ws("getContainer", A.none), ws("validHtml", ""), bi("onValid"), bi("onInvalid"), bi("onValidate")]), ys("validator", [rs("validate"), ws("onEvent", "input"), ws("validateOnLoad", !0)])];
	const bk = ua({
			fields: fk,
			name: "invalidating",
			active: hk,
			apis: pk,
			extra: {
				validation: e => t => {
					const o = ju.getValue(t);
					return iC(e(o))
				}
			}
		}),
		vk = ua({
			fields: [],
			name: "unselecting",
			active: Object.freeze({
				__proto__: null,
				events: () => Hr([Pr(rr(), E)]),
				exhibit: () => na({
					styles: {
						"-webkit-user-select": "none",
						"user-select": "none",
						"-ms-user-select": "none",
						"-moz-user-select": "-moz-none"
					},
					attributes: {
						unselectable: "on"
					}
				})
			})
		}),
		xk = Di("color-input-change"),
		yk = Di("color-swatch-change"),
		wk = Di("color-picker-cancel"),
		Sk = ym({
			schema: [rs("dom")],
			name: "label"
		}),
		Ck = e => ym({
			name: e + "-edge",
			overrides: t => t.model.manager.edgeActions[e].fold((() => ({})), (e => ({
				events: Hr([jr(Hs(), ((t, o, n) => e(t, n)), [t]), jr(js(), ((t, o, n) => e(t, n)), [t]), jr($s(), ((t, o, n) => {
					n.mouseIsDown.get() && e(t, n)
				}), [t])])
			})))
		}),
		kk = Ck("top-left"),
		Ok = Ck("top"),
		_k = Ck("top-right"),
		Tk = Ck("right"),
		Ek = Ck("bottom-right"),
		Ak = Ck("bottom"),
		Mk = Ck("bottom-left"),
		Dk = Ck("left"),
		Bk = vm({
			name: "thumb",
			defaults: y({
				dom: {
					styles: {
						position: "absolute"
					}
				}
			}),
			overrides: e => ({
				events: Hr([Gr(Hs(), e, "spectrum"), Gr(Ps(), e, "spectrum"), Gr(Us(), e, "spectrum"), Gr(js(), e, "spectrum"), Gr($s(), e, "spectrum"), Gr(qs(), e, "spectrum")])
			})
		}),
		Ik = e => zg(e.event);
	var Fk = [Sk, Dk, Tk, Ok, Ak, kk, _k, Mk, Ek, Bk, vm({
		schema: [ns("mouseIsDown", (() => en(!1)))],
		name: "spectrum",
		overrides: e => {
			const t = e.model.manager,
				o = (o, n) => t.getValueFromEvent(n).map((n => t.setValueFrom(o, e, n)));
			return {
				behaviours: ca([bh.config({
					mode: "special",
					onLeft: (o, n) => t.onLeft(o, e, Ik(n)),
					onRight: (o, n) => t.onRight(o, e, Ik(n)),
					onUp: (o, n) => t.onUp(o, e, Ik(n)),
					onDown: (o, n) => t.onDown(o, e, Ik(n))
				}), Hb.config({}), Bh.config({})]),
				events: Hr([Wr(Hs(), o), Wr(Ps(), o), Wr(js(), o), Wr($s(), ((t, n) => {
					e.mouseIsDown.get() && o(t, n)
				}))])
			}
		}
	})];
	const Rk = y("slider.change.value"),
		Nk = e => {
			const t = e.event.raw;
			if ((e => -1 !== e.type.indexOf("touch"))(t)) {
				const e = t;
				return void 0 !== e.touches && 1 === e.touches.length ? A.some(e.touches[0]).map((e => $t(e.clientX, e.clientY))) : A.none()
			} {
				const e = t;
				return void 0 !== e.clientX ? A.some(e).map((e => $t(e.clientX, e.clientY))) : A.none()
			}
		},
		zk = e => e.model.minX,
		Lk = e => e.model.minY,
		Vk = e => e.model.minX - 1,
		Hk = e => e.model.minY - 1,
		Pk = e => e.model.maxX,
		Uk = e => e.model.maxY,
		Wk = e => e.model.maxX + 1,
		jk = e => e.model.maxY + 1,
		$k = (e, t, o) => t(e) - o(e),
		Gk = e => $k(e, Pk, zk),
		qk = e => $k(e, Uk, Lk),
		Yk = e => Gk(e) / 2,
		Xk = e => qk(e) / 2,
		Kk = (e, t) => t ? e.stepSize * e.speedMultiplier : e.stepSize,
		Jk = e => e.snapToGrid,
		Qk = e => e.snapStart,
		Zk = e => e.rounded,
		eO = (e, t) => void 0 !== e[t + "-edge"],
		tO = e => eO(e, "left"),
		oO = e => eO(e, "right"),
		nO = e => eO(e, "top"),
		sO = e => eO(e, "bottom"),
		rO = e => e.model.value.get(),
		aO = (e, t) => ({
			x: e,
			y: t
		}),
		iO = (e, t) => {
			Rr(e, Rk(), {
				value: t
			})
		},
		lO = (e, t, o, n) => e < t ? e : e > o ? o : e === t ? t - 1 : Math.max(t, e - n),
		cO = (e, t, o, n) => e > o ? e : e < t ? t : e === o ? o + 1 : Math.min(o, e + n),
		dO = (e, t, o) => Math.max(t, Math.min(o, e)),
		uO = e => {
			const {
				min: t,
				max: o,
				range: n,
				value: s,
				step: r,
				snap: a,
				snapStart: i,
				rounded: l,
				hasMinEdge: c,
				hasMaxEdge: d,
				minBound: u,
				maxBound: m,
				screenRange: g
			} = e, p = c ? t - 1 : t, h = d ? o + 1 : o;
			if (s < u) return p;
			if (s > m) return h;
			{
				const e = ((e, t, o) => Math.min(o, Math.max(e, t)) - t)(s, u, m),
					c = dO(e / g * n + t, p, h);
				return a && c >= t && c <= o ? ((e, t, o, n, s) => s.fold((() => {
					const s = e - t,
						r = Math.round(s / n) * n;
					return dO(t + r, t - 1, o + 1)
				}), (t => {
					const s = (e - t) % n,
						r = Math.round(s / n),
						a = Math.floor((e - t) / n),
						i = Math.floor((o - t) / n),
						l = t + Math.min(i, a + r) * n;
					return Math.max(t, l)
				})))(c, t, o, r, i) : l ? Math.round(c) : c
			}
		},
		mO = e => {
			const {
				min: t,
				max: o,
				range: n,
				value: s,
				hasMinEdge: r,
				hasMaxEdge: a,
				maxBound: i,
				maxOffset: l,
				centerMinEdge: c,
				centerMaxEdge: d
			} = e;
			return s < t ? r ? 0 : c : s > o ? a ? i : d : (s - t) / n * l
		},
		gO = "top",
		pO = "right",
		hO = "bottom",
		fO = "left",
		bO = e => e.element.dom.getBoundingClientRect(),
		vO = (e, t) => e[t],
		xO = e => {
			const t = bO(e);
			return vO(t, fO)
		},
		yO = e => {
			const t = bO(e);
			return vO(t, pO)
		},
		wO = e => {
			const t = bO(e);
			return vO(t, gO)
		},
		SO = e => {
			const t = bO(e);
			return vO(t, hO)
		},
		CO = e => {
			const t = bO(e);
			return vO(t, "width")
		},
		kO = e => {
			const t = bO(e);
			return vO(t, "height")
		},
		OO = (e, t, o) => (e + t) / 2 - o,
		_O = (e, t) => {
			const o = bO(e),
				n = bO(t),
				s = vO(o, fO),
				r = vO(o, pO),
				a = vO(n, fO);
			return OO(s, r, a)
		},
		TO = (e, t) => {
			const o = bO(e),
				n = bO(t),
				s = vO(o, gO),
				r = vO(o, hO),
				a = vO(n, gO);
			return OO(s, r, a)
		},
		EO = (e, t) => {
			Rr(e, Rk(), {
				value: t
			})
		},
		AO = (e, t, o) => {
			const n = {
				min: zk(t),
				max: Pk(t),
				range: Gk(t),
				value: o,
				step: Kk(t),
				snap: Jk(t),
				snapStart: Qk(t),
				rounded: Zk(t),
				hasMinEdge: tO(t),
				hasMaxEdge: oO(t),
				minBound: xO(e),
				maxBound: yO(e),
				screenRange: CO(e)
			};
			return uO(n)
		},
		MO = e => (t, o, n) => ((e, t, o, n) => {
			const s = (e > 0 ? cO : lO)(rO(o), zk(o), Pk(o), Kk(o, n));
			return EO(t, s), A.some(s)
		})(e, t, o, n).map(E),
		DO = (e, t, o, n, s, r) => {
			const a = ((e, t, o, n, s) => {
				const r = CO(e),
					a = n.bind((t => A.some(_O(t, e)))).getOr(0),
					i = s.bind((t => A.some(_O(t, e)))).getOr(r),
					l = {
						min: zk(t),
						max: Pk(t),
						range: Gk(t),
						value: o,
						hasMinEdge: tO(t),
						hasMaxEdge: oO(t),
						minBound: xO(e),
						minOffset: 0,
						maxBound: yO(e),
						maxOffset: r,
						centerMinEdge: a,
						centerMaxEdge: i
					};
				return mO(l)
			})(t, r, o, n, s);
			return xO(t) - xO(e) + a
		},
		BO = MO(-1),
		IO = MO(1),
		FO = A.none,
		RO = A.none,
		NO = {
			"top-left": A.none(),
			top: A.none(),
			"top-right": A.none(),
			right: A.some(((e, t) => {
				iO(e, Wk(t))
			})),
			"bottom-right": A.none(),
			bottom: A.none(),
			"bottom-left": A.none(),
			left: A.some(((e, t) => {
				iO(e, Vk(t))
			}))
		};
	var zO = Object.freeze({
		__proto__: null,
		setValueFrom: (e, t, o) => {
			const n = AO(e, t, o);
			return EO(e, n), n
		},
		setToMin: (e, t) => {
			const o = zk(t);
			EO(e, o)
		},
		setToMax: (e, t) => {
			const o = Pk(t);
			EO(e, o)
		},
		findValueOfOffset: AO,
		getValueFromEvent: e => Nk(e).map((e => e.left)),
		findPositionOfValue: DO,
		setPositionFromValue: (e, t, o, n) => {
			const s = rO(o),
				r = DO(e, n.getSpectrum(e), s, n.getLeftEdge(e), n.getRightEdge(e), o),
				a = Kt(t.element) / 2;
			Mt(t.element, "left", r - a + "px")
		},
		onLeft: BO,
		onRight: IO,
		onUp: FO,
		onDown: RO,
		edgeActions: NO
	});
	const LO = (e, t) => {
			Rr(e, Rk(), {
				value: t
			})
		},
		VO = (e, t, o) => {
			const n = {
				min: Lk(t),
				max: Uk(t),
				range: qk(t),
				value: o,
				step: Kk(t),
				snap: Jk(t),
				snapStart: Qk(t),
				rounded: Zk(t),
				hasMinEdge: nO(t),
				hasMaxEdge: sO(t),
				minBound: wO(e),
				maxBound: SO(e),
				screenRange: kO(e)
			};
			return uO(n)
		},
		HO = e => (t, o, n) => ((e, t, o, n) => {
			const s = (e > 0 ? cO : lO)(rO(o), Lk(o), Uk(o), Kk(o, n));
			return LO(t, s), A.some(s)
		})(e, t, o, n).map(E),
		PO = (e, t, o, n, s, r) => {
			const a = ((e, t, o, n, s) => {
				const r = kO(e),
					a = n.bind((t => A.some(TO(t, e)))).getOr(0),
					i = s.bind((t => A.some(TO(t, e)))).getOr(r),
					l = {
						min: Lk(t),
						max: Uk(t),
						range: qk(t),
						value: o,
						hasMinEdge: nO(t),
						hasMaxEdge: sO(t),
						minBound: wO(e),
						minOffset: 0,
						maxBound: SO(e),
						maxOffset: r,
						centerMinEdge: a,
						centerMaxEdge: i
					};
				return mO(l)
			})(t, r, o, n, s);
			return wO(t) - wO(e) + a
		},
		UO = A.none,
		WO = A.none,
		jO = HO(-1),
		$O = HO(1),
		GO = {
			"top-left": A.none(),
			top: A.some(((e, t) => {
				iO(e, Hk(t))
			})),
			"top-right": A.none(),
			right: A.none(),
			"bottom-right": A.none(),
			bottom: A.some(((e, t) => {
				iO(e, jk(t))
			})),
			"bottom-left": A.none(),
			left: A.none()
		};
	var qO = Object.freeze({
		__proto__: null,
		setValueFrom: (e, t, o) => {
			const n = VO(e, t, o);
			return LO(e, n), n
		},
		setToMin: (e, t) => {
			const o = Lk(t);
			LO(e, o)
		},
		setToMax: (e, t) => {
			const o = Uk(t);
			LO(e, o)
		},
		findValueOfOffset: VO,
		getValueFromEvent: e => Nk(e).map((e => e.top)),
		findPositionOfValue: PO,
		setPositionFromValue: (e, t, o, n) => {
			const s = rO(o),
				r = PO(e, n.getSpectrum(e), s, n.getTopEdge(e), n.getBottomEdge(e), o),
				a = Ut(t.element) / 2;
			Mt(t.element, "top", r - a + "px")
		},
		onLeft: UO,
		onRight: WO,
		onUp: jO,
		onDown: $O,
		edgeActions: GO
	});
	const YO = (e, t) => {
			Rr(e, Rk(), {
				value: t
			})
		},
		XO = (e, t) => ({
			x: e,
			y: t
		}),
		KO = (e, t) => (o, n, s) => ((e, t, o, n, s) => {
			const r = e > 0 ? cO : lO,
				a = t ? rO(n).x : r(rO(n).x, zk(n), Pk(n), Kk(n, s)),
				i = t ? r(rO(n).y, Lk(n), Uk(n), Kk(n, s)) : rO(n).y;
			return YO(o, XO(a, i)), A.some(a)
		})(e, t, o, n, s).map(E),
		JO = KO(-1, !1),
		QO = KO(1, !1),
		ZO = KO(-1, !0),
		e_ = KO(1, !0),
		t_ = {
			"top-left": A.some(((e, t) => {
				iO(e, aO(Vk(t), Hk(t)))
			})),
			top: A.some(((e, t) => {
				iO(e, aO(Yk(t), Hk(t)))
			})),
			"top-right": A.some(((e, t) => {
				iO(e, aO(Wk(t), Hk(t)))
			})),
			right: A.some(((e, t) => {
				iO(e, aO(Wk(t), Xk(t)))
			})),
			"bottom-right": A.some(((e, t) => {
				iO(e, aO(Wk(t), jk(t)))
			})),
			bottom: A.some(((e, t) => {
				iO(e, aO(Yk(t), jk(t)))
			})),
			"bottom-left": A.some(((e, t) => {
				iO(e, aO(Vk(t), jk(t)))
			})),
			left: A.some(((e, t) => {
				iO(e, aO(Vk(t), Xk(t)))
			}))
		};
	var o_ = Object.freeze({
		__proto__: null,
		setValueFrom: (e, t, o) => {
			const n = AO(e, t, o.left),
				s = VO(e, t, o.top),
				r = XO(n, s);
			return YO(e, r), r
		},
		setToMin: (e, t) => {
			const o = zk(t),
				n = Lk(t);
			YO(e, XO(o, n))
		},
		setToMax: (e, t) => {
			const o = Pk(t),
				n = Uk(t);
			YO(e, XO(o, n))
		},
		getValueFromEvent: e => Nk(e),
		setPositionFromValue: (e, t, o, n) => {
			const s = rO(o),
				r = DO(e, n.getSpectrum(e), s.x, n.getLeftEdge(e), n.getRightEdge(e), o),
				a = PO(e, n.getSpectrum(e), s.y, n.getTopEdge(e), n.getBottomEdge(e), o),
				i = Kt(t.element) / 2,
				l = Ut(t.element) / 2;
			Mt(t.element, "left", r - i + "px"), Mt(t.element, "top", a - l + "px")
		},
		onLeft: JO,
		onRight: QO,
		onUp: ZO,
		onDown: e_,
		edgeActions: t_
	});
	const n_ = qm({
			name: "Slider",
			configFields: [ws("stepSize", 1), ws("speedMultiplier", 10), ws("onChange", b), ws("onChoose", b), ws("onInit", b), ws("onDragStart", b), ws("onDragEnd", b), ws("snapToGrid", !1), ws("rounded", !0), gs("snapStart"), as("model", es("mode", {
				x: [ws("minX", 0), ws("maxX", 100), ns("value", (e => en(e.mode.minX))), rs("getInitialValue"), wi("manager", zO)],
				y: [ws("minY", 0), ws("maxY", 100), ns("value", (e => en(e.mode.minY))), rs("getInitialValue"), wi("manager", qO)],
				xy: [ws("minX", 0), ws("maxX", 100), ws("minY", 0), ws("maxY", 100), ns("value", (e => en({
					x: e.mode.minX,
					y: e.mode.minY
				}))), rs("getInitialValue"), wi("manager", o_)]
			})), $u("sliderBehaviours", [bh, ju]), ns("mouseIsDown", (() => en(!1)))],
			partFields: Fk,
			factory: (e, t, o, n) => {
				const s = t => Im(t, e, "thumb"),
					r = t => Im(t, e, "spectrum"),
					a = t => Bm(t, e, "left-edge"),
					i = t => Bm(t, e, "right-edge"),
					l = t => Bm(t, e, "top-edge"),
					c = t => Bm(t, e, "bottom-edge"),
					d = e.model,
					u = d.manager,
					m = (t, o) => {
						u.setPositionFromValue(t, o, e, {
							getLeftEdge: a,
							getRightEdge: i,
							getTopEdge: l,
							getBottomEdge: c,
							getSpectrum: r
						})
					},
					g = (e, t) => {
						d.value.set(t);
						const o = s(e);
						m(e, o)
					},
					p = t => {
						const o = e.mouseIsDown.get();
						e.mouseIsDown.set(!1), o && Bm(t, e, "thumb").each((o => {
							const n = d.value.get();
							e.onChoose(t, o, n)
						}))
					},
					h = (t, o) => {
						o.stop(), e.mouseIsDown.set(!0), e.onDragStart(t, s(t))
					},
					f = (t, o) => {
						o.stop(), e.onDragEnd(t, s(t)), p(t)
					},
					b = t => {
						Bm(t, e, "spectrum").map(bh.focusIn)
					};
				return {
					uid: e.uid,
					dom: e.dom,
					components: t,
					behaviours: qu(e.sliderBehaviours, [bh.config({
						mode: "special",
						focusIn: b
					}), ju.config({
						store: {
							mode: "manual",
							getValue: e => d.value.get(),
							setValue: g
						}
					}), dc.config({
						channels: {
							[Tu()]: {
								onReceive: p
							}
						}
					})]),
					events: Hr([Wr(Rk(), ((t, o) => {
						((t, o) => {
							g(t, o);
							const n = s(t);
							e.onChange(t, n, o), A.some(!0)
						})(t, o.event.value)
					})), Jr(((t, o) => {
						const n = d.getInitialValue();
						d.value.set(n);
						const a = s(t);
						m(t, a);
						const i = r(t);
						e.onInit(t, a, i, d.value.get())
					})), Wr(Hs(), h), Wr(Us(), f), Wr(js(), ((e, t) => {
						b(e), h(e, t)
					})), Wr(qs(), f)]),
					apis: {
						resetToMin: t => {
							u.setToMin(t, e)
						},
						resetToMax: t => {
							u.setToMax(t, e)
						},
						setValue: g,
						refresh: m
					},
					domModification: {
						styles: {
							position: "relative"
						}
					}
				}
			},
			apis: {
				setValue: (e, t, o) => {
					e.setValue(t, o)
				},
				resetToMin: (e, t) => {
					e.resetToMin(t)
				},
				resetToMax: (e, t) => {
					e.resetToMax(t)
				},
				refresh: (e, t) => {
					e.refresh(t)
				}
			}
		}),
		s_ = Di("rgb-hex-update"),
		r_ = Di("slider-update"),
		a_ = Di("palette-update"),
		i_ = "form",
		l_ = [$u("formBehaviours", [ju])],
		c_ = e => "<alloy.field." + e + ">",
		d_ = (e, t) => ({
			uid: e.uid,
			dom: e.dom,
			components: t,
			behaviours: qu(e.formBehaviours, [ju.config({
				store: {
					mode: "manual",
					getValue: t => {
						const o = Rm(t, e);
						return le(o, ((e, t) => e().bind((e => {
							return o = Jm.getCurrent(e), n = new Error(`Cannot find a current component to extract the value from for form part '${t}': ` + si(e.element)), o.fold((() => ln.error(n)), ln.value);
							var o, n
						})).map(ju.getValue)))
					},
					setValue: (t, o) => {
						ie(o, ((o, n) => {
							Bm(t, e, n).each((e => {
								Jm.getCurrent(e).each((e => {
									ju.setValue(e, o)
								}))
							}))
						}))
					}
				}
			})]),
			apis: {
				getField: (t, o) => Bm(t, e, o).bind(Jm.getCurrent)
			}
		}),
		u_ = {
			getField: $i(((e, t, o) => e.getField(t, o))),
			sketch: e => {
				const t = (() => {
						const e = [];
						return {
							field: (t, o) => (e.push(t), Tm(i_, c_(t), o)),
							record: y(e)
						}
					})(),
					o = e(t),
					n = t.record(),
					s = L(n, (e => vm({
						name: e,
						pname: c_(e)
					})));
				return Um(i_, l_, s, d_, o)
			}
		},
		m_ = Di("valid-input"),
		g_ = Di("invalid-input"),
		p_ = Di("validating-input"),
		h_ = "colorcustom.rgb.",
		f_ = {
			isEnabled: E,
			setEnabled: b,
			immediatelyShow: b,
			immediatelyHide: b
		},
		b_ = (e, t, o, n, s, r) => {
			const a = (e, t) => {
					const o = t.get();
					e !== o.isEnabled() && (o.setEnabled(e), e ? o.immediatelyShow() : o.immediatelyHide())
				},
				i = (o, n, s) => bk.config({
					invalidClass: t("invalid"),
					notify: {
						onValidate: e => {
							Rr(e, p_, {
								type: o
							})
						},
						onValid: e => {
							a(!1, s), Rr(e, m_, {
								type: o,
								value: ju.getValue(e)
							})
						},
						onInvalid: e => {
							a(!0, s), Rr(e, g_, {
								type: o,
								value: ju.getValue(e)
							})
						}
					},
					validator: {
						validate: t => {
							const o = ju.getValue(t),
								s = n(o) ? ln.value(!0) : ln.error(e("aria.input.invalid"));
							return iC(s)
						},
						validateOnLoad: !1
					}
				}),
				l = (o, n, a, l, c) => {
					const d = en(f_),
						u = e(h_ + "range"),
						m = GC.parts.label({
							dom: {
								tag: "label"
							},
							components: [dl(a)]
						}),
						g = GC.parts.field({
							data: c,
							factory: Fx,
							inputAttributes: {
								type: "text",
								"aria-label": l,
								..."hex" === n ? {
									"aria-live": "polite"
								} : {}
							},
							inputClasses: [t("textfield")],
							inputBehaviours: ca([i(n, o, d), Hb.config({}), Jb.config({
								...s({
									tooltipText: "",
									onSetup: e => {
										d.set({
											isEnabled: () => Jb.isEnabled(e),
											setEnabled: t => Jb.setEnabled(e, t),
											immediatelyShow: () => Jb.immediateOpenClose(e, !0),
											immediatelyHide: () => Jb.immediateOpenClose(e, !1)
										}), Jb.setEnabled(e, !1)
									},
									onShow: (o, s) => {
										Jb.setComponents(o, [{
											dom: {
												tag: "p",
												classes: [t("rgb-warning-note")]
											},
											components: [dl(e("hex" === n ? "colorcustom.rgb.invalidHex" : "colorcustom.rgb.invalid"))]
										}])
									}
								})
							})]),
							onSetValue: e => {
								bk.isInvalid(e) && bk.run(e).get(b)
							}
						}),
						p = Di("aria-invalid"),
						h = zb(r("invalid", A.some(p), "warning")),
						f = [m, g, zb({
							dom: {
								tag: "div",
								classes: [t("invalid-icon")]
							},
							components: [h.asSpec()]
						}).asSpec()],
						v = "hex" !== n ? [GC.parts["aria-descriptor"]({
							text: u
						})] : [],
						x = f.concat(v);
					return {
						dom: {
							tag: "div",
							attributes: {
								role: "presentation"
							},
							classes: [t("rgb-container")]
						},
						components: x
					}
				},
				c = (e, t) => {
					const o = t.red,
						n = t.green,
						s = t.blue;
					ju.setValue(e, {
						red: o,
						green: n,
						blue: s
					})
				},
				d = zb({
					dom: {
						tag: "div",
						classes: [t("rgba-preview")],
						styles: {
							"background-color": "white"
						},
						attributes: {
							role: "presentation"
						}
					}
				}),
				u = (e, t) => {
					d.getOpt(e).each((e => {
						Mt(e.element, "background-color", "#" + t.value)
					}))
				},
				m = Gm({
					factory: () => {
						const s = {
								red: en(A.some(255)),
								green: en(A.some(255)),
								blue: en(A.some(255)),
								hex: en(A.some("ffffff"))
							},
							r = e => s[e].get(),
							a = (e, t) => {
								s[e].set(t)
							},
							i = e => {
								const t = e.red,
									o = e.green,
									n = e.blue;
								a("red", A.some(t)), a("green", A.some(o)), a("blue", A.some(n))
							},
							m = (e, t) => {
								const o = t.event;
								"hex" !== o.type ? a(o.type, A.none()) : n(e)
							},
							g = (e, t) => {
								const n = t.event;
								(e => "hex" === e.type)(n) ? ((e, t) => {
									o(e);
									const n = Nw(t);
									a("hex", A.some(n.value));
									const s = Jw(n);
									c(e, s), i(s), Rr(e, s_, {
										hex: n
									}), u(e, n)
								})(e, n.value) : ((e, t, o) => {
									const n = parseInt(o, 10);
									a(t, A.some(n)), r("red").bind((e => r("green").bind((t => r("blue").map((o => Yw(e, t, o, 1))))))).each((t => {
										const o = ((e, t) => {
											const o = Uw(t);
											return u_.getField(e, "hex").each((t => {
												Bh.isFocused(t) || ju.setValue(e, {
													hex: o.value
												})
											})), o
										})(e, t);
										Rr(e, s_, {
											hex: o
										}), u(e, o)
									}))
								})(e, n.type, n.value)
							},
							p = t => ({
								label: e(h_ + t + ".label"),
								description: e(h_ + t + ".description")
							}),
							h = p("red"),
							f = p("green"),
							b = p("blue"),
							v = p("hex");
						return xn(u_.sketch((o => ({
							dom: {
								tag: "form",
								classes: [t("rgb-form")],
								attributes: {
									"aria-label": e("aria.color.picker")
								}
							},
							components: [o.field("red", GC.sketch(l(Xw, "red", h.label, h.description, 255))), o.field("green", GC.sketch(l(Xw, "green", f.label, f.description, 255))), o.field("blue", GC.sketch(l(Xw, "blue", b.label, b.description, 255))), o.field("hex", GC.sketch(l(Vw, "hex", v.label, v.description, "ffffff"))), d.asSpec()],
							formBehaviours: ca([bk.config({
								invalidClass: t("form-invalid")
							}), Th("rgb-form-events", [Wr(m_, g), Wr(g_, m), Wr(p_, m)])])
						}))), {
							apis: {
								updateHex: (e, t) => {
									ju.setValue(e, {
										hex: t.value
									}), ((e, t) => {
										const o = Jw(t);
										c(e, o), i(o)
									})(e, t), u(e, t)
								}
							}
						})
					},
					name: "RgbForm",
					configFields: [],
					apis: {
						updateHex: (e, t, o) => {
							e.updateHex(t, o)
						}
					},
					extraApis: {}
				});
			return m
		},
		v_ = (e, t, o, n) => {
			const s = Gm({
				name: "ColourPicker",
				configFields: [rs("dom"), ws("onValidHex", b), ws("onInvalidHex", b)],
				factory: s => {
					const r = b_(e, t, s.onValidHex, s.onInvalidHex, o, n),
						a = ((e, t) => {
							const o = n_.parts.spectrum({
									dom: {
										tag: "canvas",
										attributes: {
											role: "presentation"
										},
										classes: [t("sv-palette-spectrum")]
									}
								}),
								n = n_.parts.thumb({
									dom: {
										tag: "div",
										attributes: {
											role: "presentation"
										},
										classes: [t("sv-palette-thumb")],
										innerHtml: `<div class=${t("sv-palette-inner-thumb")} role="presentation"></div>`
									}
								}),
								s = (e, t) => {
									const {
										width: o,
										height: n
									} = e, s = e.getContext("2d");
									if (null === s) return;
									s.fillStyle = t, s.fillRect(0, 0, o, n);
									const r = s.createLinearGradient(0, 0, o, 0);
									r.addColorStop(0, "rgba(255,255,255,1)"), r.addColorStop(1, "rgba(255,255,255,0)"), s.fillStyle = r, s.fillRect(0, 0, o, n);
									const a = s.createLinearGradient(0, 0, 0, n);
									a.addColorStop(0, "rgba(0,0,0,0)"), a.addColorStop(1, "rgba(0,0,0,1)"), s.fillStyle = a, s.fillRect(0, 0, o, n)
								};
							return Gm({
								factory: r => {
									const a = y({
											x: 0,
											y: 0
										}),
										i = ca([Jm.config({
											find: A.some
										}), Bh.config({})]);
									return n_.sketch({
										dom: {
											tag: "div",
											attributes: {
												role: "slider",
												"aria-valuetext": e(["Saturation {0}%, Brightness {1}%", 0, 0])
											},
											classes: [t("sv-palette")]
										},
										model: {
											mode: "xy",
											getInitialValue: a
										},
										rounded: !1,
										components: [o, n],
										onChange: (t, o, n) => {
											h(n) || St(t.element, "aria-valuetext", e(["Saturation {0}%, Brightness {1}%", Math.floor(n.x), Math.floor(100 - n.y)])), Rr(t, a_, {
												value: n
											})
										},
										onInit: (e, t, o, n) => {
											s(o.element.dom, eS(tS))
										},
										sliderBehaviours: i
									})
								},
								name: "SaturationBrightnessPalette",
								configFields: [],
								apis: {
									setHue: (e, t, o) => {
										((e, t) => {
											const o = e.components()[0].element.dom,
												n = hS(t, 100, 100),
												r = Kw(n);
											s(o, eS(r))
										})(t, o)
									},
									setThumb: (t, o, n) => {
										((t, o) => {
											const n = fS(Jw(o));
											n_.setValue(t, {
												x: n.saturation,
												y: 100 - n.value
											}), St(t.element, "aria-valuetext", e(["Saturation {0}%, Brightness {1}%", n.saturation, n.value]))
										})(o, n)
									}
								},
								extraApis: {}
							})
						})(e, t),
						i = {
							paletteRgba: en(tS),
							paletteHue: en(0)
						},
						l = zb(((e, t) => {
							const o = n_.parts.spectrum({
									dom: {
										tag: "div",
										classes: [t("hue-slider-spectrum")],
										attributes: {
											role: "presentation"
										}
									}
								}),
								n = n_.parts.thumb({
									dom: {
										tag: "div",
										classes: [t("hue-slider-thumb")],
										attributes: {
											role: "presentation"
										}
									}
								});
							return n_.sketch({
								dom: {
									tag: "div",
									classes: [t("hue-slider")],
									attributes: {
										role: "slider",
										"aria-valuemin": 0,
										"aria-valuemax": 360,
										"aria-valuenow": 120
									}
								},
								rounded: !1,
								model: {
									mode: "y",
									getInitialValue: y(0)
								},
								components: [o, n],
								sliderBehaviours: ca([Bh.config({})]),
								onChange: (e, t, o) => {
									St(e.element, "aria-valuenow", Math.floor(360 - 3.6 * o)), Rr(e, r_, {
										value: o
									})
								}
							})
						})(0, t)),
						c = zb(a.sketch({})),
						d = zb(r.sketch({})),
						u = (e, t, o) => {
							c.getOpt(e).each((e => {
								a.setHue(e, o)
							}))
						},
						m = (e, t) => {
							d.getOpt(e).each((e => {
								r.updateHex(e, t)
							}))
						},
						g = (e, t, o) => {
							l.getOpt(e).each((e => {
								n_.setValue(e, (e => 100 - e / 360 * 100)(o))
							}))
						},
						p = (e, t) => {
							c.getOpt(e).each((e => {
								a.setThumb(e, t)
							}))
						},
						f = (e, t, o, n) => {
							((e, t) => {
								const o = Jw(e);
								i.paletteRgba.set(o), i.paletteHue.set(t)
							})(t, o), V(n, (n => {
								n(e, t, o)
							}))
						};
					return {
						uid: s.uid,
						dom: s.dom,
						components: [c.asSpec(), l.asSpec(), d.asSpec()],
						behaviours: ca([Th("colour-picker-events", [Wr(s_, (() => {
							const e = [u, g, p];
							return (t, o) => {
								const n = o.event.hex,
									s = (e => fS(Jw(e)))(n);
								f(t, n, s.hue, e)
							}
						})()), Wr(a_, (() => {
							const e = [m];
							return (t, o) => {
								const n = o.event.value,
									s = i.paletteHue.get(),
									r = hS(s, n.x, 100 - n.y),
									a = bS(r);
								f(t, a, s, e)
							}
						})()), Wr(r_, (() => {
							const e = [u, m];
							return (t, o) => {
								const n = (e => (100 - e) / 100 * 360)(o.event.value),
									s = i.paletteRgba.get(),
									r = fS(s),
									a = hS(n, r.saturation, r.value),
									l = bS(a);
								f(t, l, n, e)
							}
						})())]), Jm.config({
							find: e => d.getOpt(e)
						}), bh.config({
							mode: "acyclic"
						})])
					}
				}
			});
			return s
		},
		x_ = () => Jm.config({
			find: A.some
		}),
		y_ = e => Jm.config({
			find: t => ct(t.element, e).bind((e => t.getSystem().getByDom(e).toOptional()))
		}),
		w_ = Fn([ws("preprocess", w), ws("postprocess", w)]),
		S_ = (e, t) => {
			const o = Qn("RepresentingConfigs.memento processors", w_, t);
			return ju.config({
				store: {
					mode: "manual",
					getValue: t => {
						const n = e.get(t),
							s = ju.getValue(n);
						return o.postprocess(s)
					},
					setValue: (t, n) => {
						const s = o.preprocess(n),
							r = e.get(t);
						ju.setValue(r, s)
					}
				}
			})
		},
		C_ = (e, t, o) => ju.config({
			store: {
				mode: "manual",
				...e.map((e => ({
					initialValue: e
				}))).getOr({}),
				getValue: t,
				setValue: o
			}
		}),
		k_ = (e, t, o) => C_(e, (e => t(e.element)), ((e, t) => o(e.element, t))),
		O_ = e => ju.config({
			store: {
				mode: "memory",
				initialValue: e
			}
		}),
		__ = {
			"colorcustom.rgb.red.label": "R",
			"colorcustom.rgb.red.description": "Red channel",
			"colorcustom.rgb.green.label": "G",
			"colorcustom.rgb.green.description": "Green channel",
			"colorcustom.rgb.blue.label": "B",
			"colorcustom.rgb.blue.description": "Blue channel",
			"colorcustom.rgb.hex.label": "#",
			"colorcustom.rgb.hex.description": "Hex color code",
			"colorcustom.rgb.range": "Range 0 to 255",
			"colorcustom.rgb.invalid": "Numbers only, 0 to 255",
			"colorcustom.rgb.invalidHex": "Hexadecimal only, 000000 to FFFFFF",
			"aria.color.picker": "Color Picker",
			"aria.input.invalid": "Invalid input"
		};
	var T_ = tinymce.util.Tools.resolve("tinymce.Resource");
	const E_ = e => be(e, "init");
	var A_ = tinymce.util.Tools.resolve("tinymce.util.Tools");
	const M_ = Di("browse.files.event"),
		D_ = (e, t, o) => {
			const n = (e, t) => {
					t.stop()
				},
				s = e => (t, o) => {
					V(e, (e => {
						e(t, o)
					}))
				},
				r = zb({
					dom: {
						tag: "input",
						attributes: {
							type: "file",
							accept: "image/*"
						},
						styles: {
							display: "none"
						}
					},
					behaviours: ca([Th("input-file-events", [Yr(tr()), Yr(pr())])])
				}),
				a = e.label.map((e => JC(e, t))),
				i = GC.parts.field({
					factory: Rb,
					dom: {
						tag: "button",
						styles: {
							position: "relative"
						},
						classes: ["tox-button", "tox-button--secondary"]
					},
					components: [dl(t.translate("Browse for an image")), r.asSpec()],
					action: e => {
						r.get(e).element.dom.click()
					},
					buttonBehaviours: ca([x_(), O_(o.getOr([])), Hb.config({}), lw((() => t.checkUiComponentContext(e.context).shouldDisable)), bw((() => t.checkUiComponentContext(e.context)))])
				}),
				l = {
					dom: {
						tag: "div",
						classes: ["tox-dropzone-container"]
					},
					behaviours: ca([ug.config({
						disabled: () => t.checkUiComponentContext(e.context).shouldDisable
					}), bw((() => t.checkUiComponentContext(e.context))), Hh.config({
						toggleClass: "dragenter",
						toggleOnExecute: !1
					}), Th("dropzone-events", [Wr("dragenter", s([n, Hh.toggle])), Wr("dragleave", s([n, Hh.toggle])), Wr("dragover", n), Wr("drop", s([n, (e, t) => {
						var o;
						if (!ug.isDisabled(e)) {
							const n = t.event.raw;
							Rr(e, M_, {
								files: null === (o = n.dataTransfer) || void 0 === o ? void 0 : o.files
							})
						}
					}])), Wr(er(), ((e, t) => {
						const o = t.event.raw.target;
						Rr(e, M_, {
							files: o.files
						})
					}))])]),
					components: [{
						dom: {
							tag: "div",
							classes: ["tox-dropzone"],
							styles: {}
						},
						components: [{
							dom: {
								tag: "p"
							},
							components: [dl(t.translate("Drop an image here"))]
						}, i]
					}]
				};
			return YC(a, l, ["tox-form__group--stretched"], [Th("handle-files", [Wr(M_, ((o, n) => {
				GC.getField(o).each((o => {
					var s, r;
					s = o, (r = n.event.files) && (ju.setValue(s, ((e, t) => {
						const o = A_.explode(t.getOption("images_file_types"));
						return P(ne(e), (e => R(o, (t => Ee(e.name.toLowerCase(), `.${t.toLowerCase()}`)))))
					})(r, t)), Rr(s, QC, {
						name: e.name
					}))
				}))
			}))])])
		},
		B_ = (e, t) => {
			let o = null;
			const n = () => {
				c(o) || (clearTimeout(o), o = null)
			};
			return {
				cancel: n,
				throttle: (...s) => {
					n(), o = setTimeout((() => {
						o = null, e.apply(null, s)
					}), t)
				}
			}
		},
		I_ = Di("alloy-fake-before-tabstop"),
		F_ = Di("alloy-fake-after-tabstop"),
		R_ = e => ({
			dom: {
				tag: "div",
				styles: {
					width: "1px",
					height: "1px",
					outline: "none"
				},
				attributes: {
					tabindex: "0"
				},
				classes: e
			},
			behaviours: ca([Bh.config({
				ignore: !0
			}), Hb.config({})])
		}),
		N_ = (e, t) => ({
			dom: {
				tag: "div",
				classes: ["tox-navobj", ...e.getOr([])]
			},
			components: [R_([I_]), t, R_([F_])],
			behaviours: ca([y_(1)])
		}),
		z_ = (e, t) => {
			Rr(e, Js(), {
				raw: {
					which: 9,
					shiftKey: t
				}
			})
		},
		L_ = (e, t) => {
			const o = t.element;
			Ca(o, I_) ? z_(e, !0) : Ca(o, F_) && z_(e, !1)
		},
		V_ = e => BC(e, ["." + I_, "." + F_].join(","), T),
		H_ = Di("update-dialog"),
		P_ = Di("update-title"),
		U_ = Di("update-body"),
		W_ = Di("update-footer"),
		j_ = Di("body-send-message"),
		$_ = Di("dialog-focus-shifted"),
		G_ = Mo().browser,
		q_ = G_.isSafari(),
		Y_ = G_.isFirefox(),
		X_ = q_ || Y_,
		K_ = G_.isChromium(),
		J_ = ({
			scrollTop: e,
			scrollHeight: t,
			clientHeight: o
		}) => Math.ceil(e) + o >= t,
		Q_ = (e, t) => e.scrollTo(0, "bottom" === t ? 99999999 : t),
		Z_ = (e, t, o) => {
			const n = e.dom;
			A.from(n.contentDocument).fold(o, (e => {
				let o = 0;
				const s = ((e, t) => {
						const o = e.body;
						return A.from(!/^<!DOCTYPE (html|HTML)/.test(t) && (!K_ && !q_ || g(o) && (0 !== o.scrollTop || Math.abs(o.scrollHeight - o.clientHeight) > 1)) ? o : e.documentElement)
					})(e, t).map((e => (o = e.scrollTop, e))).forall(J_),
					r = () => {
						const e = n.contentWindow;
						g(e) && (s ? Q_(e, "bottom") : !s && X_ && 0 !== o && Q_(e, o))
					};
				q_ && n.addEventListener("load", r, {
					once: !0
				}, { passive: true }), e.open(), e.write(t), e.close(), q_ || r()
			}))
		},
		eT = Ce(X_, q_ ? 500 : 200).map((e => ((e, t) => {
			let o = null,
				n = null;
			return {
				cancel: () => {
					c(o) || (clearTimeout(o), o = null, n = null)
				},
				throttle: (...s) => {
					n = s, c(o) && (o = setTimeout((() => {
						const t = n;
						o = null, n = null, e.apply(null, t)
					}), t))
				}
			}
		})(Z_, e))),
		tT = Di("toolbar.button.execute"),
		oT = Di("common-button-display-events"),
		nT = {
			[mr()]: ["disabling", "alloy.base.behaviour", "toggling", "toolbar-button-events", "tooltipping"],
			[Cr()]: ["toolbar-button-events", oT],
			[kr()]: ["toolbar-button-events", "dropdown-events", "tooltipping"],
			[js()]: ["focusing", "alloy.base.behaviour", oT]
		},
		sT = e => Mt(e.element, "width", It(e.element, "width")),
		rT = (e, t, o) => ax(e, {
			tag: "span",
			classes: ["tox-icon", "tox-tbtn__icon-wrap"],
			behaviours: o
		}, t),
		aT = (e, t) => rT(e, t, []),
		iT = (e, t) => rT(e, t, [_h.config({})]),
		lT = (e, t, o) => ({
			dom: {
				tag: "span",
				classes: [`${t}__select-label`]
			},
			components: [dl(o.translate(e))],
			behaviours: ca([_h.config({})])
		}),
		cT = Di("update-menu-text"),
		dT = Di("update-menu-icon"),
		uT = (e, t, o, n) => {
			const s = en(b),
				r = e.text.map((e => zb(lT(e, t, o.providers)))),
				a = e.icon.map((e => zb(iT(e, o.providers.icons)))),
				i = (e, t) => {
					const o = ju.getValue(e);
					return Bh.focus(o), Rr(o, "keydown", {
						raw: t.event.raw
					}), wC.close(o), A.some(!0)
				},
				l = e.role.fold((() => ({})), (e => ({
					role: e
				}))),
				c = A.from(e.listRole).map((e => ({
					listRole: e
				}))).getOr({}),
				d = e.ariaLabel.fold((() => ({})), (e => ({
					"aria-label": o.providers.translate(e)
				}))),
				u = ax("chevron-down", {
					tag: "div",
					classes: [`${t}__select-chevron`]
				}, o.providers.icons),
				m = Di("common-button-display-events"),
				p = "dropdown-events",
				h = zb(wC.sketch({
					...e.uid ? {
						uid: e.uid
					} : {},
					...l,
					...c,
					dom: {
						tag: "button",
						classes: [t, `${t}--select`].concat(L(e.classes, (e => `${t}--${e}`))),
						attributes: {
							...d,
							...g(n) ? {
								"data-mce-name": n
							} : {}
						}
					},
					components: yw([a.map((e => e.asSpec())), r.map((e => e.asSpec())), A.some(u)]),
					matchWidth: !0,
					useMinWidth: !0,
					onOpen: (t, o, n) => {
						e.searchable && (e => {
							Vx(e).each((e => Bh.focus(e)))
						})(n)
					},
					dropdownBehaviours: ca([...e.dropdownBehaviours, lw((() => e.disabled || o.providers.checkUiComponentContext(e.context).shouldDisable)), bw((() => o.providers.checkUiComponentContext(e.context))), vk.config({}), _h.config({}), ...e.tooltip.map((e => Jb.config(o.providers.tooltips.getConfig({
						tooltipText: o.providers.translate(e)
					})))).toArray(), Th(p, [mw(e, s), gw(e, s)]), Th(m, [Jr(((t, o) => {
						"listbox" !== e.listRole && sT(t)
					}))]), Th("update-dropdown-width-variable", [Wr(Sr(), ((e, t) => wC.close(e)))]), Th("menubutton-update-display-text", [Wr(cT, ((e, t) => {
						r.bind((t => t.getOpt(e))).each((e => {
							_h.set(e, [dl(o.providers.translate(t.event.text))])
						}))
					})), Wr(dT, ((e, t) => {
						a.bind((t => t.getOpt(e))).each((e => {
							_h.set(e, [iT(t.event.icon, o.providers.icons)])
						}))
					}))])]),
					eventOrder: xn(nT, {
						[js()]: ["focusing", "alloy.base.behaviour", "item-type-events", "normal-dropdown-events"],
						[Cr()]: ["toolbar-button-events", Jb.name(), p, m]
					}),
					sandboxBehaviours: ca([bh.config({
						mode: "special",
						onLeft: i,
						onRight: i
					}), Th("dropdown-sandbox-events", [Wr(Rx, ((e, t) => {
						(e => {
							const t = ju.getValue(e),
								o = Lx(e).map(Hx);
							wC.refetch(t).get((() => {
								const e = tC.getCoupled(t, "sandbox");
								o.each((t => Lx(e).each((e => ((e, t) => {
									ju.setValue(e, t.fetchPattern), e.element.dom.selectionStart = t.selectionStart, e.element.dom.selectionEnd = t.selectionEnd
								})(e, t)))))
							}))
						})(e), t.stop()
					})), Wr(Nx, ((e, t) => {
						((e, t) => {
							(e => ku.getState(e).bind(wg.getHighlighted).bind(wg.getHighlighted))(e).each((o => {
								((e, t, o, n) => {
									const s = {
										...n,
										target: t
									};
									e.getSystem().triggerEvent(o, t, s)
								})(e, o.element, t.event.eventType, t.event.interactionEvent)
							}))
						})(e, t), t.stop()
					}))])]),
					lazySink: o.getSink,
					toggleClass: `${t}--active`,
					parts: {
						menu: {
							...Ax(0, e.columns, e.presets),
							fakeFocus: e.searchable,
							..."listbox" === e.listRole ? {} : {
								onHighlightItem: SC,
								onCollapseMenu: (e, t, o) => {
									wg.getHighlighted(o).each((t => {
										SC(e, o, t)
									}))
								},
								onDehighlightItem: CC
							}
						}
					},
					getAnchorOverrides: () => ({
						maxHeightFunction: (e, t) => {
							Lc()(e, t - 10)
						}
					}),
					fetch: t => aC(C(e.fetch, t))
				}));
			return h.asSpec()
		},
		mT = e => "separator" === e.type,
		gT = {
			type: "separator"
		},
		pT = (e, t) => {
			const o = ((e, t) => {
				const o = W(e, ((e, o) => (e => r(e))(o) ? "" === o ? e : "|" === o ? e.length > 0 && !mT(e[e.length - 1]) ? e.concat([gT]) : e : be(t, o.toLowerCase()) ? e.concat([t[o.toLowerCase()]]) : e : e.concat([o])), []);
				return o.length > 0 && mT(o[o.length - 1]) && o.pop(), o
			})(r(e) ? e.split(" ") : e, t);
			return U(o, ((e, o) => {
				if ((e => be(e, "getSubmenuItems"))(o)) {
					const n = (e => {
							const t = fe(e, "value").getOrThunk((() => Di("generated-menu-item")));
							return xn({
								value: t
							}, e)
						})(o),
						s = ((e, t) => {
							const o = e.getSubmenuItems(),
								n = pT(o, t);
							return {
								item: e,
								menus: xn(n.menus, {
									[e.value]: n.items
								}),
								expansions: xn(n.expansions, {
									[e.value]: e.value
								})
							}
						})(n, t);
					return {
						menus: xn(e.menus, s.menus),
						items: [s.item, ...e.items],
						expansions: xn(e.expansions, s.expansions)
					}
				}
				return {
					...e,
					items: [o, ...e.items]
				}
			}), {
				menus: {},
				expansions: {},
				items: []
			})
		},
		hT = (e, t, o, n) => {
			const s = Di("primary-menu"),
				r = pT(e, o.shared.providers.menuItems());
			if (0 === r.items.length) return A.none();
			const a = (e => e.search.fold((() => ({
					searchMode: "no-search"
				})), (e => ({
					searchMode: "search-with-field",
					placeholder: e.placeholder
				}))))(n),
				i = EC(s, r.items, t, o, n.isHorizontalMenu, a),
				l = (e => e.search.fold((() => ({
					searchMode: "no-search"
				})), (e => ({
					searchMode: "search-with-results"
				}))))(n),
				c = le(r.menus, ((e, n) => EC(n, e, t, o, !1, l))),
				d = xn(c, Ds(s, i));
			return A.from(bf.tieredData(s, d, r.expansions))
		},
		fT = e => !be(e, "items"),
		bT = "data-value",
		vT = (e, t, o, n, s) => L(o, (o => fT(o) ? {
			type: "togglemenuitem",
			...s ? {} : {
				role: "option"
			},
			text: o.text,
			value: o.value,
			active: o.value === n,
			onAction: () => {
				ju.setValue(e, o.value), Rr(e, QC, {
					name: t
				}), Bh.focus(e)
			}
		} : {
			type: "nestedmenuitem",
			text: o.text,
			getSubmenuItems: () => vT(e, t, o.items, n, s)
		})),
		xT = (e, t) => se(e, (e => fT(e) ? Ce(e.value === t, e) : xT(e.items, t))),
		yT = Gm({
			name: "HtmlSelect",
			configFields: [rs("options"), $u("selectBehaviours", [Bh, ju]), ws("selectClasses", []), ws("selectAttributes", {}), gs("data")],
			factory: (e, t) => {
				const o = L(e.options, (e => ({
						dom: {
							tag: "option",
							value: e.value,
							innerHtml: e.text
						}
					}))),
					n = e.data.map((e => Ds("initialValue", e))).getOr({});
				return {
					uid: e.uid,
					dom: {
						tag: "select",
						classes: e.selectClasses,
						attributes: e.selectAttributes
					},
					components: o,
					behaviours: qu(e.selectBehaviours, [Bh.config({}), ju.config({
						store: {
							mode: "manual",
							getValue: e => tl(e.element),
							setValue: (t, o) => {
								const n = te(e.options);
								j(e.options, (e => e.value === o)).isSome() ? ol(t.element, o) : -1 === t.element.dom.selectedIndex && "" === o && n.each((e => ol(t.element, e.value)))
							},
							...n
						}
					})])
				}
			}
		}),
		wT = y([ws("field1Name", "field1"), ws("field2Name", "field2"), xi("onLockedChange"), hi(["lockClass"]), ws("locked", !1), Yu("coupledFieldBehaviours", [Jm, ju])]),
		ST = (e, t) => vm({
			factory: GC,
			name: e,
			overrides: e => ({
				fieldBehaviours: ca([Th("coupled-input-behaviour", [Wr(Zs(), (o => {
					((e, t, o) => Bm(e, t, o).bind(Jm.getCurrent))(o, e, t).each((t => {
						Bm(o, e, "lock").each((n => {
							Hh.isOn(n) && e.onLockedChange(o, t, n)
						}))
					}))
				}))])])
			})
		}),
		CT = y([ST("field1", "field2"), ST("field2", "field1"), vm({
			factory: Rb,
			schema: [rs("dom")],
			name: "lock",
			overrides: e => ({
				buttonBehaviours: ca([Hh.config({
					selected: e.locked,
					toggleClass: e.markers.lockClass,
					aria: {
						mode: "pressed"
					}
				})])
			})
		})]),
		kT = qm({
			name: "FormCoupledInputs",
			configFields: wT(),
			partFields: CT(),
			factory: (e, t, o, n) => ({
				uid: e.uid,
				dom: e.dom,
				components: t,
				behaviours: Xu(e.coupledFieldBehaviours, [Jm.config({
					find: A.some
				}), ju.config({
					store: {
						mode: "manual",
						getValue: t => {
							const o = zm(t, e, ["field1", "field2"]);
							return {
								[e.field1Name]: ju.getValue(o.field1()),
								[e.field2Name]: ju.getValue(o.field2())
							}
						},
						setValue: (t, o) => {
							const n = zm(t, e, ["field1", "field2"]);
							ve(o, e.field1Name) && ju.setValue(n.field1(), o[e.field1Name]), ve(o, e.field2Name) && ju.setValue(n.field2(), o[e.field2Name])
						}
					}
				})]),
				apis: {
					getField1: t => Bm(t, e, "field1"),
					getField2: t => Bm(t, e, "field2"),
					getLock: t => Bm(t, e, "lock")
				}
			}),
			apis: {
				getField1: (e, t) => e.getField1(t),
				getField2: (e, t) => e.getField2(t),
				getLock: (e, t) => e.getLock(t)
			}
		}),
		OT = e => {
			const t = /^\s*(\d+(?:\.\d+)?)\s*(|cm|mm|in|px|pt|pc|em|ex|ch|rem|vw|vh|vmin|vmax|%)\s*$/.exec(e);
			if (null !== t) {
				const e = parseFloat(t[1]),
					o = t[2];
				return ln.value({
					value: e,
					unit: o
				})
			}
			return ln.error(e)
		},
		_T = (e, t) => {
			const o = {
					"": 96,
					px: 96,
					pt: 72,
					cm: 2.54,
					pc: 12,
					mm: 25.4,
					in: 1
				},
				n = e => be(o, e);
			return e.unit === t ? A.some(e.value) : n(e.unit) && n(t) ? o[e.unit] === o[t] ? A.some(e.value) : A.some(e.value / o[e.unit] * o[t]) : A.none()
		},
		TT = e => A.none(),
		ET = (e, t) => {
			const o = e.label.map((e => JC(e, t))),
				n = [ug.config({
					disabled: () => e.disabled || t.checkUiComponentContext(e.context).shouldDisable
				}), bw((() => t.checkUiComponentContext(e.context))), bh.config({
					mode: "execution",
					useEnter: !0 !== e.multiline,
					useControlEnter: !0 === e.multiline,
					execute: e => (Fr(e, ok), A.some(!0))
				}), Th("textfield-change", [Wr(Zs(), ((t, o) => {
					Rr(t, QC, {
						name: e.name
					})
				})), Wr(dr(), ((t, o) => {
					Rr(t, QC, {
						name: e.name
					})
				}))]), Hb.config({})],
				s = e.validation.map((e => bk.config({
					getRoot: e => at(e.element),
					invalidClass: "tox-invalid",
					validator: {
						validate: t => {
							const o = ju.getValue(t),
								n = e.validator(o);
							return iC(!0 === n ? ln.value(o) : ln.error(n))
						},
						validateOnLoad: e.validateOnLoad
					}
				}))).toArray(),
				r = {
					...e.placeholder.fold(y({}), (e => ({
						placeholder: t.translate(e)
					}))),
					...e.inputMode.fold(y({}), (e => ({
						inputmode: e
					}))),
					"data-mce-name": e.name
				},
				a = GC.parts.field({
					tag: !0 === e.multiline ? "textarea" : "input",
					...e.data.map((e => ({
						data: e
					}))).getOr({}),
					inputAttributes: r,
					inputClasses: [e.classname],
					inputBehaviours: ca(G([n, s])),
					selectOnFocus: !1,
					factory: Fx
				}),
				i = e.multiline ? {
					dom: {
						tag: "div",
						classes: ["tox-textarea-wrap"]
					},
					components: [a]
				} : a,
				l = (e.flex ? ["tox-form__group--stretched"] : []).concat(e.maximized ? ["tox-form-group--maximize"] : []),
				c = [ug.config({
					disabled: () => e.disabled || t.checkUiComponentContext(e.context).shouldDisable,
					onDisabled: e => {
						GC.getField(e).each(ug.disable)
					},
					onEnabled: e => {
						GC.getField(e).each(ug.enable)
					}
				}), bw((() => t.checkUiComponentContext(e.context)))];
			return YC(o, i, l, c)
		},
		AT = (e, t) => t.getAnimationRoot.fold((() => e.element), (t => t(e))),
		MT = e => e.dimension.property,
		DT = (e, t) => e.dimension.getDimension(t),
		BT = (e, t) => {
			const o = AT(e, t);
			Oa(o, [t.shrinkingClass, t.growingClass])
		},
		IT = (e, t) => {
			Sa(e.element, t.openClass), ya(e.element, t.closedClass), Mt(e.element, MT(t), "0px"), Vt(e.element)
		},
		FT = (e, t) => {
			Sa(e.element, t.closedClass), ya(e.element, t.openClass), Lt(e.element, MT(t))
		},
		RT = (e, t, o, n) => {
			o.setCollapsed(), Mt(e.element, MT(t), DT(t, e.element)), BT(e, t), IT(e, t), t.onStartShrink(e), t.onShrunk(e)
		},
		NT = (e, t, o, n) => {
			const s = n.getOrThunk((() => DT(t, e.element)));
			o.setCollapsed(), Mt(e.element, MT(t), s), Vt(e.element);
			const r = AT(e, t);
			Sa(r, t.growingClass), ya(r, t.shrinkingClass), IT(e, t), t.onStartShrink(e)
		},
		zT = (e, t, o) => {
			const n = DT(t, e.element);
			("0px" === n ? RT : NT)(e, t, o, A.some(n))
		},
		LT = (e, t, o) => {
			const n = AT(e, t),
				s = Ca(n, t.shrinkingClass),
				r = DT(t, e.element);
			FT(e, t);
			const a = DT(t, e.element);
			(s ? () => {
				Mt(e.element, MT(t), r), Vt(e.element)
			} : () => {
				IT(e, t)
			})(), Sa(n, t.shrinkingClass), ya(n, t.growingClass), FT(e, t), Mt(e.element, MT(t), a), o.setExpanded(), t.onStartGrow(e)
		},
		VT = (e, t, o) => {
			const n = AT(e, t);
			return !0 === Ca(n, t.growingClass)
		},
		HT = (e, t, o) => {
			const n = AT(e, t);
			return !0 === Ca(n, t.shrinkingClass)
		};
	var PT = Object.freeze({
			__proto__: null,
			refresh: (e, t, o) => {
				if (o.isExpanded()) {
					Lt(e.element, MT(t));
					const o = DT(t, e.element);
					Mt(e.element, MT(t), o)
				}
			},
			grow: (e, t, o) => {
				o.isExpanded() || LT(e, t, o)
			},
			shrink: (e, t, o) => {
				o.isExpanded() && zT(e, t, o)
			},
			immediateShrink: (e, t, o) => {
				o.isExpanded() && RT(e, t, o)
			},
			hasGrown: (e, t, o) => o.isExpanded(),
			hasShrunk: (e, t, o) => o.isCollapsed(),
			isGrowing: VT,
			isShrinking: HT,
			isTransitioning: (e, t, o) => VT(e, t) || HT(e, t),
			toggleGrow: (e, t, o) => {
				(o.isExpanded() ? zT : LT)(e, t, o)
			},
			disableTransitions: BT,
			immediateGrow: (e, t, o) => {
				o.isExpanded() || (FT(e, t), Mt(e.element, MT(t), DT(t, e.element)), BT(e, t), o.setExpanded(), t.onStartGrow(e), t.onGrown(e))
			}
		}),
		UT = Object.freeze({
			__proto__: null,
			exhibit: (e, t, o) => {
				const n = t.expanded;
				return na(n ? {
					classes: [t.openClass],
					styles: {}
				} : {
					classes: [t.closedClass],
					styles: Ds(t.dimension.property, "0px")
				})
			},
			events: (e, t) => Hr([Kr(nr(), ((o, n) => {
				n.event.raw.propertyName === e.dimension.property && (BT(o, e), t.isExpanded() && Lt(o.element, e.dimension.property), (t.isExpanded() ? e.onGrown : e.onShrunk)(o))
			}))])
		}),
		WT = [rs("closedClass"), rs("openClass"), rs("shrinkingClass"), rs("growingClass"), gs("getAnimationRoot"), bi("onShrunk"), bi("onStartShrink"), bi("onGrown"), bi("onStartGrow"), ws("expanded", !1), as("dimension", es("property", {
			width: [wi("property", "width"), wi("getDimension", (e => Kt(e) + "px"))],
			height: [wi("property", "height"), wi("getDimension", (e => Ut(e) + "px"))]
		}))];
	const jT = ua({
			fields: WT,
			name: "sliding",
			active: UT,
			apis: PT,
			state: Object.freeze({
				__proto__: null,
				init: e => {
					const t = en(e.expanded);
					return la({
						isExpanded: () => !0 === t.get(),
						isCollapsed: () => !1 === t.get(),
						setCollapsed: C(t.set, !1),
						setExpanded: C(t.set, !0),
						readState: () => "expanded: " + t.get()
					})
				}
			})
		}),
		$T = e => ({
			isEnabled: () => !ug.isDisabled(e),
			setEnabled: t => ug.set(e, !t),
			setActive: t => {
				const o = e.element;
				t ? (ya(o, "tox-tbtn--enabled"), St(o, "aria-pressed", !0)) : (Sa(o, "tox-tbtn--enabled"), Tt(o, "aria-pressed"))
			},
			isActive: () => Ca(e.element, "tox-tbtn--enabled"),
			setText: t => {
				Rr(e, cT, {
					text: t
				})
			},
			setIcon: t => Rr(e, dT, {
				icon: t
			})
		}),
		GT = (e, t, o, n, s = !0, r) => uT({
			text: e.text,
			icon: e.icon,
			tooltip: e.tooltip,
			ariaLabel: e.tooltip,
			searchable: e.search.isSome(),
			role: n,
			fetch: (t, n) => {
				const s = {
					pattern: e.search.isSome() ? kC(t) : ""
				};
				e.fetch((t => {
					n(hT(t, ux.CLOSE_ON_EXECUTE, o, {
						isHorizontalMenu: !1,
						search: e.search
					}))
				}), s, $T(t))
			},
			onSetup: e.onSetup,
			getApi: $T,
			columns: 1,
			presets: "normal",
			classes: [],
			dropdownBehaviours: [...s ? [Hb.config({})] : []],
			context: e.context
		}, t, o.shared, r),
		qT = (e, t, o) => {
			const n = e => n => {
					const s = !n.isActive();
					n.setActive(s), e.storage.set(s), o.shared.getSink().each((o => {
						t().getOpt(o).each((t => {
							mc(t.element), Rr(t, tk, {
								name: e.name,
								value: e.storage.get()
							})
						}))
					}))
				},
				s = e => t => {
					t.setActive(e.storage.get())
				};
			return t => {
				t(L(e, (e => {
					const t = e.text.fold((() => ({})), (e => ({
						text: e
					})));
					return {
						type: e.type,
						active: !1,
						...t,
						context: e.context,
						onAction: n(e),
						onSetup: s(e)
					}
				})))
			}
		},
		YT = e => ({
			dom: {
				tag: "span",
				classes: ["tox-tree__label"],
				attributes: {
					"aria-label": e
				}
			},
			components: [dl(e)]
		}),
		XT = (e, t, o) => {
			e.customStateIcon.each((n => t.push(QT(n, o.shared.providers.icons, e.customStateIconTooltip.fold((() => []), (e => [Jb.config(o.shared.providers.tooltips.getConfig({
				tooltipText: e
			}))])), ["tox-icon-custom-state"], e.customStateIconTooltip.fold((() => ({})), (e => ({
				title: e
			})))))))
		},
		KT = Di("leaf-label-event-id"),
		JT = ({
			leaf: e,
			onLeafAction: t,
			visible: o,
			treeId: n,
			selectedId: s,
			backstage: r
		}) => {
			const a = e.menu.map((e => GT(e, "tox-mbtn", r, A.none(), o))),
				i = [YT(e.title)];
			return XT(e, i, r), a.each((e => i.push(e))), Rb.sketch({
				dom: {
					tag: "div",
					classes: ["tox-tree--leaf__label", "tox-trbtn"].concat(o ? ["tox-tree--leaf__label--visible"] : [])
				},
				components: i,
				role: "treeitem",
				action: o => {
					t(e.id), o.getSystem().broadcastOn([`update-active-item-${n}`], {
						value: e.id
					})
				},
				eventOrder: {
					[Js()]: [KT, "keying"]
				},
				buttonBehaviours: ca([...o ? [Hb.config({})] : [], Hh.config({
					toggleClass: "tox-trbtn--enabled",
					toggleOnExecute: !1,
					aria: {
						mode: "selected"
					}
				}), dc.config({
					channels: {
						[`update-active-item-${n}`]: {
							onReceive: (t, o) => {
								(o.value === e.id ? Hh.on : Hh.off)(t)
							}
						}
					}
				}), Th(KT, [Jr(((t, o) => {
					s.each((o => {
						(o === e.id ? Hh.on : Hh.off)(t)
					}))
				})), Wr(Js(), ((e, t) => {
					const o = "ArrowLeft" === t.event.raw.code,
						n = "ArrowRight" === t.event.raw.code;
					o ? (Sl(e.element, ".tox-tree--directory").each((t => {
						e.getSystem().getByDom(t).each((e => {
							kl(t, ".tox-tree--directory__label").each((t => {
								e.getSystem().getByDom(t).each(Bh.focus)
							}))
						}))
					})), t.stop()) : n && t.stop()
				}))])])
			})
		},
		QT = (e, t, o, n, s) => ax(e, {
			tag: "span",
			classes: ["tox-tree__icon-wrap", "tox-icon"].concat(n || []),
			behaviours: o,
			attributes: s
		}, t),
		ZT = Di("directory-label-event-id"),
		eE = ({
			directory: e,
			visible: t,
			noChildren: o,
			backstage: n
		}) => {
			const s = e.menu.map((e => GT(e, "tox-mbtn", n, A.none()))),
				r = [{
					dom: {
						tag: "div",
						classes: ["tox-chevron"]
					},
					components: [("chevron-right", a = n.shared.providers.icons, QT("chevron-right", a, []))]
				}, YT(e.title)];
			var a;
			XT(e, r, n), s.each((e => {
				r.push(e)
			}));
			const i = t => {
				Sl(t.element, ".tox-tree--directory").each((o => {
					t.getSystem().getByDom(o).each((o => {
						const n = !Hh.isOn(o);
						Hh.toggle(o), Rr(t, "expand-tree-node", {
							expanded: n,
							node: e.id
						})
					}))
				}))
			};
			return Rb.sketch({
				dom: {
					tag: "div",
					classes: ["tox-tree--directory__label", "tox-trbtn"].concat(t ? ["tox-tree--directory__label--visible"] : [])
				},
				components: r,
				action: i,
				eventOrder: {
					[Js()]: [ZT, "keying"]
				},
				buttonBehaviours: ca([...t ? [Hb.config({})] : [], Th(ZT, [Wr(Js(), ((e, t) => {
					const n = "ArrowRight" === t.event.raw.code,
						s = "ArrowLeft" === t.event.raw.code;
					n && o && t.stop(), (n || s) && Sl(e.element, ".tox-tree--directory").each((o => {
						e.getSystem().getByDom(o).each((o => {
							!Hh.isOn(o) && n || Hh.isOn(o) && s ? (i(e), t.stop()) : s && !Hh.isOn(o) && (Sl(o.element, ".tox-tree--directory").each((e => {
								kl(e, ".tox-tree--directory__label").each((e => {
									o.getSystem().getByDom(e).each(Bh.focus)
								}))
							})), t.stop())
						}))
					}))
				}))])])
			})
		},
		tE = ({
			children: e,
			onLeafAction: t,
			visible: o,
			treeId: n,
			expandedIds: s,
			selectedId: r,
			backstage: a
		}) => ({
			dom: {
				tag: "div",
				classes: ["tox-tree--directory__children"]
			},
			components: e.map((e => "leaf" === e.type ? JT({
				leaf: e,
				selectedId: r,
				onLeafAction: t,
				visible: o,
				treeId: n,
				backstage: a
			}) : nE({
				directory: e,
				expandedIds: s,
				selectedId: r,
				onLeafAction: t,
				labelTabstopping: o,
				treeId: n,
				backstage: a
			}))),
			behaviours: ca([jT.config({
				dimension: {
					property: "height"
				},
				closedClass: "tox-tree--directory__children--closed",
				openClass: "tox-tree--directory__children--open",
				growingClass: "tox-tree--directory__children--growing",
				shrinkingClass: "tox-tree--directory__children--shrinking",
				expanded: o
			}), _h.config({})])
		}),
		oE = Di("directory-event-id"),
		nE = ({
			directory: e,
			onLeafAction: t,
			labelTabstopping: o,
			treeId: n,
			backstage: s,
			expandedIds: r,
			selectedId: a
		}) => {
			const {
				children: i
			} = e, l = en(r), c = r.includes(e.id);
			return {
				dom: {
					tag: "div",
					classes: ["tox-tree--directory"],
					attributes: {
						role: "treeitem"
					}
				},
				components: [eE({
					directory: e,
					visible: o,
					noChildren: 0 === e.children.length,
					backstage: s
				}), tE({
					children: i,
					expandedIds: r,
					selectedId: a,
					onLeafAction: t,
					visible: c,
					treeId: n,
					backstage: s
				})],
				behaviours: ca([Th(oE, [Jr(((e, t) => {
					Hh.set(e, c)
				})), Wr("expand-tree-node", ((e, t) => {
					const {
						expanded: o,
						node: n
					} = t.event;
					l.set(o ? [...l.get(), n] : l.get().filter((e => e !== n)))
				}))]), Hh.config({
					...e.children.length > 0 ? {
						aria: {
							mode: "expanded"
						}
					} : {},
					toggleClass: "tox-tree--directory--expanded",
					onToggled: (e, o) => {
						const r = e.components()[1],
							c = (d = o, i.map((e => "leaf" === e.type ? JT({
								leaf: e,
								selectedId: a,
								onLeafAction: t,
								visible: d,
								treeId: n,
								backstage: s
							}) : nE({
								directory: e,
								expandedIds: l.get(),
								selectedId: a,
								onLeafAction: t,
								labelTabstopping: d,
								treeId: n,
								backstage: s
							}))));
						var d;
						o ? jT.grow(r) : jT.shrink(r), _h.set(r, c)
					}
				})])
			}
		},
		sE = Di("tree-event-id");
	var rE = Object.freeze({
		__proto__: null,
		events: (e, t) => {
			const o = e.stream.streams.setup(e, t);
			return Hr([Wr(e.event, o), Qr((() => t.cancel()))].concat(e.cancelEvent.map((e => [Wr(e, (() => t.cancel()))])).getOr([])))
		}
	});
	const aE = e => {
		const t = en(null);
		return la({
			readState: () => ({
				timer: null !== t.get() ? "set" : "unset"
			}),
			setTimer: e => {
				t.set(e)
			},
			cancel: () => {
				const e = t.get();
				null !== e && e.cancel()
			}
		})
	};
	var iE = Object.freeze({
			__proto__: null,
			throttle: aE,
			init: e => e.stream.streams.state(e)
		}),
		lE = [as("stream", es("mode", {
			throttle: [rs("delay"), ws("stopEvent", !0), wi("streams", {
				setup: (e, t) => {
					const o = e.stream,
						n = B_(e.onStream, o.delay);
					return t.setTimer(n), (e, t) => {
						n.throttle(e, t), o.stopEvent && t.stop()
					}
				},
				state: aE
			})]
		})), ws("event", "input"), gs("cancelEvent"), xi("onStream")];
	const cE = ua({
			fields: lE,
			name: "streaming",
			active: rE,
			state: iE
		}),
		dE = (e, t, o) => {
			const n = ju.getValue(o);
			ju.setValue(t, n), mE(t)
		},
		uE = (e, t) => {
			const o = e.element,
				n = tl(o),
				s = o.dom;
			"number" !== kt(o, "type") && t(s, n)
		},
		mE = e => {
			uE(e, ((e, t) => e.setSelectionRange(t.length, t.length)))
		},
		gE = y("alloy.typeahead.itemexecute"),
		pE = y([gs("lazySink"), rs("fetch"), ws("minChars", 5), ws("responseTime", 1e3), bi("onOpen"), ws("getHotspot", A.some), ws("getAnchorOverrides", y({})), ws("layouts", A.none()), ws("eventOrder", {}), As("model", {}, [ws("getDisplayText", (e => void 0 !== e.meta && void 0 !== e.meta.text ? e.meta.text : e.value)), ws("selectsOver", !0), ws("populateFromBrowse", !0)]), bi("onSetValue"), vi("onExecute"), bi("onItemExecute"), ws("inputClasses", []), ws("inputAttributes", {}), ws("inputStyles", {}), ws("matchWidth", !0), ws("useMinWidth", !1), ws("dismissOnBlur", !0), hi(["openClass"]), gs("initialData"), gs("listRole"), $u("typeaheadBehaviours", [Bh, ju, cE, bh, Hh, tC]), ns("lazyTypeaheadComp", (() => en(A.none))), ns("previewing", (() => en(!0)))].concat(Mx()).concat(vC())),
		hE = y([xm({
			schema: [pi()],
			name: "menu",
			overrides: e => ({
				fakeFocus: !0,
				onHighlightItem: (t, o, n) => {
					e.previewing.get() ? e.lazyTypeaheadComp.get().each((t => {
						((e, t, o) => {
							if (e.selectsOver) {
								const n = ju.getValue(t),
									s = e.getDisplayText(n),
									r = ju.getValue(o);
								return 0 === e.getDisplayText(r).indexOf(s) ? A.some((() => {
									dE(0, t, o), ((e, t) => {
										uE(e, ((e, o) => e.setSelectionRange(t, o.length)))
									})(t, s.length)
								})) : A.none()
							}
							return A.none()
						})(e.model, t, n).fold((() => {
							e.model.selectsOver ? (wg.dehighlight(o, n), e.previewing.set(!0)) : e.previewing.set(!1)
						}), (t => {
							t(), e.previewing.set(!1)
						}))
					})) : e.lazyTypeaheadComp.get().each((t => {
						e.model.populateFromBrowse && dE(e.model, t, n), Ot(n.element, "id").each((e => St(t.element, "aria-activedescendant", e)))
					}))
				},
				onExecute: (t, o) => e.lazyTypeaheadComp.get().map((e => (Rr(e, gE(), {
					item: o
				}), !0))),
				onHover: (t, o) => {
					e.previewing.set(!1), e.lazyTypeaheadComp.get().each((t => {
						e.model.populateFromBrowse && dE(e.model, t, o)
					}))
				}
			})
		})]),
		fE = qm({
			name: "Typeahead",
			configFields: pE(),
			partFields: hE(),
			factory: (e, t, o, n) => {
				const s = (t, o, s) => {
						e.previewing.set(!1);
						const r = tC.getCoupled(t, "sandbox");
						if (ku.isOpen(r)) Jm.getCurrent(r).each((e => {
							wg.getHighlighted(e).fold((() => {
								s(e)
							}), (() => {
								Vr(r, e.element, "keydown", o)
							}))
						}));
						else {
							const o = e => {
								Jm.getCurrent(e).each(s)
							};
							uC(e, a(t), t, r, n, o, hf.HighlightMenuAndItem).get(b)
						}
					},
					r = Dx(e),
					a = e => t => t.map((t => {
						const o = he(t.menus),
							n = q(o, (e => P(e.items, (e => "item" === e.type))));
						return ju.getState(e).update(L(n, (e => e.data))), t
					})),
					i = e => Jm.getCurrent(e),
					l = "typeaheadevents",
					c = [Bh.config({}), ju.config({
						onSetValue: e.onSetValue,
						store: {
							mode: "dataset",
							getDataKey: e => tl(e.element),
							getFallbackEntry: e => ({
								value: e,
								meta: {}
							}),
							setValue: (t, o) => {
								ol(t.element, e.model.getDisplayText(o))
							},
							...e.initialData.map((e => Ds("initialValue", e))).getOr({})
						}
					}), cE.config({
						stream: {
							mode: "throttle",
							delay: e.responseTime,
							stopEvent: !1
						},
						onStream: (t, o) => {
							const s = tC.getCoupled(t, "sandbox");
							if (Bh.isFocused(t) && tl(t.element).length >= e.minChars) {
								const o = i(s).bind((e => wg.getHighlighted(e).map(ju.getValue)));
								e.previewing.set(!0);
								const r = t => {
									i(s).each((t => {
										o.fold((() => {
											e.model.selectsOver && wg.highlightFirst(t)
										}), (e => {
											wg.highlightBy(t, (t => ju.getValue(t).value === e.value)), wg.getHighlighted(t).orThunk((() => (wg.highlightFirst(t), A.none())))
										}))
									}))
								};
								uC(e, a(t), t, s, n, r, hf.HighlightJustMenu).get(b)
							}
						},
						cancelEvent: br()
					}), bh.config({
						mode: "special",
						onDown: (e, t) => (s(e, t, wg.highlightFirst), A.some(!0)),
						onEscape: e => {
							const t = tC.getCoupled(e, "sandbox");
							return ku.isOpen(t) ? (ku.close(t), A.some(!0)) : A.none()
						},
						onUp: (e, t) => (s(e, t, wg.highlightLast), A.some(!0)),
						onEnter: t => {
							const o = tC.getCoupled(t, "sandbox"),
								n = ku.isOpen(o);
							if (n && !e.previewing.get()) return i(o).bind((e => wg.getHighlighted(e))).map((e => (Rr(t, gE(), {
								item: e
							}), !0)));
							{
								const s = ju.getValue(t);
								return Fr(t, br()), e.onExecute(o, t, s), n && ku.close(o), A.some(!0)
							}
						}
					}), Hh.config({
						toggleClass: e.markers.openClass,
						aria: {
							mode: "expanded"
						}
					}), tC.config({
						others: {
							sandbox: t => fC(e, t, {
								onOpen: () => Hh.on(t),
								onClose: () => {
									e.lazyTypeaheadComp.get().each((e => Tt(e.element, "aria-activedescendant"))), Hh.off(t)
								}
							})
						}
					}), Th(l, [Jr((t => {
						e.lazyTypeaheadComp.set(A.some(t))
					})), Qr((t => {
						e.lazyTypeaheadComp.set(A.none())
					})), ea((t => {
						const o = b;
						gC(e, a(t), t, n, o, hf.HighlightMenuAndItem).get(b)
					})), Wr(gE(), ((t, o) => {
						const n = tC.getCoupled(t, "sandbox");
						dE(e.model, t, o.event.item), Fr(t, br()), e.onItemExecute(t, n, o.event.item, ju.getValue(t)), ku.close(n), mE(t)
					}))].concat(e.dismissOnBlur ? [Wr(cr(), (e => {
						const t = tC.getCoupled(e, "sandbox");
						fc(t.element).isNone() && ku.close(t)
					}))] : []))],
					d = {
						[kr()]: [ju.name(), cE.name(), l],
						...e.eventOrder
					};
				return {
					uid: e.uid,
					dom: Ix(xn(e, {
						inputAttributes: {
							role: "combobox",
							"aria-autocomplete": "list",
							"aria-haspopup": "true"
						}
					})),
					behaviours: {
						...r,
						...qu(e.typeaheadBehaviours, c)
					},
					eventOrder: d
				}
			}
		}),
		bE = e => ({
			...e,
			toCached: () => bE(e.toCached()),
			bindFuture: t => bE(e.bind((e => e.fold((e => iC(ln.error(e))), (e => t(e)))))),
			bindResult: t => bE(e.map((e => e.bind(t)))),
			mapResult: t => bE(e.map((e => e.map(t)))),
			mapError: t => bE(e.map((e => e.mapError(t)))),
			foldResult: (t, o) => e.map((e => e.fold(t, o))),
			withTimeout: (t, o) => bE(aC((n => {
				let s = !1;
				const r = setTimeout((() => {
					s = !0, n(ln.error(o()))
				}), t);
				e.get((e => {
					s || (clearTimeout(r), n(e))
				}))
			})))
		}),
		vE = e => bE(aC(e)),
		xE = (e, t, o = [], n, s, r, a) => {
			const i = t.fold((() => ({})), (e => ({
					action: e
				}))),
				l = {
					buttonBehaviours: ca([iw((() => !e.enabled || a.checkUiComponentContext(e.context).shouldDisable)), bw((() => a.checkUiComponentContext(e.context))), Hb.config({}), ...r.map((e => Jb.config(a.tooltips.getConfig({
						tooltipText: a.translate(e)
					})))).toArray(), Th("button press", [Ur("click")])].concat(o)),
					eventOrder: {
						click: ["button press", "alloy.base.behaviour"],
						mousedown: ["button press", "alloy.base.behaviour"]
					},
					...i
				},
				c = xn(l, {
					dom: n
				});
			return xn(c, {
				components: s
			})
		},
		yE = (e, t, o, n = [], s) => {
			const r = {
					tag: "button",
					classes: ["tox-tbtn"],
					attributes: {
						...e.tooltip.map((e => ({
							"aria-label": o.translate(e)
						}))).getOr({}),
						"data-mce-name": s
					}
				},
				a = e.icon.map((e => aT(e, o.icons))),
				i = yw([a]);
			return xE(e, t, n, r, i, e.tooltip, o)
		},
		wE = e => {
			switch (e) {
				case "primary":
					return ["tox-button"];
				case "toolbar":
					return ["tox-tbtn"];
				default:
					return ["tox-button", "tox-button--secondary"]
			}
		},
		SE = (e, t, o, n = [], s = []) => {
			const r = o.translate(e.text),
				a = e.icon.map((e => aT(e, o.icons))),
				i = [a.getOrThunk((() => dl(r)))],
				l = e.buttonType.getOr(e.primary || e.borderless ? "primary" : "secondary"),
				c = {
					tag: "button",
					classes: [...wE(l), ...a.isSome() ? ["tox-button--icon"] : [], ...e.borderless ? ["tox-button--naked"] : [], ...s],
					attributes: {
						"aria-label": r,
						"data-mce-name": e.text
					}
				},
				d = e.icon.map(y(r));
			return xE(e, t, n, c, i, d, o)
		},
		CE = (e, t, o, n = [], s = []) => {
			const r = SE(e, A.some(t), o, n, s);
			return Rb.sketch(r)
		},
		kE = (e, t) => o => {
			"custom" === t ? Rr(o, tk, {
				name: e,
				value: {}
			}) : "submit" === t ? Fr(o, ok) : "cancel" === t ? Fr(o, ek) : console.error("Unknown button type: ", t)
		},
		OE = (e, t, o) => {
			if (((e, t) => "menu" === t)(0, t)) {
				const t = () => r,
					n = e,
					s = {
						...e,
						type: "menubutton",
						search: A.none(),
						onSetup: t => (t.setEnabled(e.enabled), b),
						fetch: qT(n.items, t, o)
					},
					r = zb(GT(s, "tox-tbtn", o, A.none(), !0, e.text.or(e.tooltip).getOrUndefined()));
				return r.asSpec()
			}
			if (((e, t) => "custom" === t || "cancel" === t || "submit" === t)(0, t)) {
				const n = kE(e.name, t),
					s = {
						...e,
						context: "cancel" === t ? "any" : e.context,
						borderless: !1
					};
				return CE(s, n, o.shared.providers, [])
			}
			if (((e, t) => "togglebutton" === t)(0, t)) return ((e, t, o) => {
				var n, s;
				const r = e.icon.map((e => iT(e, t.icons))).map(zb),
					a = e.buttonType.getOr(e.primary ? "primary" : "secondary"),
					i = {
						...e,
						name: null !== (n = e.name) && void 0 !== n ? n : "",
						primary: "primary" === a,
						tooltip: e.tooltip,
						enabled: null !== (s = e.enabled) && void 0 !== s && s,
						borderless: !1
					},
					l = i.tooltip.or(e.text).map((e => ({
						"aria-label": t.translate(e)
					}))).getOr({}),
					c = wE(null != a ? a : "secondary"),
					d = e.icon.isSome() && e.text.isSome(),
					u = {
						tag: "button",
						classes: [...c.concat(e.icon.isSome() ? ["tox-button--icon"] : []), ...e.active ? ["tox-button--enabled"] : [], ...d ? ["tox-button--icon-and-text"] : []],
						attributes: {
							...l,
							...g(o) ? {
								"data-mce-name": o
							} : {}
						}
					},
					m = t.translate(e.text.getOr("")),
					p = dl(m),
					h = [...yw([r.map((e => e.asSpec()))]), ...e.text.isSome() ? [p] : []],
					f = xE(i, A.some((o => {
						Rr(o, tk, {
							name: e.name,
							value: {
								setIcon: e => {
									r.map((n => n.getOpt(o).each((o => {
										_h.set(o, [iT(e, t.icons)])
									}))))
								}
							}
						})
					})), [], u, h, e.tooltip, t);
				return Rb.sketch(f)
			})(e, o.shared.providers, e.text.or(e.tooltip).getOrUndefined());
			throw console.error("Unknown footer button type: ", t), new Error("Unknown footer button type")
		},
		_E = {
			type: "separator"
		},
		TE = e => ({
			type: "menuitem",
			value: e.url,
			text: e.title,
			meta: {
				attach: e.attach
			},
			onAction: b
		}),
		EE = (e, t) => ({
			type: "menuitem",
			value: t,
			text: e,
			meta: {
				attach: void 0
			},
			onAction: b
		}),
		AE = (e, t) => (e => L(e, TE))(((e, t) => P(t, (t => t.type === e)))(e, t)),
		ME = e => AE("header", e.targets),
		DE = e => AE("anchor", e.targets),
		BE = e => A.from(e.anchorTop).map((e => EE("<top>", e))).toArray(),
		IE = e => A.from(e.anchorBottom).map((e => EE("<bottom>", e))).toArray(),
		FE = (e, t) => {
			const o = e.toLowerCase();
			return P(t, (e => {
				var t;
				const n = void 0 !== e.meta && void 0 !== e.meta.text ? e.meta.text : e.text,
					s = null !== (t = e.value) && void 0 !== t ? t : "";
				return _e(n.toLowerCase(), o) || _e(s.toLowerCase(), o)
			}))
		},
		RE = Di("aria-invalid"),
		NE = (e, t) => {
			e.dom.checked = t
		},
		zE = e => e.dom.checked,
		LE = e => (t, o, n, s, r) => fe(o, "name").fold((() => e(o, s, A.none(), r)), (a => t.field(a, e(o, s, fe(n, a), r)))),
		VE = {
			bar: LE(((e, t) => ((e, t) => ({
				dom: {
					tag: "div",
					classes: ["tox-bar", "tox-form__controls-h-stack"]
				},
				components: L(e.items, t.interpreter)
			}))(e, t.shared))),
			collection: LE(((e, t, o) => ik(e, t.shared.providers, o))),
			alertbanner: LE(((e, t) => ((e, t) => {
				const o = nx(e.icon, t.icons);
				return UC.sketch({
					dom: {
						tag: "div",
						attributes: {
							role: "alert"
						},
						classes: ["tox-notification", "tox-notification--in", `tox-notification--${e.level}`]
					},
					components: [{
						dom: {
							tag: "div",
							classes: ["tox-notification__icon"],
							innerHtml: e.url ? void 0 : o
						},
						components: e.url ? [Rb.sketch({
							dom: {
								tag: "button",
								classes: ["tox-button", "tox-button--naked", "tox-button--icon"],
								innerHtml: o,
								attributes: {
									title: t.translate(e.iconTooltip)
								}
							},
							action: t => Rr(t, tk, {
								name: "alert-banner",
								value: e.url
							}),
							buttonBehaviours: ca([sx()])
						})] : void 0
					}, {
						dom: {
							tag: "div",
							classes: ["tox-notification__body"],
							innerHtml: t.translate(e.text)
						}
					}]
				})
			})(e, t.shared.providers))),
			input: LE(((e, t, o) => ((e, t, o) => ET({
				name: e.name,
				multiline: !1,
				label: e.label,
				inputMode: e.inputMode,
				placeholder: e.placeholder,
				flex: !1,
				disabled: !e.enabled,
				classname: "tox-textfield",
				validation: A.none(),
				maximized: e.maximized,
				data: o,
				context: e.context
			}, t))(e, t.shared.providers, o))),
			textarea: LE(((e, t, o) => ((e, t, o) => ET({
				name: e.name,
				multiline: !0,
				label: e.label,
				inputMode: A.none(),
				placeholder: e.placeholder,
				flex: !0,
				disabled: !e.enabled,
				classname: "tox-textarea",
				validation: A.none(),
				maximized: e.maximized,
				data: o,
				context: e.context
			}, t))(e, t.shared.providers, o))),
			label: LE(((e, t, o, n) => ((e, t, o) => {
				const n = "tox-label",
					s = "center" === e.align ? [`${n}--center`] : [],
					r = "end" === e.align ? [`${n}--end`] : [],
					a = zb({
						dom: {
							tag: "label",
							classes: [n, ...s, ...r]
						},
						components: [dl(t.providers.translate(e.label))]
					}),
					i = L(e.items, t.interpreter);
				return {
					dom: {
						tag: "div",
						classes: ["tox-form__group"]
					},
					components: [a.asSpec(), ...i],
					behaviours: ca([x_(), _h.config({}), (l = A.none(), k_(l, ti, oi)), bh.config({
						mode: "acyclic"
					}), Th("label", [Jr((t => {
						e.for.each((e => {
							o(e).each((e => {
								a.getOpt(t).each((t => {
									var o;
									const n = null !== (o = kt(e.element, "id")) && void 0 !== o ? o : Di("form-field");
									St(e.element, "id", n), St(t.element, "for", n)
								}))
							}))
						}))
					}))])])
				};
				var l
			})(e, t.shared, n))),
			iframe: (mM = (e, t, o) => ((e, t, o) => {
				const n = "tox-dialog__iframe",
					s = e.transparent ? [] : [`${n}--opaque`],
					r = e.border ? ["tox-navobj-bordered"] : [],
					a = {
						...e.label.map((e => ({
							title: e
						}))).getOr({}),
						...o.map((e => ({
							srcdoc: e
						}))).getOr({}),
						...e.sandboxed ? {
							sandbox: "allow-scripts allow-same-origin"
						} : {}
					},
					i = ((e, t) => {
						const o = en(e.getOr(""));
						return {
							getValue: e => o.get(),
							setValue: (e, n) => {
								if (o.get() !== n) {
									const o = e.element,
										s = () => St(o, "srcdoc", n);
									t ? eT.fold(y(Z_), (e => e.throttle))(o, n, s) : s()
								}
								o.set(n)
							}
						}
					})(o, e.streamContent),
					l = e.label.map((e => JC(e, t))),
					c = GC.parts.field({
						factory: {
							sketch: e => N_(A.from(r), {
								uid: e.uid,
								dom: {
									tag: "iframe",
									attributes: a,
									classes: [n, ...s]
								},
								behaviours: ca([Hb.config({}), Bh.config({}), C_(o, i.getValue, i.setValue), dc.config({
									channels: {
										[$_]: {
											onReceive: (e, t) => {
												t.newFocus.each((t => {
													at(e.element).each((o => {
														(Ze(e.element, t) ? ya : Sa)(o, "tox-navobj-bordered-focus")
													}))
												}))
											}
										}
									}
								})])
							})
						}
					});
				return YC(l, c, ["tox-form__group--stretched"], [])
			})(e, t.shared.providers, o), (e, t, o, n, s) => {
				const r = xn(t, {
					source: "dynamic"
				});
				return LE(mM)(e, r, o, n, s)
			}),
			button: LE(((e, t) => ((e, t) => {
				const o = kE(e.name, "custom");
				return n = A.none(), s = GC.parts.field({
					factory: Rb,
					...SE(e, A.some(o), t, [O_(""), x_()])
				}), YC(n, s, [], []);
				var n, s
			})(e, t.shared.providers))),
			checkbox: LE(((e, t, o) => ((e, t, o) => {
				const n = e => (e.element.dom.click(), A.some(!0)),
					s = GC.parts.field({
						factory: {
							sketch: w
						},
						dom: {
							tag: "input",
							classes: ["tox-checkbox__input"],
							attributes: {
								type: "checkbox"
							}
						},
						behaviours: ca([x_(), ug.config({
							disabled: () => !e.enabled || t.checkUiComponentContext(e.context).shouldDisable,
							onDisabled: e => {
								at(e.element).each((e => ya(e, "tox-checkbox--disabled")))
							},
							onEnabled: e => {
								at(e.element).each((e => Sa(e, "tox-checkbox--disabled")))
							}
						}), Hb.config({}), Bh.config({}), k_(o, zE, NE), bh.config({
							mode: "special",
							onEnter: n,
							onSpace: n,
							stopSpaceKeyup: !0
						}), Th("checkbox-events", [Wr(er(), ((t, o) => {
							Rr(t, QC, {
								name: e.name
							})
						}))])])
					}),
					r = GC.parts.label({
						dom: {
							tag: "span",
							classes: ["tox-checkbox__label"]
						},
						components: [dl(t.translate(e.label))],
						behaviours: ca([vk.config({})])
					}),
					a = e => ax("checked" === e ? "selected" : "unselected", {
						tag: "span",
						classes: ["tox-icon", "tox-checkbox-icon__" + e]
					}, t.icons),
					i = zb({
						dom: {
							tag: "div",
							classes: ["tox-checkbox__icons"]
						},
						components: [a("checked"), a("unchecked")]
					});
				return GC.sketch({
					dom: {
						tag: "label",
						classes: ["tox-checkbox"]
					},
					components: [s, i.asSpec(), r],
					fieldBehaviours: ca([ug.config({
						disabled: () => !e.enabled || t.checkUiComponentContext(e.context).shouldDisable
					}), bw((() => t.checkUiComponentContext(e.context)))])
				})
			})(e, t.shared.providers, o))),
			colorinput: LE(((e, t, o) => ((e, t, o, n) => {
				const s = GC.parts.field({
						factory: Fx,
						inputClasses: ["tox-textfield"],
						data: n,
						onSetValue: e => bk.run(e).get(b),
						inputBehaviours: ca([ug.config({
							disabled: () => t.providers.isDisabled() || t.providers.checkUiComponentContext(e.context).shouldDisable
						}), bw((() => t.providers.checkUiComponentContext(e.context))), Hb.config({}), bk.config({
							invalidClass: "tox-textbox-field-invalid",
							getRoot: e => at(e.element),
							notify: {
								onValid: e => {
									const t = ju.getValue(e);
									Rr(e, xk, {
										color: t
									})
								}
							},
							validator: {
								validateOnLoad: !1,
								validate: e => {
									const t = ju.getValue(e);
									if (0 === t.length) return iC(ln.value(!0));
									{
										const e = Re("span");
										Mt(e, "background-color", t);
										const o = Rt(e, "background-color").fold((() => ln.error("blah")), (e => ln.value(t)));
										return iC(o)
									}
								}
							}
						})]),
						selectOnFocus: !1
					}),
					r = e.label.map((e => JC(e, t.providers))),
					a = (e, t) => {
						Rr(e, yk, {
							value: t
						})
					},
					i = zb(((e, t) => wC.sketch({
						dom: e.dom,
						components: e.components,
						toggleClass: "mce-active",
						dropdownBehaviours: ca([lw((() => t.providers.isDisabled() || t.providers.checkUiComponentContext(e.context).shouldDisable)), bw((() => t.providers.checkUiComponentContext(e.context))), vk.config({}), Hb.config({})]),
						layouts: e.layouts,
						sandboxClasses: ["tox-dialog__popups"],
						lazySink: t.getSink,
						fetch: o => aC((t => e.fetch(t))).map((n => A.from(AC(xn(US(Di("menu-value"), n, (t => {
							e.onItemAction(o, t)
						}), e.columns, e.presets, ux.CLOSE_ON_EXECUTE, T, t.providers), {
							movement: jS(e.columns, e.presets)
						}))))),
						parts: {
							menu: Ax(0, 0, e.presets)
						}
					}))({
						dom: {
							tag: "span",
							attributes: {
								"aria-label": t.providers.translate("Color swatch")
							}
						},
						layouts: {
							onRtl: () => [Xl, Yl, Zl],
							onLtr: () => [Yl, Xl, Zl]
						},
						components: [],
						fetch: FS(o.getColors(e.storageKey), e.storageKey, o.hasCustomColors()),
						columns: o.getColorCols(e.storageKey),
						presets: "color",
						onItemAction: (t, n) => {
							i.getOpt(t).each((t => {
								"custom" === n ? o.colorPicker((o => {
									o.fold((() => Fr(t, wk)), (o => {
										a(t, o), pS(e.storageKey, o)
									}))
								}), "#ffffff") : a(t, "remove" === n ? "" : n)
							}))
						},
						context: e.context
					}, t));
				return GC.sketch({
					dom: {
						tag: "div",
						classes: ["tox-form__group"]
					},
					components: r.toArray().concat([{
						dom: {
							tag: "div",
							classes: ["tox-color-input"]
						},
						components: [s, i.asSpec()]
					}]),
					fieldBehaviours: ca([Th("form-field-events", [Wr(xk, ((t, o) => {
						i.getOpt(t).each((e => {
							Mt(e.element, "background-color", o.event.color)
						})), Rr(t, QC, {
							name: e.name
						})
					})), Wr(yk, ((e, t) => {
						GC.getField(e).each((o => {
							ju.setValue(o, t.event.value), Jm.getCurrent(e).each(Bh.focus)
						}))
					})), Wr(wk, ((e, t) => {
						GC.getField(e).each((t => {
							Jm.getCurrent(e).each(Bh.focus)
						}))
					}))])])
				})
			})(e, t.shared, t.colorinput, o))),
			colorpicker: LE(((e, t, o) => ((e, t, o) => {
				const n = e => "tox-" + e,
					s = v_((e => t => r(t) ? e.translate(__[t]) : e.translate(t))(t), n, t.tooltips.getConfig, ((e, o, n = e, s = e) => ax(n, {
						tag: "div",
						classes: ["tox-icon", "tox-control-wrap__status-icon-" + e],
						attributes: {
							title: t.translate(s),
							"aria-live": "polite",
							...o.fold((() => ({})), (e => ({
								id: e
							})))
						}
					}, t.icons))),
					a = zb(s.sketch({
						dom: {
							tag: "div",
							classes: [n("color-picker-container")],
							attributes: {
								role: "presentation"
							}
						},
						onValidHex: e => {
							Rr(e, tk, {
								name: "hex-valid",
								value: !0
							})
						},
						onInvalidHex: e => {
							Rr(e, tk, {
								name: "hex-valid",
								value: !1
							})
						}
					}));
				return {
					dom: {
						tag: "div"
					},
					components: [a.asSpec()],
					behaviours: ca([C_(o, (e => {
						const t = a.get(e);
						return Jm.getCurrent(t).bind((e => ju.getValue(e).hex)).map((e => "#" + Oe(e, "#"))).getOr("")
					}), ((e, t) => {
						const o = A.from(/^#([a-fA-F0-9]{3}(?:[a-fA-F0-9]{3})?)/.exec(t)).bind((e => ee(e, 1))),
							n = a.get(e);
						Jm.getCurrent(n).fold((() => {
							console.log("Can not find form")
						}), (e => {
							ju.setValue(e, {
								hex: o.getOr("")
							}), u_.getField(e, "hex").each((e => {
								Fr(e, Zs())
							}))
						}))
					})), x_()])
				}
			})(0, t.shared.providers, o))),
			dropzone: LE(((e, t, o) => D_(e, t.shared.providers, o))),
			grid: LE(((e, t) => ((e, t) => ({
				dom: {
					tag: "div",
					classes: ["tox-form__grid", `tox-form__grid--${e.columns}col`]
				},
				components: L(e.items, t.interpreter)
			}))(e, t.shared))),
			listbox: LE(((e, t, o) => ((e, t, o) => {
				const n = R(e.items, (e => !fT(e))),
					s = t.shared.providers,
					r = o.bind((t => xT(e.items, t))).orThunk((() => te(e.items).filter(fT))),
					a = e.label.map((e => JC(e, s))),
					i = GC.parts.field({
						dom: {},
						factory: {
							sketch: o => uT({
								context: e.context,
								uid: o.uid,
								text: r.map((e => e.text)),
								icon: A.none(),
								tooltip: A.none(),
								role: Ce(!n, "combobox"),
								...n ? {} : {
									listRole: "listbox"
								},
								ariaLabel: e.label,
								fetch: (o, s) => {
									const r = vT(o, e.name, e.items, ju.getValue(o), n);
									s(hT(r, ux.CLOSE_ON_EXECUTE, t, {
										isHorizontalMenu: !1,
										search: A.none()
									}))
								},
								onSetup: y(b),
								getApi: y({}),
								columns: 1,
								presets: "normal",
								classes: [],
								dropdownBehaviours: [Hb.config({}), C_(r.map((e => e.value)), (e => kt(e.element, bT)), ((t, o) => {
									xT(e.items, o).each((e => {
										St(t.element, bT, e.value), Rr(t, cT, {
											text: e.text
										})
									}))
								}))]
							}, "tox-listbox", t.shared)
						}
					}),
					l = {
						dom: {
							tag: "div",
							classes: ["tox-listboxfield"]
						},
						components: [i]
					};
				return GC.sketch({
					dom: {
						tag: "div",
						classes: ["tox-form__group"]
					},
					components: G([a.toArray(), [l]]),
					fieldBehaviours: ca([ug.config({
						disabled: () => !e.enabled || s.checkUiComponentContext(e.context).shouldDisable,
						onDisabled: e => {
							GC.getField(e).each(ug.disable)
						},
						onEnabled: e => {
							GC.getField(e).each(ug.enable)
						}
					})])
				})
			})(e, t, o))),
			selectbox: LE(((e, t, o) => ((e, t, o) => {
				const n = L(e.items, (e => ({
						text: t.translate(e.text),
						value: e.value
					}))),
					s = e.label.map((e => JC(e, t))),
					r = GC.parts.field({
						dom: {},
						...o.map((e => ({
							data: e
						}))).getOr({}),
						selectAttributes: {
							size: e.size
						},
						options: n,
						factory: yT,
						selectBehaviours: ca([ug.config({
							disabled: () => !e.enabled || t.checkUiComponentContext(e.context).shouldDisable
						}), Hb.config({}), Th("selectbox-change", [Wr(er(), ((t, o) => {
							Rr(t, QC, {
								name: e.name
							})
						}))])])
					}),
					a = e.size > 1 ? A.none() : A.some(ax("chevron-down", {
						tag: "div",
						classes: ["tox-selectfield__icon-js"]
					}, t.icons)),
					i = {
						dom: {
							tag: "div",
							classes: ["tox-selectfield"]
						},
						components: G([
							[r], a.toArray()
						])
					};
				return GC.sketch({
					dom: {
						tag: "div",
						classes: ["tox-form__group"]
					},
					components: G([s.toArray(), [i]]),
					fieldBehaviours: ca([ug.config({
						disabled: () => !e.enabled || t.checkUiComponentContext(e.context).shouldDisable,
						onDisabled: e => {
							GC.getField(e).each(ug.disable)
						},
						onEnabled: e => {
							GC.getField(e).each(ug.enable)
						}
					}), bw((() => t.checkUiComponentContext(e.context)))])
				})
			})(e, t.shared.providers, o))),
			sizeinput: LE(((e, t) => ((e, t) => {
				let o = TT;
				const n = Di("ratio-event"),
					s = e => ax(e, {
						tag: "span",
						classes: ["tox-icon", "tox-lock-icon__" + e]
					}, t.icons),
					r = e.label.getOr("Constrain proportions"),
					a = t.translate(r),
					i = kT.parts.lock({
						dom: {
							tag: "button",
							classes: ["tox-lock", "tox-button", "tox-button--naked", "tox-button--icon"],
							attributes: {
								"aria-label": a,
								"data-mce-name": r
							}
						},
						components: [s("lock"), s("unlock")],
						buttonBehaviours: ca([ug.config({
							disabled: () => !e.enabled || t.checkUiComponentContext(e.context).shouldDisable
						}), bw((() => t.checkUiComponentContext(e.context))), Hb.config({}), Jb.config(t.tooltips.getConfig({
							tooltipText: a
						}))])
					}),
					l = e => ({
						dom: {
							tag: "div",
							classes: ["tox-form__group"]
						},
						components: e
					}),
					c = o => GC.parts.field({
						factory: Fx,
						inputClasses: ["tox-textfield"],
						inputBehaviours: ca([ug.config({
							disabled: () => !e.enabled || t.checkUiComponentContext(e.context).shouldDisable
						}), bw((() => t.checkUiComponentContext(e.context))), Hb.config({}), Th("size-input-events", [Wr(Xs(), ((e, t) => {
							Rr(e, n, {
								isField1: o
							})
						})), Wr(er(), ((t, o) => {
							Rr(t, QC, {
								name: e.name
							})
						}))])]),
						selectOnFocus: !1
					}),
					d = e => ({
						dom: {
							tag: "label",
							classes: ["tox-label"]
						},
						components: [dl(t.translate(e))]
					}),
					u = kT.parts.field1(l([GC.parts.label(d("Width")), c(!0)])),
					m = kT.parts.field2(l([GC.parts.label(d("Height")), c(!1)]));
				return kT.sketch({
					dom: {
						tag: "div",
						classes: ["tox-form__group"]
					},
					components: [{
						dom: {
							tag: "div",
							classes: ["tox-form__controls-h-stack"]
						},
						components: [u, m, l([d("\xa0"), i])]
					}],
					field1Name: "width",
					field2Name: "height",
					locked: !0,
					markers: {
						lockClass: "tox-locked"
					},
					onLockedChange: (e, t, n) => {
						OT(ju.getValue(e)).each((e => {
							o(e).each((e => {
								ju.setValue(t, (e => {
									const t = {
										"": 0,
										px: 0,
										pt: 1,
										mm: 1,
										pc: 2,
										ex: 2,
										em: 2,
										ch: 2,
										rem: 2,
										cm: 3,
										in: 4,
										"%": 4
									};
									let o = e.value.toFixed((n = e.unit) in t ? t[n] : 1);
									var n;
									return -1 !== o.indexOf(".") && (o = o.replace(/\.?0*$/, "")), o + e.unit
								})(e))
							}))
						}))
					},
					coupledFieldBehaviours: ca([ug.config({
						disabled: () => !e.enabled || t.checkUiComponentContext(e.context).shouldDisable,
						onDisabled: e => {
							kT.getField1(e).bind(GC.getField).each(ug.disable), kT.getField2(e).bind(GC.getField).each(ug.disable), kT.getLock(e).each(ug.disable)
						},
						onEnabled: e => {
							kT.getField1(e).bind(GC.getField).each(ug.enable), kT.getField2(e).bind(GC.getField).each(ug.enable), kT.getLock(e).each(ug.enable)
						}
					}), bw((() => t.checkUiComponentContext("mode:design"))), Th("size-input-events2", [Wr(n, ((e, t) => {
						const n = t.event.isField1,
							s = n ? kT.getField1(e) : kT.getField2(e),
							r = n ? kT.getField2(e) : kT.getField1(e),
							a = s.map(ju.getValue).getOr(""),
							i = r.map(ju.getValue).getOr("");
						o = ((e, t) => {
							const o = OT(e).toOptional(),
								n = OT(t).toOptional();
							return we(o, n, ((e, t) => _T(e, t.unit).map((e => t.value / e)).map((e => {
								return o = e, n = t.unit, e => _T(e, n).map((e => ({
									value: e * o,
									unit: n
								})));
								var o, n
							})).getOr(TT))).getOr(TT)
						})(a, i)
					}))])])
				})
			})(e, t.shared.providers))),
			slider: LE(((e, t, o) => ((e, t, o) => {
				const n = n_.parts.label({
						dom: {
							tag: "label",
							classes: ["tox-label"]
						},
						components: [dl(t.translate(e.label))]
					}),
					s = n_.parts.spectrum({
						dom: {
							tag: "div",
							classes: ["tox-slider__rail"],
							attributes: {
								role: "presentation"
							}
						}
					}),
					r = n_.parts.thumb({
						dom: {
							tag: "div",
							classes: ["tox-slider__handle"],
							attributes: {
								role: "presentation"
							}
						}
					});
				return n_.sketch({
					dom: {
						tag: "div",
						classes: ["tox-slider"],
						attributes: {
							role: "presentation"
						}
					},
					model: {
						mode: "x",
						minX: e.min,
						maxX: e.max,
						getInitialValue: y(o.getOrThunk((() => (Math.abs(e.max) - Math.abs(e.min)) / 2)))
					},
					components: [n, s, r],
					sliderBehaviours: ca([x_(), Bh.config({})]),
					onChoose: (t, o, n) => {
						Rr(t, QC, {
							name: e.name,
							value: n
						})
					},
					onChange: (t, o, n) => {
						Rr(t, QC, {
							name: e.name,
							value: n
						})
					}
				})
			})(e, t.shared.providers, o))),
			urlinput: LE(((e, t, o) => ((e, t, o, n) => {
				const s = t.shared.providers,
					r = t => {
						const n = ju.getValue(t);
						o.addToHistory(n.value, e.filetype)
					},
					a = {
						...n.map((e => ({
							initialData: e
						}))).getOr({}),
						dismissOnBlur: !0,
						inputClasses: ["tox-textfield"],
						sandboxClasses: ["tox-dialog__popups"],
						inputAttributes: {
							"aria-errormessage": RE,
							type: "url"
						},
						minChars: 0,
						responseTime: 0,
						fetch: n => {
							const s = ((e, t, o) => {
									var n, s;
									const r = ju.getValue(t),
										a = null !== (s = null === (n = null == r ? void 0 : r.meta) || void 0 === n ? void 0 : n.text) && void 0 !== s ? s : r.value;
									return o.getLinkInformation().fold((() => []), (t => {
										const n = FE(a, (e => L(e, (e => EE(e, e))))(o.getHistory(e)));
										return "file" === e ? (s = [n, FE(a, ME(t)), FE(a, G([BE(t), DE(t), IE(t)]))], W(s, ((e, t) => 0 === e.length || 0 === t.length ? e.concat(t) : e.concat(_E, t)), [])) : n;
										var s
									}))
								})(e.filetype, n, o),
								r = hT(s, ux.BUBBLE_TO_SANDBOX, t, {
									isHorizontalMenu: !1,
									search: A.none()
								});
							return iC(r)
						},
						getHotspot: e => g.getOpt(e),
						onSetValue: (e, t) => {
							e.hasConfigured(bk) && bk.run(e).get(b)
						},
						typeaheadBehaviours: ca([...o.getValidationHandler().map((t => bk.config({
							getRoot: e => at(e.element),
							invalidClass: "tox-control-wrap--status-invalid",
							notify: {
								onInvalid: (e, t) => {
									c.getOpt(e).each((e => {
										St(e.element, "title", s.translate(t))
									}))
								}
							},
							validator: {
								validate: o => {
									const n = ju.getValue(o);
									return vE((o => {
										t({
											type: e.filetype,
											url: n.value
										}, (e => {
											if ("invalid" === e.status) {
												const t = ln.error(e.message);
												o(t)
											} else {
												const t = ln.value(e.message);
												o(t)
											}
										}))
									}))
								},
								validateOnLoad: !1
							}
						}))).toArray(), ug.config({
							disabled: () => !e.enabled || s.checkUiComponentContext(e.context).shouldDisable
						}), Hb.config({}), Th("urlinput-events", [Wr(Zs(), (t => {
							const o = tl(t.element),
								n = o.trim();
							n !== o && ol(t.element, n), "file" === e.filetype && Rr(t, QC, {
								name: e.name
							})
						})), Wr(er(), (t => {
							Rr(t, QC, {
								name: e.name
							}), r(t)
						})), Wr(dr(), (t => {
							Rr(t, QC, {
								name: e.name
							}), r(t)
						}))])]),
						eventOrder: {
							[Zs()]: ["streaming", "urlinput-events", "invalidating"]
						},
						model: {
							getDisplayText: e => e.value,
							selectsOver: !1,
							populateFromBrowse: !1
						},
						markers: {
							openClass: "tox-textfield--popup-open"
						},
						lazySink: t.shared.getSink,
						parts: {
							menu: Ax(0, 0, "normal")
						},
						onExecute: (e, t, o) => {
							Rr(t, ok, {})
						},
						onItemExecute: (t, o, n, s) => {
							r(t), Rr(t, QC, {
								name: e.name
							})
						}
					},
					i = GC.parts.field({
						...a,
						factory: fE
					}),
					l = e.label.map((e => JC(e, s))),
					c = zb(((e, t, o = e, n = e) => ax(o, {
						tag: "div",
						classes: ["tox-icon", "tox-control-wrap__status-icon-" + e],
						attributes: {
							title: s.translate(n),
							"aria-live": "polite",
							...t.fold((() => ({})), (e => ({
								id: e
							})))
						}
					}, s.icons))("invalid", A.some(RE), "warning")),
					d = zb({
						dom: {
							tag: "div",
							classes: ["tox-control-wrap__status-icon-wrap"]
						},
						components: [c.asSpec()]
					}),
					u = o.getUrlPicker(e.filetype),
					m = Di("browser.url.event"),
					g = zb({
						dom: {
							tag: "div",
							classes: ["tox-control-wrap"]
						},
						components: [i, d.asSpec()],
						behaviours: ca([ug.config({
							disabled: () => !e.enabled || s.checkUiComponentContext(e.context).shouldDisable
						})])
					}),
					p = zb(CE({
						context: e.context,
						name: e.name,
						icon: A.some("browse"),
						text: e.picker_text.or(e.label).getOr(""),
						enabled: e.enabled,
						primary: !1,
						buttonType: A.none(),
						borderless: !0
					}, (e => Fr(e, m)), s, [], ["tox-browse-url"]));
				return GC.sketch({
					dom: KC([]),
					components: l.toArray().concat([{
						dom: {
							tag: "div",
							classes: ["tox-form__controls-h-stack"]
						},
						components: G([
							[g.asSpec()], u.map((() => p.asSpec())).toArray()
						])
					}]),
					fieldBehaviours: ca([ug.config({
						disabled: () => !e.enabled || s.checkUiComponentContext(e.context).shouldDisable,
						onDisabled: e => {
							GC.getField(e).each(ug.disable), p.getOpt(e).each(ug.disable)
						},
						onEnabled: e => {
							GC.getField(e).each(ug.enable), p.getOpt(e).each(ug.enable)
						}
					}), bw((() => s.checkUiComponentContext(e.context))), Th("url-input-events", [Wr(m, (t => {
						Jm.getCurrent(t).each((o => {
							const n = ju.getValue(o),
								s = {
									fieldname: e.name,
									...n
								};
							u.each((n => {
								n(s).get((n => {
									ju.setValue(o, n), Rr(t, QC, {
										name: e.name
									})
								}))
							}))
						}))
					}))])])
				})
			})(e, t, t.urlinput, o))),
			customeditor: LE((e => {
				const t = nn(),
					o = zb({
						dom: {
							tag: e.tag
						}
					}),
					n = nn(),
					s = !E_(e) && e.onFocus.isSome() ? [Bh.config({
						onFocus: t => {
							e.onFocus.each((e => {
								e(t.element.dom)
							}))
						}
					}), Hb.config({})] : [];
				return {
					dom: {
						tag: "div",
						classes: ["tox-custom-editor"]
					},
					behaviours: ca([Th("custom-editor-events", [Jr((s => {
						o.getOpt(s).each((o => {
							(E_(e) ? e.init(o.element.dom) : T_.load(e.scriptId, e.scriptUrl).then((t => t(o.element.dom, e.settings)))).then((e => {
								n.on((t => {
									e.setValue(t)
								})), n.clear(), t.set(e)
							}))
						}))
					}))]), C_(A.none(), (() => t.get().fold((() => n.get().getOr("")), (e => e.getValue()))), ((e, o) => {
						t.get().fold((() => n.set(o)), (e => e.setValue(o)))
					})), x_()].concat(s)),
					components: [o.asSpec()]
				}
			})),
			htmlpanel: LE(((e, t) => ((e, t) => {
				const o = ["tox-form__group", ...e.stretched ? ["tox-form__group--stretched"] : []],
					n = Th("htmlpanel", [Jr((t => {
						e.onInit(t.element.dom)
					}))]);
				return "presentation" === e.presets ? UC.sketch({
					dom: {
						tag: "div",
						classes: o,
						innerHtml: e.html
					},
					containerBehaviours: ca([Jb.config({
						...t.tooltips.getConfig({
							tooltipText: "",
							onShow: e => {
								Ol(e.element, "[data-mce-tooltip]:hover").orThunk((() => fc(e.element))).each((o => {
									Ot(o, "data-mce-tooltip").each((o => {
										Jb.setComponents(e, t.tooltips.getComponents({
											tooltipText: o
										}))
									}))
								}))
							}
						}),
						mode: "children-normal",
						anchor: e => ({
							type: "node",
							node: Ol(e.element, "[data-mce-tooltip]:hover").orThunk((() => fc(e.element).filter((e => Ot(e, "data-mce-tooltip").isSome())))),
							root: e.element,
							layouts: {
								onLtr: y([Zl, Ql, Yl, Kl, Xl, Jl]),
								onRtl: y([Zl, Ql, Yl, Kl, Xl, Jl])
							},
							bubble: Wc(0, -2, {})
						})
					}), n])
				}) : UC.sketch({
					dom: {
						tag: "div",
						classes: o,
						innerHtml: e.html,
						attributes: {
							role: "document"
						}
					},
					containerBehaviours: ca([Hb.config({}), Bh.config({}), n])
				})
			})(e, t.shared.providers))),
			imagepreview: LE(((e, t, o) => ((e, t) => {
				const o = en(t.getOr({
						url: ""
					})),
					n = zb({
						dom: {
							tag: "img",
							classes: ["tox-imagepreview__image"],
							attributes: t.map((e => ({
								src: e.url
							}))).getOr({})
						}
					}),
					s = zb({
						dom: {
							tag: "div",
							classes: ["tox-imagepreview__container"],
							attributes: {
								role: "presentation"
							}
						},
						components: [n.asSpec()]
					}),
					r = {};
				e.height.each((e => r.height = e));
				const a = t.map((e => ({
					url: e.url,
					zoom: A.from(e.zoom),
					cachedWidth: A.from(e.cachedWidth),
					cachedHeight: A.from(e.cachedHeight)
				})));
				return {
					dom: {
						tag: "div",
						classes: ["tox-imagepreview"],
						styles: r,
						attributes: {
							role: "presentation"
						}
					},
					components: [s.asSpec()],
					behaviours: ca([x_(), C_(a, (() => o.get()), ((e, t) => {
						const r = {
							url: t.url
						};
						t.zoom.each((e => r.zoom = e)), t.cachedWidth.each((e => r.cachedWidth = e)), t.cachedHeight.each((e => r.cachedHeight = e)), o.set(r);
						const a = () => {
							const {
								cachedWidth: t,
								cachedHeight: o,
								zoom: n
							} = r;
							if (!u(t) && !u(o)) {
								if (u(n)) {
									const n = ((e, t, o) => {
										const n = Kt(e),
											s = Ut(e);
										return Math.min(n / t, s / o, 1)
									})(e.element, t, o);
									r.zoom = n
								}
								const a = ((e, t, o, n, s) => {
									const r = o * s,
										a = n * s,
										i = Math.max(0, e / 2 - r / 2),
										l = Math.max(0, t / 2 - a / 2);
									return {
										left: i.toString() + "px",
										top: l.toString() + "px",
										width: r.toString() + "px",
										height: a.toString() + "px"
									}
								})(Kt(e.element), Ut(e.element), t, o, r.zoom);
								s.getOpt(e).each((e => {
									Dt(e.element, a)
								}))
							}
						};
						n.getOpt(e).each((o => {
							const n = o.element;
							var s;
							t.url !== kt(n, "src") && (St(n, "src", t.url), Sa(e.element, "tox-imagepreview__loaded")), a(), (s = n, new Promise(((e, t) => {
								const o = () => {
										r(), e(s)
									},
									n = [Dc(s, "load", o), Dc(s, "error", (() => {
										r(), t("Unable to load data from image: " + s.dom.src)
									}))],
									r = () => V(n, (e => e.unbind()));
								s.dom.complete && o()
							}))).then((t => {
								e.getSystem().isConnected() && (ya(e.element, "tox-imagepreview__loaded"), r.cachedWidth = t.dom.naturalWidth, r.cachedHeight = t.dom.naturalHeight, a())
							}))
						}))
					}))])
				}
			})(e, o))),
			table: LE(((e, t) => ((e, t) => {
				const o = e => ({
					dom: {
						tag: "td",
						innerHtml: t.translate(e)
					}
				});
				return {
					dom: {
						tag: "table",
						classes: ["tox-dialog__table"]
					},
					components: [(s = e.header, {
						dom: {
							tag: "thead"
						},
						components: [{
							dom: {
								tag: "tr"
							},
							components: L(s, (e => ({
								dom: {
									tag: "th",
									innerHtml: t.translate(e)
								}
							})))
						}]
					}), (n = e.cells, {
						dom: {
							tag: "tbody"
						},
						components: L(n, (e => ({
							dom: {
								tag: "tr"
							},
							components: L(e, o)
						})))
					})],
					behaviours: ca([Hb.config({}), Bh.config({})])
				};
				var n, s
			})(e, t.shared.providers))),
			tree: LE(((e, t) => ((e, t) => {
				const o = e.onLeafAction.getOr(b),
					n = e.onToggleExpand.getOr(b),
					s = e.defaultExpandedIds,
					r = en(s),
					a = en(e.defaultSelectedId),
					i = Di("tree-id"),
					l = (n, s) => e.items.map((e => "leaf" === e.type ? JT({
						leaf: e,
						selectedId: n,
						onLeafAction: o,
						visible: !0,
						treeId: i,
						backstage: t
					}) : nE({
						directory: e,
						selectedId: n,
						onLeafAction: o,
						expandedIds: s,
						labelTabstopping: !0,
						treeId: i,
						backstage: t
					})));
				return {
					dom: {
						tag: "div",
						classes: ["tox-tree"],
						attributes: {
							role: "tree"
						}
					},
					components: l(a.get(), r.get()),
					behaviours: ca([bh.config({
						mode: "flow",
						selector: ".tox-tree--leaf__label--visible, .tox-tree--directory__label--visible",
						cycles: !1
					}), Th(sE, [Wr("expand-tree-node", ((e, t) => {
						const {
							expanded: o,
							node: s
						} = t.event;
						r.set(o ? [...r.get(), s] : r.get().filter((e => e !== s))), n(r.get(), {
							expanded: o,
							node: s
						})
					}))]), dc.config({
						channels: {
							[`update-active-item-${i}`]: {
								onReceive: (e, t) => {
									a.set(A.some(t.value)), _h.set(e, l(A.some(t.value), r.get()))
								}
							}
						}
					}), _h.config({})])
				}
			})(e, t))),
			panel: LE(((e, t) => ((e, t) => ({
				dom: {
					tag: "div",
					classes: e.classes
				},
				components: L(e.items, t.shared.interpreter)
			}))(e, t)))
		},
		HE = {
			field: (e, t) => t,
			record: y([])
		},
		PE = (e, t, o, n, s) => {
			const r = xn(n, {
				shared: {
					interpreter: t => UE(e, t, o, r, s)
				}
			});
			return UE(e, t, o, r, s)
		},
		UE = (e, t, o, n, s) => fe(VE, t.type).fold((() => (console.error(`Unknown factory type "${t.type}", defaulting to container: `, t), t)), (r => r(e, t, o, n, s))),
		WE = (e, t, o, n) => UE(HE, e, t, o, n),
		jE = "layout-inset",
		$E = e => e.x,
		GE = (e, t) => e.x + e.width / 2 - t.width / 2,
		qE = (e, t) => e.x + e.width - t.width,
		YE = e => e.y,
		XE = (e, t) => e.y + e.height - t.height,
		KE = (e, t) => e.y + e.height / 2 - t.height / 2,
		JE = (e, t, o) => Ml(qE(e, t), XE(e, t), o.insetSouthwest(), Rl(), "southwest", Hl(e, {
			right: 0,
			bottom: 3
		}), jE),
		QE = (e, t, o) => Ml($E(e), XE(e, t), o.insetSoutheast(), Fl(), "southeast", Hl(e, {
			left: 1,
			bottom: 3
		}), jE),
		ZE = (e, t, o) => Ml(qE(e, t), YE(e), o.insetNorthwest(), Il(), "northwest", Hl(e, {
			right: 0,
			top: 2
		}), jE),
		eA = (e, t, o) => Ml($E(e), YE(e), o.insetNortheast(), Bl(), "northeast", Hl(e, {
			left: 1,
			top: 2
		}), jE),
		tA = (e, t, o) => Ml(GE(e, t), YE(e), o.insetNorth(), Nl(), "north", Hl(e, {
			top: 2
		}), jE),
		oA = (e, t, o) => Ml(GE(e, t), XE(e, t), o.insetSouth(), zl(), "south", Hl(e, {
			bottom: 3
		}), jE),
		nA = (e, t, o) => Ml(qE(e, t), KE(e, t), o.insetEast(), Vl(), "east", Hl(e, {
			right: 0
		}), jE),
		sA = (e, t, o) => Ml($E(e), KE(e, t), o.insetWest(), Ll(), "west", Hl(e, {
			left: 1
		}), jE),
		rA = e => {
			switch (e) {
				case "north":
					return tA;
				case "northeast":
					return eA;
				case "northwest":
					return ZE;
				case "south":
					return oA;
				case "southeast":
					return QE;
				case "southwest":
					return JE;
				case "east":
					return nA;
				case "west":
					return sA
			}
		},
		aA = (e, t, o, n, s) => Tc(n).map(rA).getOr(tA)(e, t, o, n, s),
		iA = e => {
			switch (e) {
				case "north":
					return oA;
				case "northeast":
					return QE;
				case "northwest":
					return JE;
				case "south":
					return tA;
				case "southeast":
					return eA;
				case "southwest":
					return ZE;
				case "east":
					return sA;
				case "west":
					return nA
			}
		},
		lA = (e, t, o, n, s) => Tc(n).map(iA).getOr(tA)(e, t, o, n, s),
		cA = {
			valignCentre: [],
			alignCentre: [],
			alignLeft: [],
			alignRight: [],
			right: [],
			left: [],
			bottom: [],
			top: []
		},
		dA = (e, t, o) => {
			const n = {
				maxHeightFunction: Vc()
			};
			return () => o() ? {
				type: "node",
				root: ht(pt(e())),
				node: A.from(e()),
				bubble: Wc(12, 12, cA),
				layouts: {
					onRtl: () => [eA],
					onLtr: () => [ZE]
				},
				overrides: n
			} : {
				type: "hotspot",
				hotspot: t(),
				bubble: Wc(-12, 12, cA),
				layouts: {
					onRtl: () => [Yl, Xl, Zl],
					onLtr: () => [Xl, Yl, Zl]
				},
				overrides: n
			}
		},
		uA = (e, t, o, n) => {
			const s = {
				maxHeightFunction: Vc()
			};
			return () => n() ? {
				type: "node",
				root: ht(pt(t())),
				node: A.from(t()),
				bubble: Wc(12, 12, cA),
				layouts: {
					onRtl: () => [tA],
					onLtr: () => [tA]
				},
				overrides: s
			} : e ? {
				type: "node",
				root: ht(pt(t())),
				node: A.from(t()),
				bubble: Wc(0, -Wt(t()), cA),
				layouts: {
					onRtl: () => [Ql],
					onLtr: () => [Ql]
				},
				overrides: s
			} : {
				type: "hotspot",
				hotspot: o(),
				bubble: Wc(0, 0, cA),
				layouts: {
					onRtl: () => [Ql],
					onLtr: () => [Ql]
				},
				overrides: s
			}
		},
		mA = (e, t, o) => () => o() ? {
			type: "node",
			root: ht(pt(e())),
			node: A.from(e()),
			layouts: {
				onRtl: () => [tA],
				onLtr: () => [tA]
			}
		} : {
			type: "hotspot",
			hotspot: t(),
			layouts: {
				onRtl: () => [Zl],
				onLtr: () => [Zl]
			}
		},
		gA = (e, t) => () => ({
			type: "selection",
			root: t(),
			getSelection: () => {
				const t = e.selection.getRng(),
					o = e.model.table.getSelectedCells();
				if (o.length > 1) {
					const e = o[0],
						t = o[o.length - 1],
						n = {
							firstCell: ze(e),
							lastCell: ze(t)
						};
					return A.some(n)
				}
				return A.some(fd.range(ze(t.startContainer), t.startOffset, ze(t.endContainer), t.endOffset))
			}
		}),
		pA = e => t => ({
			type: "node",
			root: e(),
			node: t
		}),
		hA = (e, t, o, n) => {
			const s = Sb(e),
				r = () => ze(e.getBody()),
				a = () => ze(e.getContentAreaContainer()),
				i = () => s || !n();
			return {
				inlineDialog: dA(a, t, i),
				inlineBottomDialog: uA(e.inline, a, o, i),
				banner: mA(a, t, i),
				cursor: gA(e, r),
				node: pA(r)
			}
		},
		fA = e => (t, o) => {
			PS(e)(t, o)
		},
		bA = e => () => TS(e),
		vA = e => t => CS(e, t),
		xA = e => t => _S(e, t),
		yA = e => () => ob(e),
		wA = e => ve(e, "items"),
		SA = e => ve(e, "format"),
		CA = [{
			title: "Headings",
			items: [{
				title: "Heading 1",
				format: "h1"
			}, {
				title: "Heading 2",
				format: "h2"
			}, {
				title: "Heading 3",
				format: "h3"
			}, {
				title: "Heading 4",
				format: "h4"
			}, {
				title: "Heading 5",
				format: "h5"
			}, {
				title: "Heading 6",
				format: "h6"
			}]
		}, {
			title: "Inline",
			items: [{
				title: "Bold",
				format: "bold"
			}, {
				title: "Italic",
				format: "italic"
			}, {
				title: "Underline",
				format: "underline"
			}, {
				title: "Strikethrough",
				format: "strikethrough"
			}, {
				title: "Superscript",
				format: "superscript"
			}, {
				title: "Subscript",
				format: "subscript"
			}, {
				title: "Code",
				format: "code"
			}]
		}, {
			title: "Blocks",
			items: [{
				title: "Paragraph",
				format: "p"
			}, {
				title: "Blockquote",
				format: "blockquote"
			}, {
				title: "Div",
				format: "div"
			}, {
				title: "Pre",
				format: "pre"
			}]
		}, {
			title: "Align",
			items: [{
				title: "Left",
				format: "alignleft"
			}, {
				title: "Center",
				format: "aligncenter"
			}, {
				title: "Right",
				format: "alignright"
			}, {
				title: "Justify",
				format: "alignjustify"
			}]
		}],
		kA = e => W(e, ((e, t) => {
			if (be(t, "items")) {
				const o = kA(t.items);
				return {
					customFormats: e.customFormats.concat(o.customFormats),
					formats: e.formats.concat([{
						title: t.title,
						items: o.formats
					}])
				}
			}
			if (be(t, "inline") || (e => be(e, "block"))(t) || (e => be(e, "selector"))(t)) {
				const o = `custom-${r(t.name)?t.name:t.title.toLowerCase()}`;
				return {
					customFormats: e.customFormats.concat([{
						name: o,
						format: t
					}]),
					formats: e.formats.concat([{
						title: t.title,
						format: o,
						icon: t.icon
					}])
				}
			}
			return {
				...e,
				formats: e.formats.concat(t)
			}
		}), {
			customFormats: [],
			formats: []
		}),
		OA = e => Rf(e).map((t => {
			const o = ((e, t) => {
				const o = kA(t),
					n = t => {
						V(t, (t => {
							e.formatter.has(t.name) || e.formatter.register(t.name, t.format)
						}))
					};
				return e.formatter ? n(o.customFormats) : e.on("init", (() => {
					n(o.customFormats)
				})), o.formats
			})(e, t);
			return Nf(e) ? CA.concat(o) : o
		})).getOr(CA),
		_A = (e, t, o) => ({
			...e,
			type: "formatter",
			isSelected: t(e.format),
			getStylePreview: o(e.format)
		}),
		TA = (e, t, o, n) => {
			const s = t => L(t, (t => wA(t) ? (e => {
				const t = s(e.items);
				return {
					...e,
					type: "submenu",
					getStyleItems: y(t)
				}
			})(t) : SA(t) ? (e => _A(e, o, n))(t) : (e => {
				const t = re(e);
				return 1 === t.length && F(t, "title")
			})(t) ? {
				...t,
				type: "separator"
			} : (t => {
				const s = r(t.name) ? t.name : Di(t.title),
					a = `custom-${s}`,
					i = {
						...t,
						type: "formatter",
						format: a,
						isSelected: o(a),
						getStylePreview: n(a)
					};
				return e.formatter.register(s, i), i
			})(t)));
			return s(t)
		},
		EA = e => {
			let t = 0;
			const o = e => [{
				dom: {
					tag: "div",
					classes: ["tox-tooltip__body"]
				},
				components: [dl(e.tooltipText)]
			}];
			return {
				getConfig: n => ({
					delayForShow: () => t > 0 ? 60 : 300,
					delayForHide: y(300),
					exclusive: !0,
					lazySink: e,
					tooltipDom: {
						tag: "div",
						classes: ["tox-tooltip", "tox-tooltip--up"]
					},
					tooltipComponents: o(n),
					onShow: (e, o) => {
						t++, n.onShow && n.onShow(e, o)
					},
					onHide: (e, o) => {
						t--, n.onHide && n.onHide(e, o)
					},
					onSetup: n.onSetup
				}),
				getComponents: o
			}
		},
		AA = A_.trim,
		MA = e => t => {
			if ((e => g(e) && 1 === e.nodeType)(t)) {
				if (t.contentEditable === e) return !0;
				if (t.getAttribute("data-mce-contenteditable") === e) return !0
			}
			return !1
		},
		DA = MA("true"),
		BA = MA("false"),
		IA = (e, t, o, n, s) => ({
			type: e,
			title: t,
			url: o,
			level: n,
			attach: s
		}),
		FA = e => e.innerText || e.textContent,
		RA = e => (e => e && "A" === e.nodeName && void 0 !== (e.id || e.name))(e) && zA(e),
		NA = e => e && /^(H[1-6])$/.test(e.nodeName),
		zA = e => (e => {
			let t = e;
			for (; t = t.parentNode;) {
				const e = t.contentEditable;
				if (e && "inherit" !== e) return DA(t)
			}
			return !1
		})(e) && !BA(e),
		LA = e => NA(e) && zA(e),
		VA = e => {
			var t;
			const o = (e => e.id ? e.id : Di("h"))(e);
			return IA("header", null !== (t = FA(e)) && void 0 !== t ? t : "", "#" + o, (e => NA(e) ? parseInt(e.nodeName.substr(1), 10) : 0)(e), (() => {
				e.id = o
			}))
		},
		HA = e => {
			const t = e.id || e.name,
				o = FA(e);
			return IA("anchor", o || "#" + t, "#" + t, 0, b)
		},
		PA = e => AA(e.title).length > 0,
		UA = e => {
			const t = (e => {
				const t = L(kd(ze(e), "h1,h2,h3,h4,h5,h6,a:not([href])"), (e => e.dom));
				return t
			})(e);
			return P((e => L(P(e, LA), VA))(t).concat((e => L(P(e, RA), HA))(t)), PA)
		},
		WA = "tinymce-url-history",
		jA = e => r(e) && /^https?/.test(e),
		$A = e => a(e) && pe(e, (e => {
			return !(l(t = e) && t.length <= 5 && Y(t, jA));
			var t
		})).isNone(),
		GA = () => {
			const e = uS.getItem(WA);
			if (null === e) return {};
			let t;
			try {
				t = JSON.parse(e)
			} catch (e) {
				if (e instanceof SyntaxError) return console.log("Local storage " + WA + " was not valid JSON", e), {};
				throw e
			}
			return $A(t) ? t : (console.log("Local storage " + WA + " was not valid format", t), {})
		},
		qA = e => {
			const t = GA();
			return fe(t, e).getOr([])
		},
		YA = (e, t) => {
			if (!jA(e)) return;
			const o = GA(),
				n = fe(o, t).getOr([]),
				s = P(n, (t => t !== e));
			o[t] = [e].concat(s).slice(0, 5), (e => {
				if (!$A(e)) throw new Error("Bad format for history:\n" + JSON.stringify(e));
				uS.setItem(WA, JSON.stringify(e))
			})(o)
		},
		XA = e => !!e,
		KA = e => le(A_.makeMap(e, /[, ]/), XA),
		JA = e => A.from(Xf(e)),
		QA = e => A.from(e).filter(r).getOrUndefined(),
		ZA = e => ({
			getHistory: qA,
			addToHistory: YA,
			getLinkInformation: () => (e => Zf(e) ? A.some({
				targets: UA(e.getBody()),
				anchorTop: QA(eb(e)),
				anchorBottom: QA(tb(e))
			}) : A.none())(e),
			getValidationHandler: () => (e => A.from(Kf(e)))(e),
			getUrlPicker: t => ((e, t) => ((e, t) => {
				const o = (e => {
					const t = A.from(Qf(e)).filter(XA).map(KA);
					return JA(e).fold(T, (e => t.fold(E, (e => re(e).length > 0 && e))))
				})(e);
				return d(o) ? o ? JA(e) : A.none() : o[t] ? JA(e) : A.none()
			})(e, t).map((o => n => aC((s => {
				const i = {
					filetype: t,
					fieldname: n.fieldname,
					...A.from(n.meta).getOr({})
				};
				o.call(e, ((e, t) => {
					if (!r(e)) throw new Error("Expected value to be string");
					if (void 0 !== t && !a(t)) throw new Error("Expected meta to be a object");
					s({
						value: e,
						meta: t
					})
				}), n.value, i)
			})))))(e, t)
		}),
		eM = Hm,
		tM = Cm,
		oM = y([ws("shell", !1), rs("makeItem"), ws("setupItem", b), Yu("listBehaviours", [_h])]),
		nM = ym({
			name: "items",
			overrides: () => ({
				behaviours: ca([_h.config({})])
			})
		}),
		sM = y([nM]),
		rM = qm({
			name: y("CustomList")(),
			configFields: oM(),
			partFields: sM(),
			factory: (e, t, o, n) => {
				const s = e.shell ? {
					behaviours: [_h.config({})],
					components: []
				} : {
					behaviours: [],
					components: t
				};
				return {
					uid: e.uid,
					dom: e.dom,
					components: s.components,
					behaviours: qu(e.listBehaviours, s.behaviours),
					apis: {
						setItems: (t, o) => {
							var n;
							(n = t, e.shell ? A.some(n) : Bm(n, e, "items")).fold((() => {
								throw console.error("Custom List was defined to not be a shell, but no item container was specified in components"), new Error("Custom List was defined to not be a shell, but no item container was specified in components")
							}), (n => {
								const s = _h.contents(n),
									r = o.length,
									a = r - s.length,
									i = a > 0 ? N(a, (() => e.makeItem())) : [],
									l = s.slice(r);
								V(l, (e => _h.remove(n, e))), V(i, (e => _h.append(n, e)));
								const c = _h.contents(n);
								V(c, ((n, s) => {
									e.setupItem(t, n, o[s], s)
								}))
							}))
						}
					}
				}
			},
			apis: {
				setItems: (e, t, o) => {
					e.setItems(t, o)
				}
			}
		}),
		aM = y([rs("dom"), ws("shell", !0), $u("toolbarBehaviours", [_h])]),
		iM = y([ym({
			name: "groups",
			overrides: () => ({
				behaviours: ca([_h.config({})])
			})
		})]),
		lM = qm({
			name: "Toolbar",
			configFields: aM(),
			partFields: iM(),
			factory: (e, t, o, n) => {
				const s = e.shell ? {
					behaviours: [_h.config({})],
					components: []
				} : {
					behaviours: [],
					components: t
				};
				return {
					uid: e.uid,
					dom: e.dom,
					components: s.components,
					behaviours: qu(e.toolbarBehaviours, s.behaviours),
					apis: {
						setGroups: (t, o) => {
							var n;
							(n = t, e.shell ? A.some(n) : Bm(n, e, "groups")).fold((() => {
								throw console.error("Toolbar was defined to not be a shell, but no groups container was specified in components"), new Error("Toolbar was defined to not be a shell, but no groups container was specified in components")
							}), (e => {
								_h.set(e, o)
							}))
						},
						refresh: b
					},
					domModification: {
						attributes: {
							role: "group"
						}
					}
				}
			},
			apis: {
				setGroups: (e, t, o) => {
					e.setGroups(t, o)
				}
			}
		}),
		cM = b,
		dM = T,
		uM = y([]);
	var mM, gM = Object.freeze({
		__proto__: null,
		setup: cM,
		isDocked: dM,
		getBehaviours: uM
	});
	const pM = y(Di("toolbar-height-change")),
		hM = {
			fadeInClass: "tox-editor-dock-fadein",
			fadeOutClass: "tox-editor-dock-fadeout",
			transitionClass: "tox-editor-dock-transition"
		},
		fM = "tox-tinymce--toolbar-sticky-on",
		bM = "tox-tinymce--toolbar-sticky-off",
		vM = (e, t) => F(Oi.getModes(e), t),
		xM = e => {
			const t = e.element;
			at(t).each((o => {
				const n = "padding-" + Oi.getModes(e)[0];
				if (Oi.isDocked(e)) {
					const e = Kt(o);
					Mt(t, "width", e + "px"), Mt(o, n, (e => Wt(e) + (parseInt(It(e, "margin-top"), 10) || 0) + (parseInt(It(e, "margin-bottom"), 10) || 0))(t) + "px")
				} else Lt(t, "width"), Lt(o, n)
			}))
		},
		yM = (e, t) => {
			t ? (Sa(e, hM.fadeOutClass), ka(e, [hM.transitionClass, hM.fadeInClass])) : (Sa(e, hM.fadeInClass), ka(e, [hM.fadeOutClass, hM.transitionClass]))
		},
		wM = (e, t) => {
			const o = ze(e.getContainer());
			t ? (ya(o, fM), Sa(o, bM)) : (ya(o, bM), Sa(o, fM))
		},
		SM = (e, t) => {
			const o = nn(),
				n = t.getSink,
				s = e => {
					n().each((t => e(t.element)))
				},
				r = t => {
					e.inline || xM(t), wM(e, Oi.isDocked(t)), t.getSystem().broadcastOn([_u()], {}), n().each((e => e.getSystem().broadcastOn([_u()], {})))
				},
				a = e.inline ? [] : [dc.config({
					channels: {
						[pM()]: {
							onReceive: xM
						}
					}
				})];
			return [Bh.config({}), Oi.config({
				contextual: {
					lazyContext: t => {
						const o = Wt(t.element),
							n = e.inline ? e.getContentAreaContainer() : e.getContainer();
						return A.from(n).map((n => {
							const s = Ko(ze(n));
							return Ib(e, t.element).fold((() => {
								const e = s.height - o,
									n = s.y + (vM(t, "top") ? 0 : o);
								return Xo(s.x, n, s.width, e)
							}), (e => {
								const n = Qo(s, Fb(e)),
									r = vM(t, "top") ? n.y : n.y + o;
								return Xo(n.x, r, n.width, n.height - o)
							}))
						}))
					},
					onShow: () => {
						s((e => yM(e, !0)))
					},
					onShown: e => {
						s((e => Oa(e, [hM.transitionClass, hM.fadeInClass]))), o.get().each((t => {
							((e, t) => {
								const o = tt(t);
								hc(o).filter((e => !Ze(t, e))).filter((t => Ze(t, ze(o.dom.body)) || et(e, t))).each((() => mc(t)))
							})(e.element, t), o.clear()
						}))
					},
					onHide: e => {
						((e, t) => fc(e).orThunk((() => t().toOptional().bind((e => fc(e.element))))))(e.element, n).fold(o.clear, o.set), s((e => yM(e, !1)))
					},
					onHidden: () => {
						s((e => Oa(e, [hM.transitionClass])))
					},
					...hM
				},
				lazyViewport: t => Ib(e, t.element).fold((() => {
					const o = Zo(),
						n = Gf(e),
						s = o.y + (vM(t, "top") && !Bb(e) ? n : 0),
						r = o.height - (vM(t, "bottom") ? n : 0);
					return {
						bounds: Xo(o.x, s, o.width, r),
						optScrollEnv: A.none()
					}
				}), (e => ({
					bounds: Fb(e),
					optScrollEnv: A.some({
						currentScrollTop: e.element.dom.scrollTop,
						scrollElmTop: qt(e.element).top
					})
				}))),
				modes: [t.header.getDockingMode()],
				onDocked: r,
				onUndocked: r
			}), ...a]
		};
	var CM = Object.freeze({
		__proto__: null,
		setup: (e, t, o) => {
			e.inline || (t.header.isPositionedAtTop() || e.on("ResizeEditor", (() => {
				o().each(Oi.reset)
			})), e.on("ResizeWindow ResizeEditor", (() => {
				o().each(xM)
			})), e.on("SkinLoaded", (() => {
				o().each((e => {
					Oi.isDocked(e) ? Oi.reset(e) : Oi.refresh(e)
				}))
			})), e.on("FullscreenStateChanged", (() => {
				o().each(Oi.reset)
			}))), e.on("AfterScrollIntoView", (e => {
				o().each((t => {
					Oi.refresh(t);
					const o = t.element;
					dp(o) && ((e, t) => {
						const o = tt(t),
							n = st(t).dom.innerHeight,
							s = Po(o),
							r = ze(e.elm),
							a = Jo(r),
							i = Ut(r),
							l = a.y,
							c = l + i,
							d = qt(t),
							u = Ut(t),
							m = d.top,
							g = m + u,
							p = Math.abs(m - s.top) < 2,
							h = Math.abs(g - (s.top + n)) < 2;
						if (p && l < g) Uo(s.left, l - u, o);
						else if (h && c > m) {
							const e = l - n + i + u;
							Uo(s.left, e, o)
						}
					})(e, o)
				}))
			})), e.on("PostRender", (() => {
				wM(e, !1)
			}))
		},
		isDocked: e => e().map(Oi.isDocked).getOr(!1),
		getBehaviours: SM
	});
	const kM = Fn([Qx, as("items", Nn([Ln([Zx, ms("items", Un)]), Un]))].concat(Ay)),
		OM = [fs("text"), fs("tooltip"), fs("icon"), Ss("search", !1, Nn([Wn, Fn([fs("placeholder")])], (e => d(e) ? e ? A.some({
			placeholder: A.none()
		}) : A.none() : A.some(e)))), cs("fetch"), Ts("onSetup", (() => b)), ks("context", "mode:design")],
		_M = Fn([Qx, ...OM]),
		TM = e => Kn("menubutton", _M, e),
		EM = Fn([Qx, py, gy, uy, by, ry, cy, Os("presets", "normal", ["normal", "color", "listpreview"]), Sy(1), iy, ly, ks("context", "mode:design")]);
	var AM = Gm({
		factory: (e, t) => {
			const o = {
				focus: bh.focusIn,
				setMenus: (e, o) => {
					const n = L(o, (e => {
						const o = {
								type: "menubutton",
								text: e.text,
								fetch: t => {
									t(e.getItems())
								},
								context: "any"
							},
							n = TM(o).mapError((e => Zn(e))).getOrDie();
						return GT(n, "tox-mbtn", t.backstage, A.some("menuitem"))
					}));
					_h.set(e, n)
				}
			};
			return {
				uid: e.uid,
				dom: e.dom,
				components: [],
				behaviours: ca([_h.config({}), Th("menubar-events", [Jr((t => {
					e.onSetup(t)
				})), Wr(Ys(), ((e, t) => {
					Ol(e.element, ".tox-mbtn--active").each((o => {
						_l(t.event.target, ".tox-mbtn").each((t => {
							Ze(o, t) || e.getSystem().getByDom(o).each((o => {
								e.getSystem().getByDom(t).each((e => {
									wC.expand(e), wC.close(o), Bh.focus(e)
								}))
							}))
						}))
					}))
				})), Wr(Tr(), ((e, t) => {
					t.event.prevFocus.bind((t => e.getSystem().getByDom(t).toOptional())).each((o => {
						t.event.newFocus.bind((t => e.getSystem().getByDom(t).toOptional())).each((e => {
							wC.isOpen(o) && (wC.expand(e), wC.close(o))
						}))
					}))
				}))]), bh.config({
					mode: "flow",
					selector: ".tox-mbtn",
					onEscape: t => (e.onEscape(t), A.some(!0))
				}), Hb.config({})]),
				apis: o,
				domModification: {
					attributes: {
						role: "menubar"
					}
				}
			}
		},
		name: "silver.Menubar",
		configFields: [rs("dom"), rs("uid"), rs("onEscape"), rs("backstage"), ws("onSetup", b)],
		apis: {
			focus: (e, t) => {
				e.focus(t)
			},
			setMenus: (e, t, o) => {
				e.setMenus(t, o)
			}
		}
	});
	const MM = "container",
		DM = [$u("slotBehaviours", [])],
		BM = e => "<alloy.field." + e + ">",
		IM = (e, t) => {
			const o = t => Nm(e),
				n = (t, o) => (n, s) => Bm(n, e, s).map((e => t(e, s))).getOr(o),
				s = (e, t) => "true" !== kt(e.element, "aria-hidden"),
				r = n(s, !1),
				a = n(((e, t) => {
					if (s(e)) {
						const o = e.element;
						Mt(o, "display", "none"), St(o, "aria-hidden", "true"), Rr(e, Er(), {
							name: t,
							visible: !1
						})
					}
				})),
				i = (e => (t, o) => {
					V(o, (o => e(t, o)))
				})(a),
				l = n(((e, t) => {
					if (!s(e)) {
						const o = e.element;
						Lt(o, "display"), Tt(o, "aria-hidden"), Rr(e, Er(), {
							name: t,
							visible: !0
						})
					}
				})),
				c = {
					getSlotNames: o,
					getSlot: (t, o) => Bm(t, e, o),
					isShowing: r,
					hideSlot: a,
					hideAllSlots: e => i(e, o()),
					showSlot: l
				};
			return {
				uid: e.uid,
				dom: e.dom,
				components: t,
				behaviours: Gu(e.slotBehaviours),
				apis: c
			}
		},
		FM = {
			...le({
				getSlotNames: (e, t) => e.getSlotNames(t),
				getSlot: (e, t, o) => e.getSlot(t, o),
				isShowing: (e, t, o) => e.isShowing(t, o),
				hideSlot: (e, t, o) => e.hideSlot(t, o),
				hideAllSlots: (e, t) => e.hideAllSlots(t),
				showSlot: (e, t, o) => e.showSlot(t, o)
			}, (e => $i(e))),
			sketch: e => {
				const t = (() => {
						const e = [];
						return {
							slot: (t, o) => (e.push(t), Tm(MM, BM(t), o)),
							record: y(e)
						}
					})(),
					o = e(t),
					n = t.record(),
					s = L(n, (e => vm({
						name: e,
						pname: BM(e)
					})));
				return Um(MM, DM, s, IM, o)
			}
		},
		RM = Fn([gy, py, Ts("onShow", b), Ts("onHide", b), cy]),
		NM = e => ({
			element: () => e.element.dom
		}),
		zM = (e, t) => {
			const o = L(re(t), (e => {
				const o = t[e],
					n = Jn((e => Kn("sidebar", RM, e))(o));
				return {
					name: e,
					getApi: NM,
					onSetup: n.onSetup,
					onShow: n.onShow,
					onHide: n.onHide
				}
			}));
			return L(o, (t => {
				const n = en(b);
				return e.slot(t.name, {
					dom: {
						tag: "div",
						classes: ["tox-sidebar__pane"]
					},
					behaviours: aw([mw(t, n), gw(t, n), Wr(Er(), ((e, t) => {
						const n = t.event,
							s = j(o, (e => e.name === n.name));
						s.each((t => {
							(n.visible ? t.onShow : t.onHide)(t.getApi(e))
						}))
					}))])
				})
			}))
		},
		LM = e => FM.sketch((t => ({
			dom: {
				tag: "div",
				classes: ["tox-sidebar__pane-container"]
			},
			components: zM(t, e),
			slotBehaviours: aw([Jr((e => FM.hideAllSlots(e)))])
		}))),
		VM = (e, t) => {
			St(e, "role", t)
		},
		HM = e => Jm.getCurrent(e).bind((e => jT.isGrowing(e) || jT.hasGrown(e) ? Jm.getCurrent(e).bind((e => j(FM.getSlotNames(e), (t => FM.isShowing(e, t))))) : A.none())),
		PM = Di("FixSizeEvent"),
		UM = Di("AutoSizeEvent");
	var WM = Object.freeze({
			__proto__: null,
			block: (e, t, o, n) => {
				St(e.element, "aria-busy", !0);
				const s = t.getRoot(e).getOr(e),
					r = ca([bh.config({
						mode: "special",
						onTab: () => A.some(!0),
						onShiftTab: () => A.some(!0)
					}), Bh.config({})]),
					a = n(s, r),
					i = s.getSystem().build(a);
				_h.append(s, hl(i)), i.hasConfigured(bh) && t.focus && bh.focusIn(i), o.isBlocked() || t.onBlock(e), o.blockWith((() => _h.remove(s, i)))
			},
			unblock: (e, t, o) => {
				Tt(e.element, "aria-busy"), o.isBlocked() && t.onUnblock(e), o.clear()
			},
			isBlocked: (e, t, o) => o.isBlocked()
		}),
		jM = [Ts("getRoot", A.none), _s("focus", !0), bi("onBlock"), bi("onUnblock")];
	const $M = ua({
			fields: jM,
			name: "blocking",
			apis: WM,
			state: Object.freeze({
				__proto__: null,
				init: () => {
					const e = tn((e => e.destroy()));
					return la({
						readState: e.isSet,
						blockWith: t => {
							e.set({
								destroy: t
							})
						},
						clear: e.clear,
						isBlocked: e.isSet
					})
				}
			})
		}),
		GM = e => Jm.getCurrent(e).each((e => mc(e.element, !0))),
		qM = (e, t, o) => {
			const n = en(!1),
				s = nn(),
				r = o => {
					var s;
					n.get() && (!(e => "focusin" === e.type)(s = o) || !(s.composed ? te(s.composedPath()) : A.from(s.target)).map(ze).filter($e).exists((e => Ca(e, "mce-pastebin")))) && (o.preventDefault(), GM(t()), e.editorManager.setActive(e))
				};
			e.inline || e.on("PreInit", (() => {
				e.dom.bind(e.getWin(), "focusin", r), e.on("BeforeExecCommand", (e => {
					"mcefocus" === e.command.toLowerCase() && !0 !== e.value && r(e)
				}))
			}));
			const a = s => {
				s !== n.get() && (n.set(s), ((e, t, o, n) => {
					const s = t.element;
					if (((e, t) => {
							const o = "tabindex",
								n = `data-mce-${o}`;
							A.from(e.iframeElement).map(ze).each((e => {
								t ? (Ot(e, o).each((t => St(e, n, t))), St(e, o, -1)) : (Tt(e, o), Ot(e, n).each((t => {
									St(e, o, t), Tt(e, n)
								})))
							}))
						})(e, o), o) $M.block(t, (e => (t, o) => ({
						dom: {
							tag: "div",
							attributes: {
								"aria-label": e.translate("Loading..."),
								tabindex: "0"
							},
							classes: ["tox-throbber__busy-spinner"]
						},
						components: [{
							dom: Nb('<div class="tox-spinner"><div></div><div></div><div></div></div>')
						}]
					}))(n)), Lt(s, "display"), Tt(s, "aria-hidden"), e.hasFocus() && GM(t);
					else {
						const o = Jm.getCurrent(t).exists((e => pc(e.element)));
						$M.unblock(t), Mt(s, "display", "none"), St(s, "aria-hidden", "true"), o && e.focus()
					}
				})(e, t(), s, o.providers), ((e, t) => {
					e.dispatch("AfterProgressState", {
						state: t
					})
				})(e, s))
			};
			e.on("ProgressState", (t => {
				if (s.on(clearTimeout), h(t.time)) {
					const o = wf.setEditorTimeout(e, (() => a(t.state)), t.time);
					s.set(o)
				} else a(t.state), s.clear()
			}))
		},
		YM = (e, t, o) => ({
			within: e,
			extra: t,
			withinWidth: o
		}),
		XM = (e, t, o) => {
			const n = W(e, ((e, t) => ((e, t) => {
					const n = o(e);
					return A.some({
						element: e,
						start: t,
						finish: t + n,
						width: n
					})
				})(t, e.len).fold(y(e), (t => ({
					len: t.finish,
					list: e.list.concat([t])
				})))), {
					len: 0,
					list: []
				}).list,
				s = P(n, (e => e.finish <= t)),
				r = U(s, ((e, t) => e + t.width), 0);
			return {
				within: s,
				extra: n.slice(s.length),
				withinWidth: r
			}
		},
		KM = e => L(e, (e => e.element)),
		JM = (e, t) => {
			const o = L(t, (e => hl(e)));
			lM.setGroups(e, o)
		},
		QM = (e, t, o) => {
			const n = t.builtGroups.get();
			if (0 === n.length) return;
			const s = Im(e, t, "primary"),
				r = tC.getCoupled(e, "overflowGroup");
			Mt(s.element, "visibility", "hidden");
			const a = n.concat([r]),
				i = se(a, (e => fc(e.element).bind((t => e.getSystem().getByDom(t).toOptional()))));
			o([]), JM(s, a);
			const l = ((e, t, o, n) => {
				const s = ((e, t, o) => {
						const n = XM(t, e, o);
						return 0 === n.extra.length ? A.some(n) : A.none()
					})(e, t, o).getOrThunk((() => XM(t, e - o(n), o))),
					r = s.within,
					a = s.extra,
					i = s.withinWidth;
				return 1 === a.length && a[0].width <= o(n) ? ((e, t, o) => {
					const n = KM(e.concat(t));
					return YM(n, [], o)
				})(r, a, i) : a.length >= 1 ? ((e, t, o, n) => {
					const s = KM(e).concat([o]);
					return YM(s, KM(t), n)
				})(r, a, n, i) : ((e, t, o) => YM(KM(e), [], o))(r, 0, i)
			})(Kt(s.element), t.builtGroups.get(), (e => Math.ceil(e.element.dom.getBoundingClientRect().width)), r);
			0 === l.extra.length ? (_h.remove(s, r), o([])) : (JM(s, l.within), o(l.extra)), Lt(s.element, "visibility"), Vt(s.element), i.each(Bh.focus)
		},
		ZM = y([$u("splitToolbarBehaviours", [tC]), ns("builtGroups", (() => en([])))]),
		eD = y([hi(["overflowToggledClass"]), vs("getOverflowBounds"), rs("lazySink"), ns("overflowGroups", (() => en([]))), bi("onOpened"), bi("onClosed")].concat(ZM())),
		tD = y([vm({
			factory: lM,
			schema: aM(),
			name: "primary"
		}), xm({
			schema: aM(),
			name: "overflow"
		}), xm({
			name: "overflow-button"
		}), xm({
			name: "overflow-group"
		})]),
		oD = y(((e, t) => {
			((e, t) => {
				const o = Xt.max(e, t, ["margin-left", "border-left-width", "padding-left", "padding-right", "border-right-width", "margin-right"]);
				Mt(e, "max-width", o + "px")
			})(e, Math.floor(t))
		})),
		nD = y([hi(["toggledClass"]), rs("lazySink"), cs("fetch"), vs("getBounds"), ys("fireDismissalEventInstead", [ws("event", Or())]), Jc(), bi("onToggled")]),
		sD = y([xm({
			name: "button",
			overrides: e => ({
				dom: {
					attributes: {
						"aria-haspopup": "true"
					}
				},
				buttonBehaviours: ca([Hh.config({
					toggleClass: e.markers.toggledClass,
					aria: {
						mode: "expanded"
					},
					toggleOnExecute: !1,
					onToggled: e.onToggled
				})])
			})
		}), xm({
			factory: lM,
			schema: aM(),
			name: "toolbar",
			overrides: e => ({
				toolbarBehaviours: ca([bh.config({
					mode: "cyclic",
					onEscape: t => (Bm(t, e, "button").each(Bh.focus), A.none())
				})])
			})
		})]),
		rD = nn(),
		aD = (e, t) => {
			const o = tC.getCoupled(e, "toolbarSandbox");
			ku.isOpen(o) ? ku.close(o) : ku.open(o, t.toolbar())
		},
		iD = (e, t, o, n) => {
			const s = o.getBounds.map((e => e())),
				r = o.lazySink(e).getOrDie();
			Qd.positionWithinBounds(r, t, {
				anchor: {
					type: "hotspot",
					hotspot: e,
					layouts: n,
					overrides: {
						maxWidthFunction: oD()
					}
				}
			}, s)
		},
		lD = (e, t, o, n, s) => {
			lM.setGroups(t, s), iD(e, t, o, n), Hh.on(e)
		},
		cD = qm({
			name: "FloatingToolbarButton",
			factory: (e, t, o, n) => ({
				...Rb.sketch({
					...n.button(),
					action: e => {
						aD(e, n)
					},
					buttonBehaviours: Xu({
						dump: n.button().buttonBehaviours
					}, [tC.config({
						others: {
							toolbarSandbox: t => ((e, t, o) => {
								const n = El();
								return {
									dom: {
										tag: "div",
										attributes: {
											id: n.id
										}
									},
									behaviours: ca([bh.config({
										mode: "special",
										onEscape: e => (ku.close(e), A.some(!0))
									}), ku.config({
										onOpen: (s, r) => {
											const a = rD.get().getOr(!1);
											o.fetch().get((s => {
												lD(e, r, o, t.layouts, s), n.link(e.element), a || bh.focusIn(r)
											}))
										},
										onClose: () => {
											Hh.off(e), rD.get().getOr(!1) || Bh.focus(e), n.unlink(e.element)
										},
										isPartOf: (t, o, n) => Al(o, n) || Al(e, n),
										getAttachPoint: () => o.lazySink(e).getOrDie()
									}), dc.config({
										channels: {
											...Au({
												isExtraPart: T,
												...o.fireDismissalEventInstead.map((e => ({
													fireEventInstead: {
														event: e.event
													}
												}))).getOr({})
											}),
											...Du({
												doReposition: () => {
													ku.getState(tC.getCoupled(e, "toolbarSandbox")).each((n => {
														iD(e, n, o, t.layouts)
													}))
												}
											})
										}
									})])
								}
							})(t, o, e)
						}
					})])
				}),
				apis: {
					setGroups: (t, n) => {
						ku.getState(tC.getCoupled(t, "toolbarSandbox")).each((s => {
							lD(t, s, e, o.layouts, n)
						}))
					},
					reposition: t => {
						ku.getState(tC.getCoupled(t, "toolbarSandbox")).each((n => {
							iD(t, n, e, o.layouts)
						}))
					},
					toggle: e => {
						aD(e, n)
					},
					toggleWithoutFocusing: e => {
						((e, t) => {
							rD.set(!0), aD(e, t), rD.clear()
						})(e, n)
					},
					getToolbar: e => ku.getState(tC.getCoupled(e, "toolbarSandbox")),
					isOpen: e => ku.isOpen(tC.getCoupled(e, "toolbarSandbox"))
				}
			}),
			configFields: nD(),
			partFields: sD(),
			apis: {
				setGroups: (e, t, o) => {
					e.setGroups(t, o)
				},
				reposition: (e, t) => {
					e.reposition(t)
				},
				toggle: (e, t) => {
					e.toggle(t)
				},
				toggleWithoutFocusing: (e, t) => {
					e.toggleWithoutFocusing(t)
				},
				getToolbar: (e, t) => e.getToolbar(t),
				isOpen: (e, t) => e.isOpen(t)
			}
		}),
		dD = y([rs("items"), hi(["itemSelector"]), $u("tgroupBehaviours", [bh])]),
		uD = y([wm({
			name: "items",
			unit: "item"
		})]),
		mD = qm({
			name: "ToolbarGroup",
			configFields: dD(),
			partFields: uD(),
			factory: (e, t, o, n) => ({
				uid: e.uid,
				dom: e.dom,
				components: t,
				behaviours: qu(e.tgroupBehaviours, [bh.config({
					mode: "flow",
					selector: e.markers.itemSelector
				})]),
				domModification: {
					attributes: {
						role: "toolbar"
					}
				}
			})
		}),
		gD = e => L(e, (e => hl(e))),
		pD = (e, t, o) => {
			QM(e, o, (n => {
				o.overflowGroups.set(n), t.getOpt(e).each((e => {
					cD.setGroups(e, gD(n))
				}))
			}))
		},
		hD = qm({
			name: "SplitFloatingToolbar",
			configFields: eD(),
			partFields: tD(),
			factory: (e, t, o, n) => {
				const s = zb(cD.sketch({
					fetch: () => aC((t => {
						t(gD(e.overflowGroups.get()))
					})),
					layouts: {
						onLtr: () => [Xl, Yl],
						onRtl: () => [Yl, Xl],
						onBottomLtr: () => [Jl, Kl],
						onBottomRtl: () => [Kl, Jl]
					},
					getBounds: o.getOverflowBounds,
					lazySink: e.lazySink,
					fireDismissalEventInstead: {},
					markers: {
						toggledClass: e.markers.overflowToggledClass
					},
					parts: {
						button: n["overflow-button"](),
						toolbar: n.overflow()
					},
					onToggled: (t, o) => e[o ? "onOpened" : "onClosed"](t)
				}));
				return {
					uid: e.uid,
					dom: e.dom,
					components: t,
					behaviours: qu(e.splitToolbarBehaviours, [tC.config({
						others: {
							overflowGroup: () => mD.sketch({
								...n["overflow-group"](),
								items: [s.asSpec()]
							})
						}
					})]),
					apis: {
						setGroups: (t, o) => {
							e.builtGroups.set(L(o, t.getSystem().build)), pD(t, s, e)
						},
						refresh: t => pD(t, s, e),
						toggle: e => {
							s.getOpt(e).each((e => {
								cD.toggle(e)
							}))
						},
						toggleWithoutFocusing: e => {
							s.getOpt(e).each(cD.toggleWithoutFocusing)
						},
						isOpen: e => s.getOpt(e).map(cD.isOpen).getOr(!1),
						reposition: e => {
							s.getOpt(e).each((e => {
								cD.reposition(e)
							}))
						},
						getOverflow: e => s.getOpt(e).bind(cD.getToolbar)
					},
					domModification: {
						attributes: {
							role: "group"
						}
					}
				}
			},
			apis: {
				setGroups: (e, t, o) => {
					e.setGroups(t, o)
				},
				refresh: (e, t) => {
					e.refresh(t)
				},
				reposition: (e, t) => {
					e.reposition(t)
				},
				toggle: (e, t) => {
					e.toggle(t)
				},
				toggleWithoutFocusing: (e, t) => {
					e.toggle(t)
				},
				isOpen: (e, t) => e.isOpen(t),
				getOverflow: (e, t) => e.getOverflow(t)
			}
		}),
		fD = y([hi(["closedClass", "openClass", "shrinkingClass", "growingClass", "overflowToggledClass"]), bi("onOpened"), bi("onClosed")].concat(ZM())),
		bD = y([vm({
			factory: lM,
			schema: aM(),
			name: "primary"
		}), vm({
			factory: lM,
			schema: aM(),
			name: "overflow",
			overrides: e => ({
				toolbarBehaviours: ca([jT.config({
					dimension: {
						property: "height"
					},
					closedClass: e.markers.closedClass,
					openClass: e.markers.openClass,
					shrinkingClass: e.markers.shrinkingClass,
					growingClass: e.markers.growingClass,
					onShrunk: t => {
						Bm(t, e, "overflow-button").each((e => {
							Hh.off(e)
						})), e.onClosed(t)
					},
					onGrown: t => {
						e.onOpened(t)
					},
					onStartGrow: t => {
						Bm(t, e, "overflow-button").each(Hh.on)
					}
				}), bh.config({
					mode: "acyclic",
					onEscape: t => (Bm(t, e, "overflow-button").each(Bh.focus), A.some(!0))
				})])
			})
		}), xm({
			name: "overflow-button",
			overrides: e => ({
				buttonBehaviours: ca([Hh.config({
					toggleClass: e.markers.overflowToggledClass,
					aria: {
						mode: "expanded"
					},
					toggleOnExecute: !1
				})])
			})
		}), xm({
			name: "overflow-group"
		})]),
		vD = (e, t, o) => {
			Bm(e, t, "overflow-button").each((n => {
				Bm(e, t, "overflow").each((s => {
					if (xD(e, t), jT.hasShrunk(s)) {
						const e = t.onOpened;
						t.onOpened = n => {
							o || bh.focusIn(s), e(n), t.onOpened = e
						}
					} else {
						const e = t.onClosed;
						t.onClosed = s => {
							o || Bh.focus(n), e(s), t.onClosed = e
						}
					}
					jT.toggleGrow(s)
				}))
			}))
		},
		xD = (e, t) => {
			Bm(e, t, "overflow").each((o => {
				QM(e, t, (e => {
					const t = L(e, (e => hl(e)));
					lM.setGroups(o, t)
				})), Bm(e, t, "overflow-button").each((e => {
					jT.hasGrown(o) && Hh.on(e)
				})), jT.refresh(o)
			}))
		},
		yD = qm({
			name: "SplitSlidingToolbar",
			configFields: fD(),
			partFields: bD(),
			factory: (e, t, o, n) => {
				const s = "alloy.toolbar.toggle";
				return {
					uid: e.uid,
					dom: e.dom,
					components: t,
					behaviours: qu(e.splitToolbarBehaviours, [tC.config({
						others: {
							overflowGroup: e => mD.sketch({
								...n["overflow-group"](),
								items: [Rb.sketch({
									...n["overflow-button"](),
									action: t => {
										Fr(e, s)
									}
								})]
							})
						}
					}), Th("toolbar-toggle-events", [Wr(s, (t => {
						vD(t, e, !1)
					}))])]),
					apis: {
						setGroups: (t, o) => {
							((t, o) => {
								const n = L(o, t.getSystem().build);
								e.builtGroups.set(n)
							})(t, o), xD(t, e)
						},
						refresh: t => xD(t, e),
						toggle: t => {
							vD(t, e, !1)
						},
						toggleWithoutFocusing: t => {
							vD(t, e, !0)
						},
						isOpen: t => ((e, t) => Bm(e, t, "overflow").map(jT.hasGrown).getOr(!1))(t, e)
					},
					domModification: {
						attributes: {
							role: "group"
						}
					}
				}
			},
			apis: {
				setGroups: (e, t, o) => {
					e.setGroups(t, o)
				},
				refresh: (e, t) => {
					e.refresh(t)
				},
				toggle: (e, t) => {
					e.toggle(t)
				},
				isOpen: (e, t) => e.isOpen(t)
			}
		}),
		wD = e => {
			const t = e.title.fold((() => ({})), (e => ({
				attributes: {
					title: e
				}
			})));
			return {
				dom: {
					tag: "div",
					classes: ["tox-toolbar__group"],
					...t
				},
				components: [mD.parts.items({})],
				items: e.items,
				markers: {
					itemSelector: "*:not(.tox-split-button) > .tox-tbtn:not([disabled]), .tox-split-button:not([disabled]), .tox-toolbar-nav-js:not([disabled]), .tox-number-input:not([disabled])"
				},
				tgroupBehaviours: ca([Hb.config({}), Bh.config({})])
			}
		},
		SD = e => mD.sketch(wD(e)),
		CD = (e, t) => {
			const o = Jr((t => {
				const o = L(e.initGroups, SD);
				lM.setGroups(t, o)
			}));
			return ca([dw((() => e.providers.checkUiComponentContext("any").shouldDisable)), bw((() => e.providers.checkUiComponentContext("any"))), bh.config({
				mode: t,
				onEscape: e.onEscape,
				selector: ".tox-toolbar__group"
			}), Th("toolbar-events", [o])])
		},
		kD = e => {
			const t = e.cyclicKeying ? "cyclic" : "acyclic";
			return {
				uid: e.uid,
				dom: {
					tag: "div",
					classes: ["tox-toolbar-overlord"]
				},
				parts: {
					"overflow-group": wD({
						title: A.none(),
						items: []
					}),
					"overflow-button": yE({
						context: "any",
						name: "more",
						icon: A.some("more-drawer"),
						enabled: !0,
						tooltip: A.some("Reveal or hide additional toolbar items"),
						primary: !1,
						buttonType: A.none(),
						borderless: !1
					}, A.none(), e.providers, [], "overflow-button")
				},
				splitToolbarBehaviours: CD(e, t)
			}
		},
		OD = e => {
			const t = kD(e),
				o = hD.parts.primary({
					dom: {
						tag: "div",
						classes: ["tox-toolbar__primary"]
					}
				});
			return hD.sketch({
				...t,
				lazySink: e.getSink,
				getOverflowBounds: () => {
					const t = e.moreDrawerData.lazyHeader().element,
						o = Jo(t),
						n = nt(t),
						s = Jo(n),
						r = Math.max(n.dom.scrollHeight, s.height);
					return Xo(o.x + 4, s.y, o.width - 8, r)
				},
				parts: {
					...t.parts,
					overflow: {
						dom: {
							tag: "div",
							classes: ["tox-toolbar__overflow"],
							attributes: e.attributes
						}
					}
				},
				components: [o],
				markers: {
					overflowToggledClass: "tox-tbtn--enabled"
				},
				onOpened: t => e.onToggled(t, !0),
				onClosed: t => e.onToggled(t, !1)
			})
		},
		_D = e => {
			const t = yD.parts.primary({
					dom: {
						tag: "div",
						classes: ["tox-toolbar__primary"]
					}
				}),
				o = yD.parts.overflow({
					dom: {
						tag: "div",
						classes: ["tox-toolbar__overflow"]
					}
				}),
				n = kD(e);
			return yD.sketch({
				...n,
				components: [t, o],
				markers: {
					openClass: "tox-toolbar__overflow--open",
					closedClass: "tox-toolbar__overflow--closed",
					growingClass: "tox-toolbar__overflow--growing",
					shrinkingClass: "tox-toolbar__overflow--shrinking",
					overflowToggledClass: "tox-tbtn--enabled"
				},
				onOpened: t => {
					t.getSystem().broadcastOn([pM()], {
						type: "opened"
					}), e.onToggled(t, !0)
				},
				onClosed: t => {
					t.getSystem().broadcastOn([pM()], {
						type: "closed"
					}), e.onToggled(t, !1)
				}
			})
		},
		TD = e => {
			const t = e.cyclicKeying ? "cyclic" : "acyclic";
			return lM.sketch({
				uid: e.uid,
				dom: {
					tag: "div",
					classes: ["tox-toolbar"].concat(e.type === xf.scrolling ? ["tox-toolbar--scrolling"] : [])
				},
				components: [lM.parts.groups({})],
				toolbarBehaviours: CD(e, t)
			})
		},
		ED = [uy, gy, fs("tooltip"), Os("buttonType", "secondary", ["primary", "secondary"]), _s("borderless", !1), cs("onAction"), ks("context", "mode:design")],
		AD = {
			button: [...ED, ty, ls("type", ["button"])],
			togglebutton: [...ED, _s("active", !1), ls("type", ["togglebutton"])]
		},
		MD = [ls("type", ["group"]), Es("buttons", [], es("type", AD))],
		DD = es("type", {
			...AD,
			group: MD
		}),
		BD = Fn([Es("buttons", [], DD), cs("onShow"), cs("onHide")]),
		ID = (e, t) => ((e, t) => {
			var o, n;
			const s = "togglebutton" === e.type,
				r = e.icon.map((e => iT(e, t.icons))).map(zb),
				a = {
					...e,
					name: s ? e.text.getOr(e.icon.getOr("")) : null !== (o = e.text) && void 0 !== o ? o : e.icon.getOr(""),
					primary: "primary" === e.buttonType,
					buttonType: A.from(e.buttonType),
					tooltip: e.tooltip,
					icon: e.icon,
					enabled: !0,
					borderless: e.borderless
				},
				i = wE(null !== (n = e.buttonType) && void 0 !== n ? n : "secondary"),
				l = s ? e.text.map(t.translate) : A.some(t.translate(e.text)),
				c = l.map(dl),
				d = a.tooltip.or(l).map((e => ({
					"aria-label": t.translate(e)
				}))).getOr({}),
				u = r.map((e => e.asSpec())),
				m = yw([u, c]),
				g = e.icon.isSome() && c.isSome(),
				p = {
					tag: "button",
					classes: i.concat(...e.icon.isSome() && !g ? ["tox-button--icon"] : []).concat(...g ? ["tox-button--icon-and-text"] : []).concat(...e.borderless ? ["tox-button--naked"] : []).concat(..."togglebutton" === e.type && e.active ? ["tox-button--enabled"] : []),
					attributes: d
				},
				h = xE(a, A.some((o => {
					const n = e => {
						r.map((n => n.getOpt(o).each((o => {
							_h.set(o, [iT(e, t.icons)])
						}))))
					};
					return s ? e.onAction({
						setIcon: n,
						setActive: e => {
							const t = o.element;
							e ? (ya(t, "tox-button--enabled"), St(t, "aria-pressed", !0)) : (Sa(t, "tox-button--enabled"), Tt(t, "aria-pressed"))
						},
						isActive: () => Ca(o.element, "tox-button--enabled"),
						focus: () => mc(o.element)
					}) : "button" === e.type ? e.onAction({
						setIcon: n
					}) : void 0
				})), [], p, m, e.tooltip, t);
			return Rb.sketch(h)
		})(e, t),
		FD = Mo().deviceType,
		RD = FD.isPhone(),
		ND = FD.isTablet();
	var zD = qm({
		name: "silver.View",
		configFields: [rs("viewConfig")],
		partFields: [ym({
			factory: {
				sketch: e => {
					let t = !1;
					const o = L(e.buttons, (o => "group" === o.type ? (t = !0, ((e, t) => ({
						dom: {
							tag: "div",
							classes: ["tox-view__toolbar__group"]
						},
						components: L(e.buttons, (e => ID(e, t)))
					}))(o, e.providers)) : ID(o, e.providers)));
					return {
						uid: e.uid,
						dom: {
							tag: "div",
							classes: [t ? "tox-view__toolbar" : "tox-view__header", ...RD || ND ? ["tox-view--mobile", "tox-view--scrolling"] : []]
						},
						behaviours: ca([Bh.config({}), bh.config({
							mode: "flow",
							selector: "button, .tox-button",
							focusInside: jg.OnEnterOrSpaceMode
						})]),
						components: t ? o : [UC.sketch({
							dom: {
								tag: "div",
								classes: ["tox-view__header-start"]
							},
							components: []
						}), UC.sketch({
							dom: {
								tag: "div",
								classes: ["tox-view__header-end"]
							},
							components: o
						})]
					}
				}
			},
			schema: [rs("buttons"), rs("providers")],
			name: "header"
		}), ym({
			factory: {
				sketch: e => ({
					uid: e.uid,
					behaviours: ca([Bh.config({}), Hb.config({})]),
					dom: {
						tag: "div",
						classes: ["tox-view__pane"]
					}
				})
			},
			schema: [],
			name: "pane"
		})],
		factory: (e, t, o, n) => {
			const s = {
				getPane: t => eM.getPart(t, e, "pane"),
				getOnShow: t => e.viewConfig.onShow,
				getOnHide: t => e.viewConfig.onHide
			};
			return {
				uid: e.uid,
				dom: e.dom,
				components: t,
				behaviours: ca([Bh.config({}), bh.config({
					mode: "cyclic",
					focusInside: jg.OnEnterOrSpaceMode
				})]),
				apis: s
			}
		},
		apis: {
			getPane: (e, t) => e.getPane(t),
			getOnShow: (e, t) => e.getOnShow(t),
			getOnHide: (e, t) => e.getOnHide(t)
		}
	});
	const LD = (e, t, o) => ge(t, ((t, n) => {
			const s = Jn(Kn("view", BD, t));
			return e.slot(n, zD.sketch({
				dom: {
					tag: "div",
					classes: ["tox-view"]
				},
				viewConfig: s,
				components: [...s.buttons.length > 0 ? [zD.parts.header({
					buttons: s.buttons,
					providers: o
				})] : [], zD.parts.pane({})]
			}))
		})),
		VD = (e, t) => FM.sketch((o => ({
			dom: {
				tag: "div",
				classes: ["tox-view-wrap__slot-container"]
			},
			components: LD(o, e, t),
			slotBehaviours: aw([Jr((e => FM.hideAllSlots(e)))])
		}))),
		HD = e => j(FM.getSlotNames(e), (t => FM.isShowing(e, t))),
		PD = (e, t, o) => {
			FM.getSlot(e, t).each((e => {
				zD.getPane(e).each((t => {
					var n;
					o(e)((n = t.element.dom, {
						getContainer: y(n)
					}))
				}))
			}))
		};
	var UD = Gm({
		factory: (e, t) => {
			const o = {
				setViews: (e, o) => {
					_h.set(e, [VD(o, t.backstage.shared.providers)])
				},
				whichView: e => Jm.getCurrent(e).bind(HD),
				toggleView: (e, t, o, n) => Jm.getCurrent(e).exists((s => {
					const r = HD(s),
						a = r.exists((e => n === e)),
						i = FM.getSlot(s, n).isSome();
					return i && (FM.hideAllSlots(s), a ? ((e => {
						const t = e.element;
						Mt(t, "display", "none"), St(t, "aria-hidden", "true")
					})(e), t()) : (o(), (e => {
						const t = e.element;
						Lt(t, "display"), Tt(t, "aria-hidden")
					})(e), FM.showSlot(s, n), ((e, t) => {
						PD(e, t, zD.getOnShow)
					})(s, n)), r.each((e => ((e, t) => PD(e, t, zD.getOnHide))(s, e)))), i
				}))
			};
			return {
				uid: e.uid,
				dom: {
					tag: "div",
					classes: ["tox-view-wrap"],
					attributes: {
						"aria-hidden": "true"
					},
					styles: {
						display: "none"
					}
				},
				components: [],
				behaviours: ca([_h.config({}), Jm.config({
					find: e => {
						const t = _h.contents(e);
						return te(t)
					}
				})]),
				apis: o
			}
		},
		name: "silver.ViewWrapper",
		configFields: [rs("backstage")],
		apis: {
			setViews: (e, t, o) => e.setViews(t, o),
			toggleView: (e, t, o, n, s) => e.toggleView(t, o, n, s),
			whichView: (e, t) => e.whichView(t)
		}
	});
	const WD = tM.optional({
			factory: AM,
			name: "menubar",
			schema: [rs("backstage")]
		}),
		jD = tM.optional({
			factory: {
				sketch: e => rM.sketch({
					uid: e.uid,
					dom: e.dom,
					listBehaviours: ca([bh.config({
						mode: "acyclic",
						selector: ".tox-toolbar"
					})]),
					makeItem: () => TD({
						type: e.type,
						uid: Di("multiple-toolbar-item"),
						cyclicKeying: !1,
						initGroups: [],
						providers: e.providers,
						onEscape: () => (e.onEscape(), A.some(!0))
					}),
					setupItem: (e, t, o, n) => {
						lM.setGroups(t, o)
					},
					shell: !0
				})
			},
			name: "multiple-toolbar",
			schema: [rs("dom"), rs("onEscape")]
		}),
		$D = tM.optional({
			factory: {
				sketch: e => {
					const t = (e => e.type === xf.sliding ? _D : e.type === xf.floating ? OD : TD)(e);
					return t({
						type: e.type,
						uid: e.uid,
						onEscape: () => (e.onEscape(), A.some(!0)),
						onToggled: (t, o) => e.onToolbarToggled(o),
						cyclicKeying: !1,
						initGroups: [],
						getSink: e.getSink,
						providers: e.providers,
						moreDrawerData: {
							lazyToolbar: e.lazyToolbar,
							lazyMoreButton: e.lazyMoreButton,
							lazyHeader: e.lazyHeader
						},
						attributes: e.attributes
					})
				}
			},
			name: "toolbar",
			schema: [rs("dom"), rs("onEscape"), rs("getSink")]
		}),
		GD = tM.optional({
			factory: {
				sketch: e => {
					const t = e.editor,
						o = e.sticky ? SM : uM;
					return {
						uid: e.uid,
						dom: e.dom,
						components: e.components,
						behaviours: ca(o(t, e.sharedBackstage))
					}
				}
			},
			name: "header",
			schema: [rs("dom")]
		}),
		qD = tM.optional({
			factory: {
				sketch: e => ({
					uid: e.uid,
					dom: e.dom,
					components: [{
						dom: {
							tag: "a",
							attributes: {
								href: "https://www.tiny.cloud/tinymce-self-hosted-premium-features/?utm_campaign=self_hosted_upgrade_promo&utm_source=tiny&utm_medium=referral",
								rel: "noopener",
								target: "_blank",
								"aria-hidden": "true"
							},
							classes: ["tox-promotion-link"],
							innerHtml: "\u26a1\ufe0fUpgrade"
						}
					}]
				})
			},
			name: "promotion",
			schema: [rs("dom")]
		}),
		YD = tM.optional({
			name: "socket",
			schema: [rs("dom")]
		}),
		XD = tM.optional({
			factory: {
				sketch: e => ({
					uid: e.uid,
					dom: {
						tag: "div",
						classes: ["tox-sidebar"],
						attributes: {
							role: "presentation"
						}
					},
					components: [{
						dom: {
							tag: "div",
							classes: ["tox-sidebar__slider"]
						},
						components: [],
						behaviours: ca([Hb.config({}), Bh.config({}), jT.config({
							dimension: {
								property: "width"
							},
							closedClass: "tox-sidebar--sliding-closed",
							openClass: "tox-sidebar--sliding-open",
							shrinkingClass: "tox-sidebar--sliding-shrinking",
							growingClass: "tox-sidebar--sliding-growing",
							onShrunk: e => {
								Jm.getCurrent(e).each(FM.hideAllSlots), Fr(e, UM)
							},
							onGrown: e => {
								Fr(e, UM)
							},
							onStartGrow: e => {
								Rr(e, PM, {
									width: Rt(e.element, "width").getOr("")
								})
							},
							onStartShrink: e => {
								Rr(e, PM, {
									width: Kt(e.element) + "px"
								})
							}
						}), _h.config({}), Jm.config({
							find: e => {
								const t = _h.contents(e);
								return te(t)
							}
						})])
					}],
					behaviours: ca([y_(0), Th("sidebar-sliding-events", [Wr(PM, ((e, t) => {
						Mt(e.element, "width", t.event.width)
					})), Wr(UM, ((e, t) => {
						Lt(e.element, "width")
					}))])])
				})
			},
			name: "sidebar",
			schema: [rs("dom")]
		}),
		KD = tM.optional({
			factory: {
				sketch: e => ({
					uid: e.uid,
					dom: {
						tag: "div",
						attributes: {
							"aria-hidden": "true"
						},
						classes: ["tox-throbber"],
						styles: {
							display: "none"
						}
					},
					behaviours: ca([_h.config({}), $M.config({
						focus: !1
					}), Jm.config({
						find: e => te(e.components())
					})]),
					components: []
				})
			},
			name: "throbber",
			schema: [rs("dom")]
		}),
		JD = tM.optional({
			factory: UD,
			name: "viewWrapper",
			schema: [rs("backstage")]
		}),
		QD = tM.optional({
			factory: {
				sketch: e => ({
					uid: e.uid,
					dom: {
						tag: "div",
						classes: ["tox-editor-container"]
					},
					components: e.components
				})
			},
			name: "editorContainer",
			schema: []
		});
	var ZD = qm({
		name: "OuterContainer",
		factory: (e, t, o) => {
			let n = !1;
			const s = e => {
					Cl(e, ".tox-statusbar").each((e => {
						"none" === It(e, "display") && "true" === kt(e, "aria-hidden") ? (Lt(e, "display"), Tt(e, "aria-hidden")) : (Mt(e, "display", "none"), St(e, "aria-hidden", "true"))
					}))
				},
				a = {
					getSocket: t => eM.getPart(t, e, "socket"),
					setSidebar: (t, o, n) => {
						eM.getPart(t, e, "sidebar").each((e => ((e, t, o) => {
							Jm.getCurrent(e).each((n => {
								_h.set(n, [LM(t)]);
								const s = null == o ? void 0 : o.toLowerCase();
								r(s) && be(t, s) && Jm.getCurrent(n).each((t => {
									FM.showSlot(t, s), jT.immediateGrow(n), Lt(n.element, "width"), VM(e.element, "region")
								}))
							}))
						})(e, o, n)))
					},
					toggleSidebar: (t, o) => {
						eM.getPart(t, e, "sidebar").each((e => ((e, t) => {
							Jm.getCurrent(e).each((o => {
								Jm.getCurrent(o).each((n => {
									jT.hasGrown(o) ? FM.isShowing(n, t) ? (jT.shrink(o), VM(e.element, "presentation")) : (FM.hideAllSlots(n), FM.showSlot(n, t), VM(e.element, "region")) : (FM.hideAllSlots(n), FM.showSlot(n, t), jT.grow(o), VM(e.element, "region"))
								}))
							}))
						})(e, o)))
					},
					whichSidebar: t => eM.getPart(t, e, "sidebar").bind(HM).getOrNull(),
					getHeader: t => eM.getPart(t, e, "header"),
					getToolbar: t => eM.getPart(t, e, "toolbar"),
					setToolbar: (t, o) => {
						eM.getPart(t, e, "toolbar").each((e => {
							const t = L(o, SD);
							e.getApis().setGroups(e, t)
						}))
					},
					setToolbars: (t, o) => {
						eM.getPart(t, e, "multiple-toolbar").each((e => {
							const t = L(o, (e => L(e, SD)));
							rM.setItems(e, t)
						}))
					},
					refreshToolbar: t => {
						eM.getPart(t, e, "toolbar").each((e => e.getApis().refresh(e)))
					},
					toggleToolbarDrawer: t => {
						eM.getPart(t, e, "toolbar").each((e => {
							Se(e.getApis().toggle, (t => t(e)))
						}))
					},
					toggleToolbarDrawerWithoutFocusing: t => {
						eM.getPart(t, e, "toolbar").each((e => {
							Se(e.getApis().toggleWithoutFocusing, (t => t(e)))
						}))
					},
					isToolbarDrawerToggled: t => eM.getPart(t, e, "toolbar").bind((e => A.from(e.getApis().isOpen).map((t => t(e))))).getOr(!1),
					getThrobber: t => eM.getPart(t, e, "throbber"),
					focusToolbar: t => {
						eM.getPart(t, e, "toolbar").orThunk((() => eM.getPart(t, e, "multiple-toolbar"))).each((e => {
							bh.focusIn(e)
						}))
					},
					setMenubar: (t, o) => {
						eM.getPart(t, e, "menubar").each((e => {
							AM.setMenus(e, o)
						}))
					},
					focusMenubar: t => {
						eM.getPart(t, e, "menubar").each((e => {
							AM.focus(e)
						}))
					},
					setViews: (t, o) => {
						eM.getPart(t, e, "viewWrapper").each((e => {
							UD.setViews(e, o)
						}))
					},
					toggleView: (t, o) => eM.getPart(t, e, "viewWrapper").exists((e => UD.toggleView(e, (() => a.showMainView(t)), (() => a.hideMainView(t)), o))),
					whichView: t => eM.getPart(t, e, "viewWrapper").bind(UD.whichView).getOrNull(),
					hideMainView: t => {
						n = a.isToolbarDrawerToggled(t), n && a.toggleToolbarDrawer(t), eM.getPart(t, e, "editorContainer").each((e => {
							const t = e.element;
							s(t), Mt(t, "display", "none"), St(t, "aria-hidden", "true")
						}))
					},
					showMainView: t => {
						n && a.toggleToolbarDrawer(t), eM.getPart(t, e, "editorContainer").each((e => {
							const t = e.element;
							s(t), Lt(t, "display"), Tt(t, "aria-hidden")
						}))
					}
				};
			return {
				uid: e.uid,
				dom: e.dom,
				components: t,
				apis: a,
				behaviours: e.behaviours
			}
		},
		configFields: [rs("dom"), rs("behaviours")],
		partFields: [GD, WD, $D, jD, YD, XD, qD, KD, JD, QD],
		apis: {
			getSocket: (e, t) => e.getSocket(t),
			setSidebar: (e, t, o, n) => {
				e.setSidebar(t, o, n)
			},
			toggleSidebar: (e, t, o) => {
				e.toggleSidebar(t, o)
			},
			whichSidebar: (e, t) => e.whichSidebar(t),
			getHeader: (e, t) => e.getHeader(t),
			getToolbar: (e, t) => e.getToolbar(t),
			setToolbar: (e, t, o) => {
				e.setToolbar(t, o)
			},
			setToolbars: (e, t, o) => {
				e.setToolbars(t, o)
			},
			refreshToolbar: (e, t) => e.refreshToolbar(t),
			toggleToolbarDrawer: (e, t) => {
				e.toggleToolbarDrawer(t)
			},
			toggleToolbarDrawerWithoutFocusing: (e, t) => {
				e.toggleToolbarDrawerWithoutFocusing(t)
			},
			isToolbarDrawerToggled: (e, t) => e.isToolbarDrawerToggled(t),
			getThrobber: (e, t) => e.getThrobber(t),
			setMenubar: (e, t, o) => {
				e.setMenubar(t, o)
			},
			focusMenubar: (e, t) => {
				e.focusMenubar(t)
			},
			focusToolbar: (e, t) => {
				e.focusToolbar(t)
			},
			setViews: (e, t, o) => {
				e.setViews(t, o)
			},
			toggleView: (e, t, o) => e.toggleView(t, o),
			whichView: (e, t) => e.whichView(t)
		}
	});
	const eB = {
			file: {
				title: "File",
				items: "newdocument restoredraft | preview | importword exportpdf exportword | export print | deleteallconversations"
			},
			edit: {
				title: "Edit",
				items: "undo redo | cut copy paste pastetext | selectall | searchreplace"
			},
			view: {
				title: "View",
				items: "code revisionhistory | visualaid visualchars visualblocks | spellchecker | preview fullscreen | showcomments"
			},
			insert: {
				title: "Insert",
				items: "image link media addcomment pageembed inserttemplate codesample inserttable accordion math | charmap emoticons hr | pagebreak nonbreaking anchor tableofcontents footnotes | mergetags | insertdatetime"
			},
			format: {
				title: "Format",
				items: "bold italic underline strikethrough superscript subscript codeformat | styles blocks fontfamily fontsize align lineheight | forecolor backcolor | language | removeformat"
			},
			tools: {
				title: "Tools",
				items: "aidialog aishortcuts | spellchecker spellcheckerlanguage | autocorrect capitalization | a11ycheck code typography wordcount addtemplate"
			},
			table: {
				title: "Table",
				items: "inserttable | cell row column | advtablesort | tableprops deletetable"
			},
			help: {
				title: "Help",
				items: "help"
			}
		},
		tB = e => e.split(" "),
		oB = (e, t) => {
			const o = {
					...eB,
					...t.menus
				},
				n = re(t.menus).length > 0,
				s = void 0 === t.menubar || !0 === t.menubar ? tB("file edit view insert format tools table help") : tB(!1 === t.menubar ? "" : t.menubar),
				a = P(s, (e => {
					const o = be(eB, e);
					return n ? o || fe(t.menus, e).exists((e => be(e, "items"))) : o
				})),
				i = L(a, (n => {
					const s = o[n];
					return ((e, t, o) => {
						const n = Vf(o).split(/[ ,]/);
						return {
							text: e.title,
							getItems: () => q(e.items, (e => {
								const o = e.toLowerCase();
								return 0 === o.trim().length || R(n, (e => e === o)) ? [] : "separator" === o || "|" === o ? [{
									type: "separator"
								}] : t.menuItems[o] ? [t.menuItems[o]] : []
							}))
						}
					})({
						title: s.title,
						items: tB(s.items)
					}, t, e)
				}));
			return P(i, (e => e.getItems().length > 0 && R(e.getItems(), (e => r(e) || "separator" !== e.type))))
		},
		nB = (e, t, o) => (e.on("remove", (() => o.unload(t))), o.load(t)),
		sB = (e, t, o, n) => (e.on("remove", (() => n.unloadRawCss(t))), n.loadRawCss(t, o)),
		rB = async (e, t) => {
			const o = "ui/" + hb(e).getOr("default") + "/skin.css",
				n = tinymce.Resource.get(o);
			if (!r(n)) {
				const o = e.editorManager.suffix;
				return nB(e, t + `/skin${o}.css`, e.ui.styleSheetLoader)
			}
			sB(e, o, n, e.ui.styleSheetLoader)
		}, aB = async (e, t) => {
			var o;
			if (o = ze(e.getElement()), ft(o).isSome()) {
				const o = "ui/" + hb(e).getOr("default") + "/skin.shadowdom.css",
					n = tinymce.Resource.get(o);
				if (!r(n)) {
					const o = e.editorManager.suffix;
					return nB(e, t + `/skin.shadowdom${o}.css`, Sf.DOM.styleSheetLoader)
				}
				sB(e, o, n, Sf.DOM.styleSheetLoader)
			}
		}, iB = (e, t) => (async (e, t) => {
			const o = () => {
				const o = pb(t),
					n = t.editorManager.suffix;
				o && t.contentCSS.push(o + (e ? "/content.inline" : "/content") + `${n}.css`)
			};
			hb(t).fold(o, (n => {
				const s = "ui/" + n + (e ? "/content.inline" : "/content") + ".css",
					a = tinymce.Resource.get(s);
				r(a) ? sB(t, s, a, t.ui.styleSheetLoader) : o()
			}));
			const n = pb(t);
			if (!mb(t) && r(n)) return Promise.all([rB(t, n), aB(t, n)]).then()
		})(e, t).then((e => {
			const t = () => {
				e._skinLoaded = !0, (e => {
					e.dispatch("SkinLoaded")
				})(e)
			};
			return () => {
				e.initialized ? t() : e.on("init", t)
			}
		})(t), ((e, t) => () => ((e, t) => {
			e.dispatch("SkinLoadError", t)
		})(e, {
			message: "Skin could not be loaded"
		}))(t)), lB = C(iB, !1), cB = C(iB, !0), dB = (e, t, o) => De(o) ? e.translate(t) : e.translate([t, e.translate(o)]), uB = (e, t) => {
			const o = (o, s, r, a) => {
					const i = e.shared.providers.translate(o.title);
					if ("separator" === o.type) return A.some({
						type: "separator",
						text: i
					});
					if ("submenu" === o.type) {
						const e = q(o.getStyleItems(), (e => n(e, s, a)));
						return 0 === s && e.length <= 0 ? A.none() : A.some({
							type: "nestedmenuitem",
							text: i,
							enabled: e.length > 0,
							getSubmenuItems: () => q(o.getStyleItems(), (e => n(e, s, a)))
						})
					}
					return A.some({
						type: "togglemenuitem",
						text: i,
						icon: o.icon,
						active: o.isSelected(a),
						enabled: !r,
						onAction: t.onAction(o),
						...o.getStylePreview().fold((() => ({})), (e => ({
							meta: {
								style: e
							}
						})))
					})
				},
				n = (e, n, s) => {
					const r = "formatter" === e.type && t.isInvalid(e);
					return 0 === n ? r ? [] : o(e, n, !1, s).toArray() : o(e, n, r, s).toArray()
				},
				s = e => {
					const o = t.getCurrentValue(),
						s = t.shouldHide ? 0 : 1;
					return q(e, (e => n(e, s, o)))
				};
			return {
				validateItems: s,
				getFetch: (e, t) => (o, n) => {
					const r = t(),
						a = s(r);
					n(hT(a, ux.CLOSE_ON_EXECUTE, e, {
						isHorizontalMenu: !1,
						search: A.none()
					}))
				}
			}
		}, mB = (e, t) => {
			const o = t.dataset,
				n = "basic" === o.type ? () => L(o.data, (e => _A(e, t.isSelectedFor, t.getPreviewFor))) : o.getData;
			return {
				items: uB(e, t),
				getStyleItems: n
			}
		}, gB = (e, t, o, n, s, r) => {
			const {
				items: a,
				getStyleItems: i
			} = mB(t, o), l = en(o.tooltip);
			return uT({
				context: "mode:design",
				text: o.icon.isSome() ? A.none() : o.text,
				icon: o.icon,
				ariaLabel: A.some(o.tooltip),
				tooltip: A.none(),
				role: A.none(),
				fetch: a.getFetch(t, i),
				onSetup: t => {
					const r = o => t.setTooltip(dB(e, n(o.value), o.value));
					return e.on(s, r), rS(lS(e, "NodeChange", (t => {
						const n = t.getComponent();
						o.updateText(n), ug.set(t.getComponent(), !e.selection.isEditable())
					}))(t), (() => e.off(s, r)))
				},
				getApi: e => ({
					getComponent: y(e),
					setTooltip: o => {
						const n = t.shared.providers.translate(o);
						St(e.element, "aria-label", n), l.set(o)
					}
				}),
				columns: 1,
				presets: "normal",
				classes: o.icon.isSome() ? [] : ["bespoke"],
				dropdownBehaviours: [Jb.config({
					...t.shared.providers.tooltips.getConfig({
						tooltipText: t.shared.providers.translate(o.tooltip),
						onShow: e => {
							if (o.tooltip !== l.get()) {
								const o = t.shared.providers.translate(l.get());
								Jb.setComponents(e, t.shared.providers.tooltips.getComponents({
									tooltipText: o
								}))
							}
						}
					})
				})]
			}, "tox-tbtn", t.shared, r)
		};
	var pB;
	! function(e) {
		e[e.SemiColon = 0] = "SemiColon", e[e.Space = 1] = "Space"
	}(pB || (pB = {}));
	const hB = (e, t, o) => {
			const n = (s = ((e, t) => t === pB.SemiColon ? e.replace(/;$/, "").split(";") : e.split(" "))(e.options.get(t), o), L(s, (e => {
				let t = e,
					o = e;
				const n = e.split("=");
				return n.length > 1 && (t = n[0], o = n[1]), {
					title: t,
					format: o
				}
			})));
			var s;
			return {
				type: "basic",
				data: n
			}
		},
		fB = y("Alignment {0}"),
		bB = "left",
		vB = [{
			title: "Left",
			icon: "align-left",
			format: "alignleft",
			command: "JustifyLeft"
		}, {
			title: "Center",
			icon: "align-center",
			format: "aligncenter",
			command: "JustifyCenter"
		}, {
			title: "Right",
			icon: "align-right",
			format: "alignright",
			command: "JustifyRight"
		}, {
			title: "Justify",
			icon: "align-justify",
			format: "alignjustify",
			command: "JustifyFull"
		}],
		xB = e => {
			const t = {
				type: "basic",
				data: vB
			};
			return {
				tooltip: dB(e, fB(), bB),
				text: A.none(),
				icon: A.some("align-left"),
				isSelectedFor: t => () => e.formatter.match(t),
				getCurrentValue: A.none,
				getPreviewFor: e => A.none,
				onAction: t => () => j(vB, (e => e.format === t.format)).each((t => e.execCommand(t.command))),
				updateText: t => {
					const o = j(vB, (t => e.formatter.match(t.format))).fold(y(bB), (e => e.title.toLowerCase()));
					Rr(t, dT, {
						icon: `align-${o}`
					}), ((e, t) => {
						e.dispatch("AlignTextUpdate", t)
					})(e, {
						value: o
					})
				},
				dataset: t,
				shouldHide: !1,
				isInvalid: t => !e.formatter.canApply(t.format)
			}
		},
		yB = (e, t) => {
			const o = t(),
				n = L(o, (e => e.format));
			return A.from(e.formatter.closest(n)).bind((e => j(o, (t => t.format === e))))
		},
		wB = y("Block {0}"),
		SB = "Paragraph",
		CB = e => {
			const t = hB(e, "block_formats", pB.SemiColon);
			return {
				tooltip: dB(e, wB(), SB),
				text: A.some(SB),
				icon: A.none(),
				isSelectedFor: t => () => e.formatter.match(t),
				getCurrentValue: A.none,
				getPreviewFor: t => () => {
					const o = e.formatter.get(t);
					return o ? A.some({
						tag: o.length > 0 && (o[0].inline || o[0].block) || "div",
						styles: e.dom.parseStyle(e.formatter.getCssText(t))
					}) : A.none()
				},
				onAction: cS(e),
				updateText: o => {
					const n = yB(e, (() => t.data)).fold(y(SB), (e => e.title));
					Rr(o, cT, {
						text: n
					}), ((e, t) => {
						e.dispatch("BlocksTextUpdate", t)
					})(e, {
						value: n
					})
				},
				dataset: t,
				shouldHide: !1,
				isInvalid: t => !e.formatter.canApply(t.format)
			}
		},
		kB = y("Font {0}"),
		OB = "System Font",
		_B = ["-apple-system", "Segoe UI", "Roboto", "Helvetica Neue", "sans-serif"],
		TB = e => {
			const t = e.split(/\s*,\s*/);
			return L(t, (e => e.replace(/^['"]+|['"]+$/g, "")))
		},
		EB = (e, t) => t.length > 0 && Y(t, (t => e.indexOf(t.toLowerCase()) > -1)),
		AB = e => {
			const t = () => {
					const t = e => e ? TB(e)[0] : "",
						n = e.queryCommandValue("FontName"),
						s = o.data,
						r = n ? n.toLowerCase() : "",
						a = ub(e),
						i = j(s, (e => {
							const o = e.format;
							return o.toLowerCase() === r || t(o).toLowerCase() === t(r).toLowerCase()
						})).orThunk((() => Ce(((e, t) => {
							if (0 === e.indexOf("-apple-system") || t.length > 0) {
								const o = TB(e.toLowerCase());
								return EB(o, _B) || EB(o, t)
							}
							return !1
						})(r, a), {
							title: OB,
							format: r
						})));
					return {
						matchOpt: i,
						font: n
					}
				},
				o = hB(e, "font_family_formats", pB.SemiColon);
			return {
				tooltip: dB(e, kB(), OB),
				text: A.some(OB),
				icon: A.none(),
				isSelectedFor: e => t => t.exists((t => t.format === e)),
				getCurrentValue: () => {
					const {
						matchOpt: e
					} = t();
					return e
				},
				getPreviewFor: e => () => A.some({
					tag: "div",
					styles: -1 === e.indexOf("dings") ? {
						"font-family": e
					} : {}
				}),
				onAction: t => () => {
					e.undoManager.transact((() => {
						e.focus(), e.execCommand("FontName", !1, t.format)
					}))
				},
				updateText: o => {
					const {
						matchOpt: n,
						font: s
					} = t(), r = n.fold(y(s), (e => e.title));
					Rr(o, cT, {
						text: r
					}), ((e, t) => {
						e.dispatch("FontFamilyTextUpdate", t)
					})(e, {
						value: r
					})
				},
				dataset: o,
				shouldHide: !1,
				isInvalid: T
			}
		},
		MB = {
			unsupportedLength: ["em", "ex", "cap", "ch", "ic", "rem", "lh", "rlh", "vw", "vh", "vi", "vb", "vmin", "vmax", "cm", "mm", "Q", "in", "pc", "pt", "px"],
			fixed: ["px", "pt"],
			relative: ["%"],
			empty: [""]
		},
		DB = (() => {
			const e = "[0-9]+",
				t = "[eE][+-]?" + e,
				o = e => `(?:${e})?`,
				n = ["Infinity", e + "\\." + o(e) + o(t), "\\." + e + o(t), e + o(t)].join("|");
			return new RegExp(`^([+-]?(?:${n}))(.*)$`)
		})(),
		BB = (e, t) => A.from(DB.exec(e)).bind((e => {
			const o = Number(e[1]),
				n = e[2];
			return ((e, t) => R(t, (t => R(MB[t], (t => e === t)))))(n, t) ? A.some({
				value: o,
				unit: n
			}) : A.none()
		})),
		IB = {
			tab: y(9),
			escape: y(27),
			enter: y(13),
			backspace: y(8),
			delete: y(46),
			left: y(37),
			up: y(38),
			right: y(39),
			down: y(40),
			space: y(32),
			home: y(36),
			end: y(35),
			pageUp: y(33),
			pageDown: y(34)
		},
		FB = y("Font size {0}"),
		RB = "12pt",
		NB = {
			"8pt": "1",
			"10pt": "2",
			"12pt": "3",
			"14pt": "4",
			"18pt": "5",
			"24pt": "6",
			"36pt": "7"
		},
		zB = {
			"xx-small": "7pt",
			"x-small": "8pt",
			small: "10pt",
			medium: "12pt",
			large: "14pt",
			"x-large": "18pt",
			"xx-large": "24pt"
		},
		LB = (e, t) => /[0-9.]+px$/.test(e) ? ((e, t) => {
			const o = Math.pow(10, t);
			return Math.round(e * o) / o
		})(72 * parseInt(e, 10) / 96, t || 0) + "pt" : fe(zB, e).getOr(e),
		VB = e => fe(NB, e).getOr(""),
		HB = e => {
			const t = () => {
					let t = A.none();
					const o = n.data,
						s = e.queryCommandValue("FontSize");
					if (s)
						for (let e = 3; t.isNone() && e >= 0; e--) {
							const n = LB(s, e),
								r = VB(n);
							t = j(o, (e => e.format === s || e.format === n || e.format === r))
						}
					return {
						matchOpt: t,
						size: s
					}
				},
				o = y(A.none),
				n = hB(e, "font_size_formats", pB.Space);
			return {
				tooltip: dB(e, FB(), RB),
				text: A.some(RB),
				icon: A.none(),
				isSelectedFor: e => t => t.exists((t => t.format === e)),
				getPreviewFor: o,
				getCurrentValue: () => {
					const {
						matchOpt: e
					} = t();
					return e
				},
				onAction: t => () => {
					e.undoManager.transact((() => {
						e.focus(), e.execCommand("FontSize", !1, t.format)
					}))
				},
				updateText: o => {
					const {
						matchOpt: n,
						size: s
					} = t(), r = n.fold(y(s), (e => e.title));
					Rr(o, cT, {
						text: r
					}), ((e, t) => {
						e.dispatch("FontSizeTextUpdate", t)
					})(e, {
						value: r
					})
				},
				dataset: n,
				shouldHide: !1,
				isInvalid: T
			}
		},
		PB = e => De(e) ? "Formats" : "Format {0}",
		UB = (e, t) => {
			const o = "Formats";
			return {
				tooltip: dB(e, PB(""), ""),
				text: A.some(o),
				icon: A.none(),
				isSelectedFor: t => () => e.formatter.match(t),
				getCurrentValue: A.none,
				getPreviewFor: t => () => {
					const o = e.formatter.get(t);
					return void 0 !== o ? A.some({
						tag: o.length > 0 && (o[0].inline || o[0].block) || "div",
						styles: e.dom.parseStyle(e.formatter.getCssText(t))
					}) : A.none()
				},
				onAction: cS(e),
				updateText: t => {
					const n = e => wA(e) ? q(e.items, n) : SA(e) ? [{
							title: e.title,
							format: e.format
						}] : [],
						s = q(OA(e), n),
						r = yB(e, y(s)).fold(y({
							title: o,
							tooltipLabel: ""
						}), (e => ({
							title: e.title,
							tooltipLabel: e.title
						})));
					Rr(t, cT, {
						text: r.title
					}), ((e, t) => {
						e.dispatch("StylesTextUpdate", t)
					})(e, {
						value: r.tooltipLabel
					})
				},
				shouldHide: zf(e),
				isInvalid: t => !e.formatter.canApply(t.format),
				dataset: t
			}
		},
		WB = y([rs("toggleClass"), rs("fetch"), xi("onExecute"), ws("getHotspot", A.some), ws("getAnchorOverrides", y({})), Jc(), xi("onItemExecute"), gs("lazySink"), rs("dom"), bi("onOpen"), $u("splitDropdownBehaviours", [tC, bh, Bh]), ws("matchWidth", !1), ws("useMinWidth", !1), ws("eventOrder", {}), gs("role"), gs("listRole")].concat(vC())),
		jB = vm({
			factory: Rb,
			schema: [rs("dom")],
			name: "arrow",
			defaults: () => ({
				buttonBehaviours: ca([Bh.revoke()])
			}),
			overrides: e => ({
				dom: {
					tag: "span",
					attributes: {
						role: "presentation"
					}
				},
				action: t => {
					t.getSystem().getByUid(e.uid).each(Nr)
				},
				buttonBehaviours: ca([Hh.config({
					toggleOnExecute: !1,
					toggleClass: e.toggleClass
				})])
			})
		}),
		$B = vm({
			factory: Rb,
			schema: [rs("dom")],
			name: "button",
			defaults: () => ({
				buttonBehaviours: ca([Bh.revoke()])
			}),
			overrides: e => ({
				dom: {
					tag: "span",
					attributes: {
						role: "presentation"
					}
				},
				action: t => {
					t.getSystem().getByUid(e.uid).each((o => {
						e.onExecute(o, t)
					}))
				}
			})
		}),
		GB = y([jB, $B, ym({
			factory: {
				sketch: e => ({
					uid: e.uid,
					dom: {
						tag: "span",
						styles: {
							display: "none"
						},
						attributes: {
							"aria-hidden": "true"
						},
						innerHtml: e.text
					}
				})
			},
			schema: [rs("text")],
			name: "aria-descriptor"
		}), xm({
			schema: [pi()],
			name: "menu",
			defaults: e => ({
				onExecute: (t, o) => {
					t.getSystem().getByUid(e.uid).each((n => {
						e.onItemExecute(n, t, o)
					}))
				}
			})
		}), cC()]),
		qB = qm({
			name: "SplitDropdown",
			configFields: WB(),
			partFields: GB(),
			factory: (e, t, o, n) => {
				const s = e => {
						Jm.getCurrent(e).each((e => {
							wg.highlightFirst(e), bh.focusIn(e)
						}))
					},
					r = t => {
						gC(e, w, t, n, s, hf.HighlightMenuAndItem).get(b)
					},
					a = t => {
						const o = Im(t, e, "button");
						return Nr(o), A.some(!0)
					},
					i = {
						...Hr([Jr(((t, o) => {
							Bm(t, e, "aria-descriptor").each((e => {
								const o = Di("aria");
								St(e.element, "id", o), St(t.element, "aria-describedby", o)
							}))
						}))]),
						...Uh(A.some(r))
					},
					l = {
						repositionMenus: e => {
							Hh.isOn(e) && bC(e)
						}
					};
				return {
					uid: e.uid,
					dom: e.dom,
					components: t,
					apis: l,
					eventOrder: {
						...e.eventOrder,
						[mr()]: ["disabling", "toggling", "alloy.base.behaviour"]
					},
					events: i,
					behaviours: qu(e.splitDropdownBehaviours, [tC.config({
						others: {
							sandbox: t => {
								const o = Im(t, e, "arrow");
								return fC(e, t, {
									onOpen: () => {
										Hh.on(o), Hh.on(t)
									},
									onClose: () => {
										Hh.off(o), Hh.off(t)
									}
								})
							}
						}
					}), bh.config({
						mode: "special",
						onSpace: a,
						onEnter: a,
						onDown: e => (r(e), A.some(!0))
					}), Bh.config({}), Hh.config({
						toggleOnExecute: !1,
						aria: {
							mode: "expanded"
						}
					})]),
					domModification: {
						attributes: {
							role: e.role.getOr("button"),
							"aria-haspopup": !0
						}
					}
				}
			},
			apis: {
				repositionMenus: (e, t) => e.repositionMenus(t)
			}
		}),
		YB = e => ({
			isEnabled: () => !ug.isDisabled(e),
			setEnabled: t => ug.set(e, !t),
			setText: t => Rr(e, cT, {
				text: t
			}),
			setIcon: t => Rr(e, dT, {
				icon: t
			})
		}),
		XB = e => ({
			setActive: t => {
				Hh.set(e, t)
			},
			isActive: () => Hh.isOn(e),
			isEnabled: () => !ug.isDisabled(e),
			setEnabled: t => ug.set(e, !t),
			setText: t => Rr(e, cT, {
				text: t
			}),
			setIcon: t => Rr(e, dT, {
				icon: t
			})
		}),
		KB = (e, t) => e.map((e => ({
			"aria-label": t.translate(e)
		}))).getOr({}),
		JB = Di("focus-button"),
		QB = (e, t, o, n, s, r, a) => {
			const i = t.map((e => zb(lT(e, "tox-tbtn", s)))),
				l = e.map((e => zb(iT(e, s.icons))));
			return {
				dom: {
					tag: "button",
					classes: ["tox-tbtn"].concat(t.isSome() ? ["tox-tbtn--select"] : []),
					attributes: {
						...KB(o, s),
						...g(a) ? {
							"data-mce-name": a
						} : {}
					}
				},
				components: yw([l.map((e => e.asSpec())), i.map((e => e.asSpec()))]),
				eventOrder: {
					[js()]: ["focusing", "alloy.base.behaviour", oT],
					[Cr()]: [oT, "toolbar-group-button-events"]
				},
				buttonBehaviours: ca([dw((() => s.checkUiComponentContext(r).shouldDisable)), bw((() => s.checkUiComponentContext(r))), Th(oT, [Jr(((e, t) => sT(e))), Wr(cT, ((e, t) => {
					i.bind((t => t.getOpt(e))).each((e => {
						_h.set(e, [dl(s.translate(t.event.text))])
					}))
				})), Wr(dT, ((e, t) => {
					l.bind((t => t.getOpt(e))).each((e => {
						_h.set(e, [iT(t.event.icon, s.icons)])
					}))
				})), Wr(js(), ((e, t) => {
					t.event.prevent(), Fr(e, JB)
				}))])].concat(n.getOr([])))
			}
		},
		ZB = (e, t, o, n) => {
			var s;
			const r = en(b),
				a = QB(e.icon, e.text, e.tooltip, A.none(), o, e.context, n);
			return Rb.sketch({
				dom: a.dom,
				components: a.components,
				eventOrder: nT,
				buttonBehaviours: {
					...ca([Th("toolbar-button-events", [(i = {
						onAction: e.onAction,
						getApi: t.getApi
					}, ea(((e, t) => {
						uw(i, e)((t => {
							Rr(e, tT, {
								buttonApi: t
							}), i.onAction(t)
						}))
					}))), mw(t, r), gw(t, r)]), ...e.tooltip.map((t => Jb.config(o.tooltips.getConfig({
						tooltipText: o.translate(t) + e.shortcut.map((e => ` (${Cw(e)})`)).getOr("")
					})))).toArray(), dw((() => !e.enabled || o.checkUiComponentContext(e.context).shouldDisable)), bw((() => o.checkUiComponentContext(e.context)))].concat(t.toolbarButtonBehaviours)),
					[oT]: null === (s = a.buttonBehaviours) || void 0 === s ? void 0 : s[oT]
				}
			});
			var i
		},
		eI = (e, t, o, n) => ZB(e, {
			toolbarButtonBehaviours: o.length > 0 ? [Th("toolbarButtonWith", o)] : [],
			getApi: YB,
			onSetup: e.onSetup
		}, t, n),
		tI = (e, t, o, n) => ZB(e, {
			toolbarButtonBehaviours: [_h.config({}), Hh.config({
				toggleClass: "tox-tbtn--enabled",
				aria: {
					mode: "pressed"
				},
				toggleOnExecute: !1
			})].concat(o.length > 0 ? [Th("toolbarToggleButtonWith", o)] : []),
			getApi: XB,
			onSetup: e.onSetup
		}, t, n),
		oI = (e, t, o) => n => aC((e => t.fetch(e))).map((s => A.from(AC(xn(US(Di("menu-value"), s, (o => {
			t.onItemAction(e(n), o)
		}), t.columns, t.presets, ux.CLOSE_ON_EXECUTE, t.select.getOr(T), o), {
			movement: jS(t.columns, t.presets),
			menuBehaviours: aw("auto" !== t.columns ? [] : [Jr(((e, o) => {
				rw(e, 4, Cx(t.presets)).each((({
					numRows: t,
					numColumns: o
				}) => {
					bh.setGridSize(e, t, o)
				}))
			}))])
		}))))),
		nI = [{
			name: "history",
			items: ["undo", "redo"]
		}, {
			name: "ai",
			items: ["aidialog", "aishortcuts"]
		}, {
			name: "styles",
			items: ["styles"]
		}, {
			name: "formatting",
			items: ["bold", "italic"]
		}, {
			name: "alignment",
			items: ["alignleft", "aligncenter", "alignright", "alignjustify"]
		}, {
			name: "indentation",
			items: ["outdent", "indent"]
		}, {
			name: "permanent pen",
			items: ["permanentpen"]
		}, {
			name: "comments",
			items: ["addcomment"]
		}],
		sI = (e, t) => (o, n, s, r) => {
			const a = e(o).mapError((e => Zn(e))).getOrDie();
			return t(a, n, s, r)
		},
		rI = {
			button: sI(Dy, ((e, t, o, n) => ((e, t, o) => eI(e, t, [], o))(e, t.shared.providers, n))),
			togglebutton: sI(Fy, ((e, t, o, n) => ((e, t, o) => tI(e, t, [], o))(e, t.shared.providers, n))),
			menubutton: sI(TM, ((e, t, o, n) => GT(e, "tox-tbtn", t, A.none(), !1, n))),
			splitbutton: sI((e => Kn("SplitButton", EM, e)), ((e, t, o, n) => ((e, t, o) => {
				const n = en(e.tooltip.getOr("")),
					s = e => ({
						isEnabled: () => !ug.isDisabled(e),
						setEnabled: t => ug.set(e, !t),
						setIconFill: (t, o) => {
							Ol(e.element, `svg path[class="${t}"], rect[class="${t}"]`).each((e => {
								St(e, "fill", o)
							}))
						},
						setActive: t => {
							St(e.element, "aria-pressed", t), Ol(e.element, "span").each((o => {
								e.getSystem().getByDom(o).each((e => Hh.set(e, t)))
							}))
						},
						isActive: () => Ol(e.element, "span").exists((t => e.getSystem().getByDom(t).exists(Hh.isOn))),
						setText: t => Ol(e.element, "span").each((o => e.getSystem().getByDom(o).each((e => Rr(e, cT, {
							text: t
						}))))),
						setIcon: t => Ol(e.element, "span").each((o => e.getSystem().getByDom(o).each((e => Rr(e, dT, {
							icon: t
						}))))),
						setTooltip: o => {
							const s = t.providers.translate(o);
							St(e.element, "aria-label", s), n.set(o)
						}
					}),
					r = en(b),
					a = {
						getApi: s,
						onSetup: e.onSetup
					};
				return qB.sketch({
					dom: {
						tag: "div",
						classes: ["tox-split-button"],
						attributes: {
							"aria-pressed": !1,
							...KB(e.tooltip, t.providers),
							...g(o) ? {
								"data-mce-name": o
							} : {}
						}
					},
					onExecute: t => {
						const o = s(t);
						o.isEnabled() && e.onAction(o)
					},
					onItemExecute: (e, t, o) => {},
					splitDropdownBehaviours: ca([Th("split-dropdown-events", [Jr(((e, t) => sT(e))), Wr(JB, Bh.focus), mw(a, r), gw(a, r)]), cw((() => t.providers.isDisabled() || t.providers.checkUiComponentContext(e.context).shouldDisable)), bw((() => t.providers.checkUiComponentContext(e.context))), vk.config({}), ...e.tooltip.map((e => Jb.config({
						...t.providers.tooltips.getConfig({
							tooltipText: t.providers.translate(e),
							onShow: o => {
								if (n.get() !== e) {
									const e = t.providers.translate(n.get());
									Jb.setComponents(o, t.providers.tooltips.getComponents({
										tooltipText: e
									}))
								}
							}
						})
					}))).toArray()]),
					eventOrder: {
						[Cr()]: ["alloy.base.behaviour", "split-dropdown-events", "tooltipping"],
						[kr()]: ["split-dropdown-events", "tooltipping"]
					},
					toggleClass: "tox-tbtn--enabled",
					lazySink: t.getSink,
					fetch: oI(s, e, t.providers),
					parts: {
						menu: Ax(0, e.columns, e.presets)
					},
					components: [qB.parts.button(QB(e.icon, e.text, A.none(), A.some([Hh.config({
						toggleClass: "tox-tbtn--enabled",
						toggleOnExecute: !1
					}), dw(T), bw(y({
						contextType: "any",
						shouldDisable: !1
					}))]), t.providers, e.context)), qB.parts.arrow({
						dom: {
							tag: "button",
							classes: ["tox-tbtn", "tox-split-button__chevron"],
							innerHtml: nx("chevron-down", t.providers.icons)
						},
						buttonBehaviours: ca([cw(T), bw(y({
							contextType: "any",
							shouldDisable: !1
						}))])
					}), qB.parts["aria-descriptor"]({
						text: t.providers.translate("To open the popup, press Shift+Enter")
					})]
				})
			})(e, t.shared, n))),
			grouptoolbarbutton: sI((e => Kn("GroupToolbarButton", kM, e)), ((e, t, o, n) => {
				const s = o.ui.registry.getAll().buttons,
					r = {
						[Xc]: t.shared.header.isPositionedAtTop() ? Yc.TopToBottom : Yc.BottomToTop
					};
				if (Hf(o) === xf.floating) return ((e, t, o, n, s) => {
					const r = t.shared,
						a = en(b),
						i = {
							toolbarButtonBehaviours: [],
							getApi: YB,
							onSetup: e.onSetup
						},
						l = [Th("toolbar-group-button-events", [mw(i, a), gw(i, a)])];
					return cD.sketch({
						lazySink: r.getSink,
						fetch: () => aC((t => {
							t(L(o(e.items), SD))
						})),
						markers: {
							toggledClass: "tox-tbtn--enabled"
						},
						parts: {
							button: QB(e.icon, e.text, e.tooltip, A.some(l), r.providers, e.context, s),
							toolbar: {
								dom: {
									tag: "div",
									classes: ["tox-toolbar__overflow"],
									attributes: n
								}
							}
						}
					})
				})(e, t, (e => iI(o, {
					buttons: s,
					toolbar: e,
					allowToolbarGroups: !1
				}, t, A.none())), r, n);
				throw new Error("Toolbar groups are only supported when using floating toolbar mode")
			}))
		},
		aI = {
			styles: (e, t) => {
				const o = {
					type: "advanced",
					...t.styles
				};
				return gB(e, t, UB(e, o), PB, "StylesTextUpdate", "styles")
			},
			fontsize: (e, t) => gB(e, t, HB(e), FB, "FontSizeTextUpdate", "fontsize"),
			fontsizeinput: (e, t) => ((e, t, o, n) => {
				let s = A.none();
				const r = lS(e, "NodeChange SwitchMode", (t => {
						const n = t.getComponent();
						s = A.some(n), o.updateInputValue(n), ug.set(n, !e.selection.isEditable())
					})),
					a = e => ({
						getComponent: y(e)
					}),
					i = en(b),
					l = Di("custom-number-input-events"),
					c = (e, t, n) => {
						const r = s.map((e => ju.getValue(e))).getOr(""),
							a = o.getNewValue(r, e),
							i = r.length - `${a}`.length,
							l = s.map((e => e.element.dom.selectionStart - i)),
							c = s.map((e => e.element.dom.selectionEnd - i));
						o.onAction(a, n), s.each((e => {
							ju.setValue(e, a), t && (l.each((t => e.element.dom.selectionStart = t)), c.each((t => e.element.dom.selectionEnd = t)))
						}))
					},
					d = (e, t) => c(((e, t) => e - t), e, t),
					u = (e, t) => c(((e, t) => e + t), e, t),
					m = e => at(e.element).fold(A.none, (e => (mc(e), A.some(!0)))),
					p = e => pc(e.element) ? (dt(e.element).each((e => mc(e))), A.some(!0)) : A.none(),
					h = (o, n, s, r) => {
						const i = en(b),
							l = t.shared.providers.translate(s),
							c = Di("altExecuting"),
							d = lS(e, "NodeChange SwitchMode", (t => {
								ug.set(t.getComponent(), !e.selection.isEditable())
							})),
							u = e => {
								ug.isDisabled(e) || o(!0)
							};
						return Rb.sketch({
							dom: {
								tag: "button",
								attributes: {
									"aria-label": l,
									"data-mce-name": n
								},
								classes: r.concat(n)
							},
							components: [aT(n, t.shared.providers.icons)],
							buttonBehaviours: ca([ug.config({}), Jb.config(t.shared.providers.tooltips.getConfig({
								tooltipText: l
							})), Th(c, [mw({
								onSetup: d,
								getApi: a
							}, i), gw({
								getApi: a
							}, i), Wr(Js(), ((e, t) => {
								t.event.raw.keyCode !== IB.space() && t.event.raw.keyCode !== IB.enter() || ug.isDisabled(e) || o(!1)
							})), Wr(tr(), u), Wr(Us(), u)])]),
							eventOrder: {
								[Js()]: [c, "keying"],
								[tr()]: [c, "alloy.base.behaviour"],
								[Us()]: [c, "alloy.base.behaviour"],
								[Cr()]: ["alloy.base.behaviour", c, "tooltipping"],
								[kr()]: [c, "tooltipping"]
							}
						})
					},
					f = zb(h((e => d(!1, e)), "minus", "Decrease font size", [])),
					v = zb(h((e => u(!1, e)), "plus", "Increase font size", [])),
					x = zb({
						dom: {
							tag: "div",
							classes: ["tox-input-wrapper"]
						},
						components: [Fx.sketch({
							inputBehaviours: ca([ug.config({}), Th(l, [mw({
								onSetup: r,
								getApi: a
							}, i), gw({
								getApi: a
							}, i)]), Th("input-update-display-text", [Wr(cT, ((e, t) => {
								ju.setValue(e, t.event.text)
							})), Wr(Ks(), (e => {
								o.onAction(ju.getValue(e))
							})), Wr(er(), (e => {
								o.onAction(ju.getValue(e))
							}))]), bh.config({
								mode: "special",
								onEnter: e => (c(w, !0, !0), A.some(!0)),
								onEscape: m,
								onUp: e => (u(!0, !1), A.some(!0)),
								onDown: e => (d(!0, !1), A.some(!0)),
								onLeft: (e, t) => (t.cut(), A.none()),
								onRight: (e, t) => (t.cut(), A.none())
							})])
						})],
						behaviours: ca([Bh.config({}), bh.config({
							mode: "special",
							onEnter: p,
							onSpace: p,
							onEscape: m
						}), Th("input-wrapper-events", [Wr(Ys(), (e => {
							V([f, v], (t => {
								const o = ze(t.get(e).element.dom);
								pc(o) && gc(o)
							}))
						}))])])
					});
				return {
					dom: {
						tag: "div",
						classes: ["tox-number-input"],
						attributes: {
							...g(n) ? {
								"data-mce-name": n
							} : {}
						}
					},
					components: [f.asSpec(), x.asSpec(), v.asSpec()],
					behaviours: ca([Bh.config({}), bh.config({
						mode: "flow",
						focusInside: jg.OnEnterOrSpaceMode,
						cycles: !1,
						selector: "button, .tox-input-wrapper",
						onEscape: e => pc(e.element) ? A.none() : (mc(e.element), A.some(!0))
					})])
				}
			})(e, t, (e => {
				const t = () => e.queryCommandValue("FontSize");
				return {
					updateInputValue: e => Rr(e, cT, {
						text: t()
					}),
					onAction: (t, o) => e.execCommand("FontSize", !1, t, {
						skip_focus: !o
					}),
					getNewValue: (o, n) => {
						BB(o, ["unsupportedLength", "empty"]);
						const s = t(),
							r = BB(o, ["unsupportedLength", "empty"]).or(BB(s, ["unsupportedLength", "empty"])),
							a = r.map((e => e.value)).getOr(16),
							i = Jf(e),
							l = r.map((e => e.unit)).filter((e => "" !== e)).getOr(i),
							c = n(a, (e => {
								var t;
								return null !== (t = {
									em: {
										step: .1
									},
									cm: {
										step: .1
									},
									in: {
										step: .1
									},
									pc: {
										step: .1
									},
									ch: {
										step: .1
									},
									rem: {
										step: .1
									}
								} [e]) && void 0 !== t ? t : {
									step: 1
								}
							})(l).step),
							d = `${(e=>e>=0)(c)?c:a}${l}`;
						return d !== s && ((e, t) => {
							e.dispatch("FontSizeInputTextUpdate", t)
						})(e, {
							value: d
						}), d
					}
				}
			})(e), "fontsizeinput"),
			fontfamily: (e, t) => gB(e, t, AB(e), kB, "FontFamilyTextUpdate", "fontfamily"),
			blocks: (e, t) => gB(e, t, CB(e), wB, "BlocksTextUpdate", "blocks"),
			align: (e, t) => gB(e, t, xB(e), fB, "AlignTextUpdate", "align")
		},
		iI = (e, t, o, n) => {
			const s = (e => {
					const t = e.toolbar,
						o = e.buttons;
					return !1 === t ? [] : void 0 === t || !0 === t ? (e => {
						const t = L(nI, (t => {
							const o = P(t.items, (t => be(e, t) || be(aI, t)));
							return {
								name: t.name,
								items: o
							}
						}));
						return P(t, (e => e.items.length > 0))
					})(o) : r(t) ? (e => {
						const t = e.split("|");
						return L(t, (e => ({
							items: e.trim().split(" ")
						})))
					})(t) : (e => f(e, (e => be(e, "name") && be(e, "items"))))(t) ? t : (console.error("Toolbar type should be string, string[], boolean or ToolbarGroup[]"), [])
				})(t),
				a = L(s, (s => {
					const r = q(s.items, (s => 0 === s.trim().length ? [] : ((e, t, o, n, s, r) => fe(t, o.toLowerCase()).orThunk((() => r.bind((e => se(e, (e => fe(t, e + o.toLowerCase()))))))).fold((() => fe(aI, o.toLowerCase()).map((t => t(e, s)))), (t => "grouptoolbarbutton" !== t.type || n ? ((e, t, o, n) => fe(rI, e.type).fold((() => (console.error("skipping button defined by", e), A.none())), (s => A.some(s(e, t, o, n)))))(t, s, e, o.toLowerCase()) : (console.warn(`Ignoring the '${o}' toolbar button. Group toolbar buttons are only supported when using floating toolbar mode and cannot be nested.`), A.none()))))(e, t.buttons, s, t.allowToolbarGroups, o, n).toArray()));
					return {
						title: A.from(e.translate(s.name)),
						items: r
					}
				}));
			return P(a, (e => e.items.length > 0))
		},
		lI = (e, t, o, n) => {
			const s = t.mainUi.outerContainer,
				a = o.toolbar,
				i = o.buttons;
			if (f(a, r)) {
				const t = a.map((t => {
					const s = {
						toolbar: t,
						buttons: i,
						allowToolbarGroups: o.allowToolbarGroups
					};
					return iI(e, s, n, A.none())
				}));
				ZD.setToolbars(s, t)
			} else ZD.setToolbar(s, iI(e, o, n, A.none()))
		},
		cI = Mo(),
		dI = cI.os.isiOS() && cI.os.version.major <= 12;
	var uI = Object.freeze({
		__proto__: null,
		render: (e, t, o, n, s) => {
			const {
				mainUi: r,
				uiMotherships: a
			} = t, i = en(0), l = r.outerContainer;
			lB(e);
			const d = ze(s.targetNode),
				u = ht(pt(d));
			uu(d, r.mothership), ((e, t, o) => {
				_b(e) && uu(o.mainUi.mothership.element, o.popupUi.mothership), du(t, o.dialogUi.mothership)
			})(e, u, t), e.on("PostRender", (() => {
				ZD.setSidebar(l, o.sidebar, lb(e))
			})), e.on("SkinLoaded", (() => {
				lI(e, t, o, n), i.set(e.getWin().innerWidth), ZD.setMenubar(l, oB(e, o)), ZD.setViews(l, o.views), ((e, t) => {
					const {
						uiMotherships: o
					} = t, n = e.dom;
					let s = e.getWin();
					const r = e.getDoc().documentElement,
						a = en($t(s.innerWidth, s.innerHeight)),
						i = en($t(r.offsetWidth, r.offsetHeight)),
						l = () => {
							const t = a.get();
							t.left === s.innerWidth && t.top === s.innerHeight || (a.set($t(s.innerWidth, s.innerHeight)), oS(e))
						},
						c = () => {
							const t = e.getDoc().documentElement,
								o = i.get();
							o.left === t.offsetWidth && o.top === t.offsetHeight || (i.set($t(t.offsetWidth, t.offsetHeight)), oS(e))
						},
						d = t => {
							((e, t) => {
								e.dispatch("ScrollContent", t)
							})(e, t)
						};
					n.bind(s, "resize", l), n.bind(s, "scroll", d);
					const u = Bc(ze(e.getBody()), "load", c);
					e.on("hide", (() => {
						V(o, (e => {
							Mt(e.element, "display", "none")
						}))
					})), e.on("show", (() => {
						V(o, (e => {
							Lt(e.element, "display")
						}))
					})), e.on("NodeChange", c), e.on("remove", (() => {
						u.unbind(), n.unbind(s, "resize", l), n.unbind(s, "scroll", d), s = null
					}))
				})(e, t)
			}));
			const m = ZD.getSocket(l).getOrDie("Could not find expected socket element");
			if (dI) {
				Dt(m.element, {
					overflow: "scroll",
					"-webkit-overflow-scrolling": "touch"
				});
				const t = ((e, t) => {
						let o = null;
						return {
							cancel: () => {
								c(o) || (clearTimeout(o), o = null)
							},
							throttle: (...t) => {
								c(o) && (o = setTimeout((() => {
									o = null, e.apply(null, t)
								}), 20))
							}
						}
					})((() => {
						e.dispatch("ScrollContent")
					})),
					o = Dc(m.element, "scroll", t.throttle);
				e.on("remove", o.unbind)
			}
			fw(e, t), e.addCommand("ToggleSidebar", ((t, o) => {
				ZD.toggleSidebar(l, o), (e => {
					e.dispatch("ToggleSidebar")
				})(e)
			})), e.addQueryValueHandler("ToggleSidebar", (() => {
				var e;
				return null !== (e = ZD.whichSidebar(l)) && void 0 !== e ? e : ""
			})), e.addCommand("ToggleView", ((t, o) => {
				if (ZD.toggleView(l, o)) {
					const t = l.element;
					r.mothership.broadcastOn([Ou()], {
						target: t
					}), V(a, (e => {
						e.broadcastOn([Ou()], {
							target: t
						})
					})), c(ZD.whichView(l)) && (e.focus(), e.nodeChanged(), ZD.refreshToolbar(l)), (e => {
						e.dispatch("ToggleView")
					})(e)
				}
			})), e.addQueryValueHandler("ToggleView", (() => {
				var e;
				return null !== (e = ZD.whichView(l)) && void 0 !== e ? e : ""
			}));
			const g = Hf(e);
			g !== xf.sliding && g !== xf.floating || e.on("ResizeWindow ResizeEditor ResizeContent", (() => {
				const o = e.getWin().innerWidth;
				o !== i.get() && (ZD.refreshToolbar(t.mainUi.outerContainer), i.set(o))
			}));
			const p = {
				setEnabled: e => {
					hw(t, e ? "setEnabled" : "setDisabled")
				},
				isEnabled: () => !ug.isDisabled(l)
			};
			return {
				iframeContainer: m.element.dom,
				editorContainer: l.element.dom,
				api: p
			}
		}
	});
	const mI = e => /^[0-9\.]+(|px)$/i.test("" + e) ? A.some(parseInt("" + e, 10)) : A.none(),
		gI = e => h(e) ? e + "px" : e,
		pI = (e, t, o) => {
			const n = t.filter((t => e < t)),
				s = o.filter((t => e > t));
			return n.or(s).getOr(e)
		},
		hI = e => {
			const t = Mf(e),
				o = Df(e),
				n = If(e);
			return mI(t).map((e => pI(e, o, n)))
		},
		{
			ToolbarLocation: fI,
			ToolbarMode: bI
		} = Eb,
		vI = (e, t, o, n, s) => {
			const {
				mainUi: r,
				uiMotherships: a
			} = o, i = Sf.DOM, l = Sb(e), c = Ob(e), d = If(e).or(hI(e)), u = n.shared.header, m = u.isPositionedAtTop, g = Hf(e), p = g === bI.sliding || g === bI.floating, h = en(!1), f = () => h.get() && !e.removed, b = e => p ? e.fold(y(0), (e => e.components().length > 1 ? Ut(e.components()[1].element) : 0)) : 0, v = () => {
				V(a, (e => {
					e.broadcastOn([_u()], {})
				}))
			}, x = o => {
				if (!f()) return;
				l || s.on((e => {
					const o = d.getOrThunk((() => jo().width - Yt(t).left - 10));
					Mt(e.element, "max-width", o + "px")
				}));
				const n = Po(),
					a = !(l || l || !(qt(r.outerContainer.element).left + Jt(r.outerContainer.element) >= window.innerWidth - 40 || Rt(r.outerContainer.element, "width").isSome()) || (Mt(r.outerContainer.element, "position", "absolute"), Mt(r.outerContainer.element, "left", "0px"), Lt(r.outerContainer.element, "width"), 0));
				if (p && ZD.refreshToolbar(r.outerContainer), !l) {
					const o = Po(),
						i = Ce(n.left !== o.left, n);
					((o, n) => {
						s.on((s => {
							const a = ZD.getToolbar(r.outerContainer),
								i = b(a),
								l = Ko(t),
								c = ((e, t) => _b(e) ? Aa(t) : A.none())(e, r.outerContainer.element),
								d = c.fold((() => l.x), (e => {
									const t = Ko(e);
									return Ze(e, xt()) ? l.x : l.x - t.x
								})),
								u = Ce(o, Math.ceil(r.outerContainer.element.dom.getBoundingClientRect().width)).filter((e => e > 150)).map((e => {
									const t = n.getOr(Po()),
										o = window.innerWidth - (d - t.left),
										s = Math.max(Math.min(e, o), 150);
									return o < e && Mt(r.outerContainer.element, "width", s + "px"), {
										width: s + "px"
									}
								})).getOr({
									width: "max-content"
								}),
								g = {
									position: "absolute",
									left: Math.round(d) + "px",
									top: c.fold((() => m() ? Math.max(l.y - Ut(s.element) + i, 0) : l.bottom), (e => {
										var t;
										const o = Ko(e),
											n = null !== (t = e.dom.scrollTop) && void 0 !== t ? t : 0,
											r = Ze(e, xt()) ? Math.max(l.y - Ut(s.element) + i, 0) : l.y - o.y + n - Ut(s.element) + i;
										return m() ? r : l.bottom
									})) + "px"
								};
							Dt(r.outerContainer.element, {
								...g,
								...u
							})
						}))
					})(a, i), i.each((e => {
						Uo(e.left, o.top)
					}))
				}
				c && s.on(o), v()
			}, w = () => !(l || !c || !f()) && s.get().exists((o => {
				const n = u.getDockingMode(),
					a = (o => {
						switch (Uf(e)) {
							case fI.auto:
								const e = ZD.getToolbar(r.outerContainer),
									n = b(e),
									s = Ut(o.element) - n,
									a = Ko(t);
								if (a.y > s) return "top";
								{
									const e = nt(t),
										o = Math.max(e.dom.scrollHeight, Ut(e));
									return a.bottom < o - s || Zo().bottom < a.bottom - s ? "bottom" : "top"
								}
							case fI.bottom:
								return "bottom";
							case fI.top:
							default:
								return "top"
						}
					})(o);
				return a !== n && (i = a, s.on((e => {
					Oi.setModes(e, [i]), u.setDockingMode(i);
					const t = m() ? Yc.TopToBottom : Yc.BottomToTop;
					St(e.element, Xc, t)
				})), !0);
				var i
			}));
			return {
				isVisible: f,
				isPositionedAtTop: m,
				show: () => {
					h.set(!0), Mt(r.outerContainer.element, "display", "flex"), i.addClass(e.getBody(), "mce-edit-focus"), V(a, (e => {
						Lt(e.element, "display")
					})), w(), _b(e) ? x((e => Oi.isDocked(e) ? Oi.reset(e) : Oi.refresh(e))) : x(Oi.refresh)
				},
				hide: () => {
					h.set(!1), Mt(r.outerContainer.element, "display", "none"), i.removeClass(e.getBody(), "mce-edit-focus"), V(a, (e => {
						Mt(e.element, "display", "none")
					}))
				},
				update: x,
				updateMode: () => {
					w() && x(Oi.reset)
				},
				repositionPopups: v
			}
		},
		xI = (e, t) => {
			const o = Ko(e);
			return {
				pos: t ? o.y : o.bottom,
				bounds: o
			}
		};
	var yI = Object.freeze({
		__proto__: null,
		render: (e, t, o, n, s) => {
			const {
				mainUi: r
			} = t, a = nn(), i = ze(s.targetNode), l = vI(e, i, t, n, a), c = $f(e);
			cB(e);
			const d = () => {
				if (a.isSet()) return void l.show();
				a.set(ZD.getHeader(r.outerContainer).getOrDie());
				const s = Cb(e);
				_b(e) ? (uu(i, r.mothership), uu(i, t.popupUi.mothership)) : du(s, r.mothership), du(s, t.dialogUi.mothership);
				const d = () => {
					lI(e, t, o, n), ZD.setMenubar(r.outerContainer, oB(e, o)), l.show(), ((e, t, o, n) => {
						const s = en(xI(t, o.isPositionedAtTop())),
							r = n => {
								const {
									pos: r,
									bounds: a
								} = xI(t, o.isPositionedAtTop()), {
									pos: i,
									bounds: l
								} = s.get(), c = a.height !== l.height || a.width !== l.width;
								s.set({
									pos: r,
									bounds: a
								}), c && oS(e, n), o.isVisible() && (i !== r ? o.update(Oi.reset) : c && (o.updateMode(), o.repositionPopups()))
							};
						n || (e.on("activate", o.show), e.on("deactivate", o.hide)), e.on("SkinLoaded ResizeWindow", (() => o.update(Oi.reset))), e.on("NodeChange keydown", (e => {
							requestAnimationFrame((() => r(e)))
						}));
						let a = 0;
						const i = B_((() => o.update(Oi.refresh)), 33);
						e.on("ScrollWindow", (() => {
							const e = Po().left;
							e !== a && (a = e, i.throttle()), o.updateMode()
						})), _b(e) && e.on("ElementScroll", (e => {
							o.update(Oi.refresh)
						}));
						const l = on();
						l.set(Bc(ze(e.getBody()), "load", (e => r(e.raw)))), e.on("remove", (() => {
							l.clear()
						}))
					})(e, i, l, c), e.nodeChanged()
				};
				c ? e.once("SkinLoaded", d) : d()
			};
			e.on("show", d), e.on("hide", l.hide), c || (e.on("focus", d), e.on("blur", l.hide)), e.on("init", (() => {
				(e.hasFocus() || c) && d()
			})), fw(e, t);
			const u = {
				show: d,
				hide: l.hide,
				setEnabled: e => {
					hw(t, e ? "setEnabled" : "setDisabled")
				},
				isEnabled: () => !ug.isDisabled(r.outerContainer)
			};
			return {
				editorContainer: r.outerContainer.element.dom,
				api: u
			}
		}
	});
	const wI = "contexttoolbar-hide",
		SI = (e, t) => Wr(tT, ((o, n) => {
			const s = (e => ({
				hide: () => Fr(e, fr()),
				getValue: () => ju.getValue(e)
			}))(e.get(o));
			t.onAction(s, n.event.buttonApi)
		})),
		CI = (e, t) => {
			const o = e.label.fold((() => ({})), (e => ({
					"aria-label": e
				}))),
				n = zb(Fx.sketch({
					inputClasses: ["tox-toolbar-textfield", "tox-toolbar-nav-js"],
					data: e.initValue(),
					inputAttributes: o,
					selectOnFocus: !0,
					inputBehaviours: ca([ug.config({
						disabled: () => t.checkUiComponentContext("mode:design").shouldDisable
					}), bw((() => t.checkUiComponentContext("mode:design"))), bh.config({
						mode: "special",
						onEnter: e => s.findPrimary(e).map((e => (Nr(e), !0))),
						onLeft: (e, t) => (t.cut(), A.none()),
						onRight: (e, t) => (t.cut(), A.none())
					})])
				})),
				s = ((e, t, o) => {
					const n = L(t, (t => zb(((e, t, o) => (e => "contextformtogglebutton" === e.type)(t) ? ((e, t, o) => {
						const {
							primary: n,
							...s
						} = t.original, r = Jn(Fy({
							...s,
							type: "togglebutton",
							onAction: b
						}));
						return tI(r, o, [SI(e, t)])
					})(e, t, o) : ((e, t, o) => {
						const {
							primary: n,
							...s
						} = t.original, r = Jn(Dy({
							...s,
							type: "button",
							onAction: b
						}));
						return eI(r, o, [SI(e, t)])
					})(e, t, o))(e, t, o))));
					return {
						asSpecs: () => L(n, (e => e.asSpec())),
						findPrimary: e => se(t, ((t, o) => t.primary ? A.from(n[o]).bind((t => t.getOpt(e))).filter(k(ug.isDisabled)) : A.none()))
					}
				})(n, e.commands, t);
			return [{
				title: A.none(),
				items: [n.asSpec()]
			}, {
				title: A.none(),
				items: s.asSpecs()
			}]
		},
		kI = (e, t, o) => t.bottom - e.y >= o && e.bottom - t.y >= o,
		OI = e => {
			const t = (e => {
				const t = e.getBoundingClientRect();
				if (t.height <= 0 && t.width <= 0) {
					const o = mt(ze(e.startContainer), e.startOffset).element;
					return (Ge(o) ? rt(o) : A.some(o)).filter($e).map((e => e.dom.getBoundingClientRect())).getOr(t)
				}
				return t
			})(e.selection.getRng());
			if (e.inline) {
				const e = Po();
				return Xo(e.left + t.left, e.top + t.top, t.width, t.height)
			} {
				const o = Jo(ze(e.getBody()));
				return Xo(o.x + t.left, o.y + t.top, t.width, t.height)
			}
		},
		_I = (e, t, o, n = 0) => {
			const s = jo(window),
				r = Ko(ze(e.getContentAreaContainer())),
				a = gb(e) || bb(e) || xb(e),
				{
					x: i,
					width: l
				} = ((e, t, o) => {
					const n = Math.max(e.x + o, t.x);
					return {
						x: n,
						width: Math.min(e.right - o, t.right) - n
					}
				})(r, s, n);
			if (e.inline && !a) return Xo(i, s.y, l, s.height);
			{
				const a = t.header.isPositionedAtTop(),
					{
						y: c,
						bottom: d
					} = ((e, t, o, n, s, r) => {
						const a = ze(e.getContainer()),
							i = Ol(a, ".tox-editor-header").getOr(a),
							l = Ko(i),
							c = l.y >= t.bottom,
							d = n && !c;
						if (e.inline && d) return {
							y: Math.max(l.bottom + r, o.y),
							bottom: o.bottom
						};
						if (e.inline && !d) return {
							y: o.y,
							bottom: Math.min(l.y - r, o.bottom)
						};
						const u = "line" === s ? Ko(a) : t;
						return d ? {
							y: Math.max(l.bottom + r, o.y),
							bottom: Math.min(u.bottom - r, o.bottom)
						} : {
							y: Math.max(u.y + r, o.y),
							bottom: Math.min(l.y - r, o.bottom)
						}
					})(e, r, s, a, o, n);
				return Xo(i, c, l, d - c)
			}
		},
		TI = {
			valignCentre: [],
			alignCentre: [],
			alignLeft: ["tox-pop--align-left"],
			alignRight: ["tox-pop--align-right"],
			right: ["tox-pop--right"],
			left: ["tox-pop--left"],
			bottom: ["tox-pop--bottom"],
			top: ["tox-pop--top"],
			inset: ["tox-pop--inset"]
		},
		EI = {
			maxHeightFunction: Vc(),
			maxWidthFunction: oD()
		},
		AI = e => "node" === e,
		MI = (e, t, o, n, s) => {
			const r = OI(e),
				a = n.lastElement().exists((e => Ze(o, e)));
			return ((e, t) => {
				const o = e.selection.getRng(),
					n = mt(ze(o.startContainer), o.startOffset);
				return o.startContainer === o.endContainer && o.startOffset === o.endOffset - 1 && Ze(n.element, t)
			})(e, o) ? a ? aA : tA : a ? ((e, o, s) => {
				const a = Rt(e, "position");
				Mt(e, "position", o);
				const i = kI(r, Ko(t), -20) && !n.isReposition() ? lA : aA;
				return a.each((t => Mt(e, "position", t))), i
			})(t, n.getMode()) : ("fixed" === n.getMode() ? s.y + Po().top : s.y) + (Ut(t) + 12) <= r.y ? tA : oA
		},
		DI = (e, t, o, n) => {
			const s = t => (n, s, r, a, i) => ({
					...MI(e, a, t, o, i)({
						...n,
						y: i.y,
						height: i.height
					}, s, r, a, i),
					alwaysFit: !0
				}),
				r = e => AI(n) ? [s(e)] : [];
			return t ? {
				onLtr: e => [Zl, Yl, Xl, Kl, Jl, Ql].concat(r(e)),
				onRtl: e => [Zl, Xl, Yl, Jl, Kl, Ql].concat(r(e))
			} : {
				onLtr: e => [Ql, Zl, Kl, Yl, Jl, Xl].concat(r(e)),
				onRtl: e => [Ql, Zl, Jl, Xl, Kl, Yl].concat(r(e))
			}
		},
		BI = (e, t) => {
			const o = P(t, (t => t.predicate(e.dom))),
				{
					pass: n,
					fail: s
				} = H(o, (e => "contexttoolbar" === e.type));
			return {
				contextToolbars: n,
				contextForms: s
			}
		},
		II = (e, t) => {
			const o = {},
				n = [],
				s = [],
				r = {},
				a = {},
				i = re(e);
			return V(i, (i => {
				const l = e[i];
				"contextform" === l.type ? ((e, i) => {
					const l = Jn(Kn("ContextForm", Py, i));
					o[e] = l, l.launch.map((o => {
						r["form:" + e] = {
							...i.launch,
							type: "contextformtogglebutton" === o.type ? "togglebutton" : "button",
							onAction: () => {
								t(l)
							}
						}
					})), "editor" === l.scope ? s.push(l) : n.push(l), a[e] = l
				})(i, l) : "contexttoolbar" === l.type && ((e, t) => {
					var o;
					(o = t, Kn("ContextToolbar", Uy, o)).each((o => {
						"editor" === t.scope ? s.push(o) : n.push(o), a[e] = o
					}))
				})(i, l)
			})), {
				forms: o,
				inNodeScope: n,
				inEditorScope: s,
				lookupTable: a,
				formNavigators: r
			}
		},
		FI = Di("forward-slide"),
		RI = Di("backward-slide"),
		NI = Di("change-slide-event"),
		zI = "tox-pop--resizing",
		LI = "tox-pop--transition",
		VI = (e, t, o, n) => {
			const s = n.backstage,
				r = s.shared,
				a = Mo().deviceType.isTouch,
				i = nn(),
				l = nn(),
				c = nn(),
				d = pl((e => {
					const t = en([]);
					return vf.sketch({
						dom: {
							tag: "div",
							classes: ["tox-pop"]
						},
						fireDismissalEventInstead: {
							event: "doNotDismissYet"
						},
						onShow: e => {
							t.set([]), vf.getContent(e).each((e => {
								Lt(e.element, "visibility")
							})), Sa(e.element, zI), Lt(e.element, "width")
						},
						inlineBehaviours: ca([Th("context-toolbar-events", [Kr(nr(), ((e, t) => {
							"width" === t.event.raw.propertyName && (Sa(e.element, zI), Lt(e.element, "width"))
						})), Wr(NI, ((e, t) => {
							const o = e.element;
							Lt(o, "width");
							const n = Kt(o);
							vf.setContent(e, t.event.contents), ya(o, zI);
							const s = Kt(o);
							Mt(o, "width", n + "px"), vf.getContent(e).each((e => {
								t.event.focus.bind((e => (mc(e), fc(o)))).orThunk((() => (bh.focusIn(e), hc(pt(o)))))
							})), setTimeout((() => {
								Mt(e.element, "width", s + "px")
							}), 0)
						})), Wr(FI, ((e, o) => {
							vf.getContent(e).each((o => {
								t.set(t.get().concat([{
									bar: o,
									focus: hc(pt(e.element))
								}]))
							})), Rr(e, NI, {
								contents: o.event.forwardContents,
								focus: A.none()
							})
						})), Wr(RI, ((e, o) => {
							oe(t.get()).each((o => {
								t.set(t.get().slice(0, t.get().length - 1)), Rr(e, NI, {
									contents: hl(o.bar),
									focus: o.focus
								})
							}))
						}))]), bh.config({
							mode: "special",
							onEscape: o => oe(t.get()).fold((() => e.onEscape()), (e => (Fr(o, RI), A.some(!0))))
						})]),
						lazySink: () => ln.value(e.sink)
					})
				})({
					sink: o,
					onEscape: () => (e.focus(), A.some(!0))
				})),
				u = () => {
					const t = c.get().getOr("node"),
						o = AI(t) ? 1 : 0;
					return _I(e, r, t, o)
				},
				m = () => !(e.removed || a() && s.isContextMenuOpen()),
				g = () => {
					if (m()) {
						const t = u(),
							o = xe(c.get(), "node") ? ((e, t) => t.filter((e => vt(e) && je(e))).map(Jo).getOrThunk((() => OI(e))))(e, i.get()) : OI(e);
						return t.height <= 0 || !kI(o, t, .01)
					}
					return !0
				},
				p = () => {
					i.clear(), l.clear(), c.clear(), vf.hide(d)
				},
				h = () => {
					if (vf.isOpen(d)) {
						const e = d.element;
						Lt(e, "display"), g() ? Mt(e, "display", "none") : (l.set(0), vf.reposition(d))
					}
				},
				f = t => ({
					dom: {
						tag: "div",
						classes: ["tox-pop__dialog"]
					},
					components: [t],
					behaviours: ca([bh.config({
						mode: "acyclic"
					}), Th("pop-dialog-wrap-events", [Jr((t => {
						e.shortcuts.add("ctrl+F9", "focus statusbar", (() => bh.focusIn(t)))
					})), Qr((t => {
						e.shortcuts.remove("ctrl+F9")
					}))])])
				}),
				v = Qt((() => II(t, (e => {
					const t = x([e]);
					Rr(d, FI, {
						forwardContents: f(t)
					})
				})))),
				x = t => {
					const {
						buttons: o
					} = e.ui.registry.getAll(), s = {
						...o,
						...v().formNavigators
					}, a = Hf(e) === xf.scrolling ? xf.scrolling : xf.default, i = G(L(t, (t => "contexttoolbar" === t.type ? ((t, o) => iI(e, {
						buttons: t,
						toolbar: o.items,
						allowToolbarGroups: !1
					}, n.backstage, A.some(["form:"])))(s, t) : ((e, t) => CI(e, t))(t, r.providers))));
					return TD({
						type: a,
						uid: Di("context-toolbar"),
						initGroups: i,
						onEscape: A.none,
						cyclicKeying: !0,
						providers: r.providers
					})
				},
				y = (t, n) => {
					if (S.cancel(), !m()) return;
					const s = x(t),
						p = t[0].position,
						h = ((t, n) => {
							const s = "node" === t ? r.anchors.node(n) : r.anchors.cursor(),
								c = ((e, t, o, n) => "line" === t ? {
									bubble: Wc(12, 0, TI),
									layouts: {
										onLtr: () => [ec],
										onRtl: () => [tc]
									},
									overrides: EI
								} : {
									bubble: Wc(0, 12, TI, 1 / 12),
									layouts: DI(e, o, n, t),
									overrides: EI
								})(e, t, a(), {
									lastElement: i.get,
									isReposition: () => xe(l.get(), 0),
									getMode: () => Qd.getMode(o)
								});
							return xn(s, c)
						})(p, n);
					c.set(p), l.set(1);
					const b = d.element;
					Lt(b, "display"), (e => xe(we(e, i.get(), Ze), !0))(n) || (Sa(b, LI), Qd.reset(o, d)), vf.showWithinBounds(d, f(s), {
						anchor: h,
						transition: {
							classes: [LI],
							mode: "placement"
						}
					}, (() => A.some(u()))), n.fold(i.clear, i.set), g() && Mt(b, "display", "none")
				};
			let w = !1;
			const S = B_((() => {
				!e.hasFocus() || e.removed || w || (Ca(d.element, LI) ? S.throttle() : ((e, t) => {
					const o = ze(t.getBody()),
						n = e => Ze(e, o),
						s = ze(t.selection.getNode());
					return (e => !n(e) && !et(o, e))(s) ? A.none() : ((e, t, o) => {
						const n = BI(e, t);
						if (n.contextForms.length > 0) return A.some({
							elem: e,
							toolbars: [n.contextForms[0]]
						});
						{
							const t = BI(e, o);
							if (t.contextForms.length > 0) return A.some({
								elem: e,
								toolbars: [t.contextForms[0]]
							});
							if (n.contextToolbars.length > 0 || t.contextToolbars.length > 0) {
								const o = (e => {
									if (e.length <= 1) return e;
									{
										const t = t => R(e, (e => e.position === t)),
											o = t => P(e, (e => e.position === t)),
											n = t("selection"),
											s = t("node");
										if (n || s) {
											if (s && n) {
												const e = o("node"),
													t = L(o("selection"), (e => ({
														...e,
														position: "node"
													})));
												return e.concat(t)
											}
											return o(n ? "selection" : "node")
										}
										return o("line")
									}
								})(n.contextToolbars.concat(t.contextToolbars));
								return A.some({
									elem: e,
									toolbars: o
								})
							}
							return A.none()
						}
					})(s, e.inNodeScope, e.inEditorScope).orThunk((() => ((e, t, o) => e(t) ? A.none() : Fs(t, (e => {
						if ($e(e)) {
							const {
								contextToolbars: t,
								contextForms: n
							} = BI(e, o.inNodeScope), s = n.length > 0 ? n : (e => {
								if (e.length <= 1) return e;
								{
									const t = t => j(e, (e => e.position === t));
									return t("selection").orThunk((() => t("node"))).orThunk((() => t("line"))).map((e => e.position)).fold((() => []), (t => P(e, (e => e.position === t))))
								}
							})(t);
							return s.length > 0 ? A.some({
								elem: e,
								toolbars: s
							}) : A.none()
						}
						return A.none()
					}), e))(n, s, e)))
				})(v(), e).fold(p, (e => {
					y(e.toolbars, A.some(e.elem))
				})))
			}), 17);
			e.on("init", (() => {
				e.on("remove", p), e.on("ScrollContent ScrollWindow ObjectResized ResizeEditor longpress", h), e.on("click keyup focus SetContent", S.throttle), e.on(wI, p), e.on("contexttoolbar-show", (t => {
					const o = v();
					fe(o.lookupTable, t.toolbarKey).each((o => {
						y([o], Ce(t.target !== e, t.target)), vf.getContent(d).each(bh.focusIn)
					}))
				})), e.on("focusout", (t => {
					wf.setEditorTimeout(e, (() => {
						fc(o.element).isNone() && fc(d.element).isNone() && p()
					}), 0)
				})), e.on("SwitchMode", (() => {
					e.mode.isReadOnly() && p()
				})), e.on("ExecCommand", (({
					command: e
				}) => {
					"toggleview" === e.toLowerCase() && p()
				})), e.on("AfterProgressState", (t => {
					t.state ? p() : e.hasFocus() && S.throttle()
				})), e.on("dragstart", (() => {
					w = !0
				})), e.on("dragend drop", (() => {
					w = !1
				})), e.on("NodeChange", (e => {
					fc(d.element).fold(S.throttle, b)
				}))
			}))
		},
		HI = (e, t) => {
			const o = () => {
				const o = t.getOptions(e),
					n = t.getCurrent(e).map(t.hash),
					s = nn();
				return L(o, (o => ({
					type: "togglemenuitem",
					text: t.display(o),
					onSetup: r => {
						const a = e => {
							e && (s.on((e => e.setActive(!1))), s.set(r)), r.setActive(e)
						};
						a(xe(n, t.hash(o)));
						const i = t.watcher(e, o, a);
						return () => {
							s.clear(), i()
						}
					},
					onAction: () => t.setCurrent(e, o)
				})))
			};
			e.ui.registry.addMenuButton(t.name, {
				tooltip: t.text,
				icon: t.icon,
				fetch: e => e(o()),
				onSetup: t.onToolbarSetup
			}), e.ui.registry.addNestedMenuItem(t.name, {
				type: "nestedmenuitem",
				text: t.text,
				getSubmenuItems: o,
				onSetup: t.onMenuSetup
			})
		},
		PI = e => {
			HI(e, (e => ({
				name: "lineheight",
				text: "Line height",
				icon: "line-height",
				getOptions: fb,
				hash: e => ((e, t) => BB(e, ["fixed", "relative", "empty"]).map((({
					value: e,
					unit: t
				}) => e + t)))(e).getOr(e),
				display: w,
				watcher: (e, t, o) => e.formatter.formatChanged("lineheight", o, !1, {
					value: t
				}).unbind,
				getCurrent: e => A.from(e.queryCommandValue("LineHeight")),
				setCurrent: (e, t) => e.execCommand("LineHeight", !1, t),
				onToolbarSetup: aS(e),
				onMenuSetup: aS(e)
			}))(e)), (e => A.from(Lf(e)).map((t => ({
				name: "language",
				text: "Language",
				icon: "language",
				getOptions: y(t),
				hash: e => u(e.customCode) ? e.code : `${e.code}/${e.customCode}`,
				display: e => e.title,
				watcher: (e, t, o) => {
					var n;
					return e.formatter.formatChanged("lang", o, !1, {
						value: t.code,
						customValue: null !== (n = t.customCode) && void 0 !== n ? n : null
					}).unbind
				},
				getCurrent: e => {
					const t = ze(e.selection.getNode());
					return Rs(t, (e => A.some(e).filter($e).bind((e => Ot(e, "lang").map((t => ({
						code: t,
						customCode: Ot(e, "data-mce-lang").getOrUndefined(),
						title: ""
					})))))))
				},
				setCurrent: (e, t) => e.execCommand("Lang", !1, t),
				onToolbarSetup: t => {
					const o = on();
					return t.setActive(e.formatter.match("lang", {}, void 0, !0)), o.set(e.formatter.formatChanged("lang", t.setActive, !0)), rS(o.clear, aS(e)(t))
				},
				onMenuSetup: aS(e)
			}))))(e).each((t => HI(e, t)))
		},
		UI = e => lS(e, "NodeChange", (t => {
			t.setEnabled(e.queryCommandState("outdent") && e.selection.isEditable())
		})),
		WI = (e, t) => o => {
			o.setActive(t.get());
			const n = e => {
				t.set(e.state), o.setActive(e.state)
			};
			return e.on("PastePlainTextToggle", n), rS((() => e.off("PastePlainTextToggle", n)), aS(e)(o))
		},
		jI = (e, t) => () => {
			e.execCommand("mceToggleFormat", !1, t)
		},
		$I = e => {
			(e => {
				(e => {
					A_.each([{
						name: "bold",
						text: "Bold",
						icon: "bold",
						shortcut: "Meta+B"
					}, {
						name: "italic",
						text: "Italic",
						icon: "italic",
						shortcut: "Meta+I"
					}, {
						name: "underline",
						text: "Underline",
						icon: "underline",
						shortcut: "Meta+U"
					}, {
						name: "strikethrough",
						text: "Strikethrough",
						icon: "strike-through"
					}, {
						name: "subscript",
						text: "Subscript",
						icon: "subscript"
					}, {
						name: "superscript",
						text: "Superscript",
						icon: "superscript"
					}], ((t, o) => {
						e.ui.registry.addToggleButton(t.name, {
							tooltip: t.text,
							icon: t.icon,
							onSetup: iS(e, t.name),
							onAction: jI(e, t.name),
							shortcut: t.shortcut
						})
					}));
					for (let t = 1; t <= 6; t++) {
						const o = "h" + t,
							n = `Access+${t}`;
						e.ui.registry.addToggleButton(o, {
							text: o.toUpperCase(),
							tooltip: "Heading " + t,
							onSetup: iS(e, o),
							onAction: jI(e, o),
							shortcut: n
						})
					}
				})(e), (e => {
					A_.each([{
						name: "copy",
						text: "Copy",
						action: "Copy",
						icon: "copy",
						context: "any"
					}, {
						name: "help",
						text: "Help",
						action: "mceHelp",
						icon: "help",
						shortcut: "Alt+0",
						context: "any"
					}, {
						name: "selectall",
						text: "Select all",
						action: "SelectAll",
						icon: "select-all",
						shortcut: "Meta+A",
						context: "any"
					}, {
						name: "newdocument",
						text: "New document",
						action: "mceNewDocument",
						icon: "new-document"
					}, {
						name: "print",
						text: "Print",
						action: "mcePrint",
						icon: "print",
						shortcut: "Meta+P",
						context: "any"
					}], (t => {
						e.ui.registry.addButton(t.name, {
							tooltip: t.text,
							icon: t.icon,
							onAction: dS(e, t.action),
							shortcut: t.shortcut,
							context: t.context
						})
					})), A_.each([{
						name: "cut",
						text: "Cut",
						action: "Cut",
						icon: "cut"
					}, {
						name: "paste",
						text: "Paste",
						action: "Paste",
						icon: "paste"
					}, {
						name: "removeformat",
						text: "Clear formatting",
						action: "RemoveFormat",
						icon: "remove-formatting"
					}, {
						name: "remove",
						text: "Remove",
						action: "Delete",
						icon: "remove"
					}, {
						name: "hr",
						text: "Horizontal line",
						action: "InsertHorizontalRule",
						icon: "horizontal-rule"
					}], (t => {
						e.ui.registry.addButton(t.name, {
							tooltip: t.text,
							icon: t.icon,
							onSetup: aS(e),
							onAction: dS(e, t.action)
						})
					}))
				})(e), (e => {
					A_.each([{
						name: "blockquote",
						text: "Blockquote",
						action: "mceBlockQuote",
						icon: "quote"
					}], (t => {
						e.ui.registry.addToggleButton(t.name, {
							tooltip: t.text,
							icon: t.icon,
							onAction: dS(e, t.action),
							onSetup: iS(e, t.name)
						})
					}))
				})(e)
			})(e), (e => {
				A_.each([{
					name: "newdocument",
					text: "New document",
					action: "mceNewDocument",
					icon: "new-document"
				}, {
					name: "copy",
					text: "Copy",
					action: "Copy",
					icon: "copy",
					shortcut: "Meta+C",
					context: "any"
				}, {
					name: "selectall",
					text: "Select all",
					action: "SelectAll",
					icon: "select-all",
					shortcut: "Meta+A",
					context: "any"
				}, {
					name: "print",
					text: "Print...",
					action: "mcePrint",
					icon: "print",
					shortcut: "Meta+P",
					context: "any"
				}], (t => {
					e.ui.registry.addMenuItem(t.name, {
						text: t.text,
						icon: t.icon,
						shortcut: t.shortcut,
						onAction: dS(e, t.action),
						context: t.context
					})
				})), A_.each([{
					name: "bold",
					text: "Bold",
					action: "Bold",
					icon: "bold",
					shortcut: "Meta+B"
				}, {
					name: "italic",
					text: "Italic",
					action: "Italic",
					icon: "italic",
					shortcut: "Meta+I"
				}, {
					name: "underline",
					text: "Underline",
					action: "Underline",
					icon: "underline",
					shortcut: "Meta+U"
				}, {
					name: "strikethrough",
					text: "Strikethrough",
					action: "Strikethrough",
					icon: "strike-through"
				}, {
					name: "subscript",
					text: "Subscript",
					action: "Subscript",
					icon: "subscript"
				}, {
					name: "superscript",
					text: "Superscript",
					action: "Superscript",
					icon: "superscript"
				}, {
					name: "removeformat",
					text: "Clear formatting",
					action: "RemoveFormat",
					icon: "remove-formatting"
				}, {
					name: "cut",
					text: "Cut",
					action: "Cut",
					icon: "cut",
					shortcut: "Meta+X"
				}, {
					name: "paste",
					text: "Paste",
					action: "Paste",
					icon: "paste",
					shortcut: "Meta+V"
				}, {
					name: "hr",
					text: "Horizontal line",
					action: "InsertHorizontalRule",
					icon: "horizontal-rule"
				}], (t => {
					e.ui.registry.addMenuItem(t.name, {
						text: t.text,
						icon: t.icon,
						shortcut: t.shortcut,
						onSetup: aS(e),
						onAction: dS(e, t.action)
					})
				})), e.ui.registry.addMenuItem("codeformat", {
					text: "Code",
					icon: "sourcecode",
					onSetup: aS(e),
					onAction: jI(e, "code")
				})
			})(e)
		},
		GI = (e, t) => lS(e, "Undo Redo AddUndo TypingUndo ClearUndos SwitchMode", (o => {
			o.setEnabled(!e.mode.isReadOnly() && e.undoManager[t]())
		})),
		qI = e => lS(e, "VisualAid", (t => {
			t.setActive(e.hasVisual)
		})),
		YI = (e, t) => {
			(e => {
				V([{
					name: "alignleft",
					text: "Align left",
					cmd: "JustifyLeft",
					icon: "align-left"
				}, {
					name: "aligncenter",
					text: "Align center",
					cmd: "JustifyCenter",
					icon: "align-center"
				}, {
					name: "alignright",
					text: "Align right",
					cmd: "JustifyRight",
					icon: "align-right"
				}, {
					name: "alignjustify",
					text: "Justify",
					cmd: "JustifyFull",
					icon: "align-justify"
				}], (t => {
					e.ui.registry.addToggleButton(t.name, {
						tooltip: t.text,
						icon: t.icon,
						onAction: dS(e, t.cmd),
						onSetup: iS(e, t.name)
					})
				})), e.ui.registry.addButton("alignnone", {
					tooltip: "No alignment",
					icon: "align-none",
					onSetup: aS(e),
					onAction: dS(e, "JustifyNone")
				})
			})(e), $I(e), ((e, t) => {
				((e, t) => {
					const o = mB(t, xB(e));
					e.ui.registry.addNestedMenuItem("align", {
						text: t.shared.providers.translate("Align"),
						onSetup: aS(e),
						getSubmenuItems: () => o.items.validateItems(o.getStyleItems())
					})
				})(e, t), ((e, t) => {
					const o = mB(t, AB(e));
					e.ui.registry.addNestedMenuItem("fontfamily", {
						text: t.shared.providers.translate("Fonts"),
						onSetup: aS(e),
						getSubmenuItems: () => o.items.validateItems(o.getStyleItems())
					})
				})(e, t), ((e, t) => {
					const o = {
							type: "advanced",
							...t.styles
						},
						n = mB(t, UB(e, o));
					e.ui.registry.addNestedMenuItem("styles", {
						text: "Formats",
						onSetup: aS(e),
						getSubmenuItems: () => n.items.validateItems(n.getStyleItems())
					})
				})(e, t), ((e, t) => {
					const o = mB(t, CB(e));
					e.ui.registry.addNestedMenuItem("blocks", {
						text: "Blocks",
						onSetup: aS(e),
						getSubmenuItems: () => o.items.validateItems(o.getStyleItems())
					})
				})(e, t), ((e, t) => {
					const o = mB(t, HB(e));
					e.ui.registry.addNestedMenuItem("fontsize", {
						text: "Font sizes",
						onSetup: aS(e),
						getSubmenuItems: () => o.items.validateItems(o.getStyleItems())
					})
				})(e, t)
			})(e, t), (e => {
				(e => {
					e.ui.registry.addMenuItem("undo", {
						text: "Undo",
						icon: "undo",
						shortcut: "Meta+Z",
						onSetup: GI(e, "hasUndo"),
						onAction: dS(e, "undo")
					}), e.ui.registry.addMenuItem("redo", {
						text: "Redo",
						icon: "redo",
						shortcut: "Meta+Y",
						onSetup: GI(e, "hasRedo"),
						onAction: dS(e, "redo")
					})
				})(e), (e => {
					e.ui.registry.addButton("undo", {
						tooltip: "Undo",
						icon: "undo",
						enabled: !1,
						onSetup: GI(e, "hasUndo"),
						onAction: dS(e, "undo"),
						shortcut: "Meta+Z"
					}), e.ui.registry.addButton("redo", {
						tooltip: "Redo",
						icon: "redo",
						enabled: !1,
						onSetup: GI(e, "hasRedo"),
						onAction: dS(e, "redo"),
						shortcut: "Meta+Y"
					})
				})(e)
			})(e), (e => {
				(e => {
					e.addCommand("mceApplyTextcolor", ((t, o) => {
						((e, t, o) => {
							e.undoManager.transact((() => {
								e.focus(), e.formatter.apply(t, {
									value: o
								}), e.nodeChanged()
							}))
						})(e, t, o)
					})), e.addCommand("mceRemoveTextcolor", (t => {
						((e, t) => {
							e.undoManager.transact((() => {
								e.focus(), e.formatter.remove(t, {
									value: null
								}, void 0, !0), e.nodeChanged()
							}))
						})(e, t)
					}))
				})(e);
				const t = ES(e),
					o = AS(e),
					n = en(t),
					s = en(o);
				VS(e, "forecolor", "forecolor", n), VS(e, "backcolor", "hilitecolor", s), HS(e, "forecolor", "forecolor", "Text color", n), HS(e, "backcolor", "hilitecolor", "Background color", s)
			})(e), (e => {
				(e => {
					e.ui.registry.addButton("visualaid", {
						tooltip: "Visual aids",
						text: "Visual aids",
						onAction: dS(e, "mceToggleVisualAid"),
						context: "any"
					})
				})(e), (e => {
					e.ui.registry.addToggleMenuItem("visualaid", {
						text: "Visual aids",
						onSetup: qI(e),
						onAction: dS(e, "mceToggleVisualAid"),
						context: "any"
					})
				})(e)
			})(e), (e => {
				(e => {
					e.ui.registry.addButton("outdent", {
						tooltip: "Decrease indent",
						icon: "outdent",
						onSetup: UI(e),
						onAction: dS(e, "outdent")
					}), e.ui.registry.addButton("indent", {
						tooltip: "Increase indent",
						icon: "indent",
						onSetup: aS(e),
						onAction: dS(e, "indent")
					})
				})(e)
			})(e), PI(e), (e => {
				const t = en(ib(e)),
					o = () => e.execCommand("mceTogglePlainTextPaste");
				e.ui.registry.addToggleButton("pastetext", {
					active: !1,
					icon: "paste-text",
					tooltip: "Paste as text",
					onAction: o,
					onSetup: WI(e, t)
				}), e.ui.registry.addToggleMenuItem("pastetext", {
					text: "Paste as text",
					icon: "paste-text",
					onAction: o,
					onSetup: WI(e, t)
				})
			})(e), (e => {
				e.ui.registry.addContext("editable", (() => e.selection.isEditable())), e.ui.registry.addContext("mode", (t => e.mode.get() === t)), e.ui.registry.addContext("any", E), e.ui.registry.addContext("formatting", (t => e.formatter.canApply(t))), e.ui.registry.addContext("insert", (t => e.schema.isValidChild(e.selection.getNode().tagName, t)))
			})(e)
		},
		XI = e => r(e) ? e.split(/[ ,]/) : e,
		KI = e => t => t.options.get(e),
		JI = KI("contextmenu_never_use_native"),
		QI = KI("contextmenu_avoid_overlap"),
		ZI = e => {
			const t = e.ui.registry.getAll().contextMenus,
				o = e.options.get("contextmenu");
			return e.options.isSet("contextmenu") ? o : P(o, (e => be(t, e)))
		},
		eF = (e, t) => ({
			type: "makeshift",
			x: e,
			y: t
		}),
		tF = e => "longpress" === e.type || 0 === e.type.indexOf("touch"),
		oF = (e, t) => "contextmenu" === t.type || "longpress" === t.type ? e.inline ? (e => {
			if (tF(e)) {
				const t = e.touches[0];
				return eF(t.pageX, t.pageY)
			}
			return eF(e.pageX, e.pageY)
		})(t) : ((e, t) => {
			const o = Sf.DOM.getPos(e);
			return ((e, t, o) => eF(e.x + t, e.y + o))(t, o.x, o.y)
		})(e.getContentAreaContainer(), (e => {
			if (tF(e)) {
				const t = e.touches[0];
				return eF(t.clientX, t.clientY)
			}
			return eF(e.clientX, e.clientY)
		})(t)) : nF(e),
		nF = e => ({
			type: "selection",
			root: ze(e.selection.getNode())
		}),
		sF = (e, t, o) => {
			switch (o) {
				case "node":
					return (e => ({
						type: "node",
						node: A.some(ze(e.selection.getNode())),
						root: ze(e.getBody())
					}))(e);
				case "point":
					return oF(e, t);
				case "selection":
					return nF(e)
			}
		},
		rF = (e, t, o, n, s, r) => {
			const a = o(),
				i = sF(e, t, r);
			hT(a, ux.CLOSE_ON_EXECUTE, n, {
				isHorizontalMenu: !1,
				search: A.none()
			}).map((e => {
				t.preventDefault(), vf.showMenuAt(s, {
					anchor: i
				}, {
					menu: {
						markers: _x("normal")
					},
					data: e
				})
			}))
		},
		aF = {
			onLtr: () => [Zl, Yl, Xl, Kl, Jl, Ql, tA, oA, eA, QE, ZE, JE],
			onRtl: () => [Zl, Xl, Yl, Jl, Kl, Ql, tA, oA, ZE, JE, eA, QE]
		},
		iF = {
			valignCentre: [],
			alignCentre: [],
			alignLeft: ["tox-pop--align-left"],
			alignRight: ["tox-pop--align-right"],
			right: ["tox-pop--right"],
			left: ["tox-pop--left"],
			bottom: ["tox-pop--bottom"],
			top: ["tox-pop--top"]
		},
		lF = (e, t, o, n, s, r) => {
			const a = Mo(),
				i = a.os.isiOS(),
				l = a.os.isMacOS(),
				c = a.os.isAndroid(),
				d = a.deviceType.isTouch(),
				u = () => {
					const a = o();
					((e, t, o, n, s, r, a) => {
						const i = ((e, t, o) => {
							const n = sF(e, t, o);
							return {
								bubble: Wc(0, "point" === o ? 12 : 0, iF),
								layouts: aF,
								overrides: {
									maxWidthFunction: oD(),
									maxHeightFunction: Vc()
								},
								...n
							}
						})(e, t, r);
						hT(o, ux.CLOSE_ON_EXECUTE, n, {
							isHorizontalMenu: !0,
							search: A.none()
						}).map((o => {
							t.preventDefault();
							const l = a ? hf.HighlightMenuAndItem : hf.HighlightNone;
							vf.showMenuWithinBounds(s, {
								anchor: i
							}, {
								menu: {
									markers: _x("normal"),
									highlightOnOpen: l
								},
								data: o,
								type: "horizontal"
							}, (() => A.some(_I(e, n.shared, "node" === r ? "node" : "selection")))), e.dispatch(wI)
						}))
					})(e, t, a, n, s, r, !(c || i || l && d))
				};
			if ((l || i) && "node" !== r) {
				const o = () => {
					(e => {
						const t = e.selection.getRng(),
							o = () => {
								wf.setEditorTimeout(e, (() => {
									e.selection.setRng(t)
								}), 10), r()
							};
						e.once("touchend", o);
						const n = e => {
							e.preventDefault(), e.stopImmediatePropagation()
						};
						e.on("mousedown", n, !0);
						const s = () => r();
						e.once("longpresscancel", s);
						const r = () => {
							e.off("touchend", o), e.off("longpresscancel", s), e.off("mousedown", n)
						}
					})(e), u()
				};
				((e, t) => {
					const o = e.selection;
					if (o.isCollapsed() || t.touches.length < 1) return !1;
					{
						const n = t.touches[0],
							s = o.getRng();
						return Td(e.getWin(), fd.domRange(s)).exists((e => e.left <= n.clientX && e.right >= n.clientX && e.top <= n.clientY && e.bottom >= n.clientY))
					}
				})(e, t) ? o(): (e.once("selectionchange", o), e.once("touchend", (() => e.off("selectionchange", o))))
			} else u()
		},
		cF = e => r(e) ? "|" === e : "separator" === e.type,
		dF = {
			type: "separator"
		},
		uF = e => {
			const t = e => ({
				text: e.text,
				icon: e.icon,
				enabled: e.enabled,
				shortcut: e.shortcut
			});
			if (r(e)) return e;
			switch (e.type) {
				case "separator":
					return dF;
				case "submenu":
					return {
						type: "nestedmenuitem", ...t(e), getSubmenuItems: () => {
							const t = e.getSubmenuItems();
							return r(t) ? t : L(t, uF)
						}
					};
				default:
					const o = e;
					return {
						type: "menuitem", ...t(o), onAction: v(o.onAction)
					}
			}
		},
		mF = (e, t) => {
			if (0 === t.length) return e;
			const o = oe(e).filter((e => !cF(e))).fold((() => []), (e => [dF]));
			return e.concat(o).concat(t).concat([dF])
		},
		gF = (e, t) => !(e => "longpress" === e.type || be(e, "touches"))(t) && (2 !== t.button || t.target === e.getBody() && "" === t.pointerType),
		pF = (e, t) => gF(e, t) ? e.selection.getStart(!0) : t.target,
		hF = (e, t, o) => {
			const n = Mo().deviceType.isTouch,
				s = pl(vf.sketch({
					dom: {
						tag: "div"
					},
					lazySink: t,
					onEscape: () => e.focus(),
					onShow: () => o.setContextMenuState(!0),
					onHide: () => o.setContextMenuState(!1),
					fireDismissalEventInstead: {},
					inlineBehaviours: ca([Th("dismissContextMenu", [Wr(Or(), ((t, o) => {
						ku.close(t), e.focus()
					}))])])
				})),
				a = () => vf.hide(s),
				i = t => {
					if (JI(e) && t.preventDefault(), ((e, t) => t.ctrlKey && !JI(e))(e, t) || (e => 0 === ZI(e).length)(e)) return;
					const a = ((e, t) => {
						const o = QI(e),
							n = gF(e, t) ? "selection" : "point";
						if (Me(o)) {
							const s = pF(e, t);
							return BC(ze(s), o) ? "node" : n
						}
						return n
					})(e, t);
					(n() ? lF : rF)(e, t, (() => {
						const o = pF(e, t),
							n = e.ui.registry.getAll(),
							s = ZI(e);
						return ((e, t, o) => {
							const n = W(t, ((t, n) => fe(e, n.toLowerCase()).map((e => {
								const n = e.update(o);
								if (r(n) && Me(Ae(n))) return mF(t, n.split(" "));
								if (l(n) && n.length > 0) {
									const e = L(n, uF);
									return mF(t, e)
								}
								return t
							})).getOrThunk((() => t.concat([n])))), []);
							return n.length > 0 && cF(n[n.length - 1]) && n.pop(), n
						})(n.contextMenus, s, o)
					}), o, s, a)
				};
			e.on("init", (() => {
				const t = "ResizeEditor ScrollContent ScrollWindow longpresscancel" + (n() ? "" : " ResizeWindow");
				e.on(t, a), e.on("longpress contextmenu", i)
			}))
		},
		fF = Ms([{
			offset: ["x", "y"]
		}, {
			absolute: ["x", "y"]
		}, {
			fixed: ["x", "y"]
		}]),
		bF = e => t => t.translate(-e.left, -e.top),
		vF = e => t => t.translate(e.left, e.top),
		xF = e => (t, o) => W(e, ((e, t) => t(e)), $t(t, o)),
		yF = (e, t, o) => e.fold(xF([vF(o), bF(t)]), xF([bF(t)]), xF([])),
		wF = (e, t, o) => e.fold(xF([vF(o)]), xF([]), xF([vF(t)])),
		SF = (e, t, o) => e.fold(xF([]), xF([bF(o)]), xF([vF(t), bF(o)])),
		CF = (e, t, o) => {
			const n = e.fold(((e, t) => ({
				position: A.some("absolute"),
				left: A.some(e + "px"),
				top: A.some(t + "px")
			})), ((e, t) => ({
				position: A.some("absolute"),
				left: A.some(e - o.left + "px"),
				top: A.some(t - o.top + "px")
			})), ((e, t) => ({
				position: A.some("fixed"),
				left: A.some(e + "px"),
				top: A.some(t + "px")
			})));
			return {
				right: A.none(),
				bottom: A.none(),
				...n
			}
		},
		kF = (e, t, o, n) => {
			const s = (e, s) => (r, a) => {
				const i = e(t, o, n);
				return s(r.getOr(i.left), a.getOr(i.top))
			};
			return e.fold(s(SF, OF), s(wF, _F), s(yF, TF))
		},
		OF = fF.offset,
		_F = fF.absolute,
		TF = fF.fixed,
		EF = (e, t) => {
			const o = kt(e, t);
			return u(o) ? NaN : parseInt(o, 10)
		},
		AF = (e, t, o, n, s, r) => {
			const a = ((e, t, o, n) => ((e, t) => {
					const o = e.element,
						n = EF(o, t.leftAttr),
						s = EF(o, t.topAttr);
					return isNaN(n) || isNaN(s) ? A.none() : A.some($t(n, s))
				})(e, t).fold((() => o), (e => TF(e.left + n.left, e.top + n.top))))(e, t, o, n),
				i = t.mustSnap ? DF(e, t, a, s, r) : BF(e, t, a, s, r),
				l = yF(a, s, r);
			return ((e, t, o) => {
				const n = e.element;
				St(n, t.leftAttr, o.left + "px"), St(n, t.topAttr, o.top + "px")
			})(e, t, l), i.fold((() => ({
				coord: TF(l.left, l.top),
				extra: A.none()
			})), (e => ({
				coord: e.output,
				extra: e.extra
			})))
		},
		MF = (e, t, o, n) => se(e, (e => {
			const s = e.sensor,
				r = ((e, t, o, n, s, r) => {
					const a = wF(e, s, r),
						i = wF(t, s, r);
					return Math.abs(a.left - i.left) <= o && Math.abs(a.top - i.top) <= n
				})(t, s, e.range.left, e.range.top, o, n);
			return r ? A.some({
				output: kF(e.output, t, o, n),
				extra: e.extra
			}) : A.none()
		})),
		DF = (e, t, o, n, s) => {
			const r = t.getSnapPoints(e);
			return MF(r, o, n, s).orThunk((() => {
				const e = W(r, ((e, t) => {
					const r = t.sensor,
						a = ((e, t, o, n, s, r) => {
							const a = wF(e, s, r),
								i = wF(t, s, r),
								l = Math.abs(a.left - i.left),
								c = Math.abs(a.top - i.top);
							return $t(l, c)
						})(o, r, t.range.left, t.range.top, n, s);
					return e.deltas.fold((() => ({
						deltas: A.some(a),
						snap: A.some(t)
					})), (o => (a.left + a.top) / 2 <= (o.left + o.top) / 2 ? {
						deltas: A.some(a),
						snap: A.some(t)
					} : e))
				}), {
					deltas: A.none(),
					snap: A.none()
				});
				return e.snap.map((e => ({
					output: kF(e.output, o, n, s),
					extra: e.extra
				})))
			}))
		},
		BF = (e, t, o, n, s) => {
			const r = t.getSnapPoints(e);
			return MF(r, o, n, s)
		};
	var IF = Object.freeze({
		__proto__: null,
		snapTo: (e, t, o, n) => {
			const s = t.getTarget(e.element);
			if (t.repositionTarget) {
				const t = tt(e.element),
					o = Po(t),
					r = Ma(s),
					a = ((e, t, o) => ({
						coord: kF(e.output, e.output, t, o),
						extra: e.extra
					}))(n, o, r),
					i = CF(a.coord, 0, r);
				Bt(s, i)
			}
		}
	});
	const FF = "data-initial-z-index",
		RF = (e, t) => {
			e.getSystem().addToGui(t), (e => {
				rt(e.element).filter($e).each((t => {
					Rt(t, "z-index").each((e => {
						St(t, FF, e)
					})), Mt(t, "z-index", It(e.element, "z-index"))
				}))
			})(t)
		},
		NF = e => {
			(e => {
				rt(e.element).filter($e).each((e => {
					Ot(e, FF).fold((() => Lt(e, "z-index")), (t => Mt(e, "z-index", t))), Tt(e, FF)
				}))
			})(e), e.getSystem().removeFromGui(e)
		},
		zF = (e, t, o) => e.getSystem().build(UC.sketch({
			dom: {
				styles: {
					left: "0px",
					top: "0px",
					width: "100%",
					height: "100%",
					position: "fixed",
					"z-index": "1000000000000000"
				},
				classes: [t]
			},
			events: o
		}));
	var LF = ys("snaps", [rs("getSnapPoints"), bi("onSensor"), rs("leftAttr"), rs("topAttr"), ws("lazyViewport", Zo), ws("mustSnap", !1)]);
	const VF = [ws("useFixed", T), rs("blockerClass"), ws("getTarget", w), ws("onDrag", b), ws("repositionTarget", !0), ws("onDrop", b), Ts("getBounds", Zo), LF],
		HF = e => {
			return (t = Rt(e, "left"), o = Rt(e, "top"), n = Rt(e, "position"), t.isSome() && o.isSome() && n.isSome() ? A.some(((e, t, o) => ("fixed" === o ? TF : OF)(parseInt(e, 10), parseInt(t, 10)))(t.getOrDie(), o.getOrDie(), n.getOrDie())) : A.none()).getOrThunk((() => {
				const t = qt(e);
				return _F(t.left, t.top)
			}));
			var t, o, n
		},
		PF = (e, t) => ({
			bounds: e.getBounds(),
			height: Wt(t.element),
			width: Jt(t.element)
		}),
		UF = (e, t, o, n, s) => {
			const r = o.update(n, s),
				a = o.getStartData().getOrThunk((() => PF(t, e)));
			r.each((o => {
				((e, t, o, n) => {
					const s = t.getTarget(e.element);
					if (t.repositionTarget) {
						const r = tt(e.element),
							a = Po(r),
							i = Ma(s),
							l = HF(s),
							c = ((e, t, o, n, s, r, a) => ((e, t, o, n, s) => {
								const r = s.bounds,
									a = wF(t, o, n),
									i = Ai(a.left, r.x, r.x + r.width - s.width),
									l = Ai(a.top, r.y, r.y + r.height - s.height),
									c = _F(i, l);
								return t.fold((() => {
									const e = SF(c, o, n);
									return OF(e.left, e.top)
								}), y(c), (() => {
									const e = yF(c, o, n);
									return TF(e.left, e.top)
								}))
							})(0, t.fold((() => {
								const e = (t = o, a = r.left, i = r.top, t.fold(((e, t) => OF(e + a, t + i)), ((e, t) => _F(e + a, t + i)), ((e, t) => TF(e + a, t + i))));
								var t, a, i;
								const l = yF(e, n, s);
								return TF(l.left, l.top)
							}), (t => {
								const a = AF(e, t, o, r, n, s);
								return a.extra.each((o => {
									t.onSensor(e, o)
								})), a.coord
							})), n, s, a))(e, t.snaps, l, a, i, n, o),
							d = CF(c, 0, i);
						Bt(s, d)
					}
					t.onDrag(e, s, n)
				})(e, t, a, o)
			}))
		},
		WF = (e, t, o, n) => {
			t.each(NF), o.snaps.each((t => {
				((e, t) => {
					((e, t) => {
						const o = e.element;
						Tt(o, t.leftAttr), Tt(o, t.topAttr)
					})(e, t)
				})(e, t)
			}));
			const s = o.getTarget(e.element);
			n.reset(), o.onDrop(e, s)
		},
		jF = e => (t, o) => {
			const n = e => {
				o.setStartData(PF(t, e))
			};
			return Hr([Wr(wr(), (e => {
				o.getStartData().each((() => n(e)))
			})), ...e(t, o, n)])
		};
	var $F = Object.freeze({
		__proto__: null,
		getData: e => A.from($t(e.x, e.y)),
		getDelta: (e, t) => $t(t.left - e.left, t.top - e.top)
	});
	const GF = (e, t, o) => [Wr(js(), ((n, s) => {
			if (0 !== s.event.raw.button) return;
			s.stop();
			const r = () => WF(n, A.some(l), e, t),
				a = IC(r, 200),
				i = {
					drop: r,
					delayDrop: a.schedule,
					forceDrop: r,
					move: o => {
						a.cancel(), UF(n, e, t, $F, o)
					}
				},
				l = zF(n, e.blockerClass, (e => Hr([Wr(js(), e.forceDrop), Wr(qs(), e.drop), Wr($s(), ((t, o) => {
					e.move(o.event)
				})), Wr(Gs(), e.delayDrop)]))(i));
			o(n), RF(n, l)
		}))],
		qF = [...VF, wi("dragger", {
			handlers: jF(GF)
		})];
	var YF = Object.freeze({
		__proto__: null,
		getData: e => {
			const t = e.raw.touches;
			return 1 === t.length ? (e => {
				const t = e[0];
				return A.some($t(t.clientX, t.clientY))
			})(t) : A.none()
		},
		getDelta: (e, t) => $t(t.left - e.left, t.top - e.top)
	});
	const XF = (e, t, o) => {
			const n = nn(),
				s = o => {
					WF(o, n.get(), e, t), n.clear()
				};
			return [Wr(Hs(), ((r, a) => {
				a.stop();
				const i = () => s(r),
					l = {
						drop: i,
						delayDrop: b,
						forceDrop: i,
						move: o => {
							UF(r, e, t, YF, o)
						}
					},
					c = zF(r, e.blockerClass, (e => Hr([Wr(Hs(), e.forceDrop), Wr(Us(), e.drop), Wr(Ws(), e.drop), Wr(Ps(), ((t, o) => {
						e.move(o.event)
					}))]))(l));
				n.set(c), o(r), RF(r, c)
			})), Wr(Ps(), ((o, n) => {
				n.stop(), UF(o, e, t, YF, n.event)
			})), Wr(Us(), ((e, t) => {
				t.stop(), s(e)
			})), Wr(Ws(), s)]
		},
		KF = qF,
		JF = [...VF, wi("dragger", {
			handlers: jF(XF)
		})],
		QF = [...VF, wi("dragger", {
			handlers: jF(((e, t, o) => [...GF(e, t, o), ...XF(e, t, o)]))
		})];
	var ZF = Object.freeze({
			__proto__: null,
			mouse: KF,
			touch: JF,
			mouseOrTouch: QF
		}),
		eR = Object.freeze({
			__proto__: null,
			init: () => {
				let e = A.none(),
					t = A.none();
				const o = y({});
				return la({
					readState: o,
					reset: () => {
						e = A.none(), t = A.none()
					},
					update: (t, o) => t.getData(o).bind((o => ((t, o) => {
						const n = e.map((e => t.getDelta(e, o)));
						return e = A.some(o), n
					})(t, o))),
					getStartData: () => t,
					setStartData: e => {
						t = A.some(e)
					}
				})
			}
		});
	const tR = ga({
			branchKey: "mode",
			branches: ZF,
			name: "dragging",
			active: {
				events: (e, t) => e.dragger.handlers(e, t)
			},
			extra: {
				snap: e => ({
					sensor: e.sensor,
					range: e.range,
					output: e.output,
					extra: A.from(e.extra)
				})
			},
			state: eR,
			apis: IF
		}),
		oR = (e, t, o, n, s, r) => e.fold((() => tR.snap({
			sensor: _F(o - 20, n - 20),
			range: $t(s, r),
			output: _F(A.some(o), A.some(n)),
			extra: {
				td: t
			}
		})), (e => {
			const s = o - 20,
				r = n - 20,
				a = e.element.dom.getBoundingClientRect();
			return tR.snap({
				sensor: _F(s, r),
				range: $t(40, 40),
				output: _F(A.some(o - a.width / 2), A.some(n - a.height / 2)),
				extra: {
					td: t
				}
			})
		})),
		nR = (e, t, o) => ({
			getSnapPoints: e,
			leftAttr: "data-drag-left",
			topAttr: "data-drag-top",
			onSensor: (e, n) => {
				const s = n.td;
				((e, t) => e.exists((e => Ze(e, t))))(t.get(), s) || (t.set(s), o(s))
			},
			mustSnap: !0
		}),
		sR = e => zb(Rb.sketch({
			dom: {
				tag: "div",
				classes: ["tox-selector"]
			},
			buttonBehaviours: ca([tR.config({
				mode: "mouseOrTouch",
				blockerClass: "blocker",
				snaps: e
			}), vk.config({})]),
			eventOrder: {
				mousedown: ["dragging", "alloy.base.behaviour"],
				touchstart: ["dragging", "alloy.base.behaviour"]
			}
		})),
		rR = (e, t) => {
			const o = en([]),
				n = en([]),
				s = en(!1),
				r = nn(),
				a = nn(),
				i = e => {
					const o = Jo(e);
					return oR(u.getOpt(t), e, o.x, o.y, o.width, o.height)
				},
				l = e => {
					const o = Jo(e);
					return oR(m.getOpt(t), e, o.right, o.bottom, o.width, o.height)
				},
				c = nR((() => L(o.get(), (e => i(e)))), r, (t => {
					a.get().each((o => {
						e.dispatch("TableSelectorChange", {
							start: t,
							finish: o
						})
					}))
				})),
				d = nR((() => L(n.get(), (e => l(e)))), a, (t => {
					r.get().each((o => {
						e.dispatch("TableSelectorChange", {
							start: o,
							finish: t
						})
					}))
				})),
				u = sR(c),
				m = sR(d),
				g = pl(u.asSpec()),
				p = pl(m.asSpec()),
				h = (t, o, n, s) => {
					const r = n(o);
					tR.snapTo(t, r), ((t, o, n, r) => {
						const a = o.dom.getBoundingClientRect();
						Lt(t.element, "display");
						const i = st(ze(e.getBody())).dom.innerHeight,
							l = a[s] < 0,
							c = ((e, t) => e[s] > t)(a, i);
						(l || c) && Mt(t.element, "display", "none")
					})(t, o)
				},
				f = e => h(g, e, i, "top"),
				b = e => h(p, e, l, "bottom");
			if (Mo().deviceType.isTouch()) {
				const i = e => L(e, ze);
				e.on("TableSelectionChange", (e => {
					s.get() || (ru(t, g), ru(t, p), s.set(!0));
					const l = ze(e.start),
						c = ze(e.finish);
					r.set(l), a.set(c), A.from(e.otherCells).each((e => {
						o.set(i(e.upOrLeftCells)), n.set(i(e.downOrRightCells)), f(l), b(c)
					}))
				})), e.on("ResizeEditor ResizeWindow ScrollContent", (() => {
					r.get().each(f), a.get().each(b)
				})), e.on("TableSelectionClear", (() => {
					s.get() && (lu(g), lu(p), s.set(!1)), r.clear(), a.clear()
				}))
			}
		},
		aR = (e, t, o) => {
			var n;
			const s = null !== (n = t.delimiter) && void 0 !== n ? n : "\u203a";
			return {
				dom: {
					tag: "div",
					classes: ["tox-statusbar__path"],
					attributes: {
						role: "navigation"
					}
				},
				behaviours: ca([bh.config({
					mode: "flow",
					selector: "div[role=button]"
				}), ug.config({
					disabled: o.isDisabled
				}), bw((() => o.checkUiComponentContext("any"))), Hb.config({}), _h.config({}), Th("elementPathEvents", [Jr(((t, n) => {
					e.shortcuts.add("alt+F11", "focus statusbar elementpath", (() => bh.focusIn(t))), e.on("NodeChange", (n => {
						const r = (t => {
								const o = [];
								let n = t.length;
								for (; n-- > 0;) {
									const r = t[n];
									if (1 === r.nodeType && "BR" !== (s = r).nodeName && !s.getAttribute("data-mce-bogus") && "bookmark" !== s.getAttribute("data-mce-type")) {
										const t = sS(e, r);
										if (t.isDefaultPrevented() || o.push({
												name: t.name,
												element: r
											}), t.isPropagationStopped()) break
									}
								}
								var s;
								return o
							})(n.parents),
							a = r.length > 0 ? W(r, ((t, n, r) => {
								const a = ((t, n, s) => Rb.sketch({
									dom: {
										tag: "div",
										classes: ["tox-statusbar__path-item"],
										attributes: {
											"data-index": s
										}
									},
									components: [dl(t)],
									action: t => {
										e.focus(), e.selection.select(n), e.nodeChanged()
									},
									buttonBehaviours: ca([Jb.config({
										...o.tooltips.getConfig({
											tooltipText: o.translate(["Select the {0} element", n.nodeName.toLowerCase()]),
											onShow: (e, t) => {
												((e, t) => {
													const o = A.from(kt(e, "id")).getOrThunk((() => {
														const e = Di("aria");
														return St(t, "id", e), e
													}));
													St(e, "aria-describedby", o)
												})(e.element, t.element)
											},
											onHide: e => {
												var t;
												t = e.element, Tt(t, "aria-describedby")
											}
										})
									}), lw(o.isDisabled), bw((() => o.checkUiComponentContext("any")))])
								}))(n.name, n.element, r);
								return 0 === r ? t.concat([a]) : t.concat([{
									dom: {
										tag: "div",
										classes: ["tox-statusbar__path-divider"],
										attributes: {
											"aria-hidden": !0
										}
									},
									components: [dl(` ${s} `)]
								}, a])
							}), []) : [];
						_h.set(t, a)
					}))
				}))])]),
				components: []
			}
		};
	var iR;
	! function(e) {
		e[e.None = 0] = "None", e[e.Both = 1] = "Both", e[e.Vertical = 2] = "Vertical"
	}(iR || (iR = {}));
	const lR = (e, t, o) => {
			const n = ze(e.getContainer()),
				s = ((e, t, o, n, s) => {
					const r = {
						height: pI(n + t.top, Bf(e), Ff(e))
					};
					return o === iR.Both && (r.width = pI(s + t.left, Df(e), If(e))), r
				})(e, t, o, Ut(n), Kt(n));
			ie(s, ((e, t) => {
				h(e) && Mt(n, t, gI(e))
			})), (e => {
				e.dispatch("ResizeEditor")
			})(e)
		},
		cR = (e, t, o, n) => {
			const s = $t(20 * o, 20 * n);
			return lR(e, s, t), A.some(!0)
		},
		dR = (e, t) => {
			const o = () => {
				const o = [],
					n = db(e),
					s = sb(e),
					r = rb(e) || e.hasPlugin("wordcount");
				return s && o.push(aR(e, {}, t)), n && o.push((() => {
					const e = Cw("Alt+0");
					return {
						dom: {
							tag: "div",
							classes: ["tox-statusbar__help-text"]
						},
						components: [dl(Jv.translate(["Press {0} for help", e]))]
					}
				})()), r && o.push((() => {
					const o = [];
					return e.hasPlugin("wordcount") && o.push(((e, t) => {
						const o = (e, o, n) => _h.set(e, [dl(t.translate(["{0} " + n, o[n]]))]);
						return Rb.sketch({
							dom: {
								tag: "button",
								classes: ["tox-statusbar__wordcount"]
							},
							components: [],
							buttonBehaviours: ca([lw(t.isDisabled), bw((() => t.checkUiComponentContext("any"))), Hb.config({}), _h.config({}), ju.config({
								store: {
									mode: "memory",
									initialValue: {
										mode: "words",
										count: {
											words: 0,
											characters: 0
										}
									}
								}
							}), Th("wordcount-events", [ea((e => {
								const t = ju.getValue(e),
									n = "words" === t.mode ? "characters" : "words";
								ju.setValue(e, {
									mode: n,
									count: t.count
								}), o(e, t.count, n)
							})), Jr((t => {
								e.on("wordCountUpdate", (e => {
									const {
										mode: n
									} = ju.getValue(t);
									ju.setValue(t, {
										mode: n,
										count: e.wordCount
									}), o(t, e.wordCount, n)
								}))
							}))])]),
							eventOrder: {
								[mr()]: ["disabling", "alloy.base.behaviour", "wordcount-events"]
							}
						})
					})(e, t)), rb(e) && o.push({
						dom: {
							tag: "span",
							classes: ["tox-statusbar__branding"]
						},
						components: [{
							dom: {
								tag: "a",
								attributes: {
									href: "https://www.tiny.cloud/powered-by-tiny?utm_campaign=poweredby&utm_source=tiny&utm_medium=referral&utm_content=v7",
									rel: "noopener",
									target: "_blank",
									"aria-label": e.translate(["Build with {0}", "TinyMCE"])
								},
								innerHtml: e.translate(["Build with {0}", '<svg height="16" viewBox="0 0 80 16" width="80" xmlns="http://www.w3.org/2000/svg"><g opacity=".8"><path d="m80 3.537v-2.202h-7.976v11.585h7.976v-2.25h-5.474v-2.621h4.812v-2.069h-4.812v-2.443zm-10.647 6.929c-.493.217-1.13.337-1.864.337s-1.276-.156-1.805-.47a3.732 3.732 0 0 1 -1.3-1.298c-.324-.554-.48-1.191-.48-1.877s.156-1.335.48-1.877a3.635 3.635 0 0 1 1.3-1.299 3.466 3.466 0 0 1 1.805-.481c.65 0 .914.06 1.263.18.36.12.698.277.986.47.289.192.578.384.842.6l.12.085v-2.586l-.023-.024c-.385-.35-.855-.614-1.384-.818-.53-.205-1.155-.313-1.877-.313-.721 0-1.6.144-2.333.445a5.773 5.773 0 0 0 -1.937 1.251 5.929 5.929 0 0 0 -1.324 1.9c-.324.735-.48 1.565-.48 2.455s.156 1.72.48 2.454c.325.734.758 1.383 1.324 1.913.553.53 1.215.938 1.937 1.25a6.286 6.286 0 0 0 2.333.434c.819 0 1.384-.108 1.961-.313.59-.216 1.083-.505 1.468-.866l.024-.024v-2.49l-.12.096c-.41.337-.878.626-1.396.866zm-14.869-4.15-4.8-5.04-.024-.025h-.902v11.67h2.502v-6.847l2.827 3.08.385.409.397-.41 2.791-3.067v6.845h2.502v-11.679h-.902l-4.788 5.052z"/><path clip-rule="evenodd" d="m15.543 5.137c0-3.032-2.466-5.113-4.957-5.137-.36 0-.745.024-1.094.096-.157.024-3.85.758-3.85.758-3.032.602-4.62 2.466-4.704 4.788-.024.89-.024 4.27-.024 4.27.036 3.165 2.406 5.138 5.017 5.126.337 0 1.119-.109 1.287-.145.144-.024.385-.084.746-.144.661-.12 1.684-.325 3.067-.602 2.37-.409 4.103-2.009 4.44-4.33.156-1.023.084-4.692.084-4.692zm-3.213 3.308-2.346.457v2.31l-5.859 1.143v-5.75l2.346-.458v3.441l3.513-.686v-3.44l-3.513.685v-2.297l5.859-1.143v5.75zm20.09-3.296-.083-1.023h-2.13v8.794h2.346v-4.884c0-1.107.95-1.985 2.057-1.997 1.095 0 1.901.89 1.901 1.997v4.884h2.346v-5.245c-.012-2.105-1.588-3.777-3.67-3.765a3.764 3.764 0 0 0 -2.778 1.25l.012-.011zm-6.014-4.102 2.346-.458v2.298l-2.346.457z" fill-rule="evenodd"/><path d="m28.752 4.126h-2.346v8.794h2.346z"/><path clip-rule="evenodd" d="m43.777 15.483 4.043-11.357h-2.418l-1.54 4.355-.445 1.324-.36-1.324-1.54-4.355h-2.418l3.151 8.794-1.083 3.08zm-21.028-5.51c0 .722.541 1.034.878 1.034s.638-.048.95-.144l.518 1.708c-.217.145-.879.518-2.13.518a2.565 2.565 0 0 1 -2.562-2.587c-.024-1.082-.024-2.49 0-4.21h-1.54v-2.142h1.54v-1.912l2.346-.458v2.37h2.201v2.142h-2.2v3.693-.012z" fill-rule="evenodd"/></g></svg>\n'.trim()])
							},
							behaviours: ca([Bh.config({})])
						}]
					}), {
						dom: {
							tag: "div",
							classes: ["tox-statusbar__right-container"]
						},
						components: o
					}
				})()), o.length > 0 ? [{
					dom: {
						tag: "div",
						classes: ["tox-statusbar__text-container", ...(() => {
							const e = "tox-statusbar__text-container--flex-start",
								t = "tox-statusbar__text-container--flex-end";
							if (n) {
								const o = "tox-statusbar__text-container-3-cols";
								return r || s ? r && !s ? [o, t] : [o, e] : [o, "tox-statusbar__text-container--space-around"]
							}
							return [r && !s ? t : e]
						})()]
					},
					components: o
				}] : []
			};
			return {
				dom: {
					tag: "div",
					classes: ["tox-statusbar"]
				},
				components: (() => {
					const n = o(),
						s = ((e, t) => {
							const o = (e => {
								const t = ab(e);
								return !1 === t ? iR.None : "both" === t ? iR.Both : iR.Vertical
							})(e);
							if (o === iR.None) return A.none();
							const n = o === iR.Both ? "Press the arrow keys to resize the editor." : "Press the Up and Down arrow keys to resize the editor.";
							return A.some(ax("resize-handle", {
								tag: "div",
								classes: ["tox-statusbar__resize-handle"],
								attributes: {
									"aria-label": t.translate(n),
									"data-mce-name": "resize-handle"
								},
								behaviours: [tR.config({
									mode: "mouse",
									repositionTarget: !1,
									onDrag: (t, n, s) => lR(e, s, o),
									blockerClass: "tox-blocker"
								}), bh.config({
									mode: "special",
									onLeft: () => cR(e, o, -1, 0),
									onRight: () => cR(e, o, 1, 0),
									onUp: () => cR(e, o, 0, -1),
									onDown: () => cR(e, o, 0, 1)
								}), Hb.config({}), Bh.config({}), Jb.config(t.tooltips.getConfig({
									tooltipText: t.translate("Resize")
								}))]
							}, t.icons))
						})(e, t);
					return n.concat(s.toArray())
				})()
			}
		},
		uR = (e, t) => t.get().getOrDie(`UI for ${e} has not been rendered`),
		mR = (e, t) => {
			const o = e.inline,
				n = o ? yI : uI,
				s = Ob(e) ? CM : gM,
				r = (() => {
					const e = nn(),
						t = nn(),
						o = nn();
					return {
						dialogUi: e,
						popupUi: t,
						mainUi: o,
						getUiMotherships: () => {
							const o = e.get().map((e => e.mothership)),
								n = t.get().map((e => e.mothership));
							return o.fold((() => n.toArray()), (e => n.fold((() => [e]), (t => Ze(e.element, t.element) ? [e] : [e, t]))))
						},
						lazyGetInOuterOrDie: (e, t) => () => o.get().bind((e => t(e.outerContainer))).getOrDie(`Could not find ${e} element in OuterContainer`)
					}
				})(),
				a = nn(),
				i = nn(),
				l = nn(),
				c = Mo().deviceType.isTouch() ? ["tox-platform-touch"] : [],
				d = yb(e),
				u = Hf(e),
				m = zb({
					dom: {
						tag: "div",
						classes: ["tox-anchorbar"]
					}
				}),
				g = zb({
					dom: {
						tag: "div",
						classes: ["tox-bottom-anchorbar"]
					}
				}),
				p = () => r.mainUi.get().map((e => e.outerContainer)).bind(ZD.getHeader),
				h = r.lazyGetInOuterOrDie("anchor bar", m.getOpt),
				f = r.lazyGetInOuterOrDie("bottom anchor bar", g.getOpt),
				b = r.lazyGetInOuterOrDie("toolbar", ZD.getToolbar),
				v = r.lazyGetInOuterOrDie("throbber", ZD.getThrobber),
				x = ((e, t, o, n) => {
					const s = en(!1),
						r = (e => {
							const t = en(yb(e) ? "bottom" : "top");
							return {
								isPositionedAtTop: () => "top" === t.get(),
								getDockingMode: t.get,
								setDockingMode: t.set
							}
						})(t),
						a = {
							icons: () => t.ui.registry.getAll().icons,
							menuItems: () => t.ui.registry.getAll().menuItems,
							translate: Jv.translate,
							isDisabled: () => !t.ui.isEnabled(),
							getOption: t.options.get,
							tooltips: EA(e.dialog),
							checkUiComponentContext: e => {
								const [o, n = ""] = e.split(":"), s = t.ui.registry.getAll().contexts;
								return {
									contextType: o,
									shouldDisable: !fe(s, o).fold((() => fe(s, "mode").map((e => e("design"))).getOr(!1)), (e => "!" === n.charAt(0) ? !e(n.slice(1)) : e(n)))
								}
							}
						},
						i = ZA(t),
						l = (e => {
							const t = t => () => e.formatter.match(t),
								o = t => () => {
									const o = e.formatter.get(t);
									return void 0 !== o ? A.some({
										tag: o.length > 0 && (o[0].inline || o[0].block) || "div",
										styles: e.dom.parseStyle(e.formatter.getCssText(t))
									}) : A.none()
								},
								n = en([]),
								s = en([]),
								r = en(!1);
							return e.on("PreInit", (s => {
								const r = OA(e),
									a = TA(e, r, t, o);
								n.set(a)
							})), e.on("addStyleModifications", (n => {
								const a = TA(e, n.items, t, o);
								s.set(a), r.set(n.replace)
							})), {
								getData: () => {
									const e = r.get() ? [] : n.get(),
										t = s.get();
									return e.concat(t)
								}
							}
						})(t),
						c = (e => ({
							colorPicker: fA(e),
							hasCustomColors: bA(e),
							getColors: vA(e),
							getColorCols: xA(e)
						}))(t),
						d = (e => ({
							isDraggableModal: yA(e)
						}))(t),
						u = {
							shared: {
								providers: a,
								anchors: hA(t, o, n, r.isPositionedAtTop),
								header: r
							},
							urlinput: i,
							styles: l,
							colorinput: c,
							dialog: d,
							isContextMenuOpen: () => s.get(),
							setContextMenuState: e => s.set(e)
						},
						m = e => A.none(),
						g = {
							...u,
							shared: {
								...u.shared,
								interpreter: e => WE(e, {}, g, m),
								getSink: e.popup
							}
						},
						p = {
							...u,
							shared: {
								...u.shared,
								interpreter: e => WE(e, {}, p, m),
								getSink: e.dialog
							}
						};
					return {
						popup: g,
						dialog: p
					}
				})({
					popup: () => ln.fromOption(r.popupUi.get().map((e => e.sink)), "(popup) UI has not been rendered"),
					dialog: () => ln.fromOption(r.dialogUi.get().map((e => e.sink)), "UI has not been rendered")
				}, e, h, f),
				y = () => {
					const t = (() => {
							const t = {
									attributes: {
										[Xc]: d ? Yc.BottomToTop : Yc.TopToBottom
									}
								},
								o = ZD.parts.menubar({
									dom: {
										tag: "div",
										classes: ["tox-menubar"]
									},
									backstage: x.popup,
									onEscape: () => {
										e.focus()
									}
								}),
								n = ZD.parts.toolbar({
									dom: {
										tag: "div",
										classes: ["tox-toolbar"]
									},
									getSink: x.popup.shared.getSink,
									providers: x.popup.shared.providers,
									onEscape: () => {
										e.focus()
									},
									onToolbarToggled: t => {
										((e, t) => {
											e.dispatch("ToggleToolbarDrawer", {
												state: t
											})
										})(e, t)
									},
									type: u,
									lazyToolbar: b,
									lazyHeader: () => p().getOrDie("Could not find header element"),
									...t
								}),
								s = ZD.parts["multiple-toolbar"]({
									dom: {
										tag: "div",
										classes: ["tox-toolbar-overlord"]
									},
									providers: x.popup.shared.providers,
									onEscape: () => {
										e.focus()
									},
									type: u
								}),
								r = xb(e),
								a = bb(e),
								i = gb(e),
								l = cb(e),
								c = ZD.parts.promotion({
									dom: {
										tag: "div",
										classes: ["tox-promotion"]
									}
								}),
								g = r || a || i,
								h = l ? [c, o] : [o];
							return ZD.parts.header({
								dom: {
									tag: "div",
									classes: ["tox-editor-header"].concat(g ? [] : ["tox-editor-header--empty"]),
									...t
								},
								components: G([i ? h : [], r ? [s] : a ? [n] : [], Sb(e) ? [] : [m.asSpec()]]),
								sticky: Ob(e),
								editor: e,
								sharedBackstage: x.popup.shared
							})
						})(),
						n = {
							dom: {
								tag: "div",
								classes: ["tox-sidebar-wrap"]
							},
							components: [ZD.parts.socket({
								dom: {
									tag: "div",
									classes: ["tox-edit-area"]
								}
							}), ZD.parts.sidebar({
								dom: {
									tag: "div",
									classes: ["tox-sidebar"]
								}
							})]
						},
						s = ZD.parts.throbber({
							dom: {
								tag: "div",
								classes: ["tox-throbber"]
							},
							backstage: x.popup
						}),
						r = ZD.parts.viewWrapper({
							backstage: x.popup
						}),
						i = nb(e) && !o ? A.some(dR(e, x.popup.shared.providers)) : A.none(),
						l = G([d ? [] : [t], o ? [] : [n], d ? [t] : []]),
						h = ZD.parts.editorContainer({
							components: G([l, o ? [] : [g.asSpec()]])
						}),
						f = kb(e),
						v = {
							role: "application",
							...Jv.isRtl() ? {
								dir: "rtl"
							} : {},
							...f ? {
								"aria-hidden": "true"
							} : {}
						},
						y = pl(ZD.sketch({
							dom: {
								tag: "div",
								classes: ["tox", "tox-tinymce"].concat(o ? ["tox-tinymce-inline"] : []).concat(d ? ["tox-tinymce--toolbar-bottom"] : []).concat(c),
								styles: {
									visibility: "hidden",
									...f ? {
										opacity: "0",
										border: "0"
									} : {}
								},
								attributes: v
							},
							components: [h, ...o ? [] : [r, ...i.toArray()], s],
							behaviours: ca([bw((() => x.popup.shared.providers.checkUiComponentContext("any"))), ug.config({
								disableClass: "tox-tinymce--disabled"
							}), bh.config({
								mode: "cyclic",
								selector: ".tox-menubar, .tox-toolbar, .tox-toolbar__primary, .tox-toolbar__overflow--open, .tox-sidebar__overflow--open, .tox-statusbar__path, .tox-statusbar__wordcount, .tox-statusbar__branding a, .tox-statusbar__resize-handle"
							})])
						})),
						w = WC(y);
					return a.set(w), {
						mothership: w,
						outerContainer: y
					}
				},
				w = t => {
					const o = gI((e => {
							const t = (e => {
								const t = Af(e),
									o = Bf(e),
									n = Ff(e);
								return mI(t).map((e => pI(e, o, n)))
							})(e);
							return t.getOr(Af(e))
						})(e)),
						n = gI((e => hI(e).getOr(Mf(e)))(e));
					return e.inline || (zt("div", "width", n) && Mt(t.element, "width", n), zt("div", "height", o) ? Mt(t.element, "height", o) : Mt(t.element, "height", "400px")), o
				};
			return {
				popups: {
					backstage: x.popup,
					getMothership: () => uR("popups", l)
				},
				dialogs: {
					backstage: x.dialog,
					getMothership: () => uR("dialogs", i)
				},
				renderUI: () => {
					const o = y(),
						a = (() => {
							const t = Cb(e),
								o = Ze(xt(), t) && "grid" === It(t, "display"),
								n = {
									dom: {
										tag: "div",
										classes: ["tox", "tox-silver-sink", "tox-tinymce-aux"].concat(c),
										attributes: {
											...Jv.isRtl() ? {
												dir: "rtl"
											} : {}
										}
									},
									behaviours: ca([Qd.config({
										useFixed: () => s.isDocked(p)
									})])
								},
								r = {
									dom: {
										styles: {
											width: document.body.clientWidth + "px"
										}
									},
									events: Hr([Wr(Sr(), (e => {
										Mt(e.element, "width", document.body.clientWidth + "px")
									}))])
								},
								a = pl(xn(n, o ? r : {})),
								l = WC(a);
							return i.set(l), {
								sink: a,
								mothership: l
							}
						})(),
						d = _b(e) ? (() => {
							const e = {
									dom: {
										tag: "div",
										classes: ["tox", "tox-silver-sink", "tox-silver-popup-sink", "tox-tinymce-aux"].concat(c),
										attributes: {
											...Jv.isRtl() ? {
												dir: "rtl"
											} : {}
										}
									},
									behaviours: ca([Qd.config({
										useFixed: () => s.isDocked(p),
										getBounds: () => t.getPopupSinkBounds()
									})])
								},
								o = pl(e),
								n = WC(o);
							return l.set(n), {
								sink: o,
								mothership: n
							}
						})() : (e => (l.set(e.mothership), e))(a);
					r.dialogUi.set(a), r.popupUi.set(d), r.mainUi.set(o);
					return (t => {
						const {
							mainUi: o,
							popupUi: r,
							uiMotherships: a
						} = t;
						le(Pf(e), ((t, o) => {
							e.ui.registry.addGroupToolbarButton(o, t)
						}));
						const {
							buttons: i,
							menuItems: l,
							contextToolbars: c,
							sidebars: d,
							views: m
						} = e.ui.registry.getAll(), g = vb(e), h = {
							menuItems: l,
							menus: Tb(e),
							menubar: qf(e),
							toolbar: g.getOrThunk((() => Yf(e))),
							allowToolbarGroups: u === xf.floating,
							buttons: i,
							sidebar: d,
							views: m
						};
						var f;
						f = o.outerContainer, e.addShortcut("alt+F9", "focus menubar", (() => {
							ZD.focusMenubar(f)
						})), e.addShortcut("alt+F10", "focus toolbar", (() => {
							ZD.focusToolbar(f)
						})), e.addCommand("ToggleToolbarDrawer", ((e, t) => {
							(null == t ? void 0 : t.skipFocus) ? ZD.toggleToolbarDrawerWithoutFocusing(f): ZD.toggleToolbarDrawer(f)
						})), e.addQueryStateHandler("ToggleToolbarDrawer", (() => ZD.isToolbarDrawerToggled(f))), ((e, t, o) => {
							const n = (e, n) => {
									V([t, ...o], (t => {
										t.broadcastEvent(e, n)
									}))
								},
								s = (e, n) => {
									V([t, ...o], (t => {
										t.broadcastOn([e], n)
									}))
								},
								r = e => s(Ou(), {
									target: e.target
								}),
								a = $o(),
								i = Dc(a, "touchstart", r),
								l = Dc(a, "touchmove", (e => n(xr(), e))),
								c = Dc(a, "touchend", (e => n(yr(), e))),
								d = Dc(a, "mousedown", r),
								u = Dc(a, "mouseup", (e => {
									0 === e.raw.button && s(Tu(), {
										target: e.target
									})
								})),
								m = e => s(Ou(), {
									target: ze(e.target)
								}),
								g = e => {
									0 === e.button && s(Tu(), {
										target: ze(e.target)
									})
								},
								p = () => {
									V(e.editorManager.get(), (t => {
										e !== t && t.dispatch("DismissPopups", {
											relatedTarget: e
										})
									}))
								},
								h = e => n(wr(), Ic(e)),
								f = e => {
									s(_u(), {}), n(Sr(), Ic(e))
								},
								b = pt(ze(e.getElement())),
								v = Bc(b, "scroll", (o => {
									requestAnimationFrame((() => {
										if (null != e.getContainer()) {
											const s = Ib(e, t.element).map((e => [e.element, ...e.others])).getOr([]);
											R(s, (e => Ze(e, o.target))) && (e.dispatch("ElementScroll", {
												target: o.target.dom
											}), n(Ar(), o))
										}
									}))
								})),
								x = () => s(_u(), {}),
								y = t => {
									t.state && s(Ou(), {
										target: ze(e.getContainer())
									})
								},
								w = e => {
									s(Ou(), {
										target: ze(e.relatedTarget.getContainer())
									})
								},
								S = t => e.dispatch("focusin", t),
								C = t => e.dispatch("focusout", t);
							e.on("PostRender", (() => {
								e.on("click", m), e.on("tap", m), e.on("mouseup", g), e.on("mousedown", p), e.on("ScrollWindow", h), e.on("ResizeWindow", f), e.on("ResizeEditor", x), e.on("AfterProgressState", y), e.on("DismissPopups", w), V([t, ...o], (e => {
									e.element.dom.addEventListener("focusin", S, { passive: true }), e.element.dom.addEventListener("focusout", C, { passive: true })
								}))
							})), e.on("remove", (() => {
								e.off("click", m), e.off("tap", m), e.off("mouseup", g), e.off("mousedown", p), e.off("ScrollWindow", h), e.off("ResizeWindow", f), e.off("ResizeEditor", x), e.off("AfterProgressState", y), e.off("DismissPopups", w), V([t, ...o], (e => {
									e.element.dom.removeEventListener("focusin", S), e.element.dom.removeEventListener("focusout", C)
								})), d.unbind(), i.unbind(), l.unbind(), c.unbind(), u.unbind(), v.unbind()
							})), e.on("detach", (() => {
								V([t, ...o], gu), V([t, ...o], (e => e.destroy()))
							}))
						})(e, o.mothership, a), s.setup(e, x.popup.shared, p), YI(e, x.popup), hF(e, x.popup.shared.getSink, x.popup), (e => {
							const {
								sidebars: t
							} = e.ui.registry.getAll();
							V(re(t), (o => {
								const n = t[o],
									s = () => xe(A.from(e.queryCommandValue("ToggleSidebar")), o);
								e.ui.registry.addToggleButton(o, {
									icon: n.icon,
									tooltip: n.tooltip,
									onAction: t => {
										e.execCommand("ToggleSidebar", !1, o), t.setActive(s())
									},
									onSetup: t => {
										t.setActive(s());
										const o = () => t.setActive(s());
										return e.on("ToggleSidebar", o), () => {
											e.off("ToggleSidebar", o)
										}
									},
									context: "any"
								})
							}))
						})(e), qM(e, v, x.popup.shared), VI(e, c, r.sink, {
							backstage: x.popup
						}), rR(e, r.sink);
						const b = {
							targetNode: e.getElement(),
							height: w(o.outerContainer)
						};
						return n.render(e, t, h, x.popup, b)
					})({
						popupUi: d,
						dialogUi: a,
						mainUi: o,
						uiMotherships: r.getUiMotherships()
					})
				}
			}
		},
		gR = y([rs("lazySink"), gs("dragBlockClass"), Ts("getBounds", Zo), ws("useTabstopAt", E), ws("firstTabstop", 0), ws("eventOrder", {}), $u("modalBehaviours", [bh]), vi("onExecute"), yi("onEscape")]),
		pR = {
			sketch: w
		},
		hR = y([ym({
			name: "draghandle",
			overrides: (e, t) => ({
				behaviours: ca([tR.config({
					mode: "mouse",
					getTarget: e => Sl(e, '[role="dialog"]').getOr(e),
					blockerClass: e.dragBlockClass.getOrDie(new Error("The drag blocker class was not specified for a dialog with a drag handle: \n" + JSON.stringify(t, null, 2)).message),
					getBounds: e.getDragBounds
				})])
			})
		}), vm({
			schema: [rs("dom")],
			name: "title"
		}), vm({
			factory: pR,
			schema: [rs("dom")],
			name: "close"
		}), vm({
			factory: pR,
			schema: [rs("dom")],
			name: "body"
		}), ym({
			factory: pR,
			schema: [rs("dom")],
			name: "footer"
		}), xm({
			factory: {
				sketch: (e, t) => ({
					...e,
					dom: t.dom,
					components: t.components
				})
			},
			schema: [ws("dom", {
				tag: "div",
				styles: {
					position: "fixed",
					left: "0px",
					top: "0px",
					right: "0px",
					bottom: "0px"
				}
			}), ws("components", [])],
			name: "blocker"
		})]),
		fR = qm({
			name: "ModalDialog",
			configFields: gR(),
			partFields: hR(),
			factory: (e, t, o, n) => {
				const s = nn(),
					r = Di("modal-events"),
					a = {
						...e.eventOrder,
						[Cr()]: [r].concat(e.eventOrder["alloy.system.attached"] || [])
					},
					i = Mo();
				return {
					uid: e.uid,
					dom: e.dom,
					components: t,
					apis: {
						show: t => {
							s.set(t);
							const o = e.lazySink(t).getOrDie(),
								r = n.blocker(),
								a = o.getSystem().build({
									...r,
									components: r.components.concat([hl(t)]),
									behaviours: ca([Bh.config({}), Th("dialog-blocker-events", [Kr(Xs(), (() => {
										$M.isBlocked(t) || bh.focusIn(t)
									}))])])
								});
							ru(o, a), bh.focusIn(t)
						},
						hide: e => {
							s.clear(), rt(e.element).each((t => {
								e.getSystem().getByDom(t).each((e => {
									lu(e)
								}))
							}))
						},
						getBody: t => Im(t, e, "body"),
						getFooter: t => Bm(t, e, "footer"),
						setIdle: e => {
							$M.unblock(e)
						},
						setBusy: (e, t) => {
							$M.block(e, t)
						}
					},
					eventOrder: a,
					domModification: {
						attributes: {
							role: "dialog",
							"aria-modal": "true"
						}
					},
					behaviours: qu(e.modalBehaviours, [_h.config({}), bh.config({
						mode: "cyclic",
						onEnter: e.onExecute,
						onEscape: e.onEscape,
						useTabstopAt: e.useTabstopAt,
						firstTabstop: e.firstTabstop
					}), $M.config({
						getRoot: s.get
					}), Th(r, [Jr((t => {
						const o = Im(t, e, "title").element,
							n = (e => e.dom.textContent)(o);
						i.os.isMacOS() && g(n) ? St(t.element, "aria-label", n) : ((e, t) => {
							const o = Ot(e, "id").fold((() => {
								const e = Di("dialog-label");
								return St(t, "id", e), e
							}), w);
							St(e, "aria-labelledby", o)
						})(t.element, o)
					}))])])
				}
			},
			apis: {
				show: (e, t) => {
					e.show(t)
				},
				hide: (e, t) => {
					e.hide(t)
				},
				getBody: (e, t) => e.getBody(t),
				getFooter: (e, t) => e.getFooter(t),
				setBusy: (e, t, o) => {
					e.setBusy(t, o)
				},
				setIdle: (e, t) => {
					e.setIdle(t)
				}
			}
		}),
		bR = Fn([Qx, Zx].concat(Xy)),
		vR = Wn,
		xR = [_y("button"), gy, Os("align", "end", ["start", "end"]), wy, yy, bs("buttonType", ["primary", "secondary"]), ks("context", "mode:design")],
		yR = [...xR, ty],
		wR = [ls("type", ["submit", "cancel", "custom"]), ...yR],
		SR = [ls("type", ["menu"]), uy, py, gy, ms("items", bR), ...xR],
		CR = [...xR, ls("type", ["togglebutton"]), py, gy, uy, _s("active", !1)],
		kR = es("type", {
			submit: wR,
			cancel: wR,
			custom: wR,
			menu: SR,
			togglebutton: CR
		}),
		OR = [Qx, ty, ls("level", ["info", "warn", "error", "success"]), ny, ws("url", "")],
		_R = Fn(OR),
		TR = [Qx, ty, yy, _y("button"), gy, xy, bs("buttonType", ["primary", "secondary", "toolbar"]), wy, ks("context", "mode:design")],
		ER = Fn(TR),
		AR = [Qx, Zx],
		MR = AR.concat([hy]),
		DR = AR.concat([ey, yy, ks("context", "mode:design")]),
		BR = Fn(DR),
		IR = Wn,
		FR = MR.concat([Sy("auto"), ks("context", "mode:design")]),
		RR = Fn(FR),
		NR = Ln([sy, ty, ny]),
		zR = MR.concat([ks("storageKey", "default"), ks("context", "mode:design")]),
		LR = Fn(zR),
		VR = Un,
		HR = Fn(MR),
		PR = Un,
		UR = AR.concat([ks("tag", "textarea"), is("scriptId"), is("scriptUrl"), vs("onFocus"), Ss("settings", void 0, Gn)]),
		WR = AR.concat([ks("tag", "textarea"), cs("init")]),
		jR = Yn((e => Kn("customeditor.old", In(WR), e).orThunk((() => Kn("customeditor.new", In(UR), e))))),
		$R = Un,
		GR = MR.concat([ks("context", "mode:design")]),
		qR = Fn(GR),
		YR = Rn(En),
		XR = e => [Qx, ("columns", as("columns", Pn)), e],
		KR = [Qx, is("html"), Os("presets", "presentation", ["presentation", "document"]), Ts("onInit", b), _s("stretched", !1)],
		JR = Fn(KR),
		QR = MR.concat([_s("border", !1), _s("sandboxed", !0), _s("streamContent", !1), _s("transparent", !0)]),
		ZR = Fn(QR),
		eN = Un,
		tN = Fn(AR.concat([fs("height")])),
		oN = Fn([is("url"), hs("zoom"), hs("cachedWidth"), hs("cachedHeight")]),
		nN = MR.concat([fs("inputMode"), fs("placeholder"), _s("maximized", !1), yy, ks("context", "mode:design")]),
		sN = Fn(nN),
		rN = Un,
		aN = e => [Qx, ey, e, Os("align", "start", ["start", "center", "end"]), fs("for")],
		iN = [ty, sy],
		lN = [ty, ms("items", ts(0, (() => cN)))],
		cN = Nn([Fn(iN), Fn(lN)]),
		dN = MR.concat([ms("items", cN), yy, ks("context", "mode:design")]),
		uN = Fn(dN),
		mN = Un,
		gN = MR.concat([us("items", [ty, sy]), Cs("size", 1), yy, ks("context", "mode:design")]),
		pN = Fn(gN),
		hN = Un,
		fN = MR.concat([_s("constrain", !0), yy, ks("context", "mode:design")]),
		bN = Fn(fN),
		vN = Fn([is("width"), is("height")]),
		xN = AR.concat([ey, Cs("min", 0), Cs("max", 0)]),
		yN = Fn(xN),
		wN = Pn,
		SN = [Qx, ms("header", Un), ms("cells", Rn(Un))],
		CN = Fn(SN),
		kN = MR.concat([fs("placeholder"), _s("maximized", !1), yy, ks("context", "mode:design")]),
		ON = Fn(kN),
		_N = Un,
		TN = [ls("type", ["directory", "leaf"]), oy, is("id"), ps("menu", _M), fs("customStateIcon"), fs("customStateIconTooltip")],
		EN = Fn(TN),
		AN = TN.concat([ms("children", ts(0, (() => qn("type", {
			directory: MN,
			leaf: EN
		}))))]),
		MN = Fn(AN),
		DN = qn("type", {
			directory: MN,
			leaf: EN
		}),
		BN = [Qx, ms("items", DN), vs("onLeafAction"), vs("onToggleExpand"), Es("defaultExpandedIds", [], Un), fs("defaultSelectedId")],
		IN = Fn(BN),
		FN = MR.concat([Os("filetype", "file", ["image", "media", "file"]), yy, fs("picker_text"), ks("context", "mode:design")]),
		RN = Fn(FN),
		NN = Fn([sy, Cy]),
		zN = e => os("items", "items", {
			tag: "required",
			process: {}
		}, Rn(Yn((t => Kn(`Checking item of ${e}`, LN, t).fold((e => ln.error(Zn(e))), (e => ln.value(e))))))),
		LN = Dn((() => {
			return qn("type", {
				alertbanner: _R,
				bar: Fn((e = zN("bar"), [Qx, e])),
				button: ER,
				checkbox: BR,
				colorinput: LR,
				colorpicker: HR,
				dropzone: qR,
				grid: Fn(XR(zN("grid"))),
				iframe: ZR,
				input: sN,
				listbox: uN,
				selectbox: pN,
				sizeinput: bN,
				slider: yN,
				textarea: ON,
				urlinput: RN,
				customeditor: jR,
				htmlpanel: JR,
				imagepreview: tN,
				collection: RR,
				label: Fn(aN(zN("label"))),
				table: CN,
				tree: IN,
				panel: HN
			});
			var e
		})),
		VN = [Qx, ws("classes", []), ms("items", LN)],
		HN = Fn(VN),
		PN = [_y("tab"), oy, ms("items", LN)],
		UN = [Qx, us("tabs", PN)],
		WN = Fn(UN),
		jN = yR,
		$N = kR,
		GN = Fn([is("title"), as("body", qn("type", {
			panel: HN,
			tabpanel: WN
		})), ks("size", "normal"), Es("buttons", [], $N), ws("initialData", {}), Ts("onAction", b), Ts("onChange", b), Ts("onSubmit", b), Ts("onClose", b), Ts("onCancel", b), Ts("onTabChange", b)]),
		qN = Fn([ls("type", ["cancel", "custom"]), ...jN]),
		YN = Fn([is("title"), is("url"), hs("height"), hs("width"), xs("buttons", qN), Ts("onAction", b), Ts("onCancel", b), Ts("onClose", b), Ts("onMessage", b)]),
		XN = e => a(e) ? [e].concat(q(he(e), XN)) : l(e) ? q(e, XN) : [],
		KN = e => r(e.type) && r(e.name),
		JN = {
			checkbox: IR,
			colorinput: VR,
			colorpicker: PR,
			dropzone: YR,
			input: rN,
			iframe: eN,
			imagepreview: oN,
			selectbox: hN,
			sizeinput: vN,
			slider: wN,
			listbox: mN,
			size: vN,
			textarea: _N,
			urlinput: NN,
			customeditor: $R,
			collection: NR,
			togglemenuitem: vR
		},
		QN = e => {
			const t = (e => P(XN(e), KN))(e),
				o = q(t, (e => (e => A.from(JN[e.type]))(e).fold((() => []), (t => [as(e.name, t)]))));
			return Fn(o)
		},
		ZN = e => {
			var t;
			return {
				internalDialog: Jn(Kn("dialog", GN, e)),
				dataValidator: QN(e),
				initialData: null !== (t = e.initialData) && void 0 !== t ? t : {}
			}
		},
		ez = {
			open: (e, t) => {
				const o = ZN(t);
				return e(o.internalDialog, o.initialData, o.dataValidator)
			},
			openUrl: (e, t) => e(Jn(Kn("dialog", YN, t))),
			redial: e => ZN(e)
		};
	var tz = Object.freeze({
			__proto__: null,
			events: (e, t) => {
				const o = (o, n) => {
					e.updateState.each((e => {
						const s = e(o, n);
						t.set(s)
					})), e.renderComponents.each((s => {
						const r = s(n, t.get());
						(e.reuseDom ? xh : vh)(o, r)
					}))
				};
				return Hr([Wr(ur(), ((t, n) => {
					const s = n;
					if (!s.universal) {
						const n = e.channel;
						F(s.channels, n) && o(t, s.data)
					}
				})), Jr(((t, n) => {
					e.initialData.each((e => {
						o(t, e)
					}))
				}))])
			}
		}),
		oz = Object.freeze({
			__proto__: null,
			getState: (e, t, o) => o
		}),
		nz = [rs("channel"), gs("renderComponents"), gs("updateState"), gs("initialData"), _s("reuseDom", !0)];
	const sz = ua({
			fields: nz,
			name: "reflecting",
			active: tz,
			apis: oz,
			state: Object.freeze({
				__proto__: null,
				init: () => {
					const e = en(A.none());
					return {
						readState: () => e.get().getOr("none"),
						get: e.get,
						set: e.set,
						clear: () => e.set(A.none())
					}
				}
			})
		}),
		rz = e => {
			const t = [],
				o = {};
			return ie(e, ((e, n) => {
				e.fold((() => {
					t.push(n)
				}), (e => {
					o[n] = e
				}))
			})), t.length > 0 ? ln.error(t) : ln.value(o)
		},
		az = (e, t, o, n) => {
			const s = zb(u_.sketch((s => ({
				dom: {
					tag: "div",
					classes: ["tox-form"].concat(e.classes)
				},
				components: L(e.items, (e => PE(s, e, t, o, n)))
			}))));
			return {
				dom: {
					tag: "div",
					classes: ["tox-dialog__body"]
				},
				components: [{
					dom: {
						tag: "div",
						classes: ["tox-dialog__body-content"]
					},
					components: [s.asSpec()]
				}],
				behaviours: ca([bh.config({
					mode: "acyclic",
					useTabstopAt: k(V_)
				}), (r = s, Jm.config({
					find: r.getOpt
				})), S_(s, {
					postprocess: e => rz(e).fold((e => (console.error(e), {})), w)
				}), Th("dialog-body-panel", [Wr(Xs(), ((e, t) => {
					e.getSystem().broadcastOn([$_], {
						newFocus: A.some(t.event.target)
					})
				}))])])
			};
			var r
		},
		iz = Gm({
			name: "TabButton",
			configFields: [ws("uid", void 0), rs("value"), os("dom", "dom", Cn((() => ({
				attributes: {
					role: "tab",
					id: Di("aria"),
					"aria-selected": "false"
				}
			}))), Vn()), gs("action"), ws("domModification", {}), $u("tabButtonBehaviours", [Bh, bh, ju]), rs("view")],
			factory: (e, t) => ({
				uid: e.uid,
				dom: e.dom,
				components: e.components,
				events: Uh(e.action),
				behaviours: qu(e.tabButtonBehaviours, [Bh.config({}), bh.config({
					mode: "execution",
					useSpace: !0,
					useEnter: !0
				}), ju.config({
					store: {
						mode: "memory",
						initialValue: e.value
					}
				})]),
				domModification: e.domModification
			})
		}),
		lz = y([rs("tabs"), rs("dom"), ws("clickToDismiss", !1), $u("tabbarBehaviours", [wg, bh]), hi(["tabClass", "selectedClass"])]),
		cz = wm({
			factory: iz,
			name: "tabs",
			unit: "tab",
			overrides: e => {
				const t = (e, t) => {
						wg.dehighlight(e, t), Rr(e, Dr(), {
							tabbar: e,
							button: t
						})
					},
					o = (e, t) => {
						wg.highlight(e, t), Rr(e, Mr(), {
							tabbar: e,
							button: t
						})
					};
				return {
					action: n => {
						const s = n.getSystem().getByUid(e.uid).getOrDie(),
							r = wg.isHighlighted(s, n);
						(r && e.clickToDismiss ? t : r ? b : o)(s, n)
					},
					domModification: {
						classes: [e.markers.tabClass]
					}
				}
			}
		}),
		dz = y([cz]),
		uz = qm({
			name: "Tabbar",
			configFields: lz(),
			partFields: dz(),
			factory: (e, t, o, n) => ({
				uid: e.uid,
				dom: e.dom,
				components: t,
				"debug.sketcher": "Tabbar",
				domModification: {
					attributes: {
						role: "tablist"
					}
				},
				behaviours: qu(e.tabbarBehaviours, [wg.config({
					highlightClass: e.markers.selectedClass,
					itemClass: e.markers.tabClass,
					onHighlight: (e, t) => {
						St(t.element, "aria-selected", "true")
					},
					onDehighlight: (e, t) => {
						St(t.element, "aria-selected", "false")
					}
				}), bh.config({
					mode: "flow",
					getInitial: e => wg.getHighlighted(e).map((e => e.element)),
					selector: "." + e.markers.tabClass,
					executeOnMove: !0
				})])
			})
		}),
		mz = Gm({
			name: "Tabview",
			configFields: [$u("tabviewBehaviours", [_h])],
			factory: (e, t) => ({
				uid: e.uid,
				dom: e.dom,
				behaviours: qu(e.tabviewBehaviours, [_h.config({})]),
				domModification: {
					attributes: {
						role: "tabpanel"
					}
				}
			})
		}),
		gz = y([ws("selectFirst", !0), bi("onChangeTab"), bi("onDismissTab"), ws("tabs", []), $u("tabSectionBehaviours", [])]),
		pz = vm({
			factory: uz,
			schema: [rs("dom"), ds("markers", [rs("tabClass"), rs("selectedClass")])],
			name: "tabbar",
			defaults: e => ({
				tabs: e.tabs
			})
		}),
		hz = vm({
			factory: mz,
			name: "tabview"
		}),
		fz = y([pz, hz]),
		bz = qm({
			name: "TabSection",
			configFields: gz(),
			partFields: fz(),
			factory: (e, t, o, n) => {
				const s = (t, o) => {
					Bm(t, e, "tabbar").each((e => {
						o(e).each(Nr)
					}))
				};
				return {
					uid: e.uid,
					dom: e.dom,
					components: t,
					behaviours: Gu(e.tabSectionBehaviours),
					events: Hr(G([e.selectFirst ? [Jr(((e, t) => {
							s(e, wg.getFirst)
						}))] : [],
						[Wr(Mr(), ((t, o) => {
							(t => {
								const o = ju.getValue(t);
								Bm(t, e, "tabview").each((n => {
									j(e.tabs, (e => e.value === o)).each((o => {
										const s = o.view();
										Ot(t.element, "id").each((e => {
											St(n.element, "aria-labelledby", e)
										})), _h.set(n, s), e.onChangeTab(n, t, s)
									}))
								}))
							})(o.event.button)
						})), Wr(Dr(), ((t, o) => {
							const n = o.event.button;
							e.onDismissTab(t, n)
						}))]
					])),
					apis: {
						getViewItems: t => Bm(t, e, "tabview").map((e => _h.contents(e))).getOr([]),
						showTab: (e, t) => {
							s(e, (e => {
								const o = wg.getCandidates(e);
								return j(o, (e => ju.getValue(e) === t)).filter((t => !wg.isHighlighted(e, t)))
							}))
						}
					}
				}
			},
			apis: {
				getViewItems: (e, t) => e.getViewItems(t),
				showTab: (e, t, o) => {
					e.showTab(t, o)
				}
			}
		}),
		vz = (e, t) => {
			Mt(e, "height", t + "px"), Mt(e, "flex-basis", t + "px")
		},
		xz = (e, t, o) => {
			Sl(e, '[role="dialog"]').each((e => {
				Ol(e, '[role="tablist"]').each((n => {
					o.get().map((o => (Mt(t, "height", "0"), Mt(t, "flex-basis", "0"), Math.min(o, ((e, t, o) => {
						const n = nt(e).dom,
							s = Sl(e, ".tox-dialog-wrap").getOr(e);
						let r;
						r = "fixed" === It(s, "position") ? Math.max(n.clientHeight, window.innerHeight) : Math.max(n.offsetHeight, n.scrollHeight);
						const a = Ut(t),
							i = t.dom.offsetLeft >= o.dom.offsetLeft + Kt(o) ? Math.max(Ut(o), a) : a,
							l = parseInt(It(e, "margin-top"), 10) || 0,
							c = parseInt(It(e, "margin-bottom"), 10) || 0;
						return r - (Ut(e) + l + c - i)
					})(e, t, n))))).each((e => {
						vz(t, e)
					}))
				}))
			}))
		},
		yz = e => Ol(e, '[role="tabpanel"]'),
		wz = "send-data-to-section",
		Sz = "send-data-to-view",
		Cz = (e, t, o, n) => {
			const s = en({}),
				r = e => {
					const t = ju.getValue(e),
						o = rz(t).getOr({}),
						n = s.get(),
						r = xn(n, o);
					s.set(r)
				},
				a = e => {
					const t = s.get();
					ju.setValue(e, t)
				},
				i = en(null),
				l = L(e.tabs, (e => ({
					value: e.name,
					dom: {
						tag: "div",
						classes: ["tox-dialog__body-nav-item"]
					},
					components: [dl(o.shared.providers.translate(e.title))],
					view: () => [u_.sketch((s => ({
						dom: {
							tag: "div",
							classes: ["tox-form"]
						},
						components: L(e.items, (e => PE(s, e, t, o, n))),
						formBehaviours: ca([bh.config({
							mode: "acyclic",
							useTabstopAt: k(V_)
						}), Th("TabView.form.events", [Jr(a), Qr(r)]), dc.config({
							channels: Bs([{
								key: wz,
								value: {
									onReceive: r
								}
							}, {
								key: Sz,
								value: {
									onReceive: a
								}
							}])
						})])
					})))]
				}))),
				c = (e => {
					const t = nn(),
						o = [Jr((o => {
							const n = o.element;
							yz(n).each((s => {
								Mt(s, "visibility", "hidden"), o.getSystem().getByDom(s).toOptional().each((o => {
									const n = ((e, t, o) => L(e, ((n, s) => {
											_h.set(o, e[s].view());
											const r = t.dom.getBoundingClientRect();
											return _h.set(o, []), r.height
										})))(e, s, o),
										r = (e => te(Z(e, ((e, t) => e > t ? -1 : e < t ? 1 : 0))))(n);
									r.fold(t.clear, t.set)
								})), xz(n, s, t), Lt(s, "visibility"), ((e, t) => {
									te(e).each((e => bz.showTab(t, e.value)))
								})(e, o), requestAnimationFrame((() => {
									xz(n, s, t)
								}))
							}))
						})), Wr(Sr(), (e => {
							const o = e.element;
							yz(o).each((e => {
								xz(o, e, t)
							}))
						})), Wr(ak, ((e, o) => {
							const n = e.element;
							yz(n).each((e => {
								const o = hc(pt(e));
								Mt(e, "visibility", "hidden");
								const s = Rt(e, "height").map((e => parseInt(e, 10)));
								Lt(e, "height"), Lt(e, "flex-basis");
								const r = e.dom.getBoundingClientRect().height;
								s.forall((e => r > e)) ? (t.set(r), xz(n, e, t)) : s.each((t => {
									vz(e, t)
								})), Lt(e, "visibility"), o.each(mc)
							}))
						}))];
					return {
						extraEvents: o,
						selectFirst: !1
					}
				})(l);
			return bz.sketch({
				dom: {
					tag: "div",
					classes: ["tox-dialog__body"]
				},
				onChangeTab: (e, t, o) => {
					const n = ju.getValue(t);
					Rr(e, rk, {
						name: n,
						oldName: i.get()
					}), i.set(n)
				},
				tabs: l,
				components: [bz.parts.tabbar({
					dom: {
						tag: "div",
						classes: ["tox-dialog__body-nav"]
					},
					components: [uz.parts.tabs({})],
					markers: {
						tabClass: "tox-tab",
						selectedClass: "tox-dialog__body-nav-item--active"
					},
					tabbarBehaviours: ca([Hb.config({})])
				}), bz.parts.tabview({
					dom: {
						tag: "div",
						classes: ["tox-dialog__body-content"]
					}
				})],
				selectFirst: c.selectFirst,
				tabSectionBehaviours: ca([Th("tabpanel", c.extraEvents), bh.config({
					mode: "acyclic"
				}), Jm.config({
					find: e => te(bz.getViewItems(e))
				}), C_(A.none(), (e => (e.getSystem().broadcastOn([wz], {}), s.get())), ((e, t) => {
					s.set(t), e.getSystem().broadcastOn([Sz], {})
				}))])
			})
		},
		kz = (e, t, o, n, s, r) => ({
			dom: {
				tag: "div",
				classes: ["tox-dialog__content-js"],
				attributes: {
					...o.map((e => ({
						id: e
					}))).getOr({}),
					...s ? {
						"aria-live": "polite"
					} : {}
				}
			},
			components: [],
			behaviours: ca([y_(0), sz.config({
				channel: `${U_}-${t}`,
				updateState: (e, t) => A.some({
					isTabPanel: () => "tabpanel" === t.body.type
				}),
				renderComponents: e => {
					const t = e.body;
					return "tabpanel" === t.type ? [Cz(t, e.initialData, n, r)] : [az(t, e.initialData, n, r)]
				},
				initialData: e
			})])
		}),
		Oz = kf.deviceType.isTouch(),
		_z = (e, t) => ({
			dom: {
				tag: "div",
				styles: {
					display: "none"
				},
				classes: ["tox-dialog__header"]
			},
			components: [e, t]
		}),
		Tz = (e, t) => fR.parts.close(Rb.sketch({
			dom: {
				tag: "button",
				classes: ["tox-button", "tox-button--icon", "tox-button--naked"],
				attributes: {
					type: "button",
					"aria-label": t.translate("Close")
				}
			},
			action: e,
			buttonBehaviours: ca([Hb.config({})])
		})),
		Ez = () => fR.parts.title({
			dom: {
				tag: "div",
				classes: ["tox-dialog__title"],
				innerHtml: "",
				styles: {
					display: "none"
				}
			}
		}),
		Az = (e, t) => fR.parts.body({
			dom: {
				tag: "div",
				classes: ["tox-dialog__body"]
			},
			components: [{
				dom: {
					tag: "div",
					classes: ["tox-dialog__body-content"]
				},
				components: [{
					dom: Nb(`<p>${Kv(t.translate(e))}</p>`)
				}]
			}]
		}),
		Mz = e => fR.parts.footer({
			dom: {
				tag: "div",
				classes: ["tox-dialog__footer"]
			},
			components: e
		}),
		Dz = (e, t) => [UC.sketch({
			dom: {
				tag: "div",
				classes: ["tox-dialog__footer-start"]
			},
			components: e
		}), UC.sketch({
			dom: {
				tag: "div",
				classes: ["tox-dialog__footer-end"]
			},
			components: t
		})],
		Bz = e => {
			const t = "tox-dialog",
				o = t + "-wrap",
				n = o + "__backdrop",
				s = t + "__disable-scroll";
			return fR.sketch({
				lazySink: e.lazySink,
				onEscape: t => (e.onEscape(t), A.some(!0)),
				useTabstopAt: e => !V_(e),
				firstTabstop: e.firstTabstop,
				dom: {
					tag: "div",
					classes: [t].concat(e.extraClasses),
					styles: {
						position: "relative",
						...e.extraStyles
					}
				},
				components: [e.header, e.body, ...e.footer.toArray()],
				parts: {
					blocker: {
						dom: Nb(`<div class="${o}"></div>`),
						components: [{
							dom: {
								tag: "div",
								classes: Oz ? [n, n + "--opaque"] : [n]
							}
						}]
					}
				},
				dragBlockClass: o,
				modalBehaviours: ca([Bh.config({}), Th("dialog-events", e.dialogEvents.concat([Kr(Xs(), ((e, t) => {
					$M.isBlocked(e) || bh.focusIn(e)
				})), Wr(Tr(), ((e, t) => {
					e.getSystem().broadcastOn([$_], {
						newFocus: t.event.newFocus
					})
				}))])), Th("scroll-lock", [Jr((() => {
					ya(xt(), s)
				})), Qr((() => {
					Sa(xt(), s)
				}))]), ...e.extraBehaviours]),
				eventOrder: {
					[mr()]: ["dialog-events"],
					[Cr()]: ["scroll-lock", "dialog-events", "alloy.base.behaviour"],
					[kr()]: ["alloy.base.behaviour", "dialog-events", "scroll-lock"],
					...e.eventOrder
				}
			})
		},
		Iz = e => Rb.sketch({
			dom: {
				tag: "button",
				classes: ["tox-button", "tox-button--icon", "tox-button--naked"],
				attributes: {
					type: "button",
					"aria-label": e.translate("Close"),
					"data-mce-name": "close"
				}
			},
			buttonBehaviours: ca([Hb.config({}), Jb.config(e.tooltips.getConfig({
				tooltipText: e.translate("Close")
			}))]),
			components: [ax("close", {
				tag: "span",
				classes: ["tox-icon"]
			}, e.icons)],
			action: e => {
				Fr(e, ek)
			}
		}),
		Fz = (e, t, o, n) => ({
			dom: {
				tag: "h1",
				classes: ["tox-dialog__title"],
				attributes: {
					...o.map((e => ({
						id: e
					}))).getOr({})
				}
			},
			components: [],
			behaviours: ca([sz.config({
				channel: `${P_}-${t}`,
				initialData: e,
				renderComponents: e => [dl(n.translate(e.title))]
			})])
		}),
		Rz = () => ({
			dom: Nb('<div class="tox-dialog__draghandle"></div>')
		}),
		Nz = (e, t, o) => ((e, t, o) => {
			const n = fR.parts.title(Fz(e, t, A.none(), o)),
				s = fR.parts.draghandle(Rz()),
				r = fR.parts.close(Iz(o)),
				a = [n].concat(e.draggable ? [s] : []).concat([r]);
			return UC.sketch({
				dom: Nb('<div class="tox-dialog__header"></div>'),
				components: a
			})
		})({
			title: o.shared.providers.translate(e),
			draggable: o.dialog.isDraggableModal()
		}, t, o.shared.providers),
		zz = (e, t, o, n) => ({
			dom: {
				tag: "div",
				classes: ["tox-dialog__busy-spinner"],
				attributes: {
					"aria-label": o.translate(e)
				},
				styles: {
					left: "0px",
					right: "0px",
					bottom: "0px",
					top: `${n.getOr(0)}px`,
					position: "absolute"
				}
			},
			behaviours: t,
			components: [{
				dom: Nb('<div class="tox-spinner"><div></div><div></div><div></div></div>')
			}]
		}),
		Lz = (e, t, o) => ({
			onClose: () => o.closeWindow(),
			onBlock: o => {
				const n = Ol(e().element, ".tox-dialog__header").map((e => Ut(e)));
				fR.setBusy(e(), ((e, s) => zz(o.message, s, t, n)))
			},
			onUnblock: () => {
				fR.setIdle(e())
			}
		}),
		Vz = "tox-dialog--fullscreen",
		Hz = "tox-dialog--width-lg",
		Pz = "tox-dialog--width-md",
		Uz = e => {
			switch (e) {
				case "large":
					return A.some(Hz);
				case "medium":
					return A.some(Pz);
				default:
					return A.none()
			}
		},
		Wz = (e, t) => {
			const o = ze(t.element.dom);
			Ca(o, Vz) || (Oa(o, [Hz, Pz]), Uz(e).each((e => ya(o, e))))
		},
		jz = (e, t) => {
			const o = ze(e.element.dom),
				n = _a(o),
				s = j(n, (e => e === Hz || e === Pz)).or(Uz(t));
			((e, t) => {
				V(t, (t => {
					((e, t) => {
						const o = fa(e) ? e.dom.classList.toggle(t) : ((e, t) => F(ba(e), t) ? xa(e, t) : va(e, t))(e, t);
						wa(e)
					})(e, t)
				}))
			})(o, [Vz, ...s.toArray()])
		},
		$z = (e, t, o) => pl(Bz({
			...e,
			firstTabstop: 1,
			lazySink: o.shared.getSink,
			extraBehaviours: [O_({}), ...e.extraBehaviours],
			onEscape: e => {
				Fr(e, ek)
			},
			dialogEvents: t,
			eventOrder: {
				[ur()]: [sz.name(), dc.name()],
				[Cr()]: ["scroll-lock", sz.name(), "messages", "dialog-events", "alloy.base.behaviour"],
				[kr()]: ["alloy.base.behaviour", "dialog-events", "messages", sz.name(), "scroll-lock"]
			}
		})),
		Gz = (e, t = {}) => L(e, (e => "menu" === e.type ? (e => {
			const o = L(e.items, (e => {
				const o = fe(t, e.name).getOr(en(!1));
				return {
					...e,
					storage: o
				}
			}));
			return {
				...e,
				items: o
			}
		})(e) : e)),
		qz = e => W(e, ((e, t) => "menu" === t.type ? W(t.items, ((e, t) => (e[t.name] = t.storage, e)), e) : e), {}),
		Yz = (e, t) => [qr(Xs(), L_), e(ZC, ((e, o, n, s) => {
			pc(s.element) && hc(pt(s.element)).each(gc), t.onClose(), o.onClose()
		})), e(ek, ((e, t, o, n) => {
			t.onCancel(e), Fr(n, ZC)
		})), Wr(sk, ((e, o) => t.onUnblock())), Wr(nk, ((e, o) => t.onBlock(o.event)))],
		Xz = (e, t, o) => {
			const n = (t, o) => Wr(t, ((t, n) => {
					s(t, ((s, r) => {
						o(e(), s, n.event, t)
					}))
				})),
				s = (e, t) => {
					sz.getState(e).get().each((o => {
						t(o.internalDialog, e)
					}))
				};
			return [...Yz(n, t), n(ok, ((e, t) => t.onSubmit(e))), n(QC, ((e, t, o) => {
				t.onChange(e, {
					name: o.name
				})
			})), n(tk, ((e, t, n, s) => {
				const r = () => s.getSystem().isConnected() ? bh.focusIn(s) : void 0,
					a = e => _t(e, "disabled") || Ot(e, "aria-disabled").exists((e => "true" === e)),
					i = pt(s.element),
					l = hc(i);
				t.onAction(e, {
					name: n.name,
					value: n.value
				}), hc(i).fold(r, (e => {
					a(e) || l.exists((t => et(e, t) && a(t))) ? r() : o().toOptional().filter((t => !et(t.element, e))).each(r)
				}))
			})), n(rk, ((e, t, o) => {
				t.onTabChange(e, {
					newTabName: o.name,
					oldTabName: o.oldName
				})
			})), Qr((t => {
				const o = e();
				ju.setValue(t, o.getData())
			}))]
		},
		Kz = (e, t) => {
			const o = t.map((e => e.footerButtons)).getOr([]),
				n = H(o, (e => "start" === e.align)),
				s = (e, t) => UC.sketch({
					dom: {
						tag: "div",
						classes: [`tox-dialog__footer-${e}`]
					},
					components: L(t, (e => e.memento.asSpec()))
				});
			return [s("start", n.pass), s("end", n.fail)]
		},
		Jz = (e, t, o) => ({
			dom: Nb('<div class="tox-dialog__footer"></div>'),
			components: [],
			behaviours: ca([sz.config({
				channel: `${W_}-${t}`,
				initialData: e,
				updateState: (e, t) => {
					const n = L(t.buttons, (e => {
						const t = zb(((e, t) => OE(e, e.type, t))(e, o));
						return {
							name: e.name,
							align: e.align,
							memento: t
						}
					}));
					return A.some({
						lookupByName: t => ((e, t, o) => j(t, (e => e.name === o)).bind((t => t.memento.getOpt(e))))(e, n, t),
						footerButtons: n
					})
				},
				renderComponents: Kz
			})])
		}),
		Qz = (e, t, o) => fR.parts.footer(Jz(e, t, o)),
		Zz = (e, t) => {
			if (e.getRoot().getSystem().isConnected()) {
				const o = Jm.getCurrent(e.getFormWrapper()).getOr(e.getFormWrapper());
				return u_.getField(o, t).orThunk((() => {
					const o = e.getFooter().bind((e => sz.getState(e).get()));
					return o.bind((e => e.lookupByName(t)))
				}))
			}
			return A.none()
		},
		eL = (e, t, o) => {
			const n = t => {
					const o = e.getRoot();
					o.getSystem().isConnected() && t(o)
				},
				s = {
					getData: () => {
						const t = e.getRoot(),
							n = t.getSystem().isConnected() ? e.getFormWrapper() : t;
						return {
							...ju.getValue(n),
							...le(o, (e => e.get()))
						}
					},
					setData: t => {
						n((n => {
							const r = s.getData(),
								a = xn(r, t),
								i = ((e, t) => {
									const o = e.getRoot();
									return sz.getState(o).get().map((e => Jn(Kn("data", e.dataValidator, t)))).getOr(t)
								})(e, a),
								l = e.getFormWrapper();
							ju.setValue(l, i), ie(o, ((e, t) => {
								be(a, t) && e.set(a[t])
							}))
						}))
					},
					setEnabled: (t, o) => {
						Zz(e, t).each(o ? ug.enable : ug.disable)
					},
					focus: t => {
						Zz(e, t).each(Bh.focus)
					},
					block: e => {
						if (!r(e)) throw new Error("The dialogInstanceAPI.block function should be passed a blocking message of type string as an argument");
						n((t => {
							Rr(t, nk, {
								message: e
							})
						}))
					},
					unblock: () => {
						n((e => {
							Fr(e, sk)
						}))
					},
					showTab: t => {
						n((o => {
							const n = e.getBody();
							sz.getState(n).get().exists((e => e.isTabPanel())) && Jm.getCurrent(n).each((e => {
								bz.showTab(e, t)
							}))
						}))
					},
					redial: r => {
						n((n => {
							const a = e.getId(),
								i = t(r),
								l = Gz(i.internalDialog.buttons, o);
							n.getSystem().broadcastOn([`${H_}-${a}`], i), n.getSystem().broadcastOn([`${P_}-${a}`], i.internalDialog), n.getSystem().broadcastOn([`${U_}-${a}`], i.internalDialog), n.getSystem().broadcastOn([`${W_}-${a}`], {
								...i.internalDialog,
								buttons: l
							}), s.setData(i.initialData)
						}))
					},
					close: () => {
						n((e => {
							Fr(e, ZC)
						}))
					},
					toggleFullscreen: e.toggleFullscreen
				};
			return s
		},
		tL = (e, t, o, n = !1, s) => {
			const r = Di("dialog"),
				a = Di("dialog-label"),
				i = Di("dialog-content"),
				l = e.internalDialog,
				c = en(l.size),
				d = Uz(c.get()).toArray(),
				u = zb(((e, t, o, n) => UC.sketch({
					dom: Nb('<div class="tox-dialog__header"></div>'),
					components: [Fz(e, t, A.some(o), n), Rz(), Iz(n)],
					containerBehaviours: ca([tR.config({
						mode: "mouse",
						blockerClass: "blocker",
						getTarget: e => _l(e, '[role="dialog"]').getOrDie(),
						snaps: {
							getSnapPoints: () => [],
							leftAttr: "data-drag-left",
							topAttr: "data-drag-top"
						}
					})])
				}))({
					title: l.title,
					draggable: !0
				}, r, a, o.shared.providers)),
				m = zb(((e, t, o, n, s, r) => kz(e, t, A.some(o), n, s, r))({
					body: l.body,
					initialData: l.initialData
				}, r, i, o, n, (e => Zz(x, e)))),
				g = Gz(l.buttons),
				p = qz(g),
				h = Ce(0 !== g.length, zb(((e, t, o) => Jz(e, t, o))({
					buttons: g
				}, r, o))),
				f = Xz((() => w), {
					onBlock: e => {
						$M.block(v, ((t, n) => {
							const s = u.getOpt(v).map((e => Ut(e.element)));
							return zz(e.message, n, o.shared.providers, s)
						}))
					},
					onUnblock: () => {
						$M.unblock(v)
					},
					onClose: () => t.closeWindow()
				}, o.shared.getSink),
				b = Mo().os,
				v = pl({
					dom: {
						tag: "div",
						classes: ["tox-dialog", "tox-dialog-inline", ...d],
						attributes: {
							role: "dialog",
							...b.isMacOS() ? {
								"aria-label": l.title
							} : {
								"aria-labelledby": a
							}
						}
					},
					eventOrder: {
						[ur()]: [sz.name(), dc.name()],
						[mr()]: ["execute-on-form"],
						[Cr()]: ["reflecting", "execute-on-form"]
					},
					behaviours: ca([bh.config({
						mode: "cyclic",
						onEscape: e => (Fr(e, ZC), A.some(!0)),
						useTabstopAt: e => !V_(e) && ("button" !== Ue(e) || "disabled" !== kt(e, "disabled")),
						firstTabstop: 1
					}), sz.config({
						channel: `${H_}-${r}`,
						updateState: (e, t) => (c.set(t.internalDialog.size), Wz(t.internalDialog.size, e), s(), A.some(t)),
						initialData: e
					}), Bh.config({}), Th("execute-on-form", f.concat([Kr(Xs(), ((e, t) => {
						bh.focusIn(e)
					})), Wr(Tr(), ((e, t) => {
						e.getSystem().broadcastOn([$_], {
							newFocus: t.event.newFocus
						})
					}))])), $M.config({
						getRoot: () => A.some(v)
					}), _h.config({}), O_({})]),
					components: [u.asSpec(), m.asSpec(), ...h.map((e => e.asSpec())).toArray()]
				}),
				x = {
					getId: y(r),
					getRoot: y(v),
					getFooter: () => h.map((e => e.get(v))),
					getBody: () => m.get(v),
					getFormWrapper: () => {
						const e = m.get(v);
						return Jm.getCurrent(e).getOr(e)
					},
					toggleFullscreen: () => {
						jz(v, c.get())
					}
				},
				w = eL(x, t.redial, p);
			return {
				dialog: v,
				instanceApi: w
			}
		};
	var oL = tinymce.util.Tools.resolve("tinymce.util.URI");
	const nL = ["insertContent", "setContent", "execCommand", "close", "block", "unblock"],
		sL = e => a(e) && -1 !== nL.indexOf(e.mceAction),
		rL = (e, t, o, n) => {
			const s = Di("dialog"),
				i = Nz(e.title, s, n),
				l = (e => {
					const t = {
						dom: {
							tag: "div",
							classes: ["tox-dialog__content-js"]
						},
						components: [{
							dom: {
								tag: "div",
								classes: ["tox-dialog__body-iframe"]
							},
							components: [N_(A.none(), {
								dom: {
									tag: "iframe",
									attributes: {
										src: e.url
									}
								},
								behaviours: ca([Hb.config({}), Bh.config({})])
							})]
						}],
						behaviours: ca([bh.config({
							mode: "acyclic",
							useTabstopAt: k(V_)
						})])
					};
					return fR.parts.body(t)
				})(e),
				c = e.buttons.bind((e => 0 === e.length ? A.none() : A.some(Qz({
					buttons: e
				}, s, n)))),
				u = ((e, t) => {
					const o = (e, t) => Wr(e, ((e, o) => {
							n(e, ((n, s) => {
								t(y, n, o.event, e)
							}))
						})),
						n = (e, t) => {
							sz.getState(e).get().each((o => {
								t(o, e)
							}))
						};
					return [...Yz(o, t), o(tk, ((e, t, o) => {
						t.onAction(e, {
							name: o.name
						})
					}))]
				})(0, Lz((() => x), n.shared.providers, t)),
				m = {
					...e.height.fold((() => ({})), (e => ({
						height: e + "px",
						"max-height": e + "px"
					}))),
					...e.width.fold((() => ({})), (e => ({
						width: e + "px",
						"max-width": e + "px"
					})))
				},
				p = e.width.isNone() && e.height.isNone() ? ["tox-dialog--width-lg"] : [],
				h = new oL(e.url, {
					base_uri: new oL(window.location.href)
				}),
				f = `${h.protocol}://${h.host}${h.port?":"+h.port:""}`,
				b = on(),
				v = [sz.config({
					channel: `${H_}-${s}`,
					updateState: (e, t) => A.some(t),
					initialData: e
				}), Th("messages", [Jr((() => {
					const t = Dc(ze(window), "message", (t => {
						if (h.isSameOrigin(new oL(t.raw.origin))) {
							const n = t.raw.data;
							sL(n) ? ((e, t, o) => {
								switch (o.mceAction) {
									case "insertContent":
										e.insertContent(o.content);
										break;
									case "setContent":
										e.setContent(o.content);
										break;
									case "execCommand":
										const n = !!d(o.ui) && o.ui;
										e.execCommand(o.cmd, n, o.value);
										break;
									case "close":
										t.close();
										break;
									case "block":
										t.block(o.message);
										break;
									case "unblock":
										t.unblock()
								}
							})(o, y, n) : (e => !sL(e) && a(e) && be(e, "mceAction"))(n) && e.onMessage(y, n)
						}
					}));
					b.set(t)
				})), Qr(b.clear)]), dc.config({
					channels: {
						[j_]: {
							onReceive: (e, t) => {
								Ol(e.element, "iframe").each((e => {
									const o = e.dom.contentWindow;
									g(o) && o.postMessage(t, f)
								}))
							}
						}
					}
				})],
				x = $z({
					id: s,
					header: i,
					body: l,
					footer: c,
					extraClasses: p,
					extraBehaviours: v,
					extraStyles: m
				}, u, n),
				y = (e => {
					const t = t => {
						e.getSystem().isConnected() && t(e)
					};
					return {
						block: e => {
							if (!r(e)) throw new Error("The urlDialogInstanceAPI.block function should be passed a blocking message of type string as an argument");
							t((t => {
								Rr(t, nk, {
									message: e
								})
							}))
						},
						unblock: () => {
							t((e => {
								Fr(e, sk)
							}))
						},
						close: () => {
							t((e => {
								Fr(e, ZC)
							}))
						},
						sendMessage: e => {
							t((t => {
								t.getSystem().broadcastOn([j_], e)
							}))
						}
					}
				})(x);
			return {
				dialog: x,
				instanceApi: y
			}
		},
		aL = (e, t) => Jn(Kn("data", t, e)),
		iL = e => BC(e, ".tox-alert-dialog") || BC(e, ".tox-confirm-dialog"),
		lL = (e, t, o) => t && o ? [] : [Oi.config({
			contextual: {
				lazyContext: () => A.some(Ko(ze(e.getContentAreaContainer()))),
				fadeInClass: "tox-dialog-dock-fadein",
				fadeOutClass: "tox-dialog-dock-fadeout",
				transitionClass: "tox-dialog-dock-transition"
			},
			modes: ["top"],
			lazyViewport: t => Ib(e, t.element).map((e => ({
				bounds: Fb(e),
				optScrollEnv: A.some({
					currentScrollTop: e.element.dom.scrollTop,
					scrollElmTop: qt(e.element).top
				})
			}))).getOrThunk((() => ({
				bounds: Zo(),
				optScrollEnv: A.none()
			})))
		})],
		cL = e => {
			const t = e.editor,
				o = Ob(t),
				n = (e => {
					const t = e.shared;
					return {
						open: (o, n) => {
							const s = () => {
									fR.hide(l), n()
								},
								r = zb(OE({
									context: "any",
									name: "close-alert",
									text: "OK",
									primary: !0,
									buttonType: A.some("primary"),
									align: "end",
									enabled: !0,
									icon: A.none()
								}, "cancel", e)),
								a = Ez(),
								i = Tz(s, t.providers),
								l = pl(Bz({
									lazySink: () => t.getSink(),
									header: _z(a, i),
									body: Az(o, t.providers),
									footer: A.some(Mz(Dz([], [r.asSpec()]))),
									onEscape: s,
									extraClasses: ["tox-alert-dialog"],
									extraBehaviours: [],
									extraStyles: {},
									dialogEvents: [Wr(ek, s)],
									eventOrder: {}
								}));
							fR.show(l);
							const c = r.get(l);
							Bh.focus(c)
						}
					}
				})(e.backstages.dialog),
				s = (e => {
					const t = e.shared;
					return {
						open: (o, n) => {
							const s = e => {
									fR.hide(c), n(e)
								},
								r = zb(OE({
									context: "any",
									name: "yes",
									text: "Yes",
									primary: !0,
									buttonType: A.some("primary"),
									align: "end",
									enabled: !0,
									icon: A.none()
								}, "submit", e)),
								a = OE({
									context: "any",
									name: "no",
									text: "No",
									primary: !1,
									buttonType: A.some("secondary"),
									align: "end",
									enabled: !0,
									icon: A.none()
								}, "cancel", e),
								i = Ez(),
								l = Tz((() => s(!1)), t.providers),
								c = pl(Bz({
									lazySink: () => t.getSink(),
									header: _z(i, l),
									body: Az(o, t.providers),
									footer: A.some(Mz(Dz([], [a, r.asSpec()]))),
									onEscape: () => s(!1),
									extraClasses: ["tox-confirm-dialog"],
									extraBehaviours: [],
									extraStyles: {},
									dialogEvents: [Wr(ek, (() => s(!1))), Wr(ok, (() => s(!0)))],
									eventOrder: {}
								}));
							fR.show(c);
							const d = r.get(c);
							Bh.focus(d)
						}
					}
				})(e.backstages.dialog),
				r = (t, o) => ez.open(((t, n, s) => {
					const r = n,
						a = ((e, t, o) => {
							const n = Di("dialog"),
								s = e.internalDialog,
								r = Nz(s.title, n, o),
								a = en(s.size),
								i = Uz(a.get()).toArray(),
								l = ((e, t, o, n) => {
									const s = kz(e, t, A.none(), o, !1, n);
									return fR.parts.body(s)
								})({
									body: s.body,
									initialData: s.initialData
								}, n, o, (e => Zz(h, e))),
								c = Gz(s.buttons),
								d = qz(c),
								u = Ce(0 !== c.length, Qz({
									buttons: c
								}, n, o)),
								m = Xz((() => f), Lz((() => p), o.shared.providers, t), o.shared.getSink),
								g = {
									id: n,
									header: r,
									body: l,
									footer: u,
									extraClasses: i,
									extraBehaviours: [sz.config({
										channel: `${H_}-${n}`,
										updateState: (e, t) => (a.set(t.internalDialog.size), Wz(t.internalDialog.size, e), A.some(t)),
										initialData: e
									})],
									extraStyles: {}
								},
								p = $z(g, m, o),
								h = {
									getId: y(n),
									getRoot: y(p),
									getBody: () => fR.getBody(p),
									getFooter: () => fR.getFooter(p),
									getFormWrapper: () => {
										const e = fR.getBody(p);
										return Jm.getCurrent(e).getOr(e)
									},
									toggleFullscreen: () => {
										jz(p, a.get())
									}
								},
								f = eL(h, t.redial, d);
							return {
								dialog: p,
								instanceApi: f
							}
						})({
							dataValidator: s,
							initialData: r,
							internalDialog: t
						}, {
							redial: ez.redial,
							closeWindow: () => {
								fR.hide(a.dialog), o(a.instanceApi)
							}
						}, e.backstages.dialog);
					return fR.show(a.dialog), a.instanceApi.setData(r), a.instanceApi
				}), t),
				a = (n, s, r, a) => ez.open(((n, i, l) => {
					const c = aL(i, l),
						d = nn(),
						u = e.backstages.popup.shared.header.isPositionedAtTop(),
						m = () => d.on((e => {
							vf.reposition(e), o && u || Oi.refresh(e)
						})),
						g = tL({
							dataValidator: l,
							initialData: c,
							internalDialog: n
						}, {
							redial: ez.redial,
							closeWindow: () => {
								d.on(vf.hide), t.off("ResizeEditor", m), d.clear(), r(g.instanceApi)
							}
						}, e.backstages.popup, a.ariaAttrs, m),
						p = pl(vf.sketch({
							lazySink: e.backstages.popup.shared.getSink,
							dom: {
								tag: "div",
								classes: []
							},
							fireDismissalEventInstead: a.persistent ? {
								event: "doNotDismissYet"
							} : {},
							...u ? {} : {
								fireRepositionEventInstead: {}
							},
							inlineBehaviours: ca([Th("window-manager-inline-events", [Wr(Or(), ((e, t) => {
								Fr(g.dialog, ek)
							}))]), ...lL(t, o, u)]),
							isExtraPart: (e, t) => iL(t)
						}));
					return d.set(p), vf.showWithinBounds(p, hl(g.dialog), {
						anchor: s
					}, (() => {
						const e = t.inline ? xt() : ze(t.getContainer()),
							o = Ko(e);
						return A.some(o)
					})), o && u || (Oi.refresh(p), t.on("ResizeEditor", m)), g.instanceApi.setData(c), bh.focusIn(g.dialog), g.instanceApi
				}), n),
				i = (o, n, s, r) => ez.open(((o, a, i) => {
					const l = aL(a, i),
						c = nn(),
						d = e.backstages.popup.shared.header.isPositionedAtTop(),
						u = () => c.on((e => {
							vf.reposition(e), Oi.refresh(e)
						})),
						m = tL({
							dataValidator: i,
							initialData: l,
							internalDialog: o
						}, {
							redial: ez.redial,
							closeWindow: () => {
								c.on(vf.hide), t.off("ResizeEditor ScrollWindow ElementScroll", u), c.clear(), s(m.instanceApi)
							}
						}, e.backstages.popup, r.ariaAttrs, u),
						g = pl(vf.sketch({
							lazySink: e.backstages.popup.shared.getSink,
							dom: {
								tag: "div",
								classes: []
							},
							fireDismissalEventInstead: r.persistent ? {
								event: "doNotDismissYet"
							} : {},
							...d ? {} : {
								fireRepositionEventInstead: {}
							},
							inlineBehaviours: ca([Th("window-manager-inline-events", [Wr(Or(), ((e, t) => {
								Fr(m.dialog, ek)
							}))]), Oi.config({
								contextual: {
									lazyContext: () => A.some(Ko(ze(t.getContentAreaContainer()))),
									fadeInClass: "tox-dialog-dock-fadein",
									fadeOutClass: "tox-dialog-dock-fadeout",
									transitionClass: "tox-dialog-dock-transition"
								},
								modes: ["top", "bottom"],
								lazyViewport: e => Ib(t, e.element).map((e => ({
									bounds: Fb(e),
									optScrollEnv: A.some({
										currentScrollTop: e.element.dom.scrollTop,
										scrollElmTop: qt(e.element).top
									})
								}))).getOrThunk((() => ({
									bounds: Zo(),
									optScrollEnv: A.none()
								})))
							})]),
							isExtraPart: (e, t) => iL(t)
						}));
					return c.set(g), vf.showWithinBounds(g, hl(m.dialog), {
						anchor: n
					}, (() => e.backstages.popup.shared.getSink().toOptional().bind((e => {
						const o = Ib(t, e.element).map((e => Fb(e))).getOr(Zo()),
							n = Ko(ze(t.getContentAreaContainer())),
							s = Qo(n, o);
						return A.some(Xo(s.x, s.y, s.width, s.height - 15))
					})))), Oi.refresh(g), t.on("ResizeEditor ScrollWindow ElementScroll ResizeWindow", u), m.instanceApi.setData(l), bh.focusIn(m.dialog), m.instanceApi
				}), o);
			return {
				open: (t, o, n) => {
					if (!u(o)) {
						if ("toolbar" === o.inline) return a(t, e.backstages.popup.shared.anchors.inlineDialog(), n, o);
						if ("bottom" === o.inline) return i(t, e.backstages.popup.shared.anchors.inlineBottomDialog(), n, o);
						if ("cursor" === o.inline) return a(t, e.backstages.popup.shared.anchors.cursor(), n, o)
					}
					return r(t, n)
				},
				openUrl: (o, n) => ((o, n) => ez.openUrl((o => {
					const s = rL(o, {
						closeWindow: () => {
							fR.hide(s.dialog), n(s.instanceApi)
						}
					}, t, e.backstages.dialog);
					return fR.show(s.dialog), s.instanceApi
				}), o))(o, n),
				alert: (e, t) => {
					n.open(e, t)
				},
				close: e => {
					e.close()
				},
				confirm: (e, t) => {
					s.open(e, t)
				}
			}
		},
		dL = e => {
			Tf(e), (e => {
				const t = e.options.register,
					o = e => {
						return f(e, r) ? {
							value: (t = e, yS(t.map(((e, t) => t % 2 == 0 ? "#" + (e => {
								return (t = e, Vw(t) ? A.some({
									value: Hw(t)
								}) : A.none()).orThunk((() => Zw(e).map(Uw))).getOrThunk((() => {
									const t = document.createElement("canvas");
									t.height = 1, t.width = 1;
									const o = t.getContext("2d");
									o.clearRect(0, 0, t.width, t.height), o.fillStyle = "#FFFFFF", o.fillStyle = e, o.fillRect(0, 0, 1, 1);
									const n = o.getImageData(0, 0, 1, 1).data,
										s = n[0],
										r = n[1],
										a = n[2],
										i = n[3];
									return Uw(Yw(s, r, a, i))
								}));
								var t
							})(e).value : e)))),
							valid: !0
						} : {
							valid: !1,
							message: "Must be an array of strings."
						};
						var t
					},
					n = e => h(e) && e > 0 ? {
						value: e,
						valid: !0
					} : {
						valid: !1,
						message: "Must be a positive number."
					};
				t("color_map", {
					processor: o,
					default: ["#BFEDD2", "Light Green", "#FBEEB8", "Light Yellow", "#F8CAC6", "Light Red", "#ECCAFA", "Light Purple", "#C2E0F4", "Light Blue", "#2DC26B", "Green", "#F1C40F", "Yellow", "#E03E2D", "Red", "#B96AD9", "Purple", "#3598DB", "Blue", "#169179", "Dark Turquoise", "#E67E23", "Orange", "#BA372A", "Dark Red", "#843FA1", "Dark Purple", "#236FA1", "Dark Blue", "#ECF0F1", "Light Gray", "#CED4D9", "Medium Gray", "#95A5A6", "Gray", "#7E8C8D", "Dark Gray", "#34495E", "Navy Blue", "#000000", "Black", "#ffffff", "White"]
				}), t("color_map_raw", {
					processor: e => f(e, r) ? {
						value: yS(e),
						valid: !0
					} : {
						valid: !1,
						message: "Must be an array of strings."
					}
				}), t("color_map_background", {
					processor: o
				}), t("color_map_foreground", {
					processor: o
				}), t("color_cols", {
					processor: n,
					default: kS(e)
				}), t("color_cols_foreground", {
					processor: n,
					default: OS(e, vS)
				}), t("color_cols_background", {
					processor: n,
					default: OS(e, xS)
				}), t("custom_colors", {
					processor: "boolean",
					default: !0
				}), t("color_default_foreground", {
					processor: "string",
					default: SS
				}), t("color_default_background", {
					processor: "string",
					default: SS
				})
			})(e), (e => {
				const t = e.options.register;
				t("contextmenu_avoid_overlap", {
					processor: "string",
					default: ""
				}), t("contextmenu_never_use_native", {
					processor: "boolean",
					default: !1
				}), t("contextmenu", {
					processor: e => !1 === e ? {
						value: [],
						valid: !0
					} : r(e) || f(e, r) ? {
						value: XI(e),
						valid: !0
					} : {
						valid: !1,
						message: "Must be false or a string."
					},
					default: "link linkchecker image editimage table spellchecker configurepermanentpen"
				})
			})(e)
		};
	sn.add("silver", (e => {
		dL(e);
		let t = () => Zo();
		const {
			dialogs: o,
			popups: n,
			renderUI: s
		} = mR(e, {
			getPopupSinkBounds: () => t()
		});
		DC(e, n.backstage.shared);
		const r = cL({
				editor: e,
				backstages: {
					popup: n.backstage,
					dialog: o.backstage
				}
			}),
			a = nn();
		return {
			renderUI: () => {
				const o = s();
				return Ib(e, n.getMothership().element).each((e => {
					t = () => Fb(e)
				})), o
			},
			getWindowManagerImpl: y(r),
			getNotificationManagerImpl: () => cx(e, {
				backstage: n.backstage
			}, n.getMothership(), a)
		}
	}))
}();