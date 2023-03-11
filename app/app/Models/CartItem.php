<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class CartItem extends Model
{
    public function book(): BelongsTo
    {
        return $this->belongsTo(Book::class);
    }
    protected $fillable = ['book_id'];
    protected $guarded = false;
    use HasFactory;
}
