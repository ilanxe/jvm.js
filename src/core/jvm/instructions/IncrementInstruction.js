/** @ignore */
import ImmediateByteInstruction from './ImmediateByteInstruction';

export default class IncrementInstruction extends ImmediateByteInstruction {

  constructor(methodInfo, idx, opcode, wide) {
    super(methodInfo, idx, opcode);
    this.wide = wide;
    this.increment = 0;
  }

  get size() {
    return super.size + (this.wide ? 2 : 1);
  }

  read(buffer) {
    super.read(buffer);
    this.increment = (this.wide ? buffer.short() : buffer.byte());
  }

  write(buffer) {
    super.write(buffer);
    if (this.wide) {
      buffer.writeShort(this.increment);
    } else {
      buffer.writeByte(this.increment);
    }
  }

  toObject() {
    return super.toObject({
      increment: this.increment
    });
  }

  toString() {
    return super.toString({ increment: this.increment });
  }
}

module.exports = IncrementInstruction;