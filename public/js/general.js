!(function (t, e) {
  if ("object" == typeof exports && "object" == typeof module)
    module.exports = e();
  else if ("function" == typeof define && define.amd) define([], e);
  else {
    var r = e();
    for (var a in r) ("object" == typeof exports ? exports : t)[a] = r[a];
  }
})(self, function () {
  return (function () {
    function t(e) {
      return (
        (t =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              }),
        t(e)
      );
    }
    function e(t, e) {
      for (var a = 0; a < e.length; a++) {
        var o = e[a];
        (o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          "value" in o && (o.writable = !0),
          Object.defineProperty(t, r(o.key), o);
      }
    }
    function r(e) {
      var r = (function (e, r) {
        if ("object" != t(e) || !e) return e;
        var a = e[Symbol.toPrimitive];
        if (void 0 !== a) {
          var o = a.call(e, r || "default");
          if ("object" != t(o)) return o;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === r ? String : Number)(e);
      })(e, "string");
      return "symbol" == t(r) ? r : r + "";
    }
    var a = (function () {
      return (
        (t = function t() {
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, t);
        }),
        (a = [
          {
            key: "initCompanyProfileMap",
            value: function () {
              var t = "company_profile_map";
              if (KTDom.getElement("#".concat(t)) && L) {
                var e,
                  r = L.map(t, { center: [40.725, -73.985], zoom: 30 });
                L.tileLayer(
                  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
                  {
                    attribution:
                      '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors',
                  }
                ).addTo(r),
                  (e =
                    void 0 === L.esri.Geocoding
                      ? L.esri.geocodeService()
                      : L.esri.Geocoding.geocodeService());
                var a = L.layerGroup().addTo(r),
                  o = L.divIcon({
                    html: '<i class="ki-solid ki-geolocation text-3xl text-success"></i>',
                    bgPos: [10, 10],
                    iconAnchor: [20, 37],
                    popupAnchor: [0, -37],
                    className: "leaflet-marker",
                  });
                L.marker([40.724716, -73.984789], { icon: o })
                  .addTo(a)
                  .bindPopup("430 E 6th St, New York, 10009.", {
                    closeButton: !1,
                  })
                  .openPopup(),
                  r.on("click", function (t) {
                    e.reverse()
                      .latlng(t.latlng)
                      .run(function (t, e) {
                        t ||
                          (a.clearLayers(),
                          e.address.Match_addr,
                          L.marker(e.latlng, { icon: o })
                            .addTo(a)
                            .bindPopup(e.address.Match_addr, {
                              closeButton: !1,
                            })
                            .openPopup());
                      });
                  });
              }
            },
          },
          {
            key: "initContributionChart",
            value: function () {
              var t = [
                  "var(--tw-primary)",
                  "var(--tw-brand)",
                  "var(--tw-success)",
                  "var(--tw-info)",
                  "var(--tw-warning)",
                ],
                e = {
                  series: [44, 55, 41, 17, 15],
                  labels: ["ERP", "HRM", "DMS", "CRM", "DAM"],
                  colors: t,
                  fill: { colors: t },
                  chart: { type: "donut" },
                  stroke: { show: !0, width: 2, colors: "var(--tw-light)" },
                  dataLabels: { enabled: !1 },
                  plotOptions: { pie: { expandOnClick: !1 } },
                  legend: {
                    offsetY: -10,
                    offsetX: -10,
                    fontSize: "13px",
                    fontWeight: "500",
                    itemMargin: { vertical: 1 },
                    labels: {
                      colors: "var(--tw-gray-700)",
                      useSeriesColors: !1,
                    },
                    markers: { width: 8, height: 8 },
                  },
                  responsive: [
                    {
                      breakpoint: 480,
                      options: {
                        chart: { width: 200 },
                        legend: { position: "bottom" },
                      },
                    },
                  ],
                },
                r = document.querySelector("#contributions_chart");
              r && new ApexCharts(r, e).render();
            },
          },
          {
            key: "initMediaUploadsChart",
            value: function () {
              var t = [
                  "Jan",
                  "Feb",
                  "Mar",
                  "Apr",
                  "May",
                  "Jun",
                  "Jul",
                  "Aug",
                  "Sep",
                  "Oct",
                  "Nov",
                  "Dec",
                ],
                e = {
                  series: [
                    {
                      name: "series1",
                      data: [85, 65, 50, 70, 40, 45, 100, 55, 85, 60, 70, 90],
                    },
                  ],
                  chart: { height: 250, type: "area", toolbar: { show: !1 } },
                  dataLabels: { enabled: !1 },
                  legend: { show: !1 },
                  stroke: {
                    curve: "smooth",
                    show: !0,
                    width: 3,
                    colors: ["var(--tw-primary)"],
                  },
                  xaxis: {
                    categories: t,
                    axisBorder: { show: !1 },
                    maxTicks: 12,
                    axisTicks: { show: !1 },
                    labels: {
                      style: { colors: "var(--tw-gray-500)", fontSize: "12px" },
                    },
                    crosshairs: {
                      position: "front",
                      stroke: {
                        color: "var(--tw-primary)",
                        width: 1,
                        dashArray: 3,
                      },
                    },
                    tooltip: {
                      enabled: !1,
                      formatter: void 0,
                      offsetY: 0,
                      style: { fontSize: "12px" },
                    },
                  },
                  yaxis: {
                    min: 0,
                    max: 100,
                    tickAmount: 5,
                    axisTicks: { show: !1 },
                    labels: {
                      style: { colors: "var(--tw-gray-500)", fontSize: "12px" },
                      formatter: function (t) {
                        return "$".concat(t, "K");
                      },
                    },
                  },
                  tooltip: {
                    enabled: !0,
                    custom: function (e) {
                      var r = e.series,
                        a = e.seriesIndex,
                        o = e.dataPointIndex,
                        s = e.w,
                        i = 1e3 * parseInt(r[a][o]),
                        n = s.globals.seriesX[a][o],
                        c = t[n],
                        l = new Intl.NumberFormat("en-US", {
                          style: "currency",
                          currency: "USD",
                        }).format(i);
                      return '\n\t\t\t\t\t\t<div class="flex flex-col gap-2 p-3.5">\n\t\t\t\t\t\t\t<div class="font-medium text-2sm text-gray-600">'
                        .concat(
                          c,
                          ', 2024 Sales</div>\n\t\t\t\t\t\t\t<div class="flex items-center gap-1.5">\n\t\t\t\t\t\t\t\t<div class="font-semibold text-md text-gray-900">'
                        )
                        .concat(
                          l,
                          '</div>\n\t\t\t\t\t\t\t\t<span class="badge badge-outline badge-success badge-xs">+24%</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t'
                        );
                    },
                  },
                  markers: {
                    size: 0,
                    colors: "var(--tw-primary-light)",
                    strokeColors: "var(--tw-primary)",
                    strokeWidth: 4,
                    strokeOpacity: 1,
                    strokeDashArray: 0,
                    fillOpacity: 1,
                    discrete: [],
                    shape: "circle",
                    radius: 2,
                    offsetX: 0,
                    offsetY: 0,
                    onClick: void 0,
                    onDblClick: void 0,
                    showNullDataPoints: !0,
                    hover: { size: 8, sizeOffset: 0 },
                  },
                  fill: {
                    gradient: { enabled: !0, opacityFrom: 0.25, opacityTo: 0 },
                  },
                  grid: {
                    borderColor: "var(--tw-gray-200)",
                    strokeDashArray: 5,
                    clipMarkers: !1,
                    yaxis: { lines: { show: !0 } },
                    xaxis: { lines: { show: !1 } },
                  },
                },
                r = document.querySelector("#media_uploads_chart");
              r && new ApexCharts(r, e).render();
            },
          },
          {
            key: "initEarningsChart",
            value: function () {
              var t = [
                  "Jan",
                  "Feb",
                  "Mar",
                  "Apr",
                  "May",
                  "Jun",
                  "Jul",
                  "Aug",
                  "Sep",
                  "Oct",
                  "Nov",
                  "Dec",
                ],
                e = {
                  series: [
                    {
                      name: "series1",
                      data: [75, 25, 45, 15, 85, 35, 70, 25, 35, 15, 45, 30],
                    },
                  ],
                  chart: { height: 250, type: "area", toolbar: { show: !1 } },
                  dataLabels: { enabled: !1 },
                  legend: { show: !1 },
                  stroke: {
                    curve: "smooth",
                    show: !0,
                    width: 3,
                    colors: ["var(--tw-primary)"],
                  },
                  xaxis: {
                    categories: t,
                    axisBorder: { show: !1 },
                    maxTicks: 12,
                    axisTicks: { show: !1 },
                    labels: {
                      style: { colors: "var(--tw-gray-500)", fontSize: "12px" },
                    },
                    crosshairs: {
                      position: "front",
                      stroke: {
                        color: "var(--tw-primary)",
                        width: 1,
                        dashArray: 3,
                      },
                    },
                    tooltip: {
                      enabled: !1,
                      formatter: void 0,
                      offsetY: 0,
                      style: { fontSize: "12px" },
                    },
                  },
                  yaxis: {
                    min: 0,
                    max: 100,
                    tickAmount: 5,
                    axisTicks: { show: !1 },
                    labels: {
                      style: { colors: "var(--tw-gray-500)", fontSize: "12px" },
                      formatter: function (t) {
                        return "$".concat(t, "K");
                      },
                    },
                  },
                  tooltip: {
                    enabled: !0,
                    custom: function (e) {
                      var r = e.series,
                        a = e.seriesIndex,
                        o = e.dataPointIndex,
                        s = e.w,
                        i = 1e3 * parseInt(r[a][o]),
                        n = s.globals.seriesX[a][o],
                        c = t[n],
                        l = new Intl.NumberFormat("en-US", {
                          style: "currency",
                          currency: "USD",
                        }).format(i);
                      return '\n\t\t\t\t\t\t<div class="flex flex-col gap-2 p-3.5">\n\t\t\t\t\t\t\t<div class="font-medium text-2sm text-gray-600">'
                        .concat(
                          c,
                          ', 2024 Sales</div>\n\t\t\t\t\t\t\t<div class="flex items-center gap-1.5">\n\t\t\t\t\t\t\t\t<div class="font-semibold text-md text-gray-900">'
                        )
                        .concat(
                          l,
                          '</div>\n\t\t\t\t\t\t\t\t<span class="badge badge-outline badge-success badge-xs">+24%</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t'
                        );
                    },
                  },
                  markers: {
                    size: 0,
                    colors: "var(--tw-primary-light)",
                    strokeColors: "var(--tw-primary)",
                    strokeWidth: 4,
                    strokeOpacity: 1,
                    strokeDashArray: 0,
                    fillOpacity: 1,
                    discrete: [],
                    shape: "circle",
                    radius: 2,
                    offsetX: 0,
                    offsetY: 0,
                    onClick: void 0,
                    onDblClick: void 0,
                    showNullDataPoints: !0,
                    hover: { size: 8, sizeOffset: 0 },
                  },
                  fill: {
                    gradient: { enabled: !0, opacityFrom: 0.25, opacityTo: 0 },
                  },
                  grid: {
                    borderColor: "var(--tw-gray-200)",
                    strokeDashArray: 5,
                    clipMarkers: !1,
                    yaxis: { lines: { show: !0 } },
                    xaxis: { lines: { show: !1 } },
                  },
                },
                r = document.querySelector("#earnings_chart");
              r && new ApexCharts(r, e).render();
            },
          },
          {
            key: "initMyBalanceChart",
            value: function (t, e, r) {
              var a = {
                  series: [{ name: "series1", data: e }],
                  chart: { height: 250, type: "area", toolbar: { show: !1 } },
                  dataLabels: { enabled: !1 },
                  legend: { show: !1 },
                  stroke: {
                    curve: "smooth",
                    show: !0,
                    width: 3,
                    colors: ["var(--tw-primary)"],
                  },
                  xaxis: {
                    categories: r,
                    axisBorder: { show: !1 },
                    axisTicks: { show: !1 },
                    labels: {
                      style: { colors: "var(--tw-gray-600)", fontSize: "12px" },
                    },
                    crosshairs: {
                      position: "front",
                      stroke: {
                        color: "var(--tw-primary)",
                        width: 1,
                        dashArray: 3,
                      },
                    },
                    tooltip: {
                      enabled: !1,
                      formatter: void 0,
                      offsetY: 0,
                      style: { fontSize: "12px" },
                    },
                  },
                  yaxis: {
                    min: 0,
                    max: 100,
                    tickAmount: 5,
                    axisTicks: { show: !1 },
                    labels: {
                      style: { colors: "var(--tw-gray-600)", fontSize: "12px" },
                      formatter: function (t) {
                        return "$".concat(t, "K");
                      },
                    },
                  },
                  tooltip: {
                    enabled: !0,
                    custom: function (t) {
                      var e = t.series,
                        a = t.seriesIndex,
                        o = t.dataPointIndex,
                        s = t.w,
                        i = 1e3 * parseInt(e[a][o]),
                        n = s.globals.seriesX[a][o],
                        c = r[n],
                        l = new Intl.NumberFormat("en-US", {
                          style: "currency",
                          currency: "USD",
                        }).format(i);
                      return '\n\t\t\t\t\t\t<div class="flex flex-col gap-2 p-3.5">\n\t\t\t\t\t\t\t<div class="font-medium text-2sm text-gray-600">'
                        .concat(
                          c,
                          ', 2024 Sales</div>\n\t\t\t\t\t\t\t<div class="flex items-center gap-1.5">\n\t\t\t\t\t\t\t\t<div class="font-semibold text-md text-gray-900">'
                        )
                        .concat(
                          l,
                          '</div>\n\t\t\t\t\t\t\t\t<span class="badge badge-outline badge-success badge-xs">+24%</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t'
                        );
                    },
                  },
                  markers: {
                    size: 0,
                    colors: "var(--tw-primary-light)",
                    strokeColors: "var(--tw-primary)",
                    strokeWidth: 4,
                    strokeOpacity: 1,
                    strokeDashArray: 0,
                    fillOpacity: 1,
                    discrete: [],
                    shape: "circle",
                    radius: 2,
                    offsetX: 0,
                    offsetY: 0,
                    onClick: void 0,
                    onDblClick: void 0,
                    showNullDataPoints: !0,
                    hover: { size: 8, sizeOffset: 0 },
                  },
                  fill: {
                    gradient: { enabled: !0, opacityFrom: 0.25, opacityTo: 0 },
                  },
                  grid: {
                    borderColor: "var(--tw-gray-200)",
                    strokeDashArray: 5,
                    clipMarkers: !1,
                    yaxis: { lines: { show: !0 } },
                    xaxis: { lines: { show: !1 } },
                  },
                },
                o = document.querySelector("#".concat(t));
              if (o) {
                o.chart && o.chart.destroy();
                var s = new ApexCharts(o, a);
                (o.chart = s), s.render();
              }
            },
          },
        ]),
        (r = null) && e(t.prototype, r),
        a && e(t, a),
        Object.defineProperty(t, "prototype", { writable: !1 }),
        t
      );
      var t, r, a;
    })();
    return (
      document.addEventListener("DOMContentLoaded", function () {
        a.initMyBalanceChart(
          "my_balance_chart",
          [75, 25, 45, 15, 85, 35, 70, 25, 35],
          ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]
        ),
          document.querySelectorAll(".tab-button").forEach(function (t) {
            t.addEventListener("click", function (t) {
              document.querySelectorAll(".tab-button").forEach(function (t) {
                return t.classList.remove("active");
              }),
                t.target.classList.add("active");
              var e, r;
              switch (t.target.getAttribute("data-chart")) {
                case "my_balance_chart1":
                  (e = [45, 35, 45, 35, 55, 85, 20, 25, 55]),
                    (r = [
                      "Jan",
                      "Feb",
                      "Mar",
                      "Apr",
                      "May",
                      "Jun",
                      "Jul",
                      "Aug",
                      "Sep",
                    ]);
                  break;
                case "my_balance_chart2":
                  (e = [25, 55, 65, 45, 25, 65, 50, 40, 60]),
                    (r = [
                      "Oct",
                      "Nov",
                      "Dec",
                      "Jan",
                      "Feb",
                      "Mar",
                      "Apr",
                      "May",
                      "Jun",
                    ]);
                  break;
                case "my_balance_chart3":
                  (e = [80, 40, 50, 20, 50, 80, 60, 20, 30]),
                    (r = [
                      "Jul",
                      "Aug",
                      "Sep",
                      "Oct",
                      "Nov",
                      "Dec",
                      "Jan",
                      "Feb",
                      "Mar",
                    ]);
                  break;
                case "my_balance_chart4":
                  (e = [20, 65, 20, 50, 70, 25, 40, 60, 80]),
                    (r = [
                      "Jan",
                      "Feb",
                      "Mar",
                      "Apr",
                      "May",
                      "Jun",
                      "Jul",
                      "Aug",
                      "Sep",
                    ]);
                  break;
                default:
                  (e = []), (r = []);
              }
              a.initMyBalanceChart("my_balance_chart", e, r);
            });
          });
      }),
      KTDom.ready(function () {
        a.initCompanyProfileMap(),
          a.initContributionChart(),
          a.initMediaUploadsChart(),
          a.initEarningsChart();
      }),
      {}
    );
  })();
});
