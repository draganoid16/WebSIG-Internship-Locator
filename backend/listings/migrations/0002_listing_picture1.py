# Generated by Django 4.2 on 2023-05-07 16:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('listings', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='listing',
            name='picture1',
            field=models.ImageField(blank=True, null=True, upload_to=''),
        ),
    ]