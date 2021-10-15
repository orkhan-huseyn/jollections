import { Stack } from '../Stack';

describe('Stack', () => {
  let stack: Stack<number>;

  beforeEach(() => {
    stack = new Stack();
  });

  it('creates an empty stack with size of zero', () => {
    expect(stack.isEmpty()).toBe(true);
    expect(stack.getSize()).toBe(0);
  });

  it('properly pushes element to top of the stack', () => {
    stack.push(1);
    stack.push(2);
    expect(stack.isEmpty()).toBe(false);
    expect(stack.getSize()).toBe(2);
    expect(stack.top()).toBe(2);
  });

  it('properly pops element from top of stack', () => {
    stack.push(1);
    stack.push(2);
    expect(stack.isEmpty()).toBe(false);
    expect(stack.getSize()).toBe(2);
    expect(stack.top()).toBe(2);
    stack.pop();
    expect(stack.top()).toBe(1);
  });
});
