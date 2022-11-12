using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using exam.Dtos.User;
using exam.Dtos.Item;

namespace exam
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<User, GetUserDto>(); 
            CreateMap<AddUserDto, User>(); 
            CreateMap<UpdateUserDto, User>();

            CreateMap<Item, GetItemDto>(); 
            CreateMap<AddItemDto, Item>(); 
            CreateMap<UpdateItemDto, Item>();
        }
    }
}