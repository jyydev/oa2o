function oa2o(oa, key, valKey) {
  let r = {};
  oa.forEach((e) => {
    r[e[key]] = valKey ? e[valKey] : e;
  });
  return r;
}
module.exports = oa2o;
