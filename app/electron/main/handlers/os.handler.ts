import { machineIdSync } from 'node-machine-id';

export const matchMachineId = (machineId: string) => {
  return machineId === machineIdSync();
};
