export interface SendMessageRequest {
    chatId: number;
    destinataryId: number;
    emisorId: number;
    message: string;
}