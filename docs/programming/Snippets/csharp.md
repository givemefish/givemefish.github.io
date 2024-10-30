---
title: 'C#'
tags: ['C#']
---
# C\# Snippet

## Check if string is valid email
```csharp
public static class StringExtensions
{
    public static bool IsValidEmail(this string email)
    {
        try
        {
            var addr = new System.Net.Mail.MailAddress(email);
            return addr.Address == email;
        }
        catch
        {
            return false;
        }
    }
}
```