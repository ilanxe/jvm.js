import * as _ from 'lodash';
import { OPCODE_TO_NAME } from './Opcodes';

export default class AbstractInstruction {
    
  constructor(methodInfo, idx, opcode) {
    this.methodInfo = methodInfo;
    this.idx = idx;
    this.opcode = opcode;
    this.wide = false;
    this.offset = 0;
    this.previous = null;
    this.next = null;
  }

  get opname() {
    return OPCODE_TO_NAME[this.opcode];
  }

  get size() {
    return 1;
  }

  get pool() {
    return this.methodInfo._classInfo.pool;
  }

  read(buffer) {
    this.offset = (buffer.pos - 1);
  }

  write(buffer) {
    buffer.writeByte(this.opcode);
  }

  toObject(props = {}) {
    let defaults = {
      idx: this.idx,
      opcode: this.opcode,
      offset: this.offset,
      opname: this.opname,
      size: this.size
    };

    return _.merge(defaults, props);
  }

  toString(props = {}) {
    let params = _.map(props, (val, key) => key + '=' + val).join(', ');
    return this.opname + ' [' + params + ']';
  }
}

module.exports = AbstractInstruction;