using System;

namespace FTCStalkerBackend.Models
{
    public class User
    {
        public int Id { get; set; }           // Primary key
        public string Username { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string PasswordHash { get; set; } = string.Empty;  // Store hashed password
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}
