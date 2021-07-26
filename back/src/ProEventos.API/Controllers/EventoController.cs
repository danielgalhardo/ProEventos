using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ProEventos.API.Models;

namespace ProEventos.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EventoController : ControllerBase
    {

        public IEnumerable<Evento> _evento = new Evento[] {
               new Evento() {
                             
               EventoId = 1,
               Tema = "Angular 11 e . NET 5",
               Local = "Além Paraíbaa",
               Lote = "1º lote",
               QtdPessoas = 250,
               DataEvento = DateTime.Now.AddDays(2).ToString(),
               ImagemURL = "foto.png"

                },
               new Evento() {
                             
               EventoId = 2,
               Tema = "Angular 11 e suas novidades",
               Local = "Sao Paulo",
               Lote = "3º lote",
               QtdPessoas = 350,
               DataEvento = DateTime.Now.AddDays(2).ToString("dd/MM/yyyy"),
               ImagemURL = "fotofeia.png"

                }    
            };    
        public EventoController()
        {
        }

        [HttpGet]
        public  IEnumerable<Evento> Get()
        {
           return _evento; // retorna todos os eventos sem filtro.
        }


        [HttpGet("{id}")]
        public  IEnumerable<Evento> GetById(int id)
        {
           return _evento.Where(evento => evento.EventoId == id);  // utilizado para pegar apenas o id durante 
                                                                   // o get
        }

        [HttpPost]
        public string Post()
        {
           return "value";     
        }

         [HttpPut("{id}")]
        public string Put(int id)
        {
           return $"Exemplo de Put com id = {id}";     
        }

        [HttpDelete("{id}")]
        public string Delete(int id)
        {
           return $"Exemplo de Delete com id = {id}";     
        }
    }
}
