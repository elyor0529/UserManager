using UserManager.Api.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Cors;


namespace UserManager.Api.Controllers
{
    [EnableCors("*", "*", "*")]
    public class UserController : ApiController
    {
        private readonly DataContext context = new DataContext();


        [HttpGet]
        public IEnumerable<UserModel> Get()
        {
            return context.User.AsEnumerable();
        }

        [HttpGet]
        public UserModel Get(int id)
        {
            var user = context.User.Find(id);

            return user;
        }

        [HttpPost]
        public int Create(UserModel user)
        {
            if (user == null)
                return 0;

            context.User.Add(user);
            context.SaveChanges();

            return user.Id;
        }

        [HttpPut]
        public void Edit(UserModel user, int id)
        {
            if (user.Id != id)
                return;

            context.Entry(user).State = EntityState.Modified;
            context.SaveChanges();
        }

        [HttpDelete]
        public void Delete(int id)
        {
            var user = context.User.Find(id);

            if (user == null)
                return;

            context.User.Remove(user);
            context.SaveChanges();
        }
    }
}
