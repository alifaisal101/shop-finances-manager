import messenger from 'messenger';

import { publicEncrypt, constants } from 'crypto';

export const checkActiveStatus = async (): Promise<void | true> => {
  const client = messenger.createSpeaker(8000);

  const outgoingEncryptionKey = `-----BEGIN PUBLIC KEY-----
MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAsW8eX6uhLT07ar+yY4Xi
yrm+J1WMY3PC8tBOjsVThvqKT1eAjUE2QptCjc46Q/DS3H/ZJm2WsEslUNQLkSSg
feW/J1nJcNMwS4WP6jsGDnnjqUB8zBFU4WcCs427MAoCk7BGO1L1Nk2WbCiGvLdM
PhyYHZ4SZOSbwPCJHYr2Ima2YyPIlovTZDIgYFqOrLYkhq9w6+WaHYfbqXYZ98dH
hWBCLpUOyhotxf00IwYkR/nQY9AqoqBvvnrL2j2Gdd9dg9c6OvZWeivnRZz0KCfE
P3f7mTxPxF2oa+lVysx4Hv+v+fgtUAwuc5AibTiyOseFHEBogYA2bZgLGhF+qD0i
I19TJaX3ZlypjGEvb2LtWojLB2flBFSf/hGJhOA19V3i1uSn4BQvkQJImHDktXPW
KfvT685RMoZXH0fIJ41O6hh3m4nhd0UYHqATgbQZntyjHKaouNsdCjOP/96I/tIm
YjqqTLh2QN6ha4bC9bbYyKZ5bQE4yaO5beetX9JwRVUD6S+P+9aPyPrija6MMxUy
VdCiUkIklpbCohUOk6m4iOCc4LfurECHaLlJQkjbFlisNddpnQXXApWfg4EmVqeW
q/9eqKPMKdJPw/rkJBJnUBlzzJQun7SlJJmB2B0Hj8hSgEaVJ8t4BmCK6X/2uEeR
JHLguPVBm4ZnK4ve9//a3+0CAwEAAQ==
-----END PUBLIC KEY-----`;

  const appObj = { app: 'SFM' };
  const encryptedData = publicEncrypt(
    {
      key: outgoingEncryptionKey,
      padding: constants.RSA_PKCS1_OAEP_PADDING,
      oaepHash: 'sha256',
    },
    Buffer.from(appObj.app)
  );

  setInterval(function () {
    client.request('activate', { data: encryptedData }, function (data) {
      if (!data.result) {
        process.exit(1);
      }
    });
  }, 1000);

  return true;
};
