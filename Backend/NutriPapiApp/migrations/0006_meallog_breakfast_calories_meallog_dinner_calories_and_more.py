# Generated by Django 4.0.10 on 2024-03-30 05:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('NutriPapiApp', '0005_meallog'),
    ]

    operations = [
        migrations.AddField(
            model_name='meallog',
            name='breakfast_calories',
            field=models.IntegerField(blank=True, null=True, verbose_name='Calories for Breakfast'),
        ),
        migrations.AddField(
            model_name='meallog',
            name='dinner_calories',
            field=models.IntegerField(blank=True, null=True, verbose_name='Calories for Dinner'),
        ),
        migrations.AddField(
            model_name='meallog',
            name='lunch_calories',
            field=models.IntegerField(blank=True, null=True, verbose_name='Calories for Lunch'),
        ),
        migrations.AddField(
            model_name='meallog',
            name='snacks_calories',
            field=models.IntegerField(blank=True, null=True, verbose_name='Calories for Snacks'),
        ),
        migrations.AlterField(
            model_name='meallog',
            name='meal_type',
            field=models.CharField(choices=[('Breakfast', 'Breakfast'), ('Lunch', 'Lunch'), ('Dinner', 'Dinner'), ('Snacks', 'Snacks')], max_length=100, verbose_name='Meal Type'),
        ),
    ]
