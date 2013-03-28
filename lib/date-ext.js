//
// @brief
// @author ongaeshi
// @date   2011/04/24

const { Trait } = require("traits");

function formatNum(keta, num) {
  var src = new String(num);
  var cnt = keta - src.length;
  if (cnt <= 0) return src;
  while (cnt-- > 0) src = "0" + src; return src;
}

const DateExt = Trait.compose({
  // public API
  constructor: function DateExt(date) {
    if (date == null)
      this._date = new Date();
    else
      this._date = date;
  },
  
  get raw() this._date,
  get year() this._date.getFullYear(),
  get month() this._date.getMonth() + 1,
  get day() this._date.getDate(),
  get hour() this._date.getHours(),
  get min() this._date.getMinutes(),

  get Month() { return formatNum(2, this.month) },
  get Day() { return formatNum(2, this.day) },
  get Hour() { return formatNum(2, this.hour) },
  get Min() { return formatNum(2, this.min) },
  
  to_s_date: function() {
    return this.year  + "/" + this.Month + "/" + this.Day;
  },

  to_s_Date: function() {
    return this.year  + "-" + this.Month + "-" + this.Day;
  },

  to_s_dateTime: function() {
    return this.year  + "/" + this.Month + "/" + this.Day + " " + this.Hour + ":" + this.Min;
  },

  to_s_DateTime: function() {
    return this.year  + "-" + this.Month + "-" + this.Day + " " + this.Hour + ":" + this.Min;
  },

  // private API:
  _date: null,
});
exports.DateExt = function(date) DateExt(date);
exports.DateExt.prototype = DateExt.prototype;







