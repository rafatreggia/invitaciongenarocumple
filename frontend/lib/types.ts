export interface Invitation {
  nombreInvitado: string;
  nombrePareja?: string;
  vegano: boolean;
  vegetariano: boolean;
  celiaco: boolean;
  invitadosExtra: string[];
  tieneInvitadosExtra: boolean;
  confirmacion: boolean;
  motivoDeFalta?: string;
  comentario?:string;
}
