"use client";

import { XCircle, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import React, { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";
import { Button } from "./button";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import validator from "validator";
import { POST } from "@/app/api/email/send/route";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Footer = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const formSchema = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    email: z.string().email({
      message: "Seu email está invalido",
    }),
    message: z
      .string()
      .min(10, {
        message: "A mensagem precisa ter pelo menos 10 caracteres.",
      })
      .max(160, {
        message: "A mensagem pode ter no máximo 160 caracteres",
      }),
    phone: z.string().refine(validator.isMobilePhone, {
      message: "Digite seu número corretamente",
    }),
  });

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      message: "",
      phone: "",
    },
  });

  const onOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const onCloseDialog = () => {
    setIsDialogOpen(false);
    form.reset();
  };

  const notifySucess = () => toast.success("Formulário enviado com sucesso!");
  const notifyError = () => toast.error("Erro ao tentar enviar o formulário!");

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsSubmitting(true);
      setTimeout(async () => {
        await POST();
        console.log(values);
        onCloseDialog(); // Fechar o Dialog usando setIsDialogOpen
      }, 1000);

      notifySucess();
    } catch (error) {
      console.error("Erro ao enviar o formulário:", error);
      notifyError();
    } finally {
      setTimeout(async () => {
        setIsSubmitting(false);
      }, 1000);
    }
  }

  return (
    <div className="flex flex-row justify-between p-16 mt-2">
      <div className="flex flex-col gap-4">
        <div className="flex flex-row">
          <MapPin size={18} />
          <p> Avenida Faria Lima</p>
        </div>
        <div className="flex flex-row">
          <Phone size={18} />
          <p> (11) 96786-4905</p>
        </div>
        <div className="flex flex-row">
          <Mail size={18} />
          <p> konventus@gmail.com</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-5">
        <p>Nossas redes sociais</p>
        <div className="flex gap-3">
          <Button variant="outline" size="icon">
            <Linkedin />
          </Button>
          <Dialog open={isDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" onClick={onOpenDialog}>
                Fale Conosco
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <Button
                  onClick={onCloseDialog}
                  variant="ghost"
                  className="absolute right-2 top-2 rounded-sm"
                >
                  <XCircle size={14} />
                </Button>
                <DialogTitle>Fale Conosco</DialogTitle>
                <DialogDescription>
                  Envie sua mensagem para nossa equipe caso você seja um
                  cientista, pesquisador ou investidor.
                </DialogDescription>
              </DialogHeader>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nome</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Digite seu nome completo"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="konventus@gmail.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Celular</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Digite seu número de telefone"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mensagem</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Digite sua mensagem"
                            className="resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <DialogFooter className="mt-5">
                    <Button type="submit" disabled={isSubmitting}>
                      {isSubmitting ? "Enviando..." : "Enviar"}
                    </Button>
                  </DialogFooter>
                </form>
              </Form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default Footer;
