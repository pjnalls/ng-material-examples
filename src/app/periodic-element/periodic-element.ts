export interface PeriodicElementInterface {
  position?: number | undefined;
  name?: string | undefined;
  weight?: number | undefined;
  symbol?: string | undefined;
}

export class PeriodicElement {
  position: number| undefined;
  name: string | undefined;
  weight: number | undefined;
  symbol: string | undefined;

  public constructor(init?: Partial<PeriodicElementInterface>) {
    Object.assign(this, init);
    
    this.position = init?.position;
    this.name = init?.name
    this.weight = init?.weight;
    this.symbol = init?.symbol;
  }
}
