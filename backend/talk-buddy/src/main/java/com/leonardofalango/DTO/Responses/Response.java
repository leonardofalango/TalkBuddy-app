package com.leonardofalango.DTO.Responses;

import lombok.Data;

@Data
public class Response {
    String data;
    int status = 200;

    public Response(String data) {
        this.data = data;
    }

    public Response(String data, int status) {
        this.data = data;
        this.status = status;
    }
}
