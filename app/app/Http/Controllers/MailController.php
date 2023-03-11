<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
class MailController extends Controller
{
    public function mail(Request $request)
    {
        
        $data = [
            'name'  => $request->input('name'),
            'email' => $request->input('email'),
            'message' => $request->input('message')
        ];
        
        //Mail Function
        Mail::send('email.name', ['data1' => $data], function ($m) {
         
            $m->to('anodaday@yandex.ru')->subject('Contact Form Mail!');
    });
        //Json Response For Angular frontend
        return response()->json(["message" => "Email sent successfully."]);
    }
}