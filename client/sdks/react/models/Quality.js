


export class Quality {
  "recordid";
  "testid";
  "time";
  "detaillink";
  "sid";
  "ip";
  "isp";
  "dspeed";
  "uspeed";
  "qos";
  "rtt";
  "rttmax";
  "rttavg";
  "maxpause";
  "maxroutespeed";
  "maxlinespeed";
  "concurrenttcp";
  "tcpmtu";
  "tcpforcedidle";
  "pooo";
  "booo";
  "pow";
  "bow";
  "dop";
  "dob";
  "pdp";
  "pdb";
  "crcerr";
  "boff";
  "ts";
  "probe";
  "winzeroup";
  "byteslost";
  "rtxtmo";
  "rtxfast";
  "pretx";
  "bretx";
  "sendclose";
  "rcvwinup";
  "acktoomuch";
  "duppack";
  "sndprobe";
  "presisttmo";
  "interface";
  "uqos";
  "umaxpause";
  "umaxlinespeed";
  "uconcurrenttcp";
  "utcpforcedidle";
  "ftl";
  "noal";
  "sf";
  "ethrxcrcerr";
  "ovr";
  "trunc";
  "dtesttype";
  "utesttype";
  "netdown";
  "netup";
  "downpc";
  "http3";
  "http4";
  "http5";
  "httpq";
  "version";
  "runtime";
  "freeq";
  constructor(data) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Quality`.
   */
  static getModelName() {
    return "Quality";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Quality for dynamic purposes.
  **/
  static factory(data) {
    return new Quality(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  static getModelDefinition() {
    return {
      name: 'Quality',
      plural: 'Qualities',
      path: 'Qualities',
      properties: {
        "recordid": {
          name: 'recordid',
          type: 'number'
        },
        "testid": {
          name: 'testid',
          type: 'number'
        },
        "time": {
          name: 'time',
          type: 'Date'
        },
        "detaillink": {
          name: 'detaillink',
          type: 'string'
        },
        "sid": {
          name: 'sid',
          type: 'string'
        },
        "ip": {
          name: 'ip',
          type: 'string'
        },
        "isp": {
          name: 'isp',
          type: 'string'
        },
        "dspeed": {
          name: 'dspeed',
          type: 'number'
        },
        "uspeed": {
          name: 'uspeed',
          type: 'number'
        },
        "qos": {
          name: 'qos',
          type: 'number'
        },
        "rtt": {
          name: 'rtt',
          type: 'number'
        },
        "rttmax": {
          name: 'rttmax',
          type: 'number'
        },
        "rttavg": {
          name: 'rttavg',
          type: 'number'
        },
        "maxpause": {
          name: 'maxpause',
          type: 'number'
        },
        "maxroutespeed": {
          name: 'maxroutespeed',
          type: 'number'
        },
        "maxlinespeed": {
          name: 'maxlinespeed',
          type: 'number'
        },
        "concurrenttcp": {
          name: 'concurrenttcp',
          type: 'number'
        },
        "tcpmtu": {
          name: 'tcpmtu',
          type: 'number'
        },
        "tcpforcedidle": {
          name: 'tcpforcedidle',
          type: 'number'
        },
        "pooo": {
          name: 'pooo',
          type: 'number'
        },
        "booo": {
          name: 'booo',
          type: 'number'
        },
        "pow": {
          name: 'pow',
          type: 'number'
        },
        "bow": {
          name: 'bow',
          type: 'number'
        },
        "dop": {
          name: 'dop',
          type: 'number'
        },
        "dob": {
          name: 'dob',
          type: 'number'
        },
        "pdp": {
          name: 'pdp',
          type: 'number'
        },
        "pdb": {
          name: 'pdb',
          type: 'number'
        },
        "crcerr": {
          name: 'crcerr',
          type: 'number'
        },
        "boff": {
          name: 'boff',
          type: 'number'
        },
        "ts": {
          name: 'ts',
          type: 'number'
        },
        "probe": {
          name: 'probe',
          type: 'number'
        },
        "winzeroup": {
          name: 'winzeroup',
          type: 'number'
        },
        "byteslost": {
          name: 'byteslost',
          type: 'number'
        },
        "rtxtmo": {
          name: 'rtxtmo',
          type: 'number'
        },
        "rtxfast": {
          name: 'rtxfast',
          type: 'number'
        },
        "pretx": {
          name: 'pretx',
          type: 'number'
        },
        "bretx": {
          name: 'bretx',
          type: 'number'
        },
        "sendclose": {
          name: 'sendclose',
          type: 'number'
        },
        "rcvwinup": {
          name: 'rcvwinup',
          type: 'number'
        },
        "acktoomuch": {
          name: 'acktoomuch',
          type: 'number'
        },
        "duppack": {
          name: 'duppack',
          type: 'number'
        },
        "sndprobe": {
          name: 'sndprobe',
          type: 'number'
        },
        "presisttmo": {
          name: 'presisttmo',
          type: 'number'
        },
        "interface": {
          name: 'interface',
          type: 'string'
        },
        "uqos": {
          name: 'uqos',
          type: 'number'
        },
        "umaxpause": {
          name: 'umaxpause',
          type: 'number'
        },
        "umaxlinespeed": {
          name: 'umaxlinespeed',
          type: 'number'
        },
        "uconcurrenttcp": {
          name: 'uconcurrenttcp',
          type: 'number'
        },
        "utcpforcedidle": {
          name: 'utcpforcedidle',
          type: 'number'
        },
        "ftl": {
          name: 'ftl',
          type: 'number'
        },
        "noal": {
          name: 'noal',
          type: 'number'
        },
        "sf": {
          name: 'sf',
          type: 'number'
        },
        "ethrxcrcerr": {
          name: 'ethrxcrcerr',
          type: 'number'
        },
        "ovr": {
          name: 'ovr',
          type: 'number'
        },
        "trunc": {
          name: 'trunc',
          type: 'number'
        },
        "dtesttype": {
          name: 'dtesttype',
          type: 'string'
        },
        "utesttype": {
          name: 'utesttype',
          type: 'string'
        },
        "netdown": {
          name: 'netdown',
          type: 'number'
        },
        "netup": {
          name: 'netup',
          type: 'number'
        },
        "downpc": {
          name: 'downpc',
          type: 'number'
        },
        "http3": {
          name: 'http3',
          type: 'number'
        },
        "http4": {
          name: 'http4',
          type: 'number'
        },
        "http5": {
          name: 'http5',
          type: 'number'
        },
        "httpq": {
          name: 'httpq',
          type: 'number'
        },
        "version": {
          name: 'version',
          type: 'string'
        },
        "runtime": {
          name: 'runtime',
          type: 'number'
        },
        "freeq": {
          name: 'freeq',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
